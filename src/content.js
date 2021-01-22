import Vuex from "vuex"

const state = {
    chapitres:
    [
        {
          id : 0,
          title: "Introduction",
          color: "red"
        },
        {
          id : 1,
          title: "Une histoire (mé)tissée",
          color: "yellow",
          content: [
            {
              paragraph: [
                `<span class="first-letter">N</span>ous devons les premières descriptions de costumes dans la région aux <span class="bold>voyageurs arabes<div class="underlined underlined-white"></div></span>
                qui l’explorent au XIe siècle, comme le géographe <div class="underlined underlined-white">Al Bakrî</div>.`,
                `C’est le début d’une <span class="bold">histoire complexe et métissée<div class="underlined underlined-white"></div></span> des étoffes et costumes en Afrique de l’Ouest,
                de la <span class="bold">nudité<div class="underlined underlined-white"></div></span> et des <span class="bold">usages<div class="underlined underlined-white"></div></span>
                 décrits par les voyageurs arabes et européens à la complexité que nous connaissons aujourd’hui, en passant par le morcellement et l’exploitation coloniale de la région,
                 qui participent de l’histoire du <span class="bold">costume et des tissus<div class="underlined underlined-white"></div></span>.`,
              ]
            },
            {
              subtitle: `Pouvoir<br/>et<br/>richesses`,
              paragraph: `<span class="first-letter">D</span>ès l’exploration du continent par <span class="bold">Al Bakrî<div class="underlined underlined-` + this.chapitre.color + `"></div></span> au XIe siècle,
              semble s’imposer le mythe d’une <span class="bold">Afrique sauvage nue<div class="underlined underlined-` + this.chapitre.color + `"></div></span> . Mais une lecture de son texte présente d’emblée le costume comme un enjeu de
              <span class="bold">pouvoir<div class="underlined underlined-` + this.chapitre.color + `"></div></span>  et un signe de <span class="bold>richesse<div class="underlined underlined-` + this.chapitre.color + `"></div></span>,comme dans sa
              <span class="bold>description de la cour du souverain de l’empire du Ghana.<div class="underlined underlined-` + this.chapitre.color + `"></div></span>`
            }
          ]
        },
        {
          id : 2,
          title: "Usages",
          color: "blue"
        },
        {
          id : 3,
          title: "Un langage non verbal",
          color: "purple"
        }
      ],
};

const getters = {
    chapitres: state => state.chapitres
};

let content = new Vuex.Store({
    state: state,
    getters: getters,
    strict: true
  });
  
  global.store = content;
  
  export default content;
: