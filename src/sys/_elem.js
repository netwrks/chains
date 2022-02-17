module.exports = function(...a) {
  let el = document.createElement(a[0]);
  Object.keys(a[1]).map(k => el.setAttribute(k, a[k]));

  return el;
};
