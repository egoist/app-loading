### 
app-loading
(c) 2015
github.com/kchanzen/app-loading
### 

((window, document) ->
  'use strict'

  appLoading = {}

  options = {
    className: 'app-loading',
    loadingBar: 'loading-bar',
    type: 'medium'
  }

  getProgressBar = ->

    $progressbar = document.querySelector '.' + options.loadingBar

    if not $progressbar
      initProgressBar() 
      $progressbar = getProgressBar()

    $progressbar

  initProgressBar = ->

    $progressbarElement = document.createElement 'div'
    $progressbarElement.innerHTML = '<div class="loading-bar"></div>'

    document.body.appendChild $progressbarElement

  showProgressBar = ->

    $progressbar = getProgressBar()

    if document.body.classList 
      document.body.classList.add 'app-loading' 
    else 
      document.body.className += ' app-loading'

  appLoading.start = (type, callback) ->

    switch typeof type
      when 'string' then options.type = type
      when 'function' then callback = type

    showProgressBar()

    callback() if callback

  appLoading.stop = ->

    if document.body.classList
      document.body.classList.remove options.className
    else
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + options.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')


  window.appLoading = appLoading
  
) window, document