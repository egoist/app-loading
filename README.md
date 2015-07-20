# app-loading

**bower install app-loading**

```javascript
appLoading.start()
appLoading.stop()
```

## Furthur usage

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

## Changelog

**v0.0.3** - 2015/7/20
- add `setColor` method

**v0.0.2**
- Clean code
- Update demo

**v0.0.1**

- Prototype.
- Medium style loading bar.
