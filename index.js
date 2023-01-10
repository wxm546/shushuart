$(document).ready(function () {
	$(".button").click(function () {
		var buttonId = $(this).attr("id"); //modal-one
		$("#modal-container").removeAttr("class").addClass(buttonId);
		//点击添加图片
		var imgsrc = $(this).children("img").attr("src");
		imgsrc = imgsrc.replace("min50/","")
		var imgalt = $(this).children("img").attr("alt"); 
		// $(".modal").append("<h2>I'm a Modal</h2><p>Hear me roar.</p>")
		$(".modal-img").html(`<img class="gallary-img-view" src="${imgsrc}" alt="${imgalt}" style="width: auto; height: 90vh; max-width:100%;" />`)
		// $(".modal-left").attr("src",imgsrc)
		// $(".modal-right")
		$("body").addClass("modal-active");
	});

	$("#modal-container").click(function () {
		$(this).addClass("out");

		$("body").removeClass("modal-active");
		//离开时候清空modal
		// $(".modal").empty();
	});

	var pjax = new Pjax({
		elements: "a", // default is "a[href], form[action]"
		selectors: ["main"],
		cacheBust: false, //When set to true, Pjax appends a timestamp query string segment to the requested URL in order to skip the browser cache.
		scrollRestoration: false, //When set to true, Pjax will attempt to restore the scroll position when navigating backwards or forwards.
		switches: {
			main: Pjax.switches.sideBySide,
		},
		switchesOptions: {
			main: {
				//动画效果
				classNames: {
					remove: "Animated-easeOut Animate--noDelay",
					add: "Animated-easeIn",
					backward: "Animated-easeOut",
					forward: "Animated-easeOut",
				},
			},
		},
	});

	//TODO在元素ready后添加预览给每个元素 而不是等所有图片ready




});


function pjax_reload() {
	$(".button").click(function () {
		var buttonId = $(this).attr("id"); //modal-one
		$("#modal-container").removeAttr("class").addClass(buttonId);
		//点击添加图片
		var imgsrc = $(this).children("img").attr("src");
		imgsrc = imgsrc.replace("min50/","")
		var imgalt = $(this).children("img").attr("alt"); 
		// $(".modal").append("<h2>I'm a Modal</h2><p>Hear me roar.</p>")
		$(".modal").html(`<img class="gallary-img-view" src="${imgsrc}" alt="${imgalt}" />`)
		
		$("body").addClass("modal-active");
	});

	$("#modal-container").click(function () {
		$(this).addClass("out");

		$("body").removeClass("modal-active");
		//离开时候清空modal
		// $(".modal").empty();
	});
  }
  document.addEventListener("pjax:complete", function () {
	pjax_reload();
  });