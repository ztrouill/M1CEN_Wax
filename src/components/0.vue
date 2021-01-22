<template>
  <section>
        <router-link :to="{ name: 'introduction' }"
                    @click.native="isActive = !isActive"
                    v-scroll-to='"#chapter-0"'>
            <Intro :chapitre="chapitre"/> <!--Vue router ici-->
        </router-link>
        {{isActive}}
        <router-view :chapitre="chapitre" v-if="isActive"/>
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
            chapitre: {
                id : 0,
                title: "Introduction",
                color: "red",
                intro : [
                    `<span class="first-letter">D</span>’où vient le <span class="bold">wax<div class="underlined underlined-yellow"></div></span> et ses motifs colorés ? “Wax hollandais”, nous disent les enseignes des boutiques où l’on trouve ces étoffes bariolées. 
                    Pourtant, celles qui le portent le plus souvent sont issues de la diaspora d’Afrique de l’Ouest. Mais s’agit-il alors d’une étoffe traditionnelle, et pourquoi celle-ci serait-elle hollandaise ? Et le wax est-il un tissu exclusivement féminin ?
                    Et si l’on tentait de tisser une histoire de femmes et de costumes en Afrique de l’Ouest ?`,
                ],
                content: 
                {
                    paragraph: [
                        `<span class="first-letter">D</span>ès l’exploration du continent par <span class="bold">Al Bakrî<div class="underlined underlined-yellow"></div></span> au XIe siècle,
                        semble s’imposer le mythe d’une <span class="bold">Afrique sauvage nue<div class="underlined underlined-yellow"></div></span>. Mais une lecture de son texte présente d’emblée le costume comme un enjeu de
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