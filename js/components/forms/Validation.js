class Validation {
   
    static isValidName(name) {
        // netuscias tekstas
        if (!Validation.isNonEmptyText(name)) {
            return Toast.show('Name field cannot be empty.', 'error');
        }
        // nei prieky, nei gale negali buti tarpu
        if (!Validation.noSpacesAroundText(name)) {
            return Toast.show('Name field cannot contain empty spaces.', 'error');
        }
        // negali buti daugiau nei vienas zodis (nera tarpu)
        if(!Validation.isSingleWord(name)) {
            return Toast.show('Name has to be one word.', 'error');
        }
        //pirma raide didzioji
        if (!Validation.isFirstLetterUppercase(name)) {
            return Toast.show('Name first letter has to be uppercase.', 'error');
        }

        //visos likusios tik mazosios
        if (!Validation.isLowercaseButFirst(name)) {
            return Toast.show('Name field cannot be empty.', 'error');
        }
        //sudarytas tik is raidziu (nekreipiant demesio i tikslias abeceles)
        if (!Validation.onlyAlphabetLetters(name)) {
            return Toast.show('Please, use only Alphabet Letters in the name.', 'error');
        }
        //tik abeceles raides (galimybe nurodyti, kokios raides priimtinos)
        return true;
    }

    static isValidEmail (email) {
        // netuscias tekstas
        if (!Validation.isNonEmptyText(email)) {
            return Toast.show('Email field cannot be empty.', 'error');
        }

        // nei prieky, nei gale negali buti tarpu
        if (!Validation.noSpacesAroundText(email)) {
            return Toast.show('Email field cannot containt empty spaces.', 'error');
        }
        //butinas ir tik vienas @ simbolis
        if (!Validation.textContainsLetter(email, '@')) {
            return Toast.show('Email field has to contain @ symbol.', 'error');
        }

        const emailParts = email.split('@');
        //pries @ (lokali dalis) turi buti netuscias tekstas
        //uztenka patikrinti, kad pirmas simbolis nera @
        if (!Validation.isNonEmptyText(emailParts[0])) {
            return Toast.show('Email field local part cannot be empty.', 'error');
        }

        //uz @ (domeno dalis) turi buti netuscias tekstas
        //uztenka patikrinti, kad paskutinis simbolis nera @
        if (!Validation.isNonEmptyText(emailParts[1])) {
            return Toast.show('Email field domain part cannot be empty.', 'error');
        }
        return true;
    }

    static isValidText (text) {
        if (!Validation.isNonEmptyText(text)) {
            return Toast.show('Text message field cannot be empty.', 'error');
        }
        return true;
    }

    static isNonEmptyText(text) {
        if (typeof text !== 'string' || text === '') {
            return false;
        }

        return true;
    }

    static isSingleWord(text) {
        if(text.includes(' ')) {
            return false;
        }
        return true;
    }

    static isFirstLetterUppercase(text) {
        return text[0] === text[0].toUpperCase();
    }

    static noSpacesAroundText(text) {
        return text === text.trim();
    }

    static isLowercaseButFirst(text) {
        const rest = text.slice(1);
        return rest === rest.toLowerCase();
    }

    static textContainsLetter(text, letter, count = 1) {
        let letterCount = 0;
        for (let symbol of text) {
            if(symbol === letter) {
                letterCount++;
            }
        }

        // const found = text.split('').filter(symbol => symbol === letter);
        // letterCount = found.length;

        return letterCount === count;
    }

    static onlyAlphabetLetters(text) {
        const upperCase = text.toUpperCase();
        const lowerCase = text.toLowerCase();
        const size = text.length;

        for (let i=0; i<size; i++) {
            if (upperCase[i] === lowerCase[i]) {
                return false;
            }
        }

        return true;
    }
}

export { Validation }