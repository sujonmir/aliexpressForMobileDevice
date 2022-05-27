$(document).ready(function() {
	//convert string to number
	function convertToNum(a) {return Number(a);}
	//product quantity counter
	let quantityAmount = 1;
	let productPrice = convertToNum($('#price_value').text());
	let shippinCharge = convertToNum($('#shipping_charge_val').text());
	$('#plus_btn').click(function() {
		quantityAmount++;
		let inTotalPrice = productPrice * quantityAmount + shippinCharge;
		$('#totalPayVal').text(inTotalPrice.toFixed(2));
		if (quantityAmount > 1) {
			$('#minus_btn').removeAttr('disabled')
		}
		$('.quantity_value').text(quantityAmount);
	})
	$('#minus_btn').click(function() {
		quantityAmount--;
		let inTotalPrice = productPrice * quantityAmount + shippinCharge;
		$('#totalPayVal').text(inTotalPrice.toFixed(3));
		if(quantityAmount === 1) {
			$('#minus_btn').attr('disabled','disabled')
		}
			$('.quantity_value').text(quantityAmount);
	})
	//overflow hidden 
	function overflowHidden() {
		$('body').css('overflow','hidden');
	}
	//overflow visible 
	function overflowVisible() {
		$('body').css('overflow','visible');
	}
	//modal open function
	function modalOpenFunc(a, b) {
		$(a).click(function() {
			$(b).css('bottom','0');
			overflowHidden();
		})
	}
	//modal close function
	function modalCloseFunc(a, b) {
		$(a).click(function() {
			$(b).css('bottom','-100%');
			overflowVisible();
		})
	}
	//shipping charge modal
	modalOpenFunc('#shipping_charge_modal_btn', '#shipping_modal');
	modalCloseFunc('.icon-icClose', '#shipping_modal');
	//message to seller modal
	modalOpenFunc('#messge_modal_btn', '#message_modal')
	modalCloseFunc('.icon-icClose', '#message_modal')
	modalCloseFunc('.btn_close', '#message_modal')
	//shipping address modal
	modalOpenFunc('#shipping_address_modal_btn', '#address_modal')
	modalCloseFunc('.icClose', '#address_modal')
//	added new address modal into shipping address modal
	modalOpenFunc('#newAddressBtn', '#added_to_new_address_form')
	$('#icon_close').click(function() {
		$('#added_to_new_address_form').css('bottom','-100%');
		overflowVisible();
		disableClass();
	})
	//discount modal
	modalOpenFunc('#discount_modal_btn', '#discount_modal')
	modalCloseFunc('.icon-icClose', '#discount_modal')
	//payment dabit card modal
	modalOpenFunc('#checkoutPage_payment_modal_open', '#checkoutPage_payment_modal')
	$('.icon-icClose').click(function() {
		$('#checkoutPage_payment_modal').css('bottom','-100%');
		$('#cicle_icon').removeAttr('checked')
		overflowVisible();
		
	})
	//auto resize textarea height when users press enter
	let observe;
	if (window.attachEvent) {
		observe = function (element, event, handler) {
			element.attachEvent('on'+event, handler);
		};
	}
	else {
		observe = function (element, event, handler) {
			element.addEventListener(event, handler, false);
		};
	}
	document.body.addEventListener('load', init());
	function init () {
		var text = document.getElementById('textarea');
		function resize () {
			text.style.height = 'auto';
			text.style.height = text.scrollHeight+'px';
		}
		/* 0-timeout to get the already changed text */
		function delayedResize () {
			window.setTimeout(resize, 0);
		}
		observe(text, 'change',  resize);
		observe(text, 'cut',     delayedResize);
		observe(text, 'paste',   delayedResize);
		observe(text, 'drop',    delayedResize);
		observe(text, 'keydown', delayedResize);
		text.focus();
		text.select();
		resize();
	}
	function disableClass() {
		$('ul.shipping_details').removeClass('active');
		  $('svg.icSubtractFill').removeClass('active');
		  $('svg.icArrowRight').fadeOut();
		  $('svg.icArrowRight').removeClass('active');
		  $('[name="shipping_address"]').fadeIn();
	}
	function enableClass() {
		$('ul.shipping_details').addClass('active');
			$('svg.icSubtractFill').addClass('active');
			$('svg.icArrowRight').fadeIn();
			$('svg.icArrowRight').addClass('active');
			$('[name="shipping_address"]').fadeOut();
	}
	//open edit option when user click edit button
	$('.btn_edit').click(function() {
		if($(this).text() == 'Done') {
		  $(this).text('Edit');
		   disableClass();
		} else {
			$(this).text('Done');
			enableClass();
			$('svg.icSubtractFill').click(function() {
				let confirmVal = confirm('Confirm deleting shipping address ?');
				if(confirmVal === true) {
				  $(this).parent().parent().remove();
				}
			})
		}
	})
	//promo code discount modal
	$('#apply_promo_code_btn').click(function() {
		if($('#promoCode').val() == '') {
			alert('Enter code here');
		}
	})
	//form validation 
	let contactName = $('#contact_name');
	let userMobileNum = $('#userMobileNum');
	let userCity = $('#userCity');
	let userZipCode = $('#userZipCode');
	let userStreet = $('#userStreet');
	let userDivision = $('#userDivision');
	let submitBtn = $('#submitBtn');
	let border_color = "rgba(237, 237, 237, 0.5)";
	
//	Error messages
	let contactErrorMsg = $('#contact_error_message');
	let mobileErrorMsg = $('#userMobile_error_message');
	let zipCodeErrorMsg = $('#userZipcode_error_message');
	let cityErrorMsg = $('#userCity_error_message');
	let upzila = $('#upzila');
	let streetAddress = $('#streetAddress');
	//by default all error messages are hidden
	contactErrorMsg.hide();
	mobileErrorMsg.hide();
	zipCodeErrorMsg.hide();
	cityErrorMsg.hide();
	upzila.hide();
	streetAddress.hide();
	let contactNameError = true;
	let mobileNumError = true;
	let zipCodeError = true;
	let cityNameError = true;
	let usrUpzilaError = true;
	let usrStreetAddress = true;
	
	contactName.keyup(function() {
		contactNameFunc();
	});
	userMobileNum.keyup(function() {
		userMobileNumFunc();
	});
	userCity.keyup(function() {
		userCityFunc();
	});
	userStreet.keyup(function() {
		userStreetFunc();
	});
	userDivision.keyup(function() {
		userDivisionFunc();
	});
	userZipCode.keyup(function() {
		userZipCodeFunc();
	});
	//contact name field validate function
	function contactNameFunc() {
		let userNm = contactName.val();
		if(userNm.length == '') {
		  contactErrorMsg.show();
		  contactErrorMsg.text('Please enter a contact name');
		  contactName.css('borderBottomColor','red');
		  contactName.focus();
		  contactErrorMsg.css('color','red');
		  contactNameError = false;
		  return false;
		}
	    else if((userNm.length < 3) || (userNm.length > 25)) {
		  contactErrorMsg.show();
		  contactErrorMsg.text('Please enter between 3 - 25 characters');
		  contactName.css('borderBottomColor','red')
		 contactName.focus();
		  contactErrorMsg.css('color','red');
		  contactNameError = false;
		  return false;
		}
		else {
		   contactErrorMsg.hide();	
		   contactName.css('borderBottomColor',border_color)
		}
	}
	//user mobile field validate function
	function userMobileNumFunc() {
		let usrmb = userMobileNum.val();
		let pos1 = usrmb.indexOf(0);
		let pos2 = usrmb.indexOf(1); 
		if((pos1 !== 0) && (pos2 !== 1)) {
		  mobileErrorMsg.show();
		  mobileErrorMsg.text('Please enter valid mobile number');
		  userMobileNum.css('borderBottomColor','red');
		  userMobileNum.focus();
		  mobileErrorMsg.css('color','red');
		  mobileNumError = false;
		  return false;
		}
		else if(usrmb.length == '') {
		  mobileErrorMsg.show();
		  mobileErrorMsg.text('Please enter mobile number');
		  userMobileNum.css('borderBottomColor','red');
		  userMobileNum.focus();
		  mobileErrorMsg.css('color','red');
		  mobileNumError = false;
		  return false;
		}
		else if(usrmb.length !== 11) {
		   mobileErrorMsg.show();
		   mobileErrorMsg.text('Please enter 11 digit');
		   userMobileNum.css('borderBottomColor','red');
		   userMobileNum.focus();
		   mobileErrorMsg.css('color','red');
		   mobileNumError = false;
		   return false;
		}
		else {
			mobileErrorMsg.hide();
			userMobileNum.css('borderBottomColor', border_color)
		}
	}
	//user street address field validate function
	function userStreetFunc() {
		let usrstreet = userStreet.val();
		if(usrstreet.length == '') {
		  streetAddress.show();
		  userStreet.css('borderBottomColor','red');
		  userStreet.focus();
		  streetAddress.css('color','red');
		  usrStreetAddress = false;
		  return false;
		}
		else {
		   streetAddress.hide();	
		   userStreet.css('borderBottomColor',border_color)
		}
	}
	//user devisiton field validate function
	function userDivisionFunc() {
		let usrDist = userDivision.val();
		if(usrDist.length == '') {
		  upzila.show();
		  userDivision.css('borderBottomColor','red');
		  userDivision.focus();
		  upzila.css('color','red');
		  usrUpzilaError = false;
		  return false;
		}
		else {
		   upzila.hide();	
		   userDivision.css('borderBottomColor',border_color)
		}
	}
	//user city name field validate function
	function userCityFunc() {
		let usrDist = userCity.val();
		if(usrDist.length == '') {
		  cityErrorMsg.show();
		  userCity.css('borderBottomColor','red');
		  userCity.focus();
		  cityErrorMsg.css('color','red');
		  cityNameError = false;
		  return false;
		}
		else {
		   cityErrorMsg.hide();	
		   userCity.css('borderBottomColor',border_color)
		}
	}
	//user zipcode field validate function
	function userZipCodeFunc() {
		let usrZipCode = userZipCode.val();
		if(usrZipCode.length == '') {
		  zipCodeErrorMsg.show();
		  zipCodeErrorMsg.text('Please enter a zip code');
		  userZipCode.css('borderBottomColor','red');
		  userZipCode.focus();
		  zipCodeErrorMsg.css('color','red');
		  zipCodeError = false;
		  return false;
		}
		else if(usrZipCode.length > 4) {
		  zipCodeErrorMsg.show();
		  zipCodeErrorMsg.text('Zipcode should be 4 digits')
		  userZipCode.css('borderBottomColor','red');
		  userZipCode.focus();
		  zipCodeErrorMsg.css('color','red');
		  zipCodeError = false;
		  return false;
		}
		else {
		   zipCodeErrorMsg.hide();	
		   userZipCode.css('borderBottomColor',border_color)
		}
	}
	//submit button event
	submitBtn.click(function() {
	   contactNameError = true;
	   mobileNumError = true;
	   zipCodeError = true;
	   cityNameError = true;
	   usrUpzilaError = true;
	   usrStreetAddress = true;
	   contactNameFunc();
	   userMobileNumFunc();
	   userCityFunc();
	   userStreetFunc();
	   userDivisionFunc();
	   userZipCodeFunc();
	   input_credit_card($('#paymentDebitCardNum'))
	   if((contactNameError == true) && (mobileNumError == true) && (zipCodeError == true) && (cityNameError == true) && (usrUpzilaError == true) && (usrStreetAddress == true)) {
		   return true;
	   } else {return false}
		 
	})
	//payment debit card validation
	let cardHolderName = $('#paymentCardHolderName'),
		cardExpiredDate = $('#paymentExpireDate'),
		paymentErrorMsg = $('#paymentErrorMsg');
		paymentErrorMsg.hide();
	
	input_credit_card = function(jQinp)
{
    var format_and_pos = function(input, char, backspace)
    {
        var start = 0;
        var end = 0;
        var pos = 0;
        var value = input.value;

        if (char !== false)
        {
            start = input.selectionStart;
            end = input.selectionEnd;

            if (backspace && start > 0) // handle backspace onkeydown
            {
                start--;

                if (value[start] == " ")
                { start--; }
            }
            // To be able to replace the selection if there is one
            value = value.substring(0, start) + char + value.substring(end);

            pos = start + char.length; // caret position
        }
        var d = 0; // digit count
        var dd = 0; // total
        var gi = 0; // group index
        var newV = "";
        var groups = /^\D*3[47]/.test(value) ? // check for American Express
        [4, 6, 5] : [4, 4, 4, 4];

        for (var i = 0; i < value.length; i++)
        {
            if (/\D/.test(value[i]))
            {
                if (start > i)
                { pos--; }
            }
            else
            {
                if (d === groups[gi])
                {
                    newV += " ";
                    d = 0;
                    gi++;

                    if (start >= i)
                    { pos++; }
                }
                newV += value[i];
                d++;
                dd++;
            }
            if (d === groups[gi] && groups.length === gi + 1) // max length
            { break; }
        }
        input.value = newV;

        if (char !== false)
        { input.setSelectionRange(pos, pos); }
    };

    jQinp.keypress(function(e)
    {
        var code = e.charCode || e.keyCode || e.which;

        // Check for tab and arrow keys (needed in Firefox)
        if (code !== 9 && (code < 37 || code > 40) &&
        // and CTRL+C / CTRL+V
        !(e.ctrlKey && (code === 99 || code === 118)))
        {
            e.preventDefault();

            var char = String.fromCharCode(code);

            // if the character is non-digit
            // -> return false (the character is not inserted)

            if (/\D/.test(char))
            { return false; }

            format_and_pos(this, char);
        }
    }).
    keydown(function(e) // backspace doesn't fire the keypress event
    {
        if (e.keyCode === 8 || e.keyCode === 46) // backspace or delete
        {
            e.preventDefault();
            format_and_pos(this, '', this.selectionStart === this.selectionEnd);
        }
    }).
    on('paste', function()
    {
        // A timeout is needed to get the new value pasted
        setTimeout(function()
        { format_and_pos(jQinp[0], ''); }, 50);
    }).
    blur(function() // reformat onblur just in case (optional)
    {
        format_and_pos(this, false);
    });
};
	input_credit_card($('#paymentDebitCardNum'));
	
	let $jqDate = $('#paymentExpireDate');

$jqDate.bind('keyup', function(ev) {
	  if (ev.which !== 8) {
		let input = $jqDate.val();
		let out = input.replace(/\D/g, '');
		let len = out.length;

		if (len > 1 && len < 4) {
		  out = out.substring(0, 2) + '/' + out.substring(2, 3);
		} else if (len >= 4) {
		  out = out.substring(0, 2) + '/' + out.substring(2, len);
		  out = out.substring(0, 10)
		}
		$jqDate.val(out)
	  }
	});
})
