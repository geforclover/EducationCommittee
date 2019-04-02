(function (window, undefined) {
    var dom = {
    //绑定事件
        on: function (node, eventName, handler) {
            if (node.addEventListener) {
                node.addEventListener(eventName, handler);
            }
            else {
                node.attachEvent("on" + eventName, handler);
            }
        },
        //获取元素的样式
        getStyle: function (node, styleName) {
            var realStyle = null;
            if (window.getComputedStyle) {
                realStyle = window.getComputedStyle(node, null)[styleName];
            }
            else if (node.currentStyle) {
                realStyle = node.currentStyle[styleName];
            }
            return realStyle;
        },
        //获取设置元素的样式
        setCss: function (node, css) {
            for (var key in css) {
                node.style[key] = css[key];
            }
        }
    };
  
    //#region 拖拽元素类
    function DragElement(node) {
        this.node = node;
        this.x = 0;
        this.y = 0;
    }
    DragElement.prototype = {
        constructor: DragElement,
        init: function () {                    
            this.setEleCss({
                "left": dom.getStyle(node, "left"),
                "top": dom.getStyle(node, "top")
            })
            .setXY(node.style.left, node.style.top);
        },
        setXY: function (x, y) {
            this.x = parseInt(x) || 0;
            this.y = parseInt(y) || 0;
            return this;
        },
        setEleCss: function (css) {
            dom.setCss(this.node, css);
            return this;
        }
    }
    //#endregion
  
    //#region 鼠标元素
    function Mouse() {
        this.x = 0;
        this.y = 0;
    }
    Mouse.prototype.setXY = function (x, y) {
        this.x = parseInt(x);
        this.y = parseInt(y);
    }
    //#endregion

    //拖拽配置
    var draggableConfig = {
        zIndex: 100,
        draggingObj: null,
        mouse: new Mouse()
    };
  
    function Drag(ele) {
        var dragNode = (ele.querySelector(".draggable") || ele);
        dom.on(dragNode, "mousedown", function (event) {
            var dragElement = draggableConfig.dragElement = new DragElement(ele);
            draggableConfig.mouse.setXY(event.clientX, event.clientY);
            draggableConfig.dragElement.setXY(dragElement.target.style.left, dragElement.target.style.top).setTargetCss({
                "zIndex": draggableConfig.zIndex++,
                "position": "relative"
            });
        }).on(dragNode, "mouseover", function () {
            dom.setCss(this, draggableStyle.dragging);
        }).on(dragNode, "mouseout", function () {
            dom.setCss(this, draggableStyle.defaults);
        });
    }
  
    function move(event) {
        if (draggableConfig.dragElement) {
            var mouse = draggableConfig.mouse,
                dragElement = draggableConfig.dragElement;
            dragElement.setTargetCss({
                "left": parseInt(event.clientX - mouse.x + dragElement.x) + "px",
                "top": parseInt(event.clientY - mouse.y + dragElement.y) + "px"
            });
  
            dom.off(document, "mousemove", move);
                setTimeout(function () {
                    dom.on(document, "mousemove", move);
            }, 25);
        }
    }

    dom.on(document, "mouseup", function (event) {
        draggableConfig.draggingObj = null;
    })

    window.Drag = Drag;
})(window, undefined);