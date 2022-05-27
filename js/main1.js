
$(document).ready(function(){

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

// increment
		let addBtn = document.querySelector('#add');
		let subBtn = document.querySelector('#sub');
		let qty = document.querySelector('#qtyBox');
		
		addBtn.addEventListener('click',()=>{
			qty.value = parseInt(qty.value) + 1;
		});

		subBtn.addEventListener('click',()=>{
			if (qty.value <= 0) {
				qty.value = 0;
			}
			else{
				qty.value = parseInt(qty.value) - 1;
			}
		});

// decrement
  // select deselect all
  $('#all-product').change(function(){
    $('.checkitem').prop('checked', $(this).prop('checked'))
  });
  $('.checkitem').change(function(){
    if($(this).prop('checked')==false){
      $('#all-product').prop('checked', false)
    }
    if($('.checkitem:checked').length == $('.checkitem').length){
      $('#all-product').prop('checked', true)
    };
    $('#all-product').change(function(){
    $('.checkitem').prop('checked', $(this).prop('checked'))
  });
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

// side-navigation-slide
function show(){
    document.getElementById('menu-layout').classList.add('active')
    document.getElementById('body-overlay').classList.add('active-overlay')
};
function hide(){
    document.getElementById('menu-layout').classList.remove('active')
    document.getElementById('body-overlay').classList.remove('active-overlay')
};

// Confirm popup and delete selected items
function confirmation(){
    var result = confirm("Are you sure to delete?");
    if(result){
        var delitems=$('.sp-layout input:checked').closest('.sp-wrapper, .sp-layout').remove()
    }
    else{
        return false;
    }
}