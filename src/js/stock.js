/*
 * @Author: zhangye
 * @Date:   2017-11-17 16:42:22
 * @Version:   1.0
 * @Last Modified by:   gitshilly
 * @Last Modified time: 2017-12-04 10:43:28
 */
$(document).ready(function() {
    // 移动端拖动
    var mySwiper = new Swiper('.swiper-container', {
        //添加需要的选项:
        autoplay: 5000,
        mode: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'bullets'
    });
    var display = false;
    $('.toplist-cnt-btn').click(function(event) {
    	/* Act on the event */
    	$(this).toggleClass('shadow');
    	$(this).next().toggle();
    	// display = !display;
     //    $(this).next().height(display? "4.4rem": "0px");
     //    return false;
    });
    $('.upicon').click(function(event) {
    	$(this).parent().hide();
    });

    $('.qrbtn').click(function(event) {
        /* Act on the event */
        $('.popmask').show();
    });
    $('.popcloser').click(function(event) {
        /* Act on the event */
        $('.popmask').hide();
    });
});