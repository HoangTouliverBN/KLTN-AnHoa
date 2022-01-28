<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'shipping_id', 'state_id', 'user_id', 'order_id', 'bill', 'description'];
    protected $casts = [
        "product_id" => "array",
        "description" => "array"
    ];
    public function Shipping()
    {
        return $this->belongsTo(Shipping::class, 'shipping_id', 'id');
    }
    public function State()
    {
        return $this->belongsTo(State::class, 'state_id', 'id');
    }
    public function User()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function ShoppingCart()
    {
        return $this->hasMany(ShoppingCart::class, 'order_id', 'id');
    }
}
