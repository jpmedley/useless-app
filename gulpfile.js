'use strict';

const gulp = require('gulp');
const build = require('workbox-build');

gulp.task('bundle', () => {
   return build.generateSW({
     globDirectory: './app/',
     swDest: './app/sw.js',
     staticFileGlobs: ['**\/*.{html,js,css}'],
     globIgnores: ['workbox-sw.prod.v1.0.0.js', 'sw.js'],
     navigateFallback: '404.html'
   })
   .then(() => {
     console.log('Service worker generated.');
   })
   .catch((err) => {
     console.log('[ERROR] This happened: ' + err);
   });
})