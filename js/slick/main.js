$(function(){
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
