Object.setPrototypeOf(this,require('../util'));
let
  config = this.util.config('renders'),
  prnt = (x, y = 5) => this.util.prnt(config.link, x, y);

let data = new Proxy({}, {
    get(inner, key, proxy) {
      if (key === 'all') return inner;
      if (!inner[key] && this.panel) this.panel().chn.prnt(0);
      return inner[key];
    },
    set(inner, key, value, proxy) {
      switch (true) {
        case key === 'task':
          prnt(' adding render task', 3);
          Array.isArray(value)
            ? value.map(v => inner[key].tasks.push(v))
            : inner[key].tasks.push(v);
          return inner;
        case !inner[key]:
          prnt(` adding render ${key}`, 1);
          inner[key] = {
            createdAt: new Date().getTime(),
            id: key,
            tasks: Array.isArray(value)
              ? value
              : [value],
            updatedAt: null,
          };
          return inner[key];
        default:
          prnt(' nothing', 3);
          return inner;
      }
    }
  });

module.exports = this.panel(
  config,
  data,
  {
    add: (id, type) => data[id] = type,
    run: (id, val) => {
      console.log(data, id, val)
      prnt(
        data[id] ? ` rendering ${id}` : ` ${id} is not a valid render`,
        data[id] ? 2 : 0,
      );
      if (data[id]) {
        data[id].tasks.map(task => {
          Function(task)(val);
        })
      };
    },
  },
);
