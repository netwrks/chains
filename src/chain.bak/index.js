// NO TOUCHIE
function Chain() {

}


  const ChainLink = require('./src/chain');

// Chain.config = function config() {
//     console.log('CONFIG');
//     return this._;
//   };







// NO TOUCHIE
  module.exports = Chain;


// let Chain = new Proxy(obj, {
//   apply: function() {
//     console.log('apply');
//   },
//   get: function() {
//     console.log(arguments);
//     switch(arguments[1]) {
//       case 'print':
//         // obj.log(DEV, 'PRINT', 1);
//         obj.print(Chain);
//         break;
//       case 'start':
//         obj.log(DEV, 'START', 2);
//         // put start Chain functionality here,
//         // this is a 'side effect' of getting the
//         // start property.  start needs to run methods, not modify structure
//         break;
//       case 'test':
//         obj.log(DEV, 'TEST', 0);
//         break;
//       default:
//         obj.log(DEV, 'DEF', 1);
//         break;
//     }
//     return Chain;
//   },
//   has: () => {
//     Reflect.has(obj,'t')
//     // console.log('has');
//   },
//   set: () => {
//     console.log('SET');
//   },
// });
//
// Chain.start = (x) => Reflect.get(obj,'start')(x)

//
// Chain.config = c => {
//   if (!Chain._) Chain._ = {
//     updatedAt: new Date().getTime(),
//     fn: [
//
//     ],
//     ...c,
//   };
//   // console.log(Chain)
//   return Chain;
// };
//
// Chain.print = (x, f=0) => {
//   if (f<1) {
//     Reflect.get(Chain, 'print')(x);
//     f++;
//   }
//   return Chain;
// };
// Chain.start = (conf, fn) => {
//   console.log(Reflect.get(Chain, 'start'));
// };
//
// let f = 0;
// Chain.reset = () => {
//   if (f>0) {
//     Reflect.get(Chain, 'start');
//     f++;
//   }
// }

//
// const obj = Object.create(
//   {
//     get function() {console.log('CHAIN GET', );},
//     set function(y) {console.log('CHAIN SET', y);}
//   },
//   {
//     config: {
//       configurable: true,
//       enumerable: false,
//       value: {},
//       writeable: true,
//     },
//     print: {
//       configurable: true,
//       enumerable: false,
//       value: function print() { return guide; },
//       writeable: true,
//     },
//     reset: {
//       configurable: true,
//       enumerable: false,
//       value: function reset() { return obj; },
//       writeable: true,
//     },
//     start: {
//       configurable: true,
//       enumerable: false,
//       value: {},
//       writeable: true,
//     },
//     test: () => true,
//     update: () => true,
//   },
// );

// let Chain = new Proxy(obj, {
//   apply: function(target, thisArg, args) {
//     console.log('apply')
//   },
//   get: (x) => {
//
//     if (typeof target[prop] === 'function') {
//       return target[prop].bind(target);
//     }
//     console.log(x,obj[x])
//     // this.print(['[CHAIN]',x,1]);
//     return obj[x];
//   },
//   set: (x,y) => {
//     console.log(x,y)
//
//     obj.print(['[SET]',1])
//     obj[x] = y;
//     return obj;
//   },
// });


// Chain.update=(x)=>Chain.print('update',1);
// Chain.start=(x)=>{
//   Chain.reset=l=>l.print('reset',1).start();
//   Chain.print('g',1);
// };
