+ function(win, doc) {
    "use strict";
    var html = doc.querySelector('html'),
        width = html.getAttribute('data-width') || 750,
        dpr = html.getAttribute('data-dpr') || 2,
        rotate = win.onorientationchange ? 'orientationchange' : 'resize';

    function setSize() {
        var winWidth = win.innerWidth || doc.body.clientWidth;
        html.style.fontSize = (dpr / 2) * (100 * winWidth / width) + 'px';
    };
    win.addEventListener(rotate, setSize);
    requestAnimationFrame(setSize);
}(window, document);
