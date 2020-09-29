
/*  
	count 	 每页显示数量
	selector 要分页的一组数据(DOM)
	pageId   分页按钮父元素id
*/
const page = (count, selector, pageId) => {
		let num = count >= 2 ? count : 3; // 每页显示数量
		let selectorLength = $(selector).length; // 数据总长度
		let pageLength = Math.ceil(selectorLength / num);   // 总页数
		// 分页按钮个数
		let pageStr = `<a class="prev" href="##"><</a>`;
		for (let i = 1; i <= pageLength; i++) {
			pageStr += `<a href="##">${i}</a>`;
		}
		pageStr += `<a class="next" href="##">></a>`;
		$(pageId).html(pageStr);
		$(pageId + " a").eq(1).addClass("active"); // 初始化当前点击页
		
		// 分页按钮点击后显示对应页元素
		const showItem = num => {
			$(selector).each((i, _) => {
				$(_).hide();
			});
			for (let i = 0; i < num; i++) {
				$(selector).eq(($(pageId + " a.active").html() - 1) * num + i).show();
			}
		}
		
		/*
			分页按钮添加点击事件
		*/
	 showItem(num);
		$(pageId).on("click", "a", function() {
			let index = $("a.active").index(); // 当前有active类名的下标
			let strNum = $(this).html();			 // 当前点击元素的html内容
			if (strNum === "&lt;") {
				index--;
				if (index === 0) index = 1;
				$(pageId + " a").removeClass("active").eq(index).addClass("active")
				// console.log($(".page a.active").html()); // 渲染第几页  
				showItem(num);
			} else if (strNum === "&gt;") {
				index++;
				if (index >= $(pageId + " a").length - 2) index = $(pageId + " a").length - 2;
				$(pageId + " a").removeClass("active").eq(index).addClass("active")
				// console.log($(".page a.active").html()); // 渲染第几页
				showItem(num);
			} else {
				$(this).addClass("active").siblings().removeClass("active");
				// console.log($(".page a.active").html()); // 渲染第几页     假如 (3 -1) * num 
				showItem(num);
			}
		})
}
// page(3, ".company_news ul li", ".page");

