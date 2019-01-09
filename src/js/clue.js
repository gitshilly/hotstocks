/*
* @Author: zhangye
* @Date:   2017-11-22 16:12:07
* @Version:   1.0
* @Last Modified by:   zhangye
* @Last Modified time: 2017-11-30 14:06:15
*/
$(document).ready(function() {
    // 移动端拖动
    var mySwiper = new Swiper('.swiper-container', {
        //添加需要的选项:
        autoplay: 5000,
        mode: 'horizontal',
        initialSlide:1,
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'bullets'
    });
    var display = false;
    $('.searchclue').click(function(event) {
    	/* Act on the event */
    	$(this).toggleClass('shadow');
    	$(this).next().toggle();
    });
	$('.toplist-cnt-figure .clue-i-tit').click(function(event) {
		/* Act on the event */
		$(this).parent().toggleClass('toggle');
	});
});