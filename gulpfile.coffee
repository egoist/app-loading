'use strict'

gulp = require('gulp')
coffee = require('gulp-coffee')

gulp.task 'coffee', ->
  gulp.src 'lib/app-loading.coffee'
    .pipe coffee bare: true
    .pipe gulp.dest __dirname

gulp.task 'default', ['coffee']