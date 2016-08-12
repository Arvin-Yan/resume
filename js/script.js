var $tabList = $(".tab");
var $contentList = $(".content");
$(".nav-tabs").on("click", ".tab", function() {
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
	var index = $(this).index();
	$contentList.removeClass("active").hide();
	$contentList.eq(index).addClass("active").show();
});
