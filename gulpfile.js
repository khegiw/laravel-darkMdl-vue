var elixir = require('laravel-elixir');


require('laravel-elixir-vue');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.webpack('main.js');

    mix.sass('app.scss');


    mix.copy('vendor/bower_components/material-design-lite/material.min.css',
        'public/css/material-design-lite/material.min.css')
        .copy('vendor/bower_components/bootstrap/dist/css/bootstrap.min.css','public/css/bootstrap.min.css')
        .copy('vendor/bower_components/animate.css/animate.min.css','public/css/animate.min.css');

    mix.copy('vendor/bower_components/material-design-lite/material.min.js',
        'public/js/material-design-lite/material.min.js')
        .copy('vendor/bower_components/jquery/dist/jquery.min.js',
        'public/js/jquery.min.js')
        .copy('vendor/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'public/js/bootstrap.min.js')
        .copy('vendor/bower_components/QueryLoader2/queryloader2.min.js',
        'public/js/queryloader2.min.js')
        ;

    mix.livereload();
});

