$(function () {
	// 头部
	$.component("header");
	// submenu
	$.component("submenu");
	// 分页
	$.component("page");
	// 尾部
	$.component("footer");
	
})



//  自定义滚动条参数
let base_scroll = {
  "cursorcolor": "#2983c5",
  "cursorwidth": "8px",
  "cursorborder": "0px solid #000",
  "cursorborderradius": "6px",
  "scrollspeed": 40,
  "horizrailenabled":false
};
// 页面滚动条
$("html").niceScroll(base_scroll).resize();
