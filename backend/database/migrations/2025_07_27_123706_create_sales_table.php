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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->decimal('sales_amount', 10, 2)->default(0.00);
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
        Schema::dropIfExists('sales');
    }
};
