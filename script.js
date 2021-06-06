const button = document.getElementById('button');
const messages = document.querySelector('.messages');

const messageArray = [
	'message 1',
	'message 2',
	'message 3',
	'message 4',
	'message 5',
];

const randomMessage = () => {
	return messageArray[Math.floor(Math.random() * messageArray.length)];
};

const getMessage = () => {
	const div = document.createElement('div');
	div.classList.add('message');
	div.innerHTML = randomMessage();
	messages.appendChild(div);

	setTimeout(() => {
		div.remove();
	}, 2000);
};

button.addEventListener('click', () => getMessage());
