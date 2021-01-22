<template>
  <div class="content" :id="setContentId()">
    <first-view :chapitre="chapitre"
                :content="intro"
                :legend="src[0]"/>
  </div>
</template>

<script>
import FirstView from "@/components/FirstView.vue"
//import Parallax from "vue-parallaxy"
import VueRellax from 'vue-rellax'
import Vue from 'vue'
import contentt from "@/assets/data/partie3.json"
import source from '@/assets/data/sources.json'

Vue.use(VueRellax);

export default {
    props: {
        chapitre: Object,
    },
    components: {
      FirstView
    },
    data() {
      return {
        intro: contentt.intro,
        src: source[3],
        content: {
          0: {
            paragraph:  [
              `<span class='first-letter'>C</span>omme nous l’avons déjà expliqué, le wax tissu va au-delà d’un simple habit en coton. Il représente un véritable <span class='bold'>lien social<div class='underlined underlined-white'></div></span> 
              , et son usage peut servir de <span class='bold'>moyen de communication<div class='underlined underlined-white'></div></span> 
              sur son <span class='bold'>rang social<div class='underlined underlined-white'></div></span>.
              Le tissu-pagne est partout et tout le temps.
              En plus, d’être un véritable <span class='bold'>révélateur social<div class='underlined underlined-white'></div></span>,
              ses motifs sont codifiés et renvoient à des <span class='bold'>imaginaires bien spécifiques:<div class='underlined underlined-white'></div></span> 
              argent, performance, amour...`
          ],
          legend: '<span class="italic">Robe de femme</span>, 1ere moitié du XXe siècle'
        },
        1: {
          paragraph: `<span class="first-letter">D</span>ès l’exploration du continent par <span class="bold">Al Bakrî<div class="underlined underlined-white"></div></span> au XIe siècle,
            semble s’imposer le mythe d’une <span class="bold">Afrique sauvage nue<div class="underlined underlined-yellow"></div></span> . Mais une lecture de son texte présente d’emblée le costume comme un enjeu de
            <span class="bold">pouvoir<div class="underlined underlined-yellow"></div></span>  et un signe de <span class="bold>richesse<div class="underlined underlined-yellow"></div></span>,comme dans sa
            <span class="bold>description de la cour du souverain de l’empire du Ghana.<div class="underlined underlined-yellow"></div></span>`,
          subtitle: 'Pouvoir <br/> et <br/> richesses',
          legends: ''
          }
        },
        rellax: {
          speed: -2,
          horizontal: true,
          vertical: false
        }
      }
    },
    methods: {
      getImg(id) {
        return require("@/assets/img/" + id + "/0.png");
      },
      setContentId() {
        return "content-" + this.chapitre.id;
      },
    }  
}
</script>

<style lang="scss">
.content {
  display: flex;
  position: relative;
  img, video {
    max-height: 100vh;
    z-index: 999;
  }
 
}

li {
  list-style: none;
}
</style>