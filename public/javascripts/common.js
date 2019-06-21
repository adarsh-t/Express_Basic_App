

$("document").ready(function () {
    let tvalue = $('#toast').val();
    if (tvalue) {
        $.toast({
            heading: 'Success',
            text: 'Your data has beend saved successfully!! Cheers!!.',
            showHideTransition: 'slide',
            icon: 'success'
        });
    }

    $('.form-horizontal').on('submit', function (e) {
        let confpass = $('#password_confirm').val();
        let pass = $('#password').val()
        if (confpass != pass) {
            e.preventDefault();
            $.toast({
                heading: 'error',
                text: 'Password doesnt match!!!!',
                showHideTransition: 'slide',
                icon: 'error'
            });

        }

    });



    $("#mobile").on("keydown",function (e) {
            $(this).keydown(function (e) {
                var key = e.charCode || e.keyCode || 0;
                // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
                // home, end, period, and numpad decimal
                return (
                    key == 8 ||
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    key == 110 ||
                    key == 190 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            });
    });

  
jQuery.fn.ForceNumericOnly =
function () {
        return this.each(function () {
            $(this).keydown(function (e) {
                var key = e.charCode || e.keyCode || 0;
                return (
                    key == 8 ||
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    key == 110 ||
                    key == 190 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            });
        });
    };
});
