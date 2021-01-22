import Vuex from "vuex"

const state = {
    id: 0,
    title: "Introduction",
    color: "red",
    intro:  `Cri de guerre d’une culture, le <span class="bold">wax<div class="underlined underlined-` + state.color + `"></div></span>
    représente l’identité de l’Afrique de l’Ouest. Ces <span class="bold">modèles<div class="underlined underlined-` + state.color + `"></div></span>
    et <span class="bold">couleurs<div class="underlined underlined-` + state.color + `"></div></span> marquent la personnalité de toute une génération.
    Mais sa <span class="bold">provenance<div class="underlined underlined-` + state.color + `"></div></span> a toujours été un point d’interrogation pour ceux qui s’y intéressent.
    Avez-vous déjà pensé à toute la <span class="bold">symbolique<div class="underlined underlined-` + state.color + `"></div></span> derrière ce tissu ?`,
    content: {
        intro : [
        `<span class="first-letter">D</span>’où vient le <span class="bold">wax<div class="underlined underlined-white"></div></span> et ses motifs colorés ?
        <span class="bold">“Wax hollandais”<div class="underlined underlined-white"></div></span>, nous disent les enseignes des boutiques où l’on trouve ces étoffes bariolées.`,
        `Pourtant, celles qui le portent le plus souvent sont issues de la <span class="bold">diaspora d’Afrique de l’Ouest<div class="underlined underlined-white"></div></span>.
        Mais s’agit-il alors d’une étoffe <span class="bold">traditionnelle<div class="underlined underlined-white"></div></span>, et pourquoi celle-ci serait-elle hollandaise ?
        Et le wax est-il un tissu exclusivement féminin ?`,
        `Et si l’on tentait de <span class="bold">tisser une histoire de femmes et de costumes<div class="underlined underlined-white"></div></span> en Afrique de l’Ouest ?`
      ],
    }
};

const getters = {
    chapitre0 : state => state,
    color: state => state.color
};

let chapitre0 = new Vuex.Store({
    state: state,
    getters: getters,
    strict: true
});

export default chapitre0;