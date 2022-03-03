Object.setPrototypeOf(this,require('../util'));
let
  config = this.util.config('renders'),
  body = document.querySelector('body'),
  button = x => {
    if (elems[x.id]) prnt(0);
    let b = elem({
      class: `button ${x.class}`,
      id: x.id,
      type: 'button',
      visible: true,
    })[0];
    if (x.on) {
      Object.keys(x.on).map(y => {
        this.util.event({
          action: x.on[y],
          id: x.id,
          type: y,
        })
      })
    }
    if (typeof x.label === 'string') b.innerHTML = x.label
    if (typeof x.label === 'object') b.appendChild(x.label);
    return b;
  },
  el = (t = 'div', a = {}, data = null) => {
    const el = document.createElement(t);
    Object.keys(a).filter(x => x !== 'icon').map(k => el.setAttribute(k, a[k]));
    if (t.cont) el.innerHTML += t.cont;
    el.innerHTML += data;
    document.getElementById('ntx').appendChild(el);
    return el;
  },
  elems = {},
  event = (x, y, z) => document.getElementById(x).addEventListener(y, z),
  find = x => doc.getElementById(x),
  prnt = (x, y = 5) => this.util.prnt(config.link, x, y),
  scrap = (...x) => x.map(y => document.getElementById(y).remove()),
  template = (x, y = 'ntx') => document.getElementById(y).replaceChild(
    x,
    document.getElementById(y).firstChild,
  ),
  title = x => document.title = x,
  win = window;

let elem = (...y) => y.map(x => {
  if (elems[x.id]) return elems[x.id];
  elems[x.id] = new Proxy(el(
    x.type,
    {
      id: x.id,
      class: x.class,
      ...x.params&&x.params,
    },
    x.content || '',
  ), {
    get(inner, key, proxy) {
      switch(key) {
        case 'get':
        case 'new':
          return inner;
        default:
          return proxy;
      }
    },
    set(inner, key, value, proxy) {
      switch (true) {
        case key === 'add':
          if (inner[key]) return inner[key];
          inner[key] = value;
          break;
        case key === 'on':
          break;
        case key === 'task':
          prnt(' adding elem task', 3);
          Array.isArray(value)
            ? value.map(v => inner[key].tasks.push(v))
            : inner[key].tasks.push(v);
          return inner;
        case !inner[key]:
          prnt(` adding elem ${key}`, 1);
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
  return document.getElementById(x.id);
});

config.createdAt = new Date().getTime();

module.exports = this.panel(
  config,
  false,
  {
    clear: x => Array
      .from(this.util.app().children)
      .filter(y => !y.getAttribute('class').includes(x))
      .map(y => y.remove(),
    ),
    button,
    elem,
    elems,
    goto: (x) => {
      history.push(x);
      return this.routes[x](this.links);
    },
    remove: (...x) => x.map(y => {
      delete elems[y];
      document.getElementById(y) && document.getElementById(y).remove();
      console.log(elems)
    }),
    scrap,
    template,
    title,
  },
);
