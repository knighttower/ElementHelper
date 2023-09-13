const mix = require('laravel-mix');
const path = require('path');
const fs = require('fs');

mix.js('src/ElementHelper.js', 'dist/ElementHelper.js');

mix.webpackConfig({
    
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')],
    },
    stats: 'errors-only',
}).disableNotifications();
