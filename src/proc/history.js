let util = require('../util');
window.onload = () => console.log('load');

window.onbeforeunload = function(event) {
  if (window.location.pathname !== '/') {
    history.pushState('',{},'/');
  };
  // history.go();
};

history.push = x => {
  console.log(util)
  history.pushState('',{},x)
  util.routes[x](util.links);
};

//
// history.pushState = function() {
//   console.log(this);
// };
//
// history.replaceState = ( f => function replaceState(){
//   console.log('replaceState')
//   var ret = f.apply(this, arguments);
//   window.dispatchEvent(new Event('replacestate'));
//   window.dispatchEvent(new Event('locationchange'));
//   return ret;
// })(history.replaceState);
//
// window.addEventListener('popstate',()=>{
//   console.log('popstate')
//   window.dispatchEvent(new Event('locationchange'))
// });
//
// console.log(history)
