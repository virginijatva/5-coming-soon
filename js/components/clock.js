function clock(selector) {
    const DOM = document.querySelector(selector);
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    const numbers = [432, 9, 37, 39];
    let HTML = '';

    for (let i=0; i<4; i++) {
        HTML += `<div class="time">
                  <div class="value">${numberFormat(numbers[i])}</div>
                  <div class="label">${labels[i]}</div>
                </div>`;
    }

    DOM.innerHTML = HTML;
}

function numberFormat(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

export { clock }