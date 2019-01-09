/*
 * @Author: gitshilly
 * @Date:   2017-12-06 15:37:56
 * @Version:   1.0
 * @Last Modified by:   gitshilly
 * @Last Modified time: 2017-12-07 08:48:14
 */
$(function() {
    var $obj = $("#contactPop");
    var objW = $obj.width();
    var objH = $obj.height();
    var startX, startY, sX, sY, moveX, moveY;
    var winW = $(window).width();
    var winH = $(window).outerHeight();

    $obj.on({ //绑定事件
        touchstart: function(e) {
            startX = e.originalEvent.targetTouches[0].pageX; //获取点击点的X坐标    
            startY = e.originalEvent.targetTouches[0].pageY; //获取点击点的Y坐标
            sX = $(this).offset().left; //相对于当前窗口X轴的偏移量
            sY = $(this).offset().top; //相对于当前窗口Y轴的偏移量
            leftX = startX - sX; //鼠标所能移动的最左端是当前鼠标距div左边距的位置
            rightX = winW - objW + leftX; //鼠标所能移动的最右端是当前窗口距离减去鼠标距div最右端位置
            topY = startY - sY; //鼠标所能移动最上端是当前鼠标距div上边距的位置
            bottomY = winH - objH + topY; //鼠标所能移动最下端是当前窗口距离减去鼠标距div最下端位置                
        },
        touchmove: function(e) {
            e.preventDefault();
            moveX = e.originalEvent.targetTouches[0].pageX; //移动过程中X轴的坐标
            moveY = e.originalEvent.targetTouches[0].pageY; //移动过程中Y轴的坐标
            if (moveX < leftX) { moveX = leftX; }
            if (moveX > rightX) { moveX = rightX; }
            if (moveY < topY) { moveY = topY; }
            if (moveY > bottomY) { moveY = bottomY; }
            $(this).css({
                //"left": moveX + sX - startX,
                "top": moveY + sY - startY
            })
        },

    })

})