let
ChainInner = new Function(),
ChainUtilHandler = {
  get(...a){switch(true){case a[1]==='ctrl':return a[0];case!!a[0][a[1]]:return a[0][a[1]];default:return a[0].msg(a[1]);}},
  set(...a){if(a[0].isWritable && a[0].isWritable>1)a[0][a[1]]=a[2];return a[0];},
};
Object.keys(require('./sys')).map(x => ChainInner.prototype[x] = require('./sys')[x]);

let ChainOuter = Object.create(ChainInner);
ChainOuter.anchors=ChainInner.prototype.anchors;
ChainOuter.bruh=ChainInner.prototype.bruh;
ChainOuter.config=ChainInner.prototype.config;
ChainOuter.docs=ChainInner.prototype.docs;
ChainOuter.go=ChainInner.prototype.go;
ChainOuter.info=ChainInner.prototype.info;
ChainOuter.msg=ChainInner.prototype.msg;
ChainOuter.profile=ChainInner.prototype.profile.bind(ChainInner);
ChainOuter.start=ChainInner.prototype.start;
ChainOuter.store=ChainInner.prototype.storage().store,
ChainOuter.ui=ChainInner.prototype.ui;
ChainOuter.util=ChainInner.prototype;

let Chain = Object.create(ChainOuter);
module.exports = Chain;
