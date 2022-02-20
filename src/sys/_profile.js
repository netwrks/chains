module.exports = function() {
  this.anchors && console.log(`anchors:\n  ${Object.keys(this.anchors).map(x=>`${x}\n  `).join('')}`);
}
