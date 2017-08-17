// ОТПРАВКА
$("form").on("submit",function(e){

    var inputFirstName = $('#firstName').val(),
        inputPhone = $('#phone').val(),
        inputEmail = $('#email').val();

    if( inputFirstName == "" && inputPhone == "" && inputEmail == "" ) {
        alert("Поля формы обратной связи заполнены неверно!");
        console.log('Ваше имя:' + inputFirstName);
        console.log('Телефон:' + inputPhone);
        console.log('Email:' + inputEmail);

        return false;
    }

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
