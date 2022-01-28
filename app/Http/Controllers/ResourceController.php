<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ResourceController extends Controller
{
    public function index($resource)
    {
        switch ($resource) {
            case "categories":
            case "states":
            case "shippings":
            case "posts": {
                    $table = DB::table($resource)->paginate(6);
                    return response($table);
                }
        }
        return response(abort(404));
    }
    public function search(Request $request, $resource)
    {
        $table = DB::table($resource)->where('name', 'like', '%' . $request->input('search') . '%')->paginate(9);
        if ($table) {
            return response([
                "table" => $table,
                "value" => $request->input('search'),
            ]);
        }
        return response(abort(404));
    }
    public function rating(Request $request, $product_id)
    {
        $author_id = Auth::user()->id;
        $validate = Validator::make($request->input(), [
            'rate' => "required",
            'title' => "required",
            'description' => "required"
        ]);
        if ($validate->fails()) {
            return response()->json(["error" => $validate->errors()]);
        }
        $rating = Rating::updateOrCreate([
            "author_id" => $author_id,
            "product_id" => $product_id
        ], $request->input());
        if ($rating) {
            return response($rating);
        }
        return response(abort(500));
    }
    public function showRating($id)
    {
        $ratingAll = Rating::where('product_id', '=', $id)->paginate(5);
        if ($ratingAll) {
            return response($ratingAll);
        }
        return response(abort(500));
    }
    public function showProduct($id)
    {
        $product = Product::leftJoin('discounts', 'discounts.id', '=', 'products.discount_id')->find($id, ['products.*', 'discounts.voucher', 'discounts.name as nameDiscount']);
        if ($product) {
            return response($product);
        }
        return response(abort(404));
    }
    public function allProducts()
    {
        $allProducts = Product::leftJoin('discounts', 'discounts.id', '=', 'products.discount_id')
            ->paginate(6, ['products.*', 'discounts.name as nameDiscount', 'discounts.voucher']);
        if ($allProducts) {
            return response($allProducts);
        }
        return response(abort(500));
    }
}
