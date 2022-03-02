Object.setPrototypeOf(this,require('../util'));
let
  config = this.util.config('renders'),
  body = document.querySelector('body'),
  button = x => {
    if (elems[x.id]) prnt(0);
    let b = elem({
      class: 'button',
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
    b.innerHTML = x.label

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
          console.log('tttt', inner);
          break;
        case key === 'on':
          console.log(value)
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
    clear: () => {
      body.innerHTML = '';
      setTimeout(() => {
        body.appendChild(el('div', { id: 'ntx' }, ''))
      }, 5000);
    },
    button,
    elem,
    elems,
    template,
    title,
  },
);
