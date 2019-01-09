/*
 * @Author: gitshilly
 * @Date:   2017-11-06 13:30:02
 * @Version:   1.0
 * @Last Modified by:   gitshilly
 * @Last Modified time: 2017-11-06 14:46:47
 */

function SwipeLeft($container) {
    //侧滑显示删除按钮
    var expansion = null; //是否存在展开的list
    var container = $container; //
    for (var i = 0; i < container.length; i++) {
        var x, y, X, Y, swipeX, swipeY;
        container[i].addEventListener('touchstart', function(event) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
            swipeX = true;
            swipeY = true;
            if (expansion) { //判断是否展开，如果展开则收起
                expansion.parentNode.className = "";
            }
        });
        container[i].addEventListener('touchmove', function(event) {

            X = event.changedTouches[0].pageX;
            Y = event.changedTouches[0].pageY;
            // 左右滑动
            if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
                // 阻止事件冒泡
                event.stopPropagation();
                if (X - x > 10) { //右滑
                    event.preventDefault();
                    this.parentNode.className = ""; //右滑收起
                }
                if (x - X > 10) { //左滑
                    event.preventDefault();
                    this.parentNode.className = "swipeleft"; //左滑展开
                    expansion = this;
                }
                swipeY = false;
            }
            // 上下滑动
            if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
                swipeX = false;
            }
        });
    }
}