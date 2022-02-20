const Store = new Function();
Store.prototype.time = {
  createdAt: new Date().getTime(),
  updatedAt: new Date().getTime(),
};
Store.prototype.stores={};
Store.prototype.allRenders={};
Store.prototype.models={
  memory:new Map(),
  object:{},
  persist:localStorage,
  server:null,
  session:sessionStorage,
};
Store.prototype.add=function(...a){
  Store.prototype.allRenders[a[0]]=[];
  Store.prototype.stores[a[0]]=new Proxy(Store.prototype.models[a[1]], {
    get(...b){
      switch(true) {
        case b[1] === 'render':
          Store.prototype.renders[x] = y;
          return b[0];
        case b[1] === 'renderAll':
          Store.prototype.tla = new Date().getTime();
          Store.prototype.renders[a[0]].map(r => {
            return (typeof c[0] === 'string' ? Function(r) : r)(c[0])
          });
          return b[0]
        case !!b[0][b[1]]:
          return b[0][b[1]];
        default:
          return b[0];
      }
    },
    set(...c){
      switch(true){
        case(c[1]==='add'):
          c[0][c[2][0]]=c[2][1];
          break;
        case(c[1]==='del'):
          delete c[0][c[2]];
          break;
        case(c[0].set):
          c[0].set(c[2].id,c[2]);
          break;
        case(c[0].setItem):
          c[0].setItem(c[2].id,c[2]);
          break;
        default:
          break;
      }
      if (Store.prototype.renders[a[0]]) {
        console.log(a)
        Store.prototype.tla = new Date().getTime();
        Store.prototype.renders[a[0]].map(r => (typeof c[0] === 'string' ? Function(r) : r)(c[0]));
      } else {
        console.log('t')
        Store.prototype.allRenders[a[0]]=[];
      }
    },
    ...a[2] || {},
  });
};

Store.prototype.renders = new Proxy(
  Store.prototype.allRenders,
  {
    get(...b){
      if (b[1] === 'all') Store.prototype.time.updatedAt = new Date().getTime();
      if (b[0][b[1]]) {
        b[0][b[1]].map((x,i) => {
          Function(x)();
          if (i > b[0][b[1]]-1) Store.prototype.time.updatedAt;
        });
        return b[0];
      };
      if (b[1]==='all') return b[0];
      if (!b[0][b[1]]) return null;
      return(b[0][b[1]])?b[0][b[1]]:b[0];
    },
    set(...c) {
      // Chain.util.storage().renders.set({render_name},{function_string})
      console.log('SET',c[1],c[2])
      if (c[0][c[1]])c[0][c[1]].push(c[2]);
    },
  },
);

// set up default storage containers
[['persist','persist'],['session','session'],['state','object']].map(x=>Store.prototype.add(...x));

// user facing storage counterpart
module.exports=function(x){
  let _ = this;
  let ex = function(x=null,y=0,t=['stores','renders']) {
    let s=Store.prototype[t[y]][x];
    _.util.print(s?['🏬👍',2]:['🏬🚫',0]);
    return (!x)?true:!!s;
  };
  return x
    // if x is a function, return function with Store.prototype
    // if x is not a funtion, then return the inner storage data
    ? (typeof x==='function')
      ? x(Store.prototype)
      : Store.prototype.stores[x].list
    : {
      add: function(x,y) { if (!ex(x)) { Store.prototype.add(x,y); }; return Store.prototype.stores[x]; },
      all: function() { return Store.prototype.stores; },
      createdAt: Store.prototype.time.createdAt,
      del: function(x) { return ex(x) ? delete Store.prototype.stores[x] : null; },
      doc: function() { _.util.docs('sys','storage'); return _; },
      renders: {
        _: Store.prototype.renders,
        add: function(x,y) { return ex(x,1) ? Store.prototype.renders[x] = y : null; },
        all: function() { return Store.prototype.renders.all; },
        del: function(x) { return ex(x,1) ? delete Store.prototype.renders[x] : null; },
        get: function(x) { return ex(x,1) ? Store.prototype.renders[x] : null; },
        updatedAt: new Date().getTime(),
      },
      store: function(x) {
        return {
          ...Store.prototype.time,
          doc: function() { _.util.docs('sys','store'); return _; },
          render: function(y) { Store.prototype.renders[y||x].all; return this; },
          task: function(y) { if (ex(x,1)) Store.prototype.renders[x] = y; return this; }
        };
      },
      updatedAt: Store.prototype.time.updatedAt,
    };
};
