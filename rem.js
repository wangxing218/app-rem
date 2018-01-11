+ function(win, doc) {
  'use strict';
  var options = { width: 750, dpr: win.devicePixelRatio };
  var html = doc.documentElement,
    width = html.getAttribute('data-width') || options.width,
    dpr = html.getAttribute('data-dpr') || options.dpr,
    viewPort = doc.querySelector('meta[name="viewport"]'),
    rotate = win.onorientationchange ? 'orientationchange' : 'resize',
    dpr = parseFloat(dpr).toFixed(2);

  // 设置html fontSize
  function setSize() {
    var winWidth = win.innerWidth || html.clientWidth;
    if (winWidth / dpr > 540) {
      winWidth = winWidth / dpr > 540 ? 540 * dpr : winWidth
      html.style.maxWidth = 540 * dpr + 'px';
      html.style.marginLeft = html.style.marginRight = 'auto';
    }
    html.style.fontSize = 100 * winWidth / width + 'px';
  };

  // 设置 initial-scale
  function setScale() {
    setSize();
    var viewContent = viewPort.getAttribute('content');
    var reg = /initial-scale=(\d(.\d+)?)/i;
    var matchRes = viewContent.match(reg);
    var scale = 1 / dpr;
    if (matchRes && matchRes[1] == scale) {
      return;
    }
    var newContent = viewContent.replace(reg, function(a, b) {
      return a.replace(/\d(.\d+)?/i, scale);
    });
    viewPort.setAttribute('content', newContent);
  };

  win.addEventListener(rotate, setSize);
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  requestAnimationFrame(setScale);
}(window, document);
