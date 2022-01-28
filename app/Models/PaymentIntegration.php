<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentIntegration extends Model
{
    use HasFactory;
    protected $table = "payment_integrations";
    public function User()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function Order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }
}
