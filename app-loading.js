
/* 
app-loading
(c) 2015
github.com/kchanzen/app-loading
 */
(function(W, D) {
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
    $progressbar = D.querySelector('.' + options.loadingBar);
    if (!$progressbar) {
      initProgressBar();
      $progressbar = getProgressBar();
    }
    return $progressbar;
  };
  initProgressBar = function() {
    var $progressbarElement;
    $progressbarElement = D.createElement('div');
    $progressbarElement.className = 'loading-bar';
    return D.body.appendChild($progressbarElement);
  };
  showProgressBar = function() {
    var $progressbar;
    $progressbar = getProgressBar();
    if (D.body.classList) {
      return D.body.classList.add('app-loading');
    } else {
      return D.body.className += ' app-loading';
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
    if (D.body.classList) {
      return D.body.classList.remove(options.className);
    } else {
      return D.body.className = D.body.className.replace(new RegExp('(^|\\b)' + options.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  };
  return W.appLoading = appLoading;
})(window, document);
