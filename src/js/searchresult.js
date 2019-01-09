/*
* @Author: gitshilly
* @Date:   2017-10-30 15:06:02
* @Version:   1.0
* @Last Modified by:   zhangye
* @Last Modified time: 2017-11-13 10:07:12
*/
$(document).ready(function() {
	// autocomplete
    $('#txtSearch').autocomplete(EALists, {
		// width: 267,
		delay: 200,
		max:5,
		scrollHeight: 250,
		matchContains:true,
		formatItem: function(row) {
			return row._C + " " + row._N + " " + row._T;
		},
		formatMatch: function(row, i, max) {
			return row._C + " " + row._S + " " + row._N;
		},
		formatResult: function(row) {
			return row._C + " " + row._N ;
		}
	}).result(function(event, item) {
		//load 对应事件
		
	});

	$(document).on('click', '.historypop li', function(event) {
		event.preventDefault();
		/* Act on the event */
		//对应事件
		var strCode = $(this).data('code');
	});

	// focus
	$('#txtSearch').focus(function(event) {
		/* Act on the event */
		if($(this).val()==""){
			$('.historypop').show();
		}else{
			$('.historypop').hide();
		}
	});
	$('#txtSearch').keyup(function(event) {
		/* Act on the event */
		if($(this).val()==""){
			$('.historypop').show();
		}else{
			$('.historypop').hide();
		}
	});
});
