function mem() {
  let m=new Proxy(arguments[0]||{},{
    get: function() {
      console.log('MEMFUNC')
    },
    ...arguments[1]||null,
  });
  return function() {
    console.log(m);
    return this;
  };
};

function constructor() {
  this.config = mem({
    createdAt: this.config.createdAt || new Date().getTime(),
    flag: function() {
      return new Proxy(new Function(), {});
    },
    strength: function strength() {
      console.log('e');
    },
    updatedAt: new Date().getTime(),
  });
  this.print = function() {
    Array.from(arguments).map(([m,c,d])=>{console.log(`%c ${m}`,`color: rgb(${_.style[c]})`);});
    return this;
  };
  this.reboot= this.constructor.bind(this);
};


let _ = {
  style: [
    [255,0,0],
    [255,189,0],
    [43,201,101],
    [0,100,255],
    [234,51,88],
  ],
}


function ChainLink(x = require('./chain-mill-defaults.js')) {
  constructor.call(this,x);

  this.isDev = !!(window.location.host.includes('localhost'));
console.log(this, constructor())

  // this.config = function() {
  //   let inj = (typeof arguments[0] === 'function') ? arguments[0] : null;
  //   if (inj && typeof inj === 'function') inj(this);
  //   return (x && typeof x === 'function')
  //     ? (x) => mem(require('./chain-mill-constructor-defaults.js')).bind(this)(x)
  //     : this;
  // };
  this.watch = function() {
    return new Proxy(chainLink, {
      get() {
        console.log('getted');
      },
    });
  };
  return this;
};

let flag = 0;
function chainFlag(x) {
  if (x !== flag) {
    flag = x;
  };
  this.prev = x;
};

const chainMill = function chainMill(x) {

};


module.exports = ChainLink;
