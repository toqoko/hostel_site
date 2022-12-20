export function message_div(json_) {
	const main_div = document.getElementById('chat');
	const message_div = document.createElement('div');
	const message_text = document.createElement('div');
	const message_time = document.createElement('div');
	const message_user = document.createElement('div');



	message_div.className = "message_div";
	message_div.id = "message_" + json_['id'];

	message_text.className = "message_text";
	message_text.innerHTML = json_['message']['message']
	
	message_time.className = "message_time";
	message_time.innerHTML = json_['data']

	message_user.className = "message_user";
	message_user.innerHTML = json_['username']



	message_div.append(message_text);
	message_div.append(message_time);
	message_div.append(message_user);
	main_div.append(message_div);
}

message_div({
	"username": "toqoko",
	"data": "18.12.2022",
	"message": {
		"type": "text",
		"message": "Hello word!!!"
	}
})