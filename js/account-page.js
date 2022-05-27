$(document).ready(function () {
    setInterval(function () {
        $(".div1").click(function () {
            $(this).addClass("active");
            $(".div2").removeClass("active");
        });
        $(".div2").click(function () {
            $(this).addClass("active");
            $(".div1").removeClass("active");
        });
 
    }, 1);
    document.getElementById("order-id").innerHTML = Math.floor(Math.random() * 10000000000000000) +1000000000;

});
