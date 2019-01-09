/*
* @Author: zhangye
* @Date:   2017-11-03 15:12:08
* @Version:   1.0
* @Last Modified by:   zhangye
* @Last Modified time: 2017-11-03 15:12:45
*/
'use strict';
$(document).ready(function() {
	$('.bindtel').click(function(event) {
		/* Act on the event */
		$('.popmask').show();
		$('.popwin').show();
	});
	$('.btnCancel').click(function(event) {
		/* Act on the event */
		$('.popmask').hide();
		$('.popwin').hide();
	});
	$('.btnOK').click(function(event) {
		/* Act on the event */
		$('.popmask').hide();
		$('.popwin').hide();
	});
});