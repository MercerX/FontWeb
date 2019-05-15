$(function(){
	
	//大图切换
	$('.focus').sudyfocus({
			json: focusData, // 文章的json数据
			zWidth: 1920, // 设置展示窗口宽度
			zHeight: 700,    // 设置展示窗口高度
			response: true,    // 是否自适应缩放，默认为false，当前为true
			navigation: true, // 是否显示按钮，上一张、下一张
			start: 1, // 设置从第几个开始播放，当前设置从第2张开始
			isNavHover: true, // 导航按钮是否默认隐藏，鼠标经过时再显示
			thumbnail: false,// 是否显示缩略图
			pagination: true, // 是否显示按钮，1、2、3、4...	
			effect: 'fade', // slide(滑动),fade(淡入),show(即显)
			speed: 400, // 切换速度
			crossfade: true, // 是否交叉淡入淡出
			autoPlay: true, // 是否自动播放
			interval: 5000, // 自动播放时间间隔
			href: true, // 图片是否加链接
			title: {
					active: true, // 是否显示文章标题
					isAutoWidth: false, // 标题背景自动宽度
					href: true  // 标题是否加文章链接
					},
			text: {
					active: true, // 是否显示文章简介
					isAutoHeight: false, // 简介背景自动高度
					href: true // 简介是否加文章链接
					},
			mask: {
					color: "#000", // 遮罩色
					opacity: 0.5 // 遮罩透明度
					}
	});
		
		
	//选项卡
	$('.mod_left .sudy-tab').sudyTab({
			handle: ".tab-menu li",		// 控制器元素，默认为.tab-menu li
			content: ".tab-list > li",		// 内容体，可以有多个并以英文逗号隔开，如.tab-list li,.tab-more li,默认值为".tab-list li,.tab-more li"
			trigger: "mouseenter",		// 触发事件，默认为"mouseenter"鼠标经过
			start: 1,					// 开始项，默认为第一个
			autoPlay: {
				active: false,			// 是否激活自动切换
				interval: 5000,		// 自动切换时间间隔
				pauseHover: true		// 是否鼠标放上面时停止自动
			}
	});
	
	
	//superslide无缝滚动
	jQuery('.post-12').slide({
			mainCell: ".news_list",    //切换元素的包裹层对象
			autoPlay: true,     //是否自动运行
			effect: "leftMarquee",  //动画效果 支持fade, top, left, topLoop, leftLoop, topMarquee, leftMarquee, fold, slideDown等效果
			opp: false,  //使动画效果相反
			vis: 3,  //mainCell的可视范围个数，当实际内容个数少于可视个数的时候，不执行SuperSlide效果。
			interTime: 50,  //自动运行间隔
			mouseOverStop: true,  //鼠标触摸暂停滚动
			easing: 'swing'  //缓动效果，需引用jquery.easing.min.js
	});
		 
		 
	//bxslider上下轮播
    $('.post-13 .news_list').bxSlider({
			mode: 'vertical', //默认的是水平  'horizontal', 'vertical', 'fade' 定义slider滚动的方向，有三个值可供选择 
            minSlides: 5,  //默认显示的条数 
        	auto: true,    //自动播放
			autoDirection: 'next', //自动滚动的顺序
			pause: 5000,   //过渡时间
			speed: 500,   //滚动速度 
			autoHover: true,   //鼠标触摸滚动暂停
			controls: false,    //是否显示左右按钮
			nextText: 'next',  //设置下一页文字
			prevText: 'prev',  //设置上一页文字
			easing: 'swing'  //缓动效果，需引用jquery.easing.min.js
    });
	
	
	//slick左右轮播
	$('.post-14 .news_list').slick({
			dots: false,  //指示点
			infinite: true,  //循环播放
			autoplay: true,  //自动播放
			autoplaySpeed: 5000, //自动播放间隔
			arrows: true,  //左右箭头
			useCSS: true,  //使用 CSS3 过度
			speed: 600,  //滑动时间
			slide: 'li',  //滑动元素查询
			slidesToShow: 8,  //幻灯片每屏显示个数
			slidesToScroll: 1,  //幻灯片每次滑动个数
			responsive: [   //断点触发设置
				{
				breakpoint: 1200,   //分辨率之下(不包含设置分辨率本身)
					settings: {			//参数设置
						slide: 'li',    //滑动元素查询
						slidesToShow: 6,  //幻灯片每屏显示个数
						slidesToScroll: 1, //幻灯片每次滑动个数
						infinite: true  //循环播放
					}
				},
				{
				breakpoint: 960,
					settings: {
						slide: 'li',
						slidesToShow: 5,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
				breakpoint: 768,
					settings: {
						slide: 'li',
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
				breakpoint: 480,
					settings: {
						slide: 'li',
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
				breakpoint: 320,
					settings: {
						slide: 'li',
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
				}
			]
	});
		
});