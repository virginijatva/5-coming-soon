function clock(selector, deadline) {
    //input validation
    if(typeof selector !== 'string' || selector === '') {
        console.error('ERROR: netinkamo formato selektoriaus parametras.');
        return false;
    }
    if(typeof deadline !== 'string' || deadline === '' || !isFinite((new Date(`2000-${deadline}`)).getTime())) {
        console.error('ERROR: netinkamo formato deadline reiksme.');
        return false;
    }

    //logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: pagal pateikta selektoriu nepavyko rasti norimo DOM elemento.');
        return false;
    }
    
    let allValuesDOM = null;
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    let numbers = calcTime(deadline);
    let HTML = '';

    for (let i=0; i<4; i++) {
        HTML += `<div class="time">
                  <div class="value">${numberFormat(numbers[i])}</div>
                  <div class="label">${labels[i]}</div>
                </div>`;
    }

    DOM.innerHTML = HTML;
    allValuesDOM = document.querySelectorAll(`${selector} .value`);
    console.log(allValuesDOM);

    setInterval(function() {
       numbers = calcTime(deadline);
      for (let i=0; i<4; i++) {
          allValuesDOM[i].innerText = numberFormat(numbers[i]);
      }
    }, 1000);
}

function numberFormat(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function calcTime(deadline) {
    const date = new Date();
    const now = Date.now();
    let year = date.getFullYear();
    let fullDeadline = `${year}-${deadline}`;
    let fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime();

    if (fullDeadlineInMiliseconds < Date.now()) {
        year++;
        fullDeadline = `${year}-${deadline}`;
        fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime();
    }
    const diff = fullDeadlineInMiliseconds - now;
    const seconds = Math.round(diff / 1000);

    const days = Math.floor(seconds / 60 / 60 / 24);
    let unusedSeconds = seconds - days * 60 * 60 * 24;

    const hours = Math.floor(unusedSeconds / 60 / 60);
    unusedSeconds -= hours * 60 * 60;  

    const minutes = Math.floor(unusedSeconds / 60); 
    unusedSeconds -= minutes * 60;

    return [days, hours, minutes, unusedSeconds];
}

export { clock }