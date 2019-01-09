/*
* @Author: zhangye
* @Date:   2017-11-03 13:30:48
* @Version:   1.0
* @Last Modified by:   zhangye
* @Last Modified time: 2017-11-03 13:47:10
*/
'use strick';
$(document).ready(function() {
	$('.focusus').click(function(event) {
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