# app-loading

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![NPM](https://nodei.co/npm/app-loading.png)](https://nodei.co/npm/app-loading/)

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
  import appLoading from 'app-loading'
  appLoading.start()
}
```

## Changelog

**v0.0.5** - 2015/09/03

- Fix `setColor` and add test

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

## License

This project is released under SOX license that means you can do whatever you want to do, but you have to open source your copy on github if you let the public uses it. All copies should be released under the same license. The owner of each copy is only reponsible for his own copy, not for the parents, not for the children.

permitted use:  
fork on github  
change  
do evil with your copy  

prohibted use:  
do evil with copies not of your own  
open source your copy without declaring your parent copy  
