<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::controller('/home', 'HomeController');
/*
 * JWT Create Role
 */

Route::post('role', 'JwtAuthController@createRole');
Route::post('assign-role', 'JwtAuthController@assignRole');
Route::post('permission', 'JwtAuthController@createPermission');
Route::post('attach-permission', 'JwtAuthController@attachPermission');

Route::group(['prefix'=>'api','middleware'=>['ability:admin,create-users']], function(){

    Route::get('users','JwtAuthController@index');
});

Route::post('api/authenticate','JwtAuthController@authenticate');

