const user_data = {
    group: document.getElementById('user_group'),
    username: document.getElementById('user_username'),
    name: document.getElementById('user_name'),
    status: document.getElementById('user_status'),
    block: document.getElementById("user_block"),
    birthday: document.getElementById("user_birthday")
}

function user_check() {
	if(localStorage.getItem("user_date")) {
		const raw = localStorage.getItem("user_date");
		const person = JSON.parse(raw);

		user_data.group.innerText = person["group"]
		user_data.username.innerText = person["username"]
		user_data.name.innerText = person["name"]
		user_data.status.innerText = person["status"]
		user_data.block.innerText = person["block"]
		user_data.birthday.innerText = person["birthday"]
	}
}

user_check()