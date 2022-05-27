$(document).ready(function () {

$(".Total-amount").click(function () {
  $(".summary-wrapper").toggle();
  $("#card-ps").toggle();
});
$(".card-pp").click(function () {
  $(".summary-wrapper").hide();
  $("#card-ps").hide();
});

  // One click handler for both classes
  $(".footer-icon, .footer-text").click(function (event) {
    // Remove the two active classes everywhere
    $(".footer-icon").removeClass('footer-icon-active');
    $(".footer-text").removeClass('footer-active');

    // Depending which element was clicked
    // Add the active class to $(this)
    // and its corresponding prev or next sibling
    if ($(this).is(".footer-icon")) {
      $(this).addClass('footer-icon-active');
      $(this).next(".footer-text").addClass('footer-active')
    } else {
      $(this).prev(".footer-icon").addClass('footer-icon-active');
      $(this).addClass('footer-active')
    }
  });

  // increment
  /* let addBtn = document.querySelector('#add');
  let subBtn = document.querySelector('#sub');
  let qty = document.querySelector('#qtyBox');

  addBtn.addEventListener('click', () => {
    qty.value = parseInt(qty.value) + 1;
  });

  subBtn.addEventListener('click', () => {
    if (qty.value <= 1) {
      qty.value = 1;
    } else {
      qty.value = parseInt(qty.value) - 1;
    }
  }); */



  // click to show and hide
  function show() {
    document.getElementById('search-layout').classList.add('active');
  }

  function hide() {
    document.getElementById('search-layout').classList.remove('active');
  }
  // click to show and hide


  // Click to clear input field
  let btnClear = document.querySelector('.Cross-icon');
  let inputs = document.querySelectorAll('input');

  btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
  });

  // side-navigation-slide
  function show() {
    document.getElementById('menu-layout').classList.add('active')
    document.getElementById('body-overlay').classList.add('active-overlay')
  };

  function hide() {
    document.getElementById('menu-layout').classList.remove('active')
    document.getElementById('body-overlay').classList.remove('active-overlay')
  };

  // Confirm popup and delete selected items
  function confirmation() {
    var result = confirm("Are you sure to delete?");
    if (result) {
      var delitems = $('.sp-layout input:checked').closest('.sp-wrapper, .sp-layout').remove()
    } else {
      return false;
    }
  }
});


function checkboxpp1() {
  setInterval(function () {
    var abc = document.getElementById("checkbox1");
    var oldPrice = document.getElementById("oldprice-pp").innerText = 12.76;
    var quantity1Value = document.getElementById("qtyBox").value;
    // var percentPrice = document.getElementById("percentprice-pp").innerText;
    var shippingPrice = document.getElementById("shipping-pp").innerText = 55;
    var qntIntoOld = oldPrice * quantity1Value
    var newPrice = (qntIntoOld + shippingPrice);
    var emptyValue = 0.00;
    if (abc.checked == false) {
      document.getElementById("checkbox2").checked = false;
      document.getElementById("checkbox3").checked = false;
      document.getElementById("subtotalpricepp").innerText = emptyValue.toFixed(2);
      document.getElementById("shippingpricepp").innerText = emptyValue.toFixed(2);
      document.getElementById("alltotal-pp").innerText = emptyValue.toFixed(2);
      document.getElementById("btn-text-pp").innerText = 'Buy(0)';
    } else if (abc.checked == true) {
      document.getElementById("checkbox2").checked = true;
      document.getElementById("checkbox3").checked = true;
      // document.getElementById("subtotal").innerText = selPrice.toFixed(2);
      document.getElementById("subtotalpricepp").innerText = qntIntoOld.toFixed(2);
      document.getElementById("shippingpricepp").innerText = shippingPrice.toFixed(2);
      document.getElementById("alltotal-pp").innerText = newPrice.toFixed(2);
      document.getElementById("btn-text-pp").innerText = 'Buy(1)';
    }

  }, 1);
}