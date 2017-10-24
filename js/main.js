function init() {
    $('#menu li:first').addClass('selected');

    $('section article:nth-child(2)').addClass('middle');

    $('.list-item:odd').addClass('highlighted');

    $('.list-item:last').css({
        border: "1px solid #eee",
    });

    var formInputs = $('#form-container input')
    formInputs.click(function(event) {
        formInputs.css({
            borderColor: "",
        });
        $(this).css({
            borderColor: "#43a3e6",
        });
    });
}


$(document).ready(init);
