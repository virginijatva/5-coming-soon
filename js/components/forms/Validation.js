class Validation {
   
    static isValidName(name) {
        // netuscias tekstas
        if (!Validation.isNonEmptyText(name)) {
            return 'Vardas turi buti ne tuscias.';
        }
        // nei prieky, nei gale negali buti tarpu
        if (!Validation.noSpacesAroundText(name)) {
            return 'Vardo priekyje ir gale negali buti tarpu';
        }
        // negali buti daugiau nei vienas zodis (nera tarpu)
        if(!Validation.isSingleWord(name)) {
            return 'Vardas turi buti vienas zodis';
        }
        //pirma raide didzioji
        if (!Validation.isFirstLetterUppercase(name)) {
            return 'Vardo pirmoji raide turi buti didzioji';
        }

        //visos likusios tik mazosios
        if (!Validation.isLowercaseButFirst(name)) {
            return 'Vardo visos raides, iskyrus pirmaja, turi buti mazosios.';
        }
        //sudarytas tik is raidziu (nekreipiant demesio i tikslias abeceles)
        if (!Validation.onlyAlphabetLetters(name)) {
            return 'Varde gali buti tik abeceles raides';
        }
        //tik abeceles raides (galimybe nurodyti, kokios raides priimtinos)
        return true;
    }

    static isValidEmail (email) {
        // netuscias tekstas
        if (!Validation.isNonEmptyText(email)) {
            return 'Email turi buti ne tuscias.';
        }

        // nei prieky, nei gale negali buti tarpu
        if (!Validation.noSpacesAroundText(email)) {
            return 'El. paste priekyje ir gale negali buti tarpu';
        }
        //butinas ir tik vienas @ simbolis
        if (!Validation.textContainsLetter(email, '@')) {
            return ' El. pastas turi tureti viena @ simboli.';
        }

        const emailParts = email.split('@');
        //pries @ (lokali dalis) turi buti netuscias tekstas
        //uztenka patikrinti, kad pirmas simbolis nera @
        if (!Validation.isNonEmptyText(emailParts[0])) {
            return 'El. pasto lokali dalis turi buti ne tuscia.';
        }

        //uz @ (domeno dalis) turi buti netuscias tekstas
        //uztenka patikrinti, kad paskutinis simbolis nera @
        if (!Validation.isNonEmptyText(emailParts[1])) {
            return 'El. pasto domeno dalis turi buti ne tuscia.';
        }
        return true;
    }

    static isValidText (text) {
        if (!Validation.isNonEmptyText(text)) {
            return 'Tekstas turi buti ne tuscias.';
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

        for (let i=0; i<0; i++) {
            if (upperCase[i] === lowerCase[i]) {
                return false;
            }
        }
    }
}

export { Validation }