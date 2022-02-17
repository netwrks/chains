let elem = require('./_elem');
const uiContainer = new Proxy({
  body: document.querySelector('body'),
  default: [
    elem('div',{id:'ntx'},'WEEEE'),
  ],
  elems: [],
},{
  get(...a) {
    let [ui,p,prx] = a;
    switch(p) {
      case 'build':
        break;
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
//
// exports.clear = function() {
//
//   console.log(this);
//   uiContainer.clear;
//   const prev = document.querySelector('body').outerHTML;
//   let pr = new Proxy(document.querySelector('body'),{});
//   // document.querySelector('body') = ['e','e'];
//   return uiContainer.default;
// };

module.exports = {
  clear: () => uiContainer.clear,
}
