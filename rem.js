+ function(win, doc) {
    'use strict';
    var options = { width: 750, dpr: 2 };
    var html = doc.querySelector('html'),
        width = html.getAttribute('data-width') || options.width,
        dpr = html.getAttribute('data-dpr') || options.dpr,
        viewPort = doc.querySelector('meta[name="viewport"]'),
        rotate = win.onorientationchange ? 'orientationchange' : 'resize';

    // 设置 initial-scale
    function setScale() {
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
    setScale();

    // 设置html fontSize
    function setSize() {
        var winWidth = win.innerWidth || doc.body.clientWidth;
        html.style.fontSize = 100 * winWidth / width + 'px';
    };
    win.addEventListener(rotate, setSize);
    requestAnimationFrame(setSize);
}(window, document);
