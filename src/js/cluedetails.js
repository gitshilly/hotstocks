/*
* @Author: gitshilly
* @Date:   2017-11-20 14:46:08
* @Version:   1.0
* @Last Modified by:   zhangye
* @Last Modified time: 2017-11-23 10:51:20
*/
$(document).ready(function() {
	$('.clue-i-tit').click(function(event) {
		/* Act on the event */
		$(this).parent().toggleClass('toggle');
	});
});