const button = document.getElementById('button');
const messages = document.querySelector('.messages');

const messageArray = [
	'message 1',
	'message 2',
	'message 3',
	'message 4',
	'message 5',
];

const classArray = ['info', 'error', 'warning', 'success'];

const randomMessage = () => {
	return messageArray[Math.floor(Math.random() * messageArray.length)];
};

const randomClass = () => {
	return classArray[Math.floor(Math.random() * classArray.length)];
};

const getMessage = () => {
	const div = document.createElement('div');
	div.classList.add('message');
	div.classList.add(randomClass());
	div.innerHTML = randomMessage();
	messages.appendChild(div);

	setTimeout(() => {
		div.remove();
	}, 2000);
};

button.addEventListener('click', () => getMessage());
