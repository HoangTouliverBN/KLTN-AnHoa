<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\ShoppingCart;
use App\Models\State;
use DateTime;
use Hamcrest\Core\HasToString;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function addToCart($product_id)
    {

        $cart = [
            "user_id" => Auth::user()->id,
            "product_id" => $product_id,
        ];
        $shoppingCart = ShoppingCart::create($cart);
        if ($shoppingCart) {
            return response([
                "cart" => $shoppingCart,
                "message" => "Add to cart success"
            ]);
        }
        return response(abort(500));
    }
    public function showCart()
    {
        $cart = ShoppingCart::join('products', 'products.id', '=', 'shopping_carts.product_id')->leftJoin('discounts', 'discounts.id', '=', 'products.discount_id')
            ->where('user_id', '=', Auth::user()->id)
            ->where('order_id', '=', null)
            ->whereNull('deleted_at')
            ->orderBy('id', 'DESC')
            ->get(['products.name', 'products.description', 'products.price', 'shopping_carts.id', 'discounts.voucher']);
        if ($cart) {
            return response($cart);
        }
        return response([
            "message" => "Your shopping cart is empty. But it doesn’t have to be!"
        ]);
    }
    public function remove($shoppingCartId)
    {
        $shoppingCart = ShoppingCart::where('id', $shoppingCartId)
            ->where('user_id', Auth::user()->id)
            ->first();
        $timezone = new DateTime();
        $remove = [
            "deleted_at" => $timezone->format("Y-m-d H:i:s")
        ];
        $shoppingCart->update($remove);
        if ($shoppingCart) {
            return response([
                "message" => "Remove success"
            ]);
        }
        return response(abort(500));
    }
    public function order(Request $request)
    {
        // validate quantity
        $carts = $request->input('carts'); //array
        $product_id = $request->input('product_id'); //array
        $product = [];
        $productUpdate = [];
        for ($i = 0; $i < count($carts); $i++) {
            $cartJson[$i] = json_encode($carts[$i]);
            $cart = json_decode($cartJson[$i]); //json
            $product[$i] = Product::find($product_id[$i]);
            if ($cart->quantity > $product[$i]->quantity) {
                return response([
                    "message" => "We don't have enough quantity you need"
                ]);
            }
        }

        // create order
        $createOrderData = [
            "user_id" => Auth::user()->id,
            "bill" => $request->input('bill'),
            "product_id" => $product_id,
            "state_id" => State::where('set_default', 1)->first()->id,
            "shipping_id" => $request->input('shipping_id'),
            "description" => "description",
        ];
        $createOrder = Order::create($createOrderData);
        if (!$createOrder) {
            return response(abort(500));
        }
        $order_id = $createOrder->id;

        // update shopping cart and product
        for ($i = 0; $i < count($carts); $i++) {
            $cartJson[$i] = json_encode($carts[$i]);
            $cart = json_decode($cartJson[$i]); //json
            $shoppingCart[$i] =  ShoppingCart::find($cart->id);
            $update = [
                "quantity" => $cart->quantity,
                "order_id" => $order_id,
                "total_price" => $cart->all_price,
            ];
            $shoppingCart[$i]->update($update);
            $productNew = $product[$i]->quantity - $cart->quantity;
            $productUpdate[$i] =  Product::find($product_id[$i])->update([
                'quantity' => $productNew
            ]);
        }
        return response([
            "message" => "Order success",
            "Carts" => $shoppingCart,
            "Order" => $createOrder,
            "Update quanity product" => $productUpdate,
        ]);
    }
}
