$(function () {
	'use strict';
	//检测模糊检测
	var list = ["安全座椅","婴儿推车","婴儿床","婴儿床垫","餐椅","学步车","三轮车","自行车","扭扭车滑板","车电动车"];

	$(".seek").on('input', function () {
		var js = $(".seek").val();
		if (js != '') {
			var len = list.length;
			console.log(len);
			var arr = [];
			for (var i = 0; i < len; i++) {
				if (list[i].indexOf(js) >= 0) {
					$(".mo").show();
					arr.push(list[i]);
				}

				$("body").on("click", function () {

					$(".mo").html("").hide();
				})
				$(".mo").on("click", "p", function () {
					var val = $(this).text();
					$(".seek").val(val);
					$(".mo").hide();
				})

			}

			$(".mo").html("");
			$.each(arr, function (jsonname, value) {
				$(".mo").append("<p>" + value + "</p>");
			});


		}

	})
	//幻灯片自动播放
	var i = 0;
	var len = $(".pic").length;
	var set1;
	$(".pic").eq(0).addClass("h");

	function show() {
		$(".dot").eq(i).addClass("d").siblings(".dot").removeClass("d");
		$(".pic").eq(i).addClass("h").siblings(".pic").removeClass("h");
	}
	ppt();
	show();
	$(".aright").on("click", function () {
		if (i < len - 1) {
			i++;
		} else {
			i = 0;
		}
		show();
	})
	$(".aleft").on("click", function () {

		if (i > 0) {
			i--;
		} else {
			i = len - 1;
		}
		show();
	})
	$(".ppt").on("mouseover", function () {
		clearInterval(set1);
	})
	$(".ppt").on("mouseleave", function () {
		ppt();
	})

	for (var j = 0; j < len; j++) {
		$(".scroll").append("<div class='dot'><div>");
	}
	$(".dot").eq(0).addClass("d");
	$(".dot").on("mouseover", function () {
		i = $(this).index();
		show();
	})

	function ppt() {
		set1 = setInterval(function () {
			if (i < len - 1) {
				i++;
			} else {
				i = 0;
			}
			show();
		}, 2000)

	}

	//关闭广告
	$(".mark").on("click", function () {
		$(".banner").fadeOut();
	})



	$('.box-right').click(function () {
		$(".box").stop(true).animate({
			"margin-left": "-1000px"
		}, 1000, function () {
			$(".five").eq(0).appendTo($(".box"));
			$(".box").css({
				"margin-left": "0px"
			});
		});
	})
	$('.box-left').click(function () {
		$(".box").css({
			"margin-left": "-1000px"
		});
		$(".five").eq(3).prependTo($(".box"));
		$(".box").stop(true).animate({
			"margin-left": "0px"
		}, 1000);
	})

	//红线随着动
	$(".sales").on("mouseover", function () {
		$(".striping").css({
			"transform": "translateX(" + 50 + "px)"
		}, 600)
		$(".new-bottom-two").show();
		$(".new-bottom-one").hide();
	})
	$(".promotion").on("mouseover", function () {
		$(".striping").css({
			"transform": "translateX(" + 0 + "px)"
		}, 600)
		$(".new-bottom-one").show();
		$(".new-bottom-two").hide();
	})



	//显现充值框……
	$(".fee-up").on("mouseover", function () {
		var i = $(this).index();
		$(".fee-up").children(".lable").css({
			"transform": "translateY(" + -37 + "px)"
		})
		$(".fee-up").eq(i).children(".lable").children(".word").addClass("w");
		$(".fee-up").eq(i).siblings().children(".lable").children(".word").removeClass("w");
		$(".cut").eq(i).show().siblings(".cut").hide();
		$(".top-up").css({
			"transform": "translateY(" + -185 + "px)"
		})
	})
	//话费
	$(".tab-item").eq(0).children("a").addClass("s");
	$(".tab-item").on("mouseover", function () {
		var i = $(this).index();
		$(this).children("a").addClass("s");
		$(this).siblings().children("a").removeClass("s");
		$(".content-one").eq(i).show().siblings(".content-one").hide();
	})
	$(".phone-size").on("focus", function () {
		$(this).val("");
	})
	var sj = /^1[34578]\d{9}$/; //手机号
	var yd = /^1(3[4-9]|5[012789]|8[78])\d{8}$/; //移动
	var dx = /^18[09]\d{8}$/; //电信
	var lt = /^18[09]\d{8}$/; //联通
	$(".phone-size").on("blur", function () {
		var val = $(this).val();
		if (val == "") {
			$(this).val("请输入手机号");
			$(".hint").text("");
		} else if (yd.test(val)) {
			$(".hint").text("江苏移动");
		} else if (dx.test(val)) {
			$(".hint").text("江苏电信");
		} else if (lt.test(val)) {
			$(".hint").text("江苏联通");
		}

	})
	//充值话费的面值
	$("#select-one").on("input change", function () {
		var arr = ["￥9.8-￥11.0", "￥19.6-￥21.0", "￥29.4-￥31.0", "￥49.0-￥50.0", "￥98.0-￥100.0", "￥196.0-￥200.0", "￥294.0-￥300.0", "￥490.0-￥500.0"];
		var unit = ["￥10.0", "￥20.0", "￥30.0", "￥49.95", "￥99.90", "￥199.80", "￥299.70", "￥499.50"];
		var element = ["10元", "20元", "30元", "50元", "100元", "200元", "300元", "500元"];
		for (var i = 0; i < element.length; i++) {
			if ($("#select-one").find("option:selected").text() == element[i] && yd.test($(".phone-size").val())) {
				$(".msg-price").text(unit[i]);
			} else if ($("#select-one").find("option:selected").text() == element[i]) {
				$(".msg-price").text(arr[i]);
			}
		}
	})
	//充值流量
	$("#select-three").on("input change", function () {
		var arr = ["￥7.5-￥10.0", "￥9.95-￥20.0", "￥19.9-￥20.5", "￥29.0-￥29.9", "￥49.0-￥50.0"];
		var element = ["50M", "100M", "200M", "300M", "500M"];
		for (var i = 0; i < element.length; i++) {
			if ($("#select-three").find("option:selected").text() == element[i]) {
				$(".msg-price-two").text(arr[i]);
			}
		}
	})
	//充值月费
	$("#select-four").on("input change", function () {
		var arr = ["50分钟300M流量", "50分钟500M流量", "100分钟500M流量", "220分钟700M流量", "500分钟1G流量", "500分钟2G流量", "1000分钟1G流量", "1000分钟3G流量", "2000分钟1G流量", "4000分钟6G流量", ];
		var element = ["38元", "48元", "58元", "88元", "138元", "158元", "238元", "268元", "338元", "588元"];
		for (var i = 0; i < element.length; i++) {
			if ($("#select-four").find("option:selected").text() == element[i]) {
				$(".msg-price-three").text(arr[i]);
			}
		}
	})
	//机票
	$(".selected").eq(0).children("a").addClass("s");
	$(".selected").on("mouseover", function () {
		var i = $(this).index();
		$(this).children("a").addClass("s");
		$(this).siblings().children("a").removeClass("s");
		$(".content-two").stop(true).animate({
			"marginLeft": -i * 190 + "px"
		})
	})
	$(".support .tags").eq(0).addClass("ta")
	$(".support-two .tags").eq(0).addClass("ta")
	$(".support .gnhot").eq(0).addClass("gn")
	$(".support-two .gnhot").eq(0).addClass("gn")
	$(".tags").on("click", function () {
		var i = $(this).index();
		$(".tags").eq(i).addClass("ta").siblings(".tags").removeClass("ta");
		$(".gnhot").eq(i).addClass("gn").siblings(".gnhot").removeClass("gn");

	})
	$(".support .gnhot a").on("click", function () {
		var i = $(this).text();
		$(".start-city-one").val(i);
		$(".support").hide();
		$(".support-two").show();
	})
	$(".support-two .gnhot a").on("click", function () {
		var i = $(this).text();
		$(".start-city-two").val(i);
		$(".support-two").hide();
	})
	$(".support").on("mouseleave", function () {
		$(".support").hide();
	})
	$(".start-city-one").on("click", function () {
		$(".support").show();
	})
	$(".start-city-two").on("click", function () {
		$(".support-two").show();
	})
	$(".change-city").on("click", function () {
		var emo = $(".start-city-one").val();
		var emt = $(".start-city-two").val();
        $(".start-city-one").val(emt);
		$(".start-city-two").val(emo);
	})
	//酒店
	$(".hotel").eq(0).children("a").addClass("s");
	$(".hotel").on("mouseover", function () {
		var i = $(this).index();
		$(this).children("a").addClass("s");
		$(this).siblings().children("a").removeClass("s");
		$(".content-three").stop(true).animate({
			"marginLeft": -i * 190 + "px"
		})
	})
	//qq
	$(".qq").eq(0).children("a").addClass("s");
	$(".qq").on("mouseover", function () {
		var i = $(this).index();
		$(this).children("a").addClass("s");
		$(this).siblings().children("a").removeClass("s");
		$(".content-four").stop(true).animate({
			"marginLeft": -i * 190 + "px"
		})
	})
	//关闭充值框……
	$(".x").on("click", function () {

		$(".fee-up").children(".lable").children(".word").removeClass("w");

		$(".fee-up").children(".lable").css({
			"transform": "translateY(" + 0 + "px)"
		})
		$(".top-up").css({
			"transform": "translateY(" + 0 + "px)"
		})
	})
	//导航搜索的下拉
	$(window).on("scroll", function () {
		var w_h = $(window).height();
		var s_h = $(window).scrollTop();
		if (s_h >= w_h) {
			$(".content-nav-case").addClass("c");
//			$(".strip").stop(true).animate({
//				"top": 0
//			});
		} else {
			$(".content-nav-case").removeClass("c");
//			$(".strip").stop(true).animate({
//				"top": -50
//			});
		}
	})

	//左导航搜索的显现和隐藏
	$(".family").on("mouseover", function () {
		var i = $(this).index();
		$(".elect").eq(i).show().siblings(".elect").hide();
	})
	$(".content").on("mouseleave", function () {
		$(".elect").hide();
	})


	//城市子选项的显现和隐藏
	$(".jiangsu").on("mouseover", function () {
		$(".city").show();
	})

	$(".location").on("mouseleave", function () {
		$(this).children(".city").hide();
	})
	//选择城市
	$(".city span").eq(11).addClass("r")
	$(".city span").on("click", function () {
		var i = $(this).index();
		var j = $(".city span").eq(i).text();
		$(".room").text(j);
		$(".city span").eq(i).addClass("r").siblings().removeClass("r");
	})

	//导航子选项的显现和隐藏
	$(".hello").on("mouseover", function () {
		$(this).children(".my-column").show();
	})
	$(".hello").on("mouseleave", function () {
		$(this).children(".my-column").hide();
	})
	//购物车的显现和隐藏
	$(".shop").on("mouseover", function () {
		$(".shop-down").show();
	})
	$(".shopping").on("mouseleave", function () {
		$(".shop-down").hide();
	})
	//左侧边栏的动画
	function addt(a) {
		$(".trait").eq(a).addClass("t").siblings(".trait").removeClass("t");
	}
	$(window).on("scroll", function () {
		var s_t = $(window).scrollTop();
		if (s_t >= 1000) {
			$(".left-sidebar").fadeIn();
		} else {
			$(".left-sidebar").fadeOut();
		}
		if (s_t >= 1000 && s_t <= 1200) {
			addt(0);
		} else if (s_t >= 1200 && s_t < 1400) {
			addt(1);

		} else if (s_t >= 1400 && s_t < 1600) {
			addt(2);
		} else if (s_t >= 1600 && s_t < 1800) {
			addt(3);
		} else if (s_t >= 1800 && s_t < 2000) {
			addt(4);
		} else if (s_t >= 2000 && s_t < 2200) {
			addt(5);
		} else if (s_t >= 2200 && s_t < 2400) {
			addt(6);
		} else if (s_t >= 2400 && s_t < 2600) {
			addt(7);
		} else if (s_t >= 2600 && s_t < 2800) {
			addt(8);
		} else if (s_t >= 2800 && s_t < 3000) {
			addt(9);
		}
	})
	$(".trait-last").on("click", function () {
		$("body").stop(true).animate({
			"scrollTop": 0
		}, 1000)
	})
	//遮罩
	var statusq=0;
	var seti;
	seti=setTimeout(function(){
		$(".qrcode-img").stop(true).animate({
			"left": "64px"
		})
		statusq=1;
		$(".qrcode-help").hide();
	},2000)
	$(".tab-tip").on("click", function () {
		$(".cover").fadeIn();
		if(seti==0){
			
		seti;
		}
	})
	$(".false").on("click", function () {
		$(".cover").fadeOut();
		statusq=0;
	})
	$(".qrcode-img").on("mouseover",function(){
		$(".qrcode-img").stop(true).animate({
			"left": "0px"
		})
		
			$(".qrcode-help").fadeIn(1000);
		
	})
	$(".qrcode-img").on("mouseleave",function(){
		$(".qrcode-img").stop(true).animate({
			"left": "64px"
		})
		$(".qrcode-help").hide();
	})
	//右侧边栏的动画
	$(".twig-member").on("mouseover", function () {
		var i = $(this).index();
		$(".twig-member").eq(i).children(".tab-ico,.tab-text").css({
			"background-color": " #c81623 "
		})
		$(".twig-member").eq(i).children(".tab-text").stop(true).animate({
			"left": -60
		});

	})


	$(".twig-member").on("mouseleave", function () {
		var i = $(this).index();
		$(".twig-member").eq(i).children(".tab-text").stop(true).animate({
			"left": 0
		});
		$(".twig-member").eq(i).children(".tab-ico,.tab-text").css({
			"background-color": " #7a6e6e "
		})
	})
	$(".tickling").on("mouseover", function () {
		var i = $(this).index();
		$(".tickling").eq(i).children("a").children(".tab-ico,.tab-text").css({
			"background-color": " #c81623 "
		})
		$(".tickling").eq(i).children("a").children(".tab-text").stop(true).animate({
			"left": -60
		});

	})


	$(".tickling").on("mouseleave", function () {
		var i = $(this).index();
		$(".tickling").eq(i).children("a").children(".tab-text").stop(true).animate({
			"left": 0
		});
		$(".tickling").eq(i).children("a").children(".tab-ico,.tab-text").css({
			"background-color": " #7a6e6e "
		})
	})
	//倒计时
	var s = parseInt($(".second").text());
	var m = parseInt($(".minute").text());
	var h = parseInt($(".hour").text());
	var set;
	set = setInterval(function () {
		if (s > 0) {
			s--;
			$(".second").text(s);
		} else if (s == 0 && m > 0) {
			m -= 1;
			$(".minute").text(m);
			s = 59;
			$(".second").text(s);
		} else if (m == 0 && s == 0) {
			h -= 1;
			$(".hour").text(h);
			m = 59;
			$(".minute").text(m);
			s = 59;
			$(".second").text(s);
		} else if (s == 0 && m == 0 && h == 0) {
			clearInterval(set);
		}
	}, 1000)
})
