var elixir = require('laravel-elixir');


require('laravel-elixir-vue');
var srcJs = 'vendor/bower_components/',
    dstJs = 'public/js/',
    srcCss = '',
    dstCss = 'public/css/';
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

elixir(function (mix) {

    mix.webpack('main.js');
    mix.scripts('app.js');
    mix.sass('app.scss');
    mix.sass('style.scss');


    /**
     * Copy Bower Assets to production Assets
     * CSS Assets
     */
    //.copy('vendor/bower_components/material-design-lite/material.min.css',
    // dstCss + 'material-design-lite/material.min.css')

    mix.copy('vendor/bower_components/bootstrap/dist/css/bootstrap.min.css',
            dstCss + 'bootstrap.min.css')
        .copy('vendor/bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
            dstCss + 'owl.carousel.min.css')
        .copy('vendor/bower_components/owl.carousel/dist/assets/owl.theme.default.css',
            dstCss + 'owl.theme.default.css')
        .copy('vendor/bower_components/animate.css/animate.min.css',
            dstCss + 'animate.min.css');



    /**
     * JS Assets
     */
    mix.copy('vendor/bower_components/material-design-lite/material.min.js',
        dstJs + 'material-design-lite/material.min.js')
        .copy('vendor/bower_components/jquery/dist/jquery.min.js',
            dstJs + 'jquery.min.js')
        .copy('vendor/bower_components/bootstrap/dist/js/bootstrap.min.js',
            dstJs + 'bootstrap.min.js')
        .copy('vendor/bower_components/QueryLoader2/queryloader2.min.js',
            dstJs + 'queryloader2.min.js')
        .copy('vendor/bower_components/owl.carousel/dist/owl.carousel.min.js',
            dstJs + 'owl.carousel.min.js')
        .copy('vendor/bower_components/wow/dist/wow.min.js',
            dstJs + 'wow.min.js')
    ;

    // mix.livereload();
    mix.browserSync({
        proxy: 'vue.app'
    });
});

