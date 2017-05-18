'use strict';

const gulp = require('gulp');
const build = require('workbox-build');

gulp.task('bundle', () => {
   return build.generateSW({
     globDirectory: './app/',
     swDest: './app/sw.js',
     staticFileGlobs: ['**\/*.{html,js,css}']
   })
   .then(() => {
     console.log('Service worker generated.');
   })
   .catch((err) => {
     console.log('[ERROR] This happened: ' + err);
   });
})