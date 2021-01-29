import { clock } from './components/clock.js';
import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/renderSocials.js';

clock('.clock', '01-04 14:00:00');
renderSocials('footer > .socials', socialsData);