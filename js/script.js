// Toggle button
$(".nav-bar button").click(function () {
    $(".menu").toggleClass("active");
});

let change = function(icon){
    icon.classList.toggle("fa-rectangle-xmark")
}

