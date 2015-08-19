# app-loading

**[No longer maintained]** Please take a look at the [ES6 version](https://github.com/aprilorange/app-loading-es6) of app-loading

**bower install app-loading**

```javascript
appLoading.start()
appLoading.stop()
```

## Advance usage

```javascript
// set up some custom color
// globally
appLoading.setColor('#333')
appLoading.start()
// reset
appLoading.setColor(null)

// or for temporary use, this will override the `appLoading.setColor` setting
appLoading.start('#f83')
appLoading.start('yellow')
appLoading.start('rgba(76, 207, 177, 0.7)')
```

## ECMAScript 2015

**bower install app-loading-es6**

A.K.A ES6, please refer to https://github.com/aprilorange/app-loading-es6

## LiveScript

A really simple implement in LiveScript, not yet full-featured. [Live edit on JS Bin](http://jsbin.com/wowera/edit?js,output)

```livescript
((W, D) ->

  class appLoading
    $$ = D.query-selector.bind document
    
    init-bar = ->
      bar = D.create-element \div
      bar.className = \loading-bar
      D.body.appendChild bar
      
    get-bar = ->
      init-bar! if not $$ \.loading-bar     
      $$ \.loading-bar
      
    @start = ->
      get-bar!
      D.body.classList.add \app-loading
      
    @stop = ->
      D.body.classList.remove \app-loading
      
  W.appLoading = appLoading
    
) window, document
```

## Changelog

**v0.0.3** - 2015/7/20
- add `setColor` method

**v0.0.2**
- Clean code
- Update demo

**v0.0.1**

- Prototype.
- Medium style loading bar.
