Object.setPrototypeOf(this,require('../util'));
// Get HTML head element

module.exports = this.panel(config, null, {
  elem: (x) => {
    elem = document.getElementById(x);
    app.observe(elem, observerConfig);
    return {
      render: y => this.links.renders(r => observers[x] = () => r.run(y, this)),
    }
  },
});
