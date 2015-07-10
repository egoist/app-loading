'use strict'

gulp = require 'gulp'
coffee = require 'gulp-coffee'
serve = require 'gulp-serve'
sourcemaps = require 'gulp-sourcemaps'
uglify = require 'gulp-uglify'
rename = require 'gulp-rename'


gulp.task 'serve', serve
  root: ['.'],
  port: 3001

gulp.task 'coffee', ->
  stream = gulp.src 'lib/app-loading.coffee'
    .pipe coffee bare: true
    .pipe gulp.dest __dirname


gulp.task 'js', ->
  stream = gulp.src './app-loading.js'
    .pipe sourcemaps.init()
    .pipe uglify()
    .pipe rename
      suffix: '.min'
    .pipe sourcemaps.write '.'
    .pipe gulp.dest '.'

gulp.task 'watch', ->
  gulp.watch './lib/*.coffee', ['coffee', 'js']


gulp.task 'build', ['coffee', 'js']

gulp.task 'default', ['coffee', 'serve', 'watch']