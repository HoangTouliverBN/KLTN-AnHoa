<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use NaskaIt\NovaMediableManager\HasMedia;

class Product extends Model
{
    use HasFactory, HasMedia;
    protected $fillable = ['version', 'parent', 'name', 'slug', 'category_id', 'age', 'description', 'active', 'quantity', 'discount_id', 'image', 'price'];
    public function Category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
    public function Discounts()
    {
        return $this->belongsTo(Discount::class, 'discount_id', 'id');
    }
}
