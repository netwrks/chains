//
// // need to add functionality that allows start to send a callback
// // through its entire stack to retrive references to each step, add
// // them to an array, and create a method that allows the user to rerun
// // the entire stack by calling a function like reboot;
//
// // also need to add functionality to 'push updates' to any where certain functions are used on update.
// module.exports = (r, d = {}, b = () => null) => {
//   const LinkItem = require('./link-item');
//   let _d = {}, config = { label: 'VIEW' }, t = 0;
//   const { guide } = require('../utils');
//   const D = { ..._d, ...d };
//   guide([`[${config.label}]`,2,D]);
//   t = 0;
//   b(D);
//   return r(D);
// };






module.exports = (o) => {
};

//
// module.exports = (o) => {
//   console.log(o);
//   let flag = 0;
//   if (flag < 1) {
//     const LinkItem = require('./link-item');
//     flag = 1;
//   }
// };
