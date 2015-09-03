# app-loading

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Quick start

**bower install app-loading** works with browsers

```javascript
appLoading.start()
appLoading.stop()
```

**npm install app-loading** works with webpack

```javascript
import appLoading from 'app-loading'
appLoading.start()
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

// use on server side
if (typeof window !== 'undefined') {
  import appLoading from 'appLoading'
  appLoading.start()
}
```

## Changelog

**v0.0.4** - 2015/08/22

- Rewrite in ES6

**v0.0.3** - 2015/07/20

- add `setColor` method

**v0.0.2**

- Clean code
- Update demo

**v0.0.1**

- Prototype.
- Medium style loading bar.
