/*
 * @Author: gitshilly
 * @Date:   2017-11-06 14:47:15
 * @Version:   1.0
 * @Last Modified by:   gitshilly
 * @Last Modified time: 2017-11-06 14:57:05
 */
$(document).ready(function() {
	// swipe left delect
    SwipeLeft(document.querySelectorAll('.records-list>li .records-item'));

    $('.records-list').on('click', '.del', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	//
    	
    	//直接删除,不提示
    	$(this).parent().remove();
    });
});