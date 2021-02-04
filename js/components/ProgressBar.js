class ProgressBar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if(!this.isValidSelector()) {
            return false;
        }
        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            console.error('ERROR: netinkamo formato selektorius.');
            return false;
        }
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: nurodyto elemento pagal duota selektoriu nera.');
            return false;
        }
        this.DOM = DOM;

        return true;
    }

    generateProgressBar(progressBar) {
        console.log(progressBar);
        return `<div class="progress-bar">
                    <div class="texts">
                        <div class="label">${progressBar.label}</div>
                        <div class="value">${progressBar.value}%</div>
                    </div>
                    <div class="bar">
                        <div class="progress" style="width: ${progressBar.value}%">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`;
    }

    render() {
        let HTML = '';

        for(const progress of this.data) {
            HTML += this.generateProgressBar(progress);
        }

        this.DOM.innerHTML += HTML;
    }

}

export { ProgressBar }