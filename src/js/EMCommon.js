/*
* @Author: gitshilly
* @Date:   2017-10-18 17:16:40
* @Version:   1.0
* @Last Modified by:   gitshilly
* @Last Modified time: 2017-12-07 14:45:00
*/
;(function(){
    // banner 图切换
	var maintimer = null;
    var focusItem = $(".focus>.focus-cnt>.focus-cnt-item");
    var btnItem = $(".focus-tag ul li");

    btnItem.mouseover(function (evt) {
        focusItem.eq(0).animate({ "margin-left": "-100%" }, "slow", "linear",function(){
            $(this).css({ "marginLeft": "0" });
            $(".focus .focus-tag").find('.'+$(this).attr('id')).eq(0).addClass("current").siblings().removeClass("current");
            $(this).appendTo($(this).parent());
        });
    });
    
    //自动翻
    function goloop() {
        maintimer = setInterval(function () {
            focusItem.eq(0).animate({ "margin-left": "-100%" }, "slow", "linear",function(){
                $(this).css({ "marginLeft": "0" });
                $(".focus .focus-tag").find('.'+$(this).attr('id')).eq(0).addClass("current").siblings().removeClass("current");
                $(this).appendTo($(this).parent());
            });
        }, 3000);
    }

    goloop();

})();
