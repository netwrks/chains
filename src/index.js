let
  ChainUtilHandler = {
    apply(a){return ChainUtilTarget.msg('apply',0);},
    constructor(a){return ChainUtilTarget.msg('constructor',0);},
    defineProperty(a){return ChainUtilTarget.msg('defineProperty',0);},
    deleteProperty(a){return ChainUtilTarget.msg('deleteProperty',0);},
    get(...a) {
      console.log('wee')
      switch(true) {
        case a[1] === 'ctrl': return a[0];
        case !!a[0][a[1]]:
          console.log(a[0][a[1]])
          return a[0][a[1]];
        default: return a[0].msg(a[1]);
      }
    },
    getOwnPropertyDescriptor(a){return ChainUtil.msg('getOwnPropertyDescriptor',0);},
    getPrototypeOf(a){return ChainUtil.msg('getPrototypeOf',0);},
    has(a){return ChainUtil.msg('has',0);},
    isExtensible(a){return ChainUtil.msg('isExtensible',0);},
    ownKeys(){return ChainUtil.msg('ownKeys',0);},
    preventExtensions(a){return ChainUtil.msg('preventExtensions',0);},
    set(...a) {
      if (a[0].isWritable && a[0].isWritable>1) a[0][a[1]] = a[2];
      return a[0];
    },
    setPrototypeOf(a){return ChainUtil.msg('setPrototypeOf');},
  },
  ChainUtilTarget = {
    async:require('./sys/_async'),
    body:require('./sys/_body'),
    config:require('./sys/_config'),
    flags:require('./sys/_flags'),
    go:require('./sys/_go'),
    info:{
      // default Chain.info() object
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
    isKind:require('./sys/_isKind'),
    link:require('./sys/_link'),
    memory:require('./sys/_memory'),
    msg:require('./sys/_msg'),
    print:require('./sys/_print'),
    prof:require('./sys/_prof'),
    register:require('./sys/_register'),
    render:require('./sys/_render'),
    renders:require('./sys/_renders'),
    reset:require('./sys/_reset'),
    start:require('./sys/_start'),
    storage:require('./sys/_storage'),
    test:require('./sys/_test'),
    view:require('./sys/_view'),
  },
  ChainInfo = ChainUtilTarget.body(ChainUtilTarget.info,ChainUtilHandler),
  ChainUtil = ChainUtilTarget.body(ChainUtilTarget,ChainUtilHandler);


// combine objects that need standard data params for documentation
[[ChainUtilTarget.info],[ChainUtilTarget.storage]].map(t=>ChainUtilTarget.link(t[0],t[1]||ChainUtilTarget.body()));

// combine objects that need standard data params for documentation
[ChainUtil,ChainUtilTarget.info,ChainUtilTarget.storage].map(c=>c.prof=ChainUtilTarget.prof);

// Chain Interface
const ChainInterface = {
  info: ChainUtilTarget.info,
  ...(ChainUtilTarget.info.dev>0) && { util: ChainUtil },
};

module.exports = ChainInterface;
