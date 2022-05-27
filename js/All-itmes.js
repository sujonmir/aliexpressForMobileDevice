// change style when scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("new-head").style.backgroundColor= "#fff";
    document.getElementById("new-left-arrow").style.color= "#000";
    document.getElementById("new-three-dots").style.color= "#000";
    document.getElementById("new-store-nav").style.backgroundColor= "#fff";
    document.getElementById("new-nav-text").style.color= "#000";
    document.getElementById("new-nav-text2").style.color= "#000";
    document.getElementById("home-border").style.backgroundColor= "#000";
  } else {
    document.getElementById("new-head").style.backgroundColor= "#4177BF";
    document.getElementById("new-left-arrow").style.color= "#fff";
    document.getElementById("new-three-dots").style.color= "#fff";
    document.getElementById("new-store-nav").style.backgroundColor= "#4177BF";
    document.getElementById("new-nav-text").style.color= "#fff";
    document.getElementById("new-nav-text2").style.color= "#fff";
    document.getElementById("home-border").style.backgroundColor= "#fff";
  }
};
function show(){
    document.getElementById('options-layout').classList.toggle('active-menu');
}
// slider-active
$(document).ready(function(){


    $('.owl-carousel2').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        autoplayTimeout:6000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

    /*==================================================================
    [ Show / hide Form ]*/
    
})(jQuery);

function show2(){
    document.getElementById('contact-layout').classList.add('contact-active');
}
function hide2(){
    document.getElementById('contact-layout').classList.remove('contact-active');
}
