Object.setPrototypeOf(this,require('../util'));
this.prnt('test','',1)
this.test = Object.create(this);

// //
// // module.exports=function(){
// //   let _=this,[t]=arguments,d=new Date().getTime();_.msg('.test()',2);
// //   switch(true){
// //     case !t:case(_.info().updatedAt>d):_.msg('.test()',0);break;
// //     default:
// //       _.msg('.test()',2);
// //       _.info().updatedAt=new Date().getTime();
// //       break;
// //   }
// // };
//
// const Test = new Function();
// Test.prototype.config={
//   createdAt: new Date().getTime(),
//   isSet: false,
//   updatedAt: new Date().getTime(),
// };
// Test.prototype.list = new Proxy({
//   list:[],
//   tla:new Date().getTime(),
// },{
//   get(...b){switch(true){
//     case(b[1]==='get'):return b[0].list;
//     case(!!b[0][b[1]]):return b[0][b[1]];
//     default:return b[0];
//   }},
//   set(...c){switch(true){
//     case(c[1]==='add'):c[0][c[2][0]]=c[2][1];break;
//     case(c[1]==='del'):delete c[0][c[2]];break;
//     case(c[0].set):c[0].set(c[2].id,c[2]);break;
//     case(c[0].setItem):c[0].setItem(c[2].id,c[2]);break;
//     default:break;}
//     if(c[0][c[1]]){
//       c[0].tla=new Date().getTime();
//       c[0].list.map(r=>(typeof c[0]==='string'?Function(r):r)(c[0]));
// }}});
// Test.prototype.panel = function(x){return{
//
// }};
//
// module.exports=function(config,[arg],u){
//   if (config && !Test.prototype.config) Test.prototype.config = config;
//   let fn={
//     add:function(x,y){return Test.prototype.store.list[x]=y;},
//     all:function(){return Test.prototype.store.list.all;},
//     del:function(x){return Test.prototype.store.list.del=x;},
//     doc:function(){_.util.docs('sys','test');},
//     get:function(x){return Test.prototype.store.list[x];},
//   };
//   switch(true){
//     case (typeof arg === 'function'):
//       this.msg('')
//       x(Test.prototype);
//       break;
//     case (typeof arg === 'string'):
//       console.log(config,arg,u);
//       this.msg();
//       return Test.store.list[arg] || Test.store.list;
//     default: return this;
//   }
// };


this.panel = x => {
  switch(true) {
    case x && typeof x === 'function': {
      return;
    };
    case (x && typeof x === 'integer' && x > 0):
      return {
        doc: y => this.docs('sys','store'),
        render: y => this.renders[x].all,
        task: y => this.renders[x] = y,
      };
    case !x:
    default:
      return {
        add: this.add,
        all: this.stores,
        conf: {
          ...this.config,
          createdAt: new Date().getTime(),
          updatedAt:new Date().getTime(),

        },
        del: y => delete this.storage[y],
        doc: this.util.docs('sys','storage'),
        rnd: y => this.renders[y],
        renders:{
          add: (x,y) => this.renders[x] = y,
          all: () => this.renders.all,
          del: x => delete this.renders[x],
        }
      }
  };
};
