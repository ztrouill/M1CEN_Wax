<template>
  <section>
      <router-link :to="{ name: 'histoire-metisee' }"
                    @click.native="isActive = !isActive">
        <Intro :chapitre="chapitre"/> <!--Vue router ici-->
    </router-link>
    <router-view   :chapitre="chapitre"
                    v-if="isActive"/>
    </section>
</template>

<script>
import Intro from "./Intro.vue"

export default {
    components: {
        Intro
    },
    data() {
        return {
            isActive: false,
            chapitre : {
                id : 1,
                title: "Une histoire (mé)tissée",
                color: "yellow",
                intro : [
                    `<span class="first-letter">N</span>ous devons les premières descriptions de costumes dans la région aux <span class="bold>voyageurs arabes<div class="underlined underlined-white"></div></span>
                    qui l’explorent au XIe siècle, comme le géographe <span class="bold">Al Bakrî<div class="underlined underlined-white"></div></span>.`,
                    `C’est le début d’une <span class="bold">histoire complexe et métissée<div class="underlined underlined-white"></div></span> des étoffes et costumes en Afrique de l’Ouest,
                    de la <span class="bold">nudité<div class="underlined underlined-white"></div></span> et des <span class="bold">usages<div class="underlined underlined-white"></div></span>
                décrits par les voyageurs arabes et européens à la complexité que nous connaissons aujourd’hui, en passant par le morcellement et l’exploitation coloniale de la région,
                qui participent de l’histoire du <span class="bold">costume et des tissus<div class="underlined underlined-white"></div></span>.`,
                ],
                content: 
                {
                    paragraph: [
                        `<span class="first-letter">D</span>ès l’exploration du continent par <span class="bold">Al Bakrî<div class="underlined underlined-white"></div></span> au XIe siècle,
                        semble s’imposer le mythe d’une <span class="bold">Afrique sauvage nue<div class="underlined underlined-yellow"></div></span> . Mais une lecture de son texte présente d’emblée le costume comme un enjeu de
                        <span class="bold">pouvoir<div class="underlined underlined-yellow"></div></span>  et un signe de <span class="bold>richesse<div class="underlined underlined-yellow"></div></span>,comme dans sa
                        <span class="bold>description de la cour du souverain de l’empire du Ghana.<div class="underlined underlined-yellow"></div></span>`
                    ],
                    subtitle: `Pouvoir<br/>et<br/>richesses`,
                },    
            }
        }
    }
}
</script>

<style>

</style>