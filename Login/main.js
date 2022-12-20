const dom_id = {
    input_login: document.getElementById('input_login'),
    input_password: document.getElementById('input_password'),
    button_sign: document.getElementById('button_sign'),

    login_valid: document.getElementById("input_login_valid"),
    password_valid: document.getElementById("input_password_valid"),
    sign_valid: document.getElementById('sign_valid')
}


function sign() {
    dom_id.button_sign.addEventListener('click', async (event) => {
        const login = await dom_id.input_login.value;
        const password = await dom_id.input_password.value;

        const regexp = /^[a-z\d]+$/i;

        console.log(login)
        console.log(password)


        if (login != "") {
            
            if (regexp.test(login)) {
                dom_id.input_login.style.border = "1px solid #000000";
                dom_id.login_valid.innerText = "";

            } else {
                dom_id.input_login.style.border = "1px solid #ff0000";
                dom_id.login_valid.innerText = "Разрешены только латинские символы и цифры!";

                return
            }

        } 
        else {
            dom_id.input_login.style.border = "1px solid #ff0000";
            dom_id.login_valid.innerText = "Поле не должно быть пустым!";

            return
        }

        if (password != "") {
            
            if (regexp.test(password)) {
                dom_id.input_password.style.border = "1px solid #000000";
                dom_id.password_valid.innerText = "";

            } else {
                dom_id.input_password.style.border = "1px solid #ff0000";
                dom_id.password_valid.innerText = "Разрешены только латинские символы и цифры!";

                return
            }

        } 
        else {
            dom_id.input_password.style.border = "1px solid #ff0000";
            dom_id.password_valid.innerText = "Поле не должно быть пустым!";

            return
        }


        const request = await fetch('https://Json-storage.daniksherbakov.repl.co/check/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                'username': login,
                'password': password
            })
        });
        
        const json = await request.json();

        if (json['answer'] === 'user not find') dom_id.sign_valid.innerText = "Пользователь не найден!";
        else if (json['answer'] === 'error password') dom_id.sign_valid.innerText = "Неправильный пароль!";
        else {

            localStorage.setItem("user_date", JSON.stringify(json));
            window.location.href = "../Chat/index.html";
        }
    })
}


sign()
