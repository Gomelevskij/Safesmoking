// ОТПРАВКА
$("form").on("submit",function(e){
    e.preventDefault();
    $.ajax({
         type: "POST"
         , url: "mail.php"
         , data: $(this).serialize()
     }).done(function () {
         $('.modal-content-form').hide();
         $('.modal-content-success').show();
         $("form").trigger("reset");
     });
});


//Chrome Smooth Scroll
try {
    $.browserSelector();
    if ($("html").hasClass("chrome")) {
        $.smoothScroll();
    }
}
catch (err) {};
$("img, a").on("dragstart", function (event) {
    event.preventDefault();
});
