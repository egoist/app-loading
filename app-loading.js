
/*
app-loading
(c) 2015
github.com/aprilorange/app-loading
 */
(function(W, D) {
  'use strict';
  var appLoading, getProgressBar, initProgressBar, options, showProgressBar;
  appLoading = {};
  options = {
    className: 'app-loading',
    loadingBar: 'loading-bar',
    type: 'medium',
    color: null
  };
  W.loadingBarColor = null;
  getProgressBar = function(force) {
    var $progressbar, color;
    $progressbar = D.querySelector('.' + options.loadingBar);
    if (!force) {
      return $progressbar;
    }
    if (!$progressbar) {
      initProgressBar();
      $progressbar = getProgressBar();
    }
    if (options.color) {
      color = options.color;
    } else if (W.loadingBarColor) {
      color = W.loadingBarColor;
    } else {
      color = '#60d778';
    }
    $progressbar.style.background = color;
    return $progressbar;
  };
  initProgressBar = function() {
    var $progressbarElement;
    $progressbarElement = D.createElement('div');
    $progressbarElement.className = options.loadingBar;
    return D.body.appendChild($progressbarElement);
  };
  showProgressBar = function() {
    var $progressbar;
    $progressbar = getProgressBar(true);
    if (D.body.classList) {
      return D.body.classList.add('app-loading');
    } else {
      return D.body.className += ' app-loading';
    }
  };
  appLoading.start = function(color) {
    options.color = color;
    return showProgressBar();
  };
  appLoading.stop = function() {
    if (D.body.classList) {
      return D.body.classList.remove(options.className);
    } else {
      return D.body.className = D.body.className.replace(new RegExp('(^|\\b)' + options.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  };
  appLoading.setColor = function(color) {
    var bar;
    W.loadingBarColor = color;
    bar = getProgressBar();
    if (bar) {
      return bar.style.background = color;
    }
  };
  return W.appLoading = appLoading;
})(window, document);
