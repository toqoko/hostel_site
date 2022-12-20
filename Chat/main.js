function message_div(json_) {
	const main_div = document.getElementById('chat');
	const message_div = document.createElement('div');
	const message_text = document.createElement('div');
	const message_time = document.createElement('div');
	const message_user = document.createElement('div');



	message_div.className = "message_div";

	message_text.className = "message_text";
	message_text.innerHTML = json_['message']['message']
	
	message_time.className = "message_time";
	message_time.innerHTML = json_['data']

	message_user.className = "message_user";
	message_user.innerHTML = json_['username']


	message_div.append(message_time);
	message_div.append(message_user);
	message_div.append(message_text);
	main_div.append(message_div);
}

function message_user(json_) {
	const main_div = document.getElementById('chat');
	const message_div = document.createElement('div');
	const message_text = document.createElement('div');
	const message_time = document.createElement('div');
	const message_user = document.createElement('div');



	message_div.className = "message_div_user";

	message_text.className = "message_text";
	message_text.innerHTML = json_['message']['message']
	
	message_time.className = "message_time";
	message_time.innerHTML = json_['data']

	message_user.className = "message_user";
	message_user.innerHTML = json_['username']


	message_div.append(message_time);
	message_div.append(message_user);
	message_div.append(message_text);
	main_div.append(message_div);
}

async function check_message() {
	check = 0
	id_list = []
	while (check === 0) {
		const raw = localStorage.getItem("user_date");
		const person = JSON.parse(raw);

		const user = person['username']

		const request = await fetch('https://Json-storage.daniksherbakov.repl.co/get/chat/message', {
			method: 'POST',
			headers: {
				'Accept': 'application/json; charset=utf-8',
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				"chat": "general"
			})
		});

		const json = await request.json();

		for (const [key, value] of Object.entries(json)) {
			if (!id_list.includes(key)) {
				console.log(value['username'])
				console.log(user)
				if (value['username'] === user) {
					console.log(value)
					id_list.push(key)
					message_user(value)
				} else {
					console.log(value)
					id_list.push(key)
					message_div(value)
				}
			}
		}
	}
}

function send() {
	document.getElementById("button_send").addEventListener('click', async (event) => {
		const message_text = await document.getElementById("input_text").value;

		const raw = localStorage.getItem("user_date");
		const person = JSON.parse(raw);

		const user = person['username']

		const request = await fetch('https://Json-storage.daniksherbakov.repl.co/send/message/general', {
			method: 'POST',
			headers: {
				'Accept': 'application/json; charset=utf-8',
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				"username": user,
				"data": "18.12.2022",
				"message": {
					"type": "text",
					"message": message_text
				}
			})
		});

		// const json = await request.json();

		// if (json['answer'] === 'user not find') dom_id.sign_valid.innerText = "Пользователь не найден!";
		// else if (json['answer'] === 'error password') dom_id.sign_valid.innerText = "Неправильный пароль!";
		// else {

		// 	localStorage.setItem("user_date", JSON.stringify(json));

		// }
	})
}

check_message()
send()
