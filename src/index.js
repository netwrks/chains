let
  ChainUtilHandler = {
    apply(a){return ChainUtilTarget.msg('apply',0);},
    constructor(a){return ChainUtilTarget.msg('constructor',0);},
    defineProperty(a){return ChainUtilTarget.msg('defineProperty',0);},
    deleteProperty(a){return ChainUtilTarget.msg('deleteProperty',0);},
    get(...a) {
      console.log('ChainUtilHandler')
      switch(true) {
        case a[1] === 'ctrl': return a[0];
        case !!a[0][a[1]]:
          console.log(a[0][a[1]])
          return a[0][a[1]];
        default: return a[0].msg(a[1]);
      }
    },
    getOwnPropertyDescriptor(a){return ChainUtilTarget.msg('getOwnPropertyDescriptor',0);},
    getPrototypeOf(a){return ChainUtilTarget.msg('getPrototypeOf',0);},
    has(a){return ChainUtilTarget.msg('has',0);},
    isExtensible(a){return ChainUtilTarget.msg('isExtensible',0);},
    ownKeys(){return ChainUtilTarget.msg('ownKeys',0);},
    preventExtensions(a){return ChainUtilTarget.msg('preventExtensions',0);},
    set(...a){if(a[0].isWritable && a[0].isWritable>1)a[0][a[1]]=a[2];return a[0];},
    setPrototypeOf(a){return ChainUtilTarget.msg('setPrototypeOf');},
  },
  ChainUtilTarget = {
    async:require('./sys/_async'),
    body:require('./sys/_body'),
    bruh:require('./sys/_bruh'),
    config:require('./sys/_config'),
    elem:require('./sys/_elem'),
    flags:require('./sys/_flags'),
    go:require('./sys/_go'),
    info: require('./sys/_info'),
    isKind:require('./sys/_isKind'),
    link:require('./sys/_link'),
    memory:require('./sys/_memory'),
    msg:require('./sys/_msg'),
    print:require('./sys/_print'),
    prof:require('./sys/_prof'),
    refresh:require('./sys/_refresh'),
    register:require('./sys/_register'),
    render:require('./sys/_render'),
    renders:require('./sys/_renders'),
    reset:require('./sys/_reset'),
    start:require('./sys/_start'),
    storage:require('./sys/_storage'),
    test:require('./sys/_test'),
    ui:require('./sys/_ui'),
    view:require('./sys/_view'),
  };

// combine objects that need standard data params for documentation
[[ChainUtilTarget.info],[ChainUtilTarget.storage]].map(t=>ChainUtilTarget.link(t[0],t[1]||ChainUtilTarget.body()));

// combine objects that need standard data params for documentation
[ChainUtilTarget.info,ChainUtilTarget.storage].map(c=>c.prof=ChainUtilTarget.prof);

// Chain Interface
const ChainInterface = {
  ...(ChainUtilTarget.info.dev>0) && { util: ChainUtilTarget },
  bruh: ChainUtilTarget.bruh,
  refresh: ChainUtilTarget.refresh,
};

module.exports = ChainInterface;
