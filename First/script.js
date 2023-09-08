const btn1 = document.getElementById('first_btn');
const btn2 = document.getElementById('second_btn');
const btn3 = document.getElementById('third_btn');
const btn4 = document.getElementById('fourth_btn');
const btn5 = document.getElementById('fifth_btn');
const message = document.getElementById('message');

const buttons = [btn1, btn2, btn3, btn4, btn5];

function checkButtons(button) {
    for (let i of button) {
        i.style.visibility = i.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
    if (buttons.every(button => button.style.visibility === 'hidden')) {
        message.style.visibility = 'visible';
    }
}

btn1.addEventListener('click', () => checkButtons([btn3]));
btn2.addEventListener('click', () => checkButtons([btn4]));
btn3.addEventListener('click', () => checkButtons([btn5, btn1]));
btn4.addEventListener('click', () => checkButtons([btn1]));
btn5.addEventListener('click', () => checkButtons([btn2, btn5]));