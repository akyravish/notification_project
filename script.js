const button  = document.getElementById('button');
const messages = document.querySelector('.messages');

const messageArray =

const getMessages = () => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = randomMeassage();
}

button.addEventListener('click', () => getMessage());
