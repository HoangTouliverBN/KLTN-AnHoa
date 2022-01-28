<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $newProduct = Product::create(array_merge($request->input(), [
            "discount_id" => $request->input('discounts'),
            'category_id' => $request->input('category'),
            'version' => $product->version + 1,
            'parent' => $id
        ]));
        return  response()->json([
            'resource' => $newProduct,
            'redirect' => "/resources/products/" . $id,
            'id' => $newProduct->getKey()
        ]);
    }
}
