Object.setPrototypeOf(this,require('../util'));
let
  app = new MutationObserver((mutationsList, observer) => mutationsList.map(mutation => {
    observers[mutation.target.id]();
    // if (mutation.type === 'childList') {
    //   console.log('A child node has been added or removed.');
    // } else if (mutation.type === 'attributes') {
    // }
  })),
  config = this.util.config('watch'),
  observerConfig = { attributes: true, childList: true, subtree: true },
  observers = {};


// observer.disconnect();

module.exports = this.panel(config, null, {
  elem: (x) => {
    elem = document.getElementById(x);
    app.observe(elem, observerConfig);
    return {
      render: y => this.links.renders(r => observers[x] = () => r.run(y, this)),
    }
  },
});
