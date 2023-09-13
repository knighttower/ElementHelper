const mix = require('laravel-mix');
const path = require('path');
const fs = require('fs');

mix.js('src/ElementHelper.js', 'dist/ElementHelper.js');

mix.webpackConfig({
    
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.ts', '.tsx', '.js']
    },
    
     module: {
       rules: [
         {
           test: /\.tsx?$/,
           loader: 'ts-loader',
           exclude: /node_modules/
         }
       ]
     },
   
    stats: 'errors-only',
}).disableNotifications();
