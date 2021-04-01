$(document).ready(function () {

	// ===================ОПРЕДЕЛЯЕМ IE======================
	var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

	function isIE() {
		let ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie;
	}

	if (isIE()) {
		$('body').addClass('ie');
	}
	// ===================ОПРЕДЕЛЯЕМ IE======================



	// ==============ПРОВЕРЯЕМ ПОДДЕРЖКУ WEBP================
	function WebPFunction(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	WebPFunction(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
	// ==============ПРОВЕРЯЕМ ПОДДЕРЖКУ WEBP================



	// ========================IBG===========================
	// function ibg(){

	// 	WebPFunction(function (support) {

	// 		if (support == true) {

	// 			$.each($('.ibg'), function(index, val) {
	// 				if($(this).find('source').length>0){
	// 					$(this).css('background-image','url("'+$(this).find('source').attr('srcset')+'")');
	// 				}
	// 			});

	// 		} else {

	// 			$.each($('.ibg'), function(index, val) {
	// 				if($(this).find('img').length>0){
	// 					$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	// 				}
	// 			});

	// 		}
	// 	});
	// }

	// ibg()
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}

	ibg();
	// ========================IBG===========================



	// =======================БУРГЕР=========================
	$('._burger').click(function () {
		$('._burger, ._menu').toggleClass('active');
		lock('add');
		let logo = $('._logo');
		let menu = $('._menu');
		let delay = 300;

		if ($(this).hasClass('active')) {
			setTimeout(function () {
				logo.addClass('active');
				logo.before('<div class="_logoTmp">');
				logo.detach();
				menu.prepend(logo);
			}, delay / 2);
		} else {
			setTimeout(function () {
				lock('remove');
				logo.removeClass('active');
				$('._logo').detach();
				$('._logoTmp').before(logo);
				$('._logoTmp').detach();
			}, delay / 2);
		}
	});

	$(window).resize(function () {

		let width = $(window).width();
		let logo = $('._logo');

		if (width > 767.98) {
			if (logo.hasClass('active')) {
				$('._burger, ._menu, ._logo').removeClass('active');
				$('._logo').detach();
				$('._logoTmp').before(logo);
				$('._logoTmp').detach();
				lock('remove');
			}
		}
	});


	// $(document).mouseup(function (e) {
	// 	var div = $('.headertop__menu__body');
	// 	if (!div.is(e.target) && div.has(e.target).length === 0) {
	// 		if ($('.headertop__menu').hasClass('active')) {
	// 			let logo = $('.headertop__logo');
	// 			let burger = $('.headertop__burger');
	// 			logo.insertAfter('.headertop__burger_wrap');
	// 			$('.headertop__burger').detach();
	// 			$('.headertop__burger_wrap').prepend(burger);
	// 			lock('remove');
	// 			$('.headertop__menu, .headertop__burger').removeClass('active');
	// 		}
	// 	}
	// });
	// =======================БУРГЕР=========================


	// ===================SCROLL UP/DOWN=====================

	function detectScroll(minScroll) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > minScroll) {
				$(window).bind('mousewheel', function (event) {
					if (event.originalEvent.wheelDelta >= 0) {
						$('body').addClass('scroll_up');
						$('body').removeClass('scroll_down');
					}
					else {
						$('body').addClass('scroll_down');
						$('body').removeClass('scroll_up');
					}
				});
				$('body').removeClass('scroll_start');
			} else {
				$('body').removeClass('scroll_down');
				$('body').removeClass('scroll_up');
				$('body').addClass('scroll_start');
			}
		});
		$(document).ready(function () {
			if ($(this).scrollTop() > minScroll) {
				$('body').removeClass('scroll_start');
			} else {
				$('body').removeClass('scroll_down');
				$('body').removeClass('scroll_up');
				$('body').addClass('scroll_start');
			}
		});
	}

	detectScroll(100);
	// ===================SCROLL UP/DOWN=====================


	// ===================LAZYLOAD=====================
	function lazyLoad() {
		[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
			let dataSRC = $(img).attr('data-src');
			let imgTMP = new Image();
			imgTMP.setAttribute('src', img.getAttribute('data-src'));
			imgTMP.onload = function () {
				img.setAttribute('src', dataSRC);
				img.removeAttribute('data-src');
				ibg();
			};
		});
	}
	lazyLoad();

	// ===================LAZYLOAD=====================

	// ===================BODYLOCK=====================
	function lock(event) {
		if (event == 'add') { $('body').addClass('lock'); }
		if (event == 'remove') { $('body').removeClass('lock'); }
	}
	// ===================BODYLOCK=====================


	// ===================РЕЗИНОВЫЙ КВАРДРАТ=====================
	// function square() {
	// 	$.each($('._square'), function (index, val) {
	// 		$(this).height($(this).width());
	// 	});
	// }

	// square();

	// $(window).resize(function () {
	// 	square();
	// });
	// ===================РЕЗИНОВЫЙ КВАРДРАТ=====================


	// ===================ГАЛЕРЕЯ=====================
	//ZOOM
	if ($('.gallery').length > 0) {
		baguetteBox.run('.gallery', {
			// Custom options
		});
	}
	// ===================ГАЛЕРЕЯ=====================

	// ===================СКЛОНЕНИЕ СЛОВ ДЛЯ ЧИСЕЛ=====================
	function num2str(n, text_forms) {
		n = Math.abs(n) % 100; var n1 = n % 10;
		if (n > 10 && n < 20) { return text_forms[2]; }
		if (n1 > 1 && n1 < 5) { return text_forms[1]; }
		if (n1 == 1) { return text_forms[0]; }
		return text_forms[2];
	}
	//num2str(5, ['1 товар', '2 товара', '5 товаров']))
	// ===================СКЛОНЕНИЕ СЛОВ ДЛЯ ЧИСЕЛ=====================

