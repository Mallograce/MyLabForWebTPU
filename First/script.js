const buttonContainer = document.getElementById('buttonContainer');
const buttonCountSelect = document.getElementById('buttonCount');

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('buttons_items');
    return button;
}

// Изменение при выбранном значении из droplist
buttonCountSelect.addEventListener('change', () => {
    buttonContainer.innerHTML = '';

    const selectedCountButt = parseInt(buttonCountSelect.value);

    for (let i = 1; i <= selectedCountButt; i++) {
        const button = createButton(`Кнопка ${i}`);
        buttonContainer.appendChild(button);
    }
})