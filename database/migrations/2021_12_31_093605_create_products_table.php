<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('category_id')->unsigned();
            $table->integer('age');
            $table->text('description')->nullable();
            $table->integer('price');
            $table->integer('quantity')->nullable()->default(0);
            $table->integer('active')->default(0);
            $table->bigInteger('discount_id')->unsigned()->nullable();
            $table->string('slug');
            $table->string('image')->nullable();
            $table->string('gallery')->nullable();
            $table->timestamps();
            $table->bigInteger('version')->default(1);
            $table->bigInteger('parent')->nullable();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('discount_id')->references('id')->on('discounts')->onDelete('cascade')->onUpdate('cascade');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
