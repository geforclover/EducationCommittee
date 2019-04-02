var makeDrag_flag = false;
var makeDrop_objs = [];
//注册放置对象
function makeDrop(obj) {
    makeDrop_objs.push(obj);
}
//注册拖动对象
function makeDrag(obj) {
    obj.onmousedown = function(e) {
        if (!document.all) e.preventDefault();
        var oPos = getObjPos(obj);
        var cPos = getCurPos(e);
        makeDrag_flag = true;
        document.onmouseup = function(e) {
            makeDrag_flag = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
        document.onmousemove = function(e) {
            if (makeDrag_flag) {
                obj.style.position = 'absolute';
                var Pos = getCurPos(e);
                obj.style.left = Pos.x - cPos.x + oPos.x + 'px';
                obj.style.top = Pos.y - cPos.y + oPos.y + 'px';
            }
            return false;
        }
    }
}
function getObjPos(obj) {
    var x = y = 0;
    if (obj.getBoundingClientRect) {
        var box = obj.getBoundingClientRect();
        var D = document.documentElement;
        x = box.left + Math.max(D.scrollLeft, document.body.scrollLeft) - D.clientLeft;
        y = box.top + Math.max(D.scrollTop, document.body.scrollTop) - D.clientTop;
    } else {
        for (; obj != document.body; x += obj.offsetLeft, y += obj.offsetTop, obj = obj.offsetParent);
    }
    return {
        'x': x,
        'y': y
    };
}
function getCurPos(e) {
    e = e || window.event;
    var D = document.documentElement;
    if (e.pageX) return {
        x: e.pageX,
        y: e.pageY
    };
    return {
        x: e.clientX + D.scrollLeft - D.clientLeft,
        y: e.clientY + D.scrollTop - D.clientTop
    };
}