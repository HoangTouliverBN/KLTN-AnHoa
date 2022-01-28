<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use NaskaIt\NovaMediableManager\HasMedia;
use Spatie\Translatable\HasTranslations;

class Post extends Model
{
    use HasFactory, HasMedia, HasTranslations;
    // protected $fillable = ['language'];
    protected $translatable = ['title', 'content'];
    public function Author()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }
    public function Page()
    {
        return $this->belongsTo(Page::class, 'page_id', 'id');
    }
}
