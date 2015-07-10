### 
app-loading
(c) 2015
github.com/kchanzen/app-loading
### 

((W, D) ->
  'use strict'

  appLoading = {}

  options = 
    className: 'app-loading'
    loadingBar: 'loading-bar'
    type: 'medium'


  getProgressBar = ->

    $progressbar = D.querySelector '.' + options.loadingBar

    if not $progressbar
      initProgressBar() 
      $progressbar = getProgressBar()

    $progressbar

  initProgressBar = ->

    $progressbarElement = D.createElement 'div'
    $progressbarElement.className = 'loading-bar'

    D.body.appendChild $progressbarElement

  showProgressBar = ->

    $progressbar = getProgressBar()

    if D.body.classList 
      D.body.classList.add 'app-loading' 
    else 
      D.body.className += ' app-loading'

  appLoading.start = (type, callback) ->

    switch typeof type
      when 'string' then options.type = type
      when 'function' then callback = type

    showProgressBar()

    callback() if callback

  appLoading.stop = ->

    if D.body.classList
      D.body.classList.remove options.className
    else
      D.body.className = D.body.className.replace(new RegExp('(^|\\b)' + options.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')


  W.appLoading = appLoading
  
) window, document