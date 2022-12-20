const dom_id = {
    input_name: document.getElementById('input_name'),
    input_block: document.getElementById('input_block'),
    group_select: document.getElementById('group_select'),
    input_birthday: document.getElementById('input_birthday'),
    input_login: document.getElementById('input_login'),
    input_password: document.getElementById('input_password'),

    button_registration: document.getElementById('button_registration'),

    name_valid: document.getElementById('input_name_valid'),
    block_valid: document.getElementById('input_block_valid'),
    select_valid: document.getElementById("group_select_valid"),
    birthday_valid: document.getElementById('input_birthday_valid'),
    login_valid: document.getElementById("input_login_valid"),
    password_valid: document.getElementById('input_password_valid'),
    registration_valid: document.getElementById('registration_valid')
}


function sign() {
    dom_id.button_registration.addEventListener('click', async (event) => {
        const name = await dom_id.input_name.value;
        const block = await dom_id.input_block.value;
        const group = await dom_id.group_select.value;
        const birthday = await dom_id.input_birthday.value;
        const login = await dom_id.input_login.value;
        const password = await dom_id.input_password.value;

        const regexp = /^[a-z\d]+$/i;

        console.log(birthday)
        console.log(group)

        if (name === "") {
            dom_id.input_name.style.border = "1px solid #ff0000";
            dom_id.name_valid.innerText = "Поле не должно быть пустым!";

            return
        }

        if (block != "") {
            
            if (block <= 33) {
                dom_id.input_block.style.border = "1px solid #000000";
                dom_id.block_valid.innerText = "";

            } else {
                dom_id.input_block.style.border = "1px solid #ff0000";
                dom_id.block_valid.innerText = "Разрешены только цифры от 1 до 33!";

                return
            }

        } 
        else {
            dom_id.input_block.style.border = "1px solid #ff0000";
            dom_id.block_valid.innerText = "Поле не должно быть пустым!";

            return
        }

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


        const request = await fetch('https://Json-storage.daniksherbakov.repl.co/json/save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({

                "name": name,

                "password": password,

                "group": group,

                "birthday": birthday.split('-')[1]+"."+birthday.split('-')[2]+"."+birthday.split('-')[0],

                "block": block,

                "username": login

            })
        });
        
        const json = await request.json();

        if (json['answer'] === 'username in base') dom_id.registration_valid.innerText = "Имя пользователя занято!";
        else if (json['answer'] === 'json save') dom_id.registration_valid.innerText = "Учетная запись сохранина, можете ввойти!";
    })
}


sign()