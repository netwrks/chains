module.exports = function link() {
  console.log(this)
  let [master,merge,] = arguments;
  this.body.proxy = new Proxy(
    (a&&typeof a==='object') ? a : {
      // target for ChainProxy.prototype.body
      dev: !!(window.location.host.includes('localhost'))?1:0,
      isWritable:1,
      type:1,
    },
    (b&&typeof b==='object') ? b : {
      // handler methods for ChainProxy.prototype.body
      get() {
        // scope of this is ChainProxyHandler
        switch(arguments[1]) {
          case 'ctrl': return arguments[0];
          default: break;
        }
      },
      set(...a) {
        // scope of this is ChainProxyHandler
        if (a[0].isWritable && a[0].isWritable>1) {
          switch(a[1]) {
            case 'ctrl': return a[0];
            default: break;
          }
        }
      }
    }
  );
  return this.body.proxy.ctrl;
};
