var focusIn = (id) => {
    $(id).focusin(() => {
            $(id).parent().addClass('focus');
        }
    );
}
var focusOut = (id) => {
    $(id).focusout(() => {
            $(id).parent().removeClass('focus');
        }
    );
}
var typedClass = (id) => {
    $(id).keyup(() => {
        var userData = $(id).val();
        if (userData.length > 0 || userData.length > 0) {
            $(id).parent().addClass('typed');
        }
        else {
            $(id).parent().removeClass('typed');
        }
    });
}
$('#login').submit((event) => {
    $('#validate').html('');
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    console.log(username);
    if (username === '') {
        $('#validate').append("<span>Username Required</span><br>");
    }
    if (email === '') {
        $('#validate').append("<span>Email Required</span><br>");
    }
    if (password === '') {
        $('#validate').append("<span>Passowrd Required</span><br>");
    }
    event.preventDefault();
});

$('#register').submit((event) => {
    $('#validate').html('');
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    console.log(username);
    if (username === '') {
        $('#validate').append("<span>Username Required</span><br>");
    }
    if (email === '') {
        $('#validate').append("<span>Email Required</span><br>");
    }
    if (password === '') {
        $('#validate').append("<span>Passowrd Required</span><br>");
    }
    event.preventDefault();
});

focusIn('#email');
focusIn('#username');
focusIn('#password');
focusOut('#email');
focusOut('#username');
focusOut('#password');
typedClass('#email');
typedClass('#username');
typedClass('#password');
