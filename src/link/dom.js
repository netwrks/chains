Object.setPrototypeOf(this,require('../util'));
let
  config = this.util.config('renders'),
  body = document.querySelector('body'),
  button = (x,y = 0) => {
    if (elems[x.id]) {
      return elems[x.id].get;
    }
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
    switch(typeof x.label) {
      case 'function':
        b.appendChild(x.label());
        break;
      case 'object':
        b.appendChild(x.label);
        break;
      case 'string':
        switch(true) {
          case x.label.includes('ICON:'):
            b.innerHTML = this.appConfig('icons')[x.label.split('ICON:')[1]] || 'x' ;

            break;
          default:
            b.innerHTML = x.label;
            break;
        }
      default:
        break;
    }
    return b;
  },
  el = (t = 'div', a = {}, data = null, or = 0) => {
    const el = document.createElement(t);
    Object.keys(a).filter(x => x !== 'icon').map(k => el.setAttribute(k, a[k]));
    if (t.cont) el.innerHTML += t.cont;
    el.innerHTML += data;
    if (or === 0) document.getElementById('ntx').appendChild(el);
    return el;
  },
  elems = {},
  event = (x, y, z) => document.getElementById(x).addEventListener(y, z),
  find = x => doc.getElementById(x),
  header = (t, x) => {
    let elemType = `h${(t>6)?6:(t<1)?1:t}`;
    let element = (elems[x.id]) ? elems[x.id].get : elem({
      class: `header ${x.class}`,
      id: x.id,
      type: elemType,
      visible: true,
    })[0];
    element.innerHTML = x.text;
    return element;
  },
  icon = x => x ? this.appConfig('icons')[x] : 'x',
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
  let element = el(
    x.type,
    {
      id: x.id,
      class: x.class,
      ...x.params&&x.params,
    },
    x.content || '',
  );
  if (x.inner && Array.isArray(x.inner)) {
    x.inner.map(y => element.appendChild(y));
  };
  elems[x.id] = new Proxy(element, {
    get(inner, key, proxy) {
      switch(key) {
        case 'prox':
          return proxy;
        default:
          return inner;
      }
    },
    set(inner, key, value, proxy) {
      switch (true) {
        case key === 'add':
          if (inner[key]) return inner[key];
          inner[key] = value;
          // if (value.inner) {
          //     elems[value.id].get.append(value.inner);
          // }
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
      switch(true) {
        case (x[0] === '/'):
          history.pushState({}, '', x);
          return this.routes[x](this.links);
        case (x.indexOf('NEW:') === 0):
          return window.open(x.split('NEW:')[1]);
        default:
          return window.location = x;
      }
    },
    header,
    icon,
    remove: (...x) => x.map(y => {
      delete elems[y];
      document.getElementById(y) && document.getElementById(y).remove();
    }),
    scrap,
    template,
    title,
  },
);
