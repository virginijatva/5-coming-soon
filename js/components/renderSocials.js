function renderSocials(selector, data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const socialObject = data[i];

        HTML += `<a href="${socialObject.href}" target="blank" class="fa fa-${socialObject.icon}"></a>`;

    }
    const DOM = document.querySelector(selector);
    DOM.innerHTML = HTML;
}

export { renderSocials }