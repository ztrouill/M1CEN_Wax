import Vuex from "vuex"

const state = {
    id: 3,
    title: "Un langage non verbal",
    color: "purple",
    intro:   `N’allez pas penser que le wax n’est qu’un simple tissu, en effet il regorge de
    <span class="bold">symboliques<div class="underlined underlined-` + state.color + `"></div></span> et de <span class="bold">significations<div class="underlined underlined-` + state.color + `"></div></span>
    pour ceux et celles qui le portent...`,
    content: {
        intro : [
            `<span class="first-letter">C</span>omme nous l’avons déjà expliqué, le wax tissu va au-delà d’un simple habit en coton. Il représente un véritable <span class="bold">lien social<div class="underlined underlined-white"></div></span> 
            , et son usage peut servir de <span class="bold">moyen de communication<div class="underlined underlined-white"></div></span> 
            sur son <span class="bold">rang social<div class="underlined underlined-white"></div></span>.
            Le tissu-pagne est partout et tout le temps.
            En plus, d’être un véritable <span class="bold">révélateur social<div class="underlined underlined-white"></div></span>,
            ses motifs sont codifiés et renvoient à des <span class="bold">imaginaires bien spécifiques:<div class="underlined underlined-white"></div></span> 
            argent, performance, amour...`
      ],
    }
};

const getters = {
    chapitre3: state => state
};

let chapitre3 = new Vuex.Store({
    state: state,
    getters: getters,
    strict: true
});

export default chapitre3;