const Anchor = new Function();
Anchor.prototype.anchors = new Proxy({
  list: [],
  tla: new Date().getTime(),
}, {
  get(...b){
    if (b[0][b[1]]) {
      return b[0][b[1]];
    }
    return b[0];
  },
  set(...c) {
    switch(true){
      case(c[1]==='add'):c[0][c[2][0]]=c[2][1];break;
      case(c[1]==='del'):delete c[0][c[2]];break;
      case(c[0].set):c[0].set(c[2].id,c[2]);break;
      case(c[0].setItem):c[0].setItem(c[2].id,c[2]);break;
      default:break;
    }
    if (c[0][c[1]]) {
      c[0].tla=new Date().getTime();
      c[0].list.map(r=>(typeof c[0] === 'string' ? Function(r) : r)(c[0]));
    }
  }
});

// user facing Anchor counterpart
module.exports=function(x){
  let _=this,ex=function(x,y=Anchor.prototype.anchors){_.util.print([`⚓${!!y[x]?'👍':'🚫'}`,y[x]?2:0]);return !!y[x];};
  // if x is a function, return function with storage.prototype
  // if x is not a funtion, then return the inner storage data
  return x
    ? (typeof x === 'function')
      ? x(Anchor.prototype)
      : Anchor.prototype.anchors[x].get
    : {
      add: function(x,y) { return ex(x) ? Anchor.prototype.anchors[x] = y : null; },
      all: function() { return ex(x) ? Anchor.prototype.anchors.all : null; },
      del: function(x) { return ex(x) ? Anchor.prototype.anchors.del = x : null; },
      doc: function() { _.util.docs('sys','anchors'); return _; },
      get: function(x) { return ex(x) ? Anchor.prototype.anchors[x] : Anchor.prototype; },
    };
};
