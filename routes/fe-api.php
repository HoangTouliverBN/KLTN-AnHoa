<?php

use App\Http\Controllers\AuthenticateConttroller;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentOnlineController;
use App\Http\Controllers\ResourceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Authenticate
Route::middleware(['checkLogin:api'])->group(function () {
    Route::post('register', [AuthenticateConttroller::class, 'Register']);
    Route::post('login', [AuthenticateConttroller::class, 'Login']);
    Route::post('authenticate', [AuthenticateConttroller::class, 'authenticate']); //dang nhap
});
Route::middleware(['auth:api'])->group(function () {
    Route::get('user', [AuthenticateConttroller::class, 'user']);
    Route::get('logout', [AuthenticateConttroller::class, 'logout']); //dang xuat
    Route::post('/rating/{product_id}', [ResourceController::class, 'rating']);
    Route::get('/rating/{product_id}', [ResourceController::class, 'showRating']);

    // order
    Route::get('/addToCart/{product_id}', [OrderController::class, 'addToCart']);
    Route::get('/showCart', [OrderController::class, 'showCart']);
    Route::get('/remove/cart/{shoppingCartId}', [OrderController::class, 'remove']);
    Route::post('/order', [OrderController::class, 'order']);
});

//Store FE
Route::get('/products', [ResourceController::class, 'allProducts']);
Route::get('/{resource}', [ResourceController::class, 'index']);
Route::post('/{resource}/search', [ResourceController::class, 'search']);
Route::get('/rating/{product_id}', [ResourceController::class, 'showRating']);
Route::get('/products/{id}-{productSlug}', [ResourceController::class, 'showProduct']);

Route::post('payment/online', [PaymentOnlineController::class, 'paymentCode']);
