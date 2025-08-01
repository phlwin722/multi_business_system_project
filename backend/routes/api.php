<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use GuzzleHttp\Psr7\Request;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  
});

Route::post('/signup', [AuthController::class, 'Create']);
Route::post('/signin', [AuthController::class, 'Login']);