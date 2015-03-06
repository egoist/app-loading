
/* 
app-loading
(c) 2015
github.com/kchanzen/app-loading
 */
(function(window, document) {
  'use strict';
  var appLoading, getProgressBar, initProgressBar, options, showProgressBar;
  appLoading = {};
  options = {
    className: 'app-loading',
    loadingBar: 'loading-bar',
    type: 'medium'
  };
  getProgressBar = function() {
    var $progressbar;
    $progressbar = document.querySelector('.' + options.loadingBar);
    if (!$progressbar) {
      initProgressBar();
      $progressbar = getProgressBar();
    }
    return $progressbar;
  };
  initProgressBar = function() {
    var $progressbarElement;
    $progressbarElement = document.createElement('div');
    $progressbarElement.innerHTML = '<div class="loading-bar"></div>';
    return document.body.appendChild($progressbarElement);
  };
  showProgressBar = function() {
    var $progressbar;
    $progressbar = getProgressBar();
    if (document.body.classList) {
      return document.body.classList.add('app-loading');
    } else {
      return document.body.className += ' app-loading';
    }
  };
  appLoading.start = function(type, callback) {
    switch (typeof type) {
      case 'string':
        options.type = type;
        break;
      case 'function':
        callback = type;
    }
    showProgressBar();
    if (callback) {
      return callback();
    }
  };
  appLoading.stop = function() {
    if (document.body.classList) {
      return document.body.classList.remove(options.className);
    } else {
      return document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + options.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  };
  return window.appLoading = appLoading;
})(window, document);
