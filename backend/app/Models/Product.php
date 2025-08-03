<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class Product extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'product_code',
        'product_name',
        'price',
        'quantity',
        'quantiy_sold',
        'image',
        'business_id',
    ];
}
