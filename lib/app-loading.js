/***********************************************
 *app-loading
 *(c) 2015
 *github.com/aprilorange/app-loading
***********************************************/

() => {

  let definition = (W, D) => {
    class appLoading {
      constructor() {
        this.opts = {
          className: 'app-loading',
          loadingBar: '.loading-bar',
          color: null
        }
      }

      start(color) {
        this.showBar(color)
      }

      stop() {
        this.hideBar()
      }

      showBar(color) {
        let bar = this.getBar()
        if(this.opts.color) bar.style.backgroundColor = this.opts.color
        if(color) bar.style.backgroundColor = color
        D.querySelector('body').classList.add(this.opts.className)
      }

      hideBar() {
        D.querySelector('body').classList.remove(this.opts.className)
        this.getBar().style.backgroundColor = null
      }

      getBar() {
        let bar = D.querySelector(this.opts.loadingBar)
        if(!bar) this.initBar()
        return bar
      }

      initBar() {
        let bar = D.createElement('div')
        bar.className = this.opts.loadingBar.substring(1)
        D.body.appendChild(bar)
      }

      setColor(color) {
        this.opts.color = color
      }

    }

    return new appLoading() 
  }

  ;(context, name, definition) => {
    if(typeof module !== 'undefined') {
      module.exports = definition
    } 
    else if(typeof define === 'function' && define.amd) {
      define(definition)
    } 
    else {
      context[name] = definition
    }

  }(window, 'appLoading', definition(window, document))

}()

