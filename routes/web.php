<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{dashboardController,
    ClientController,
    EquipementController,
    RapportController};
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');
Route::prefix('user')->middleware(['auth'])->group(function () {
    Route::resource('/dashboard', dashboardController::class);
    Route::resource('/clients', ClientController::class);
    Route::resource('/equipement', EquipementController::class);
    Route::resource('rapport', RapportController::class);
    
    // Route::get('rapport/{id}', [calculeController::class,'show'])->name('rapport.show');
    // Route::get('rapport', [calculeController::class, 'index'])->name('rapport.index');
});

require __DIR__.'/auth.php';
