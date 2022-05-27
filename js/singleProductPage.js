$(document).ready(function () {
    $('.single_product_iar_home_slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      touchMove: true,
      arrows: false
        // You can unslick at a given breakpoint now by adding:
        // instead of a settings object
    });
	//overflow hidden from body element
	function hidden() {
		$('body').css('overflow', 'hidden');
	}
	//overflow visible from body element
	function visible() {
		$('body').css('overflow', 'visible');
	}
	//slider modal
	let sliderBtns = [
		".single_product_iar_slider_item1",
		".single_product_iar_slider_item2",
		".single_product_iar_slider_item3",
		".single_product_iar_slider_item4",
		".single_product_iar_slider_item5",
		".single_product_iar_slider_item6",
		".single_product_iar_slider_item7"
	];
	let modalImages = [
		"img/modal_slider1.jpg",
		"img/modal_slider2.jpg",
		"img/modal_slider3.jpg",
		"img/modal_slider4.jpg",
		"img/modal_slider5.jpg",
		"img/modal_slider6.jpg",
		"img/modal_slider7.jpg"
	];
	//loop through slider modalImages
	for (let i = 0; i < sliderBtns.length && modalImages.length; i++) {
		$(sliderBtns[i]).click(function() {
			$('.modal_imgbx img').attr('src', modalImages[i]);
			hidden();
		});
	} 
	// close modal popup
	$('.btn-close').click(function() {
		$('.modal_imgbx img').attr('src', '');
		visible();
	});
	function modalController(a) {
		$(a).click(function() {
			let v = $(this).attr('src');
			$('.modal_imgbx img').attr('src', v);
			hidden();
		})
	}
	//product review modal
	modalController('.single_product_iar_product_image img');
	// product shipping modal
	modalController('.ship_form_plug_type_modal_img_btn img');
	//client product img modal
	modalController('.client_product_img_btn img');
	//review right modal 
	$('.review_right_modal_btn').click(function() {
		$('.single_product_iar_review_qa_right_modal').css('right','0%')
		hidden();
	})
	$('#icon-icBack').click(function() {
		$('.single_product_iar_review_qa_right_modal').css('right','-100%')
		visible();
	})
	//Q and A right modal 
	$('#Q_A_right_modal').click(function() {
		$('.q_and_a_right_modal').css('right','0%')
		hidden();
	})
	$('#icBack').click(function() {
		$('.q_and_a_right_modal').css('right','-100%')
		visible();
	})
	//expand iframe 
	$('.single_product_iar_item_description .btn_viewAll').click(function() {
	   $('iframe').css('height', '1706.3rem');
	   $(this).hide();
	   $('.single_product_iar_item_description_overlay').hide();
	});
	//wishlist popup
	 let fillHeart = "M895.936 360.704L896 359.893333a209.28 209.28 0 0 0-61.632-148.906666A209.322667 209.322667 0 0 0 685.461333 149.333333a209.237333 209.237333 0 0 0-148.885333 61.632c-9.109333 9.088-17.322667 18.986667-24.576 29.525334a211.093333 211.093333 0 0 0-24.576-29.525334A209.28 209.28 0 0 0 338.517333 149.333333 209.237333 209.237333 0 0 0 189.653333 210.965333 209.237333 209.237333 0 0 0 128 359.872l0.042667 0.853333-0.042667 1.024c0 24.853333 4.693333 53.930667 13.994667 81.706667 3.114667 9.386667 6.656 18.517333 10.666666 27.178667 1.216 2.773333 2.901333 5.866667 4.352 8.810666l0.661334 1.365334c34.730667 69.333333 132.138667 177.6 232.213333 278.634666 58.922667 60.010667 108.8 107.456 122.112 120.256a7.061333 7.061333 0 0 1 0.384-0.362666l0.384 0.362666 9.408-9.770666a5012.949333 5012.949333 0 0 0 156.266667-156.352l0.298666 0.277333 19.733334-20.992c87.978667-93.397333 144.085333-164.544 167.68-211.818667 0.341333-0.618667 0.597333-1.216 0.938666-1.834666 1.258667-2.624 2.858667-5.461333 3.925334-7.936 4.053333-8.768 7.68-18.005333 10.816-27.456 9.386667-27.882667 14.165333-57.088 14.165333-82.069334 0-0.362667-0.064-0.704-0.064-1.045333"; 
	 let strokeHeart = "M512 237.824a215.04 215.04 0 0 0-21.76-25.749333A210.453333 210.453333 0 0 0 340.074667 149.333333a210.432 210.432 0 0 0-150.101334 62.72A213.973333 213.973333 0 0 0 128 363.221333c0 33.493333 7.637333 71.402667 21.461333 104.533334l3.584 8.192c17.792 41.493333 61.781333 100.202667 126.72 173.376 13.184 14.869333 27.136 30.208 41.770667 45.930666a4021.824 4021.824 0 0 0 106.581333 109.994667l29.589334 29.226667 54.912 53.44 44.629333-45.866667-45.226667-43.968-28.842666-28.330667-9.898667-9.834666a3959.338667 3959.338667 0 0 1-104.874667-108.224l-20.928-22.762667c-6.805333-7.466667-13.44-14.848-19.84-22.08l-12.672-14.4-12.053333-13.973333c-46.933333-55.04-78.933333-99.456-91.392-128.533334C198.976 422.677333 192 390.357333 192 363.221333c0-39.68 15.210667-77.589333 43.456-106.133333A146.432 146.432 0 0 1 340.096 213.333333c39.082667 0 76.437333 15.274667 104.64 43.754667a149.312 149.312 0 0 1 36.693333 61.141333c9.258667 30.122667 51.882667 30.122667 61.162667 0a149.333333 149.333333 0 0 1 36.693333-61.141333A146.432 146.432 0 0 1 683.882667 213.333333c39.082667 0 76.437333 15.296 104.64 43.754667A150.016 150.016 0 0 1 832 363.221333c0 27.136-6.976 59.456-19.2 85.973334-18.432 42.944-76.373333 115.776-160.170667 205.674666l-21.824 23.402667 46.805334 43.648 21.824-23.402667c86.4-92.672 146.048-167.189333 169.749333-218.56l2.112-4.757333C887.04 440.96 896 399.530667 896 363.2a213.973333 213.973333 0 0 0-61.994667-151.146667A210.432 210.432 0 0 0 683.904 149.333333a210.432 210.432 0 0 0-150.122667 62.72c-5.973333 6.058667-11.562667 12.416-16.746666 19.050667l-5.034667 6.72z"; 
	 let textVal = 593;
	$('#icon-icWishList').click(function() {
		$(this).toggleClass('fill');
		if($('#icon-icWishList path').attr('d') == fillHeart){
			$('#wishlist_value').text('591');
			$('#icon-icWishList path').attr('d', strokeHeart)
			$('.single_product_iar_wishlist_popup span').text('Remove to wishlist');
		}else{
			$('#wishlist_value').text(textVal);
			$('#icon-icWishList path').attr('d', fillHeart)
			$('.single_product_iar_wishlist_popup span').text('Added to wishlist');
		}
		$('.single_product_iar_wishlist_popup').fadeIn();
		setTimeout(function() {
		  $('.single_product_iar_wishlist_popup').fadeOut();
		}, 2700)
	});
	//discount and coupon product popup
	$('.discount_coupon_popup_btn').click(function() {
		if($(this).text() == 'Added') {
		   $('.single_product_iar_coupon_popup').text('Sorry, this coupon is no longer available');
		} else {
			$(this).text('Added');
			$('.single_product_iar_coupon_popup').text('A coupon has been added to your account');
		}
		$('.single_product_iar_coupon_popup').fadeIn();
	})
	setInterval(function() {
	  $('.single_product_iar_coupon_popup').fadeOut();
	},3000)
	//buyer protect modal
	$('#bottom_modal_drawer_btn').click(function() {
       $('#buyer_protection').fadeIn();
	   $('.bottom_modal_content').addClass('show')
	   hidden();
	})
	$('.bottom_modal_modal_close_btn').click(function() {
	   $('.bottom_modal_content').removeClass('show');
	   $('#buyer_protection').fadeOut();
	   visible()
	})
	//product specification modal
	$('#product_spacification_btn').click(function() {
       $('#product_specification').fadeIn();
	   $('.bottom_modal_content').addClass('show')
	   hidden()
	})
	$('.bottom_modal_modal_close_btn').click(function() {
	   $('.bottom_modal_content').removeClass('show');
	   $('#product_specification').fadeOut();
	   visible()
	})
	//free shipping modal
	$('.free_shipping_modal_btn').click(function() {
       $('#free_shipping').fadeIn();
	   $('#free_shipping_modal_content').addClass('show')
	   hidden()
	})
	$('#free_shipping_close_btn').click(function() {
	   $('#free_shipping').fadeOut();
	   $('#free_shipping_modal_content').removeClass('show');
	   visible()
	})
	//footer button event
	function footerBtnEventEnable(a) {
		$(a).click(function() {
		  $(this).addClass('block');	
		  $('#ship_form_plug_type_modal').fadeIn();
		  $('#ship_form_plug_content').addClass('show')
		  hidden();
		})
	}
	function footerBtnEventDisable(a) {
		$(a).click(function() {
		  $(this).removeClass('block');	
		})
	}
	//ship form plug type modal 
	$('.ship_form_plug_type_modal_btn').click(function() {
       $('#ship_form_plug_type_modal').fadeIn();
	   $('#ship_form_plug_content').addClass('show')
		$('footer button.footer_buy_now').removeClass('block')
		$('footer button.footer_add_to_cart').removeClass('block')
	    hidden()
	})
		let activeClass = $('#ship_form_plug_content');
		if(activeClass.hasClass('show')) {
			footerBtnEventDisable('footer button.footer_buy_now')
			footerBtnEventDisable('footer button.footer_add_to_cart')
		}
		else {
			footerBtnEventEnable('footer button.footer_buy_now')
			footerBtnEventEnable('footer button.footer_add_to_cart')
		}
	$('#ship_form_plug_type_modal_close_btn').click(function() {
	   $('#ship_form_plug_type_modal').fadeOut();
	   $('#ship_form_plug_content').removeClass('show');
		$('footer button.footer_buy_now').removeClass('block')
		$('footer button.footer_add_to_cart').removeClass('block')
	    visible()
	})
	/*footerBtnEventEnable('footer button.footer_buy_now')
	footerBtnEventEnable('footer button.footer_add_to_cart')*/
	
	$('.single_product_iar_product_imgbx').click(function() {
       $('#ship_form_plug_type_modal').fadeIn();
	   $('#ship_form_plug_content').addClass('show')
	   hidden()
	})
	//coupon and discount modal
	$('#discount_coupon_modal_btn').click(function() {
       $('#discounts_coupons').fadeIn();
	   $('.bottom_modal_content').addClass('show')
	   hidden()
	})
	$('.bottom_modal_modal_close_btn').click(function() {
	   $('.bottom_modal_content').removeClass('show');
	   $('#discounts_coupons').fadeOut();
	   visible()
	})
	//price increase machine
	//setting default attribute to disabled of minus button
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    //taking value to increment decrement input value
    var valueCount;
    //taking price value in variable
    var price = document.getElementById("price").innerText;
    //plus button
    document.querySelector(".plus-btn").addEventListener("click", function() {
        //getting value of input
        valueCount = document.getElementById("quantity").value;
        //input value increment by 1
        valueCount++;
        //setting increment input value
        document.getElementById("quantity").value = valueCount;
        if (valueCount >= 1) {
            document.querySelector(".minus-btn").removeAttribute("disabled");
            document.querySelector(".minus-btn").classList.remove("disabled")
        }
    });
    //minus button
    document.querySelector(".minus-btn").addEventListener("click", function() {
        //getting value of input
        valueCount = document.getElementById("quantity").value;
        //input value increment by 1
        valueCount--;
        //setting increment input value
        document.getElementById("quantity").value = valueCount
        if (valueCount <= 1) {
            document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
        }
    });
    setInterval(function () {
		var qntt = document.getElementById('quantity').value;
		if (qntt < 100) {
			var element = document.getElementById("left-value");
			element.classList.add("mystyle");
			pricetoggle.innerHTML = "1445"
			var element = document.getElementById("right-value");
			element.classList.remove("mystyle");
		} else if (qntt > 99) {
			var element = document.getElementById("right-value");
			element.classList.add("mystyle");
			pricetoggle.innerHTML = "1394"
			var element = document.getElementById("left-value");
			element.classList.remove("mystyle");
			document.querySelector(".minus-btn").removeAttribute("disabled");
			document.querySelector(".minus-btn").classList.remove("disabled")
		}
	}, 1);
	//product quantity counter
	let quantityAmount = 1;
	$('#plus_btn').click(function() {
		quantityAmount += 1;
		if (quantityAmount > 1) {
			$('#minus_btn').removeAttr('disabled')
		}
		$('.quantity_value').text(quantityAmount);
	})
	$('#minus_btn').click(function() {
		quantityAmount -= 1;
		if(quantityAmount == 1) {
			quantityAmount = 1;
			$('#minus_btn').attr('disabled','disabled')
		}
			$('.quantity_value').text(quantityAmount);
	})
    //coundown clock
    function coundown() {
        const nextDate = new Date('Feb 16 2021, 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = nextDate - now;
        const ss = 1000;
        const min = ss * 60;
        const hr = min * 60;
        const d = hr * 24;
        let days = Math.floor(gap / d);
        let hour = Math.floor((gap % d) / hr);
        let minute = Math.floor((gap % hr) / min);
        let second = Math.floor((gap % min) / ss);
            second = (second < 10)? "0"+ second : second;
            minute = (minute < 10)? "0"+ minute : minute;
            hour = (hour < 10)? "0"+ hour : hour;
        $('.day').text(days +'d');
        $('.hour').text(hour+ 'h');
        $('.minute').text(minute + 'm');
        $('.second').text(second + 's');
    }
    setInterval(coundown, 1000);
    //arrow up btn will be down when it has class rotateUp
	$('#arrow_up_btn').click(function() {
		$('.single_product_iar_quick_link_container').toggleClass('show');
		$('.single_product_iar_quick_link_container #icon-icArrowDown').toggleClass('rotateUp');
	})
	//click to up button show and hide
	$(window).scroll(function() {
	 if ($(document).scrollTop() > 700) {
		$(".clickToUpBtn").show();
	  } else {
		$(".clickToUpBtn").hide();
	  }
	});
	//add event listerner in click to up button
	$('.clickToUpBtn').click(function() {
		$(document).scrollTop(0);
	})
	//shipping modal menu 
	$('ul.ships_from_menu li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	})
	//right modal filter tab 
	$('.filter_tab_top li').click(function () {
		$(this).addClass('active').siblings().removeClass('active')
		$('.filter_tab_bottom li').removeClass('active');
	})
	$('.filter_tab_bottom li').click(function() {
		$(this).addClass('active').siblings().removeClass('active')
		$('.filter_tab_top li').removeClass('active');
	})
	//plug type menu item 
	$('.plug_type_item').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('#plug_value').text($(this).text());
	})
	//toggle class plug type price
	$('.repiar_warrenty_left').click(function() {
		$('.toggleClass_detect').toggleClass('active');
	})
	$('.toggleClass_detect').click(function() {
		$(this).toggleClass('active');
	})
	$('.filter_list').click(function() {
		const value = $(this).attr('data-filter');
		if(value == 'all') {
			$('.left_modal_client_rating').show();
			$('.single_product_iar_review_qa_right_modal span.btn_viewAll').show()
		}
		else {
			$('.left_modal_client_rating').not('.'+value).hide();
			$('.left_modal_client_rating').filter('.'+value).show();
			$('.single_product_iar_review_qa_right_modal span.btn_viewAll').hide()
		}
	})
	//toggle translator
	$('.translator span').click(function() {
		$(this).removeClass('translate').siblings().addClass('translate')
	})
});
