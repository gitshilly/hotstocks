/*
 * @Author: gitshilly
 * @Date:   2017-10-18 17:16:52
 * @Version:   1.0
 * @Last Modified by:   zhangye
 * @Last Modified time: 2017-11-13 11:17:31
 */
'user strict';
$(document).ready(function() {
	// 移动端拖动
    var mySwiper = new Swiper('.swiper-container', {
        //添加需要的选项:
        autoplay: 5000,
        mode: 'horizontal',
        loop: true,
        pagination : '.swiper-pagination',
		paginationType : 'bullets'
    });

    // 历史记录搜索
	$(document).on('click', '.historypop li', function(event) {
		event.preventDefault();
		/* Act on the event */
		var strCode = $(this).data('code');
		$('#txtSearch').val($(this).html());
		window.location = "searchresult.html?code="+strCode;
	});
    
    // autocomplete
    $('#txtSearch').autocomplete(EALists, {
		// width: 267,
		delay: 200,
		max: 5,
		scrollHeight: 250,
		matchContains: true,
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
		window.location = "searchresult.html?code="+item._C;
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
	document.getElementById('txtSearch').addEventListener('input',function(e){
      var value = e.target.value;
      if(value==""){
			$('.historypop').show();
		}else{
			$('.historypop').hide();
		}
    });
	// $('#txtSearch').input(function(event) {
	// 	/* Act on the event */
	// 	if($(this).val()==""){
	// 		$('.historypop').show();
	// 	}else{
	// 		$('.historypop').hide();
	// 	}
	// });

});