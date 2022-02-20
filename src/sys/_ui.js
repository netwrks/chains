const uiContainer = new Proxy({
  body: document.querySelector('body'),
  default: [],
  elems: [],
},{
  get(...a) {
    let [ui,p,prx] = a;
    switch(p) {
      case 'clear':
      case 'default':
        while(document.querySelector('body').firstChild) document.querySelector('body').firstChild.remove();
        ui.default.map(x=>ui.body.appendChild(x));
        break;
      default:
        break;
    };
    return ui.ctrl;
  },
  set(...a) {
    let [ui,p,v,prx] = a;
    switch(p) {
      case 'default':
        if (!ui.default) ui.default = v;
        return ui.default;
      default:
        break;

    }
  }
});

module.exports = {
  clear: () => uiContainer.clear,
}
