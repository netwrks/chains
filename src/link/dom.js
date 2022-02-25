Object.setPrototypeOf(this,require('../util'));
this.config = this.config();
this.config.createdAt = new Date().getTime();
this.panel = (x) => this._panel(
  this.config,
  x => ({
    add: (x,y) => this.anchors[x] = y,
    all: () => this.anchors.all,
    conf: () => ({
      ...this.config,
      createdAt: new Date().getTime(),
      updatedAt:new Date().getTime(),
    }),
    del: x => this.anchors.del = x,
    doc: () => this.conf('anchors').list,
    get: x => this.anchors[x],
}));


// const Dom = new Function();
// Dom.prototype.store = {
//   body: document.querySelector('body'),
//
// };
// Dom.prototype.info={
//   createdAt:new Date().getTime(),
//   updatedAt:new Date().getTime(),
//   ...require('../conf').dom,
// };
// Dom.prototype.face=new Proxy(Dom.prototype.store,{
//
// });
// //   default: [],
// //   elems: [],
// // },{
// //   get(...a) {
// //     let [ui,p,prx] = a;
// //     switch(p) {
// //       case 'clear':
// //       case 'default':
// //         while(document.querySelector('body').firstChild) document.querySelector('body').firstChild.remove();
// //         ui.default.map(x=>ui.body.appendChild(x));
// //         break;
// //       default:
// //         break;
// //     };
// //     return ui.ctrl;
// //   },
// //   set(...a) {
// //     let [ui,p,v,prx] = a;
// //     switch(p) {
// //       case 'default':
// //         if (!ui.default) ui.default = v;
// //         return ui.default;
// //       default:
// //         break;
// //
// //     }
// //   }
// // });
//
// module.exports=function(x,Dp=Dom.prototype){
//   let
//     _=this,
//     ex=function(x=null,y=0){let z=Dp.store[x];_.util.print(z?['🪟👍',2]:['🪟🚫',0]);return (!x)?true:!!z;};
//   if(Dom.prototype.store){
//     Dom.prototype.store=_.storage.add('dom','memory');
//     Dom.prototype.time.updatedAt=new Date().getTime();
//   };
//   return x?(typeof x==='function')?x(Dp):Dp.stores[x].list:{
//     clear: () => Dom.clear,
//     elem: function() { return }
//   }
// };
// //
// // module.exports=function(x){
// //   console.log(this)
// //   let
// //     _=this,
// //     ex=function(x=null,y=0,t=['stores','renders']){let s=Store.prototype[t[y]][x];_.util.print(s?['🏬👍',2]:['🏬🚫',0]);return (!x)?true:!!s;},
// //     tla=(x=new Date().getTime())=>{Storage.prototype.time.updatedAt=x;};
// //   return x?(typeof x==='function')?x(Store.prototype):Store.prototype.stores[x].list:{
