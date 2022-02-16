// const {
//   ac: appConfig,
//   g: guide,
//   i: i18n,
//   l: log,
//   o: objCombine,
//   pr: printMsg,
// } = {
//   ac: require('../../../ntx.json'),
//   g: function guide() {
//     function* guideGenerator(x) {
//       if (_.ac.guided) x.map((m,i) => _.pr(...m));
//       yield x;
//     };
//     guideGenerator(Array.from(arguments)).next();
//   },
//   go: function gameOver() {
//     let f = 1;
//     if (f > 0) {
//       guide(['[CHAIN]', 0, arguments]);
//       setTimeout(() => {
//         history.pushState({},null,'/');
//         f = 0;
//       },1000);
//     }
//   },
//   i: require('./config/i18n.json'),
//   l:(x,y='GOD')=>console.log(`[${y}]`,4,x),
//   oc: function() {
//     let newObj = {};
//     Array.from(arguments).map((o) => newObj = { ...newObj, ...o });
//     return newObj;
//   },
//   pr: (m, i = 0, d = null) => {
//     const style = [[255,0,0],[255,189,0],[43,201,101],[0,100,255],[234,51,88]];
//     console.log(`%c${m}`, `color: rgb(${style[i]})`);
//     return d ? console.log(d) : null;
//   }
// };
//
// let resetQuest = 0;
// exports.gameOver = (d) => {
// }
//
// exports.guide = guide;
// exports.i18n = i18n;
// exports.log = log;
// exports.link = (x,y) => require(`./links/${x}`)(y);
// exports.linkAccess = (x,y) => !!(x && x.excludes && Array.isArray(x.excludes) && x.excludes.includes(y));
// exports.linkDefine = (ls,_o) => {
//   let lx=[];
//   ls.map(l => {
//   _o.map((o,i) => {
//     console.log(!!o.store, o, i)
//     o[`${l}`] = (x) => require(`./links/${l}`)(x);
//   });
//   guide([`[LINK_DEFINE] ${l}2${!!o.store?'s':l}`,1])
//   return
// });
// exports.noAccess=(x)=>console.error(i18n[x]);exports.objCombine=objCombine;exports.print=printMsg;
// exports.printReceive=x=>printMsg(`[\n  RECEIVED ++\n${Object.keys(x).map((k,i)=>`    ${k}: ${Object.values(x)[i]}`).join('\n')}\n]`,3);
// exports.printStart = (x,y) => guide([`[\n  QUEST ++\n    auth: ${!!y.get('auth')}\n${x.def &&  `    defaults:\n    ${Object.keys(x.def).join('\n      ')}`:'    '}guided: ${x.guided||0}\n    id: ${x.id}\n    onUpdate: ${!!(x.onUpdate)}\n    type: ${x.type}\n]`,2]);
// exports.wrap=(o,d)=>({...d,...o});
