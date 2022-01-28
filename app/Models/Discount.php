<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;
    public function Products()
    {
        return $this->hasMany(Product::class, 'discount_id', 'id');
    }
}
