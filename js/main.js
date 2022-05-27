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

// One click handler for both classes
$(".footer-icon, .footer-text").click(function(event){
  // Remove the two active classes everywhere
  $(".footer-icon").removeClass('footer-icon-active');
  $(".footer-text").removeClass('footer-active');
  
  // Depending which element was clicked
  // Add the active class to $(this)
  // and its corresponding prev or next sibling
  if($(this).is(".footer-icon")){
    $(this).addClass('footer-icon-active');
    $(this).next(".footer-text").addClass('footer-active')
  }else{
    $(this).prev(".footer-icon").addClass('footer-icon-active');
    $(this).addClass('footer-active')
  }
});

});

// click to show and hide
function show1(){
    document.getElementById('search-layout').classList.add('active');
}
function hide1(){
    document.getElementById('search-layout').classList.remove('active');
}
// click to show and hide


// Click to clear input field
let btnClear = document.querySelector('.Cross-icon');
let inputs = document.querySelectorAll('input');
 
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});
