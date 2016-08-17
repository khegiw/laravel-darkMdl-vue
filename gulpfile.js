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
        'public/css/material-design-lite/material.min.css');

    mix.copy('vendor/bower_components/material-design-lite/material.min.js',
        'public/js/material-design-lite/material.min.js');

    mix.livereload();
});

