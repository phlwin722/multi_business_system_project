<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_code')->unique(); // Assuming you want a unique product code
            $table->string('product_name')->unique();
            $table->decimal('price',10,2)->default(0.00); // Assuming you want a default price of 0.00
            $table->string('quantity')->nullable(); // Assuming you want to allow null values for quantity
            $table->string('quantity_sold')->default(0); // Assuming you want to track quantity sold
            $table->foreignId('business_id')
                ->nullable()
                ->constrained('businesses')
                ->onUpdate('cascade')
                ->onDelete('set null'); // Assuming you want to set it to null if the business is deleted
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
