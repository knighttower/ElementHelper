const mix = require('laravel-mix');
const path = require('path');
const fs = require('fs');

mix.js('src/ElementHelper.js', 'dist/ElementHelper.js')
.setPublicPath('dist')
.webpackConfig({
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')]
    },
    output: {
        library: 'ElementHelper',
        libraryTarget: 'window',
    },
    stats: 'errors-only',
}).disableNotifications();
