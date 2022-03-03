Object.setPrototypeOf(this,require('../util'));
console.log(this)
let
  config = this.util.config('config'),
  data = new Proxy({}, {
    get(inner, key, proxy) {
      return inner[key];
    },
    set(inner, key, value, proxy) {
      inner[key] = (inner[key]) ? inner[key] : value;
      return inner[key];
    },
  });


module.exports = this.panel(
  config,
  data,
  {
    add: () => null,
  },
);
