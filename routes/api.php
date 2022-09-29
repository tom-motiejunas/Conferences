<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\UserAuthController;
use App\Http\Controllers\ConferenceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login', [UserAuthController::class, 'login']);

Route::controller(ConferenceController::class)->group(function () {
    Route::get('/conference', [ConferenceController::class, 'index']);
    Route::get('/conference/{id}', [ConferenceController::class, 'show']);
    Route::put('/conference/{id}', [ConferenceController::class, 'update'])->middleware('auth:api');
    Route::delete('/conference/{id}', [ConferenceController::class, 'destroy'])->middleware('auth:api');
    Route::post('/conference', [ConferenceController::class, 'store'])->middleware('auth:api');
});
