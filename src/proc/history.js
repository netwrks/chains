window.onbeforeunload = function(event) {
  let util = require('../util');
  if (window.location.pathname !== '/') {
    history.pushState({},'','/');
  };
}
