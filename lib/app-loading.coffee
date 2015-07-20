###
app-loading
(c) 2015
github.com/aprilorange/app-loading
###

((W, D) ->
  'use strict'

  appLoading = {}

  options =
    className: 'app-loading'
    loadingBar: 'loading-bar'
    type: 'medium'
    color: null

  W.loadingBarColor = null

  getProgressBar = (force) ->

    $progressbar = D.querySelector '.' + options.loadingBar

    # get bar only
    return $progressbar if not force
    # init bar
    if not $progressbar
      initProgressBar()
      $progressbar = getProgressBar()

    if options.color
      color = options.color
    else if W.loadingBarColor
      color = W.loadingBarColor
    else
      color = '#60d778'
    $progressbar.style.background = color
    $progressbar

  initProgressBar = ->

    $progressbarElement = D.createElement 'div'
    $progressbarElement.className = options.loadingBar

    D.body.appendChild $progressbarElement

  showProgressBar = ->

    $progressbar = getProgressBar true

    if D.body.classList
      D.body.classList.add 'app-loading'
    else
      D.body.className += ' app-loading'

  appLoading.start = (color) ->

    options.color = color
    showProgressBar()


  appLoading.stop = ->

    if D.body.classList
      D.body.classList.remove options.className
    else
      D.body.className = D.body.className.replace(new RegExp('(^|\\b)' + options.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')

  appLoading.setColor = (color) ->
    W.loadingBarColor = color
    bar = getProgressBar()
    bar.style.background = color if bar

  W.appLoading = appLoading

) window, document
