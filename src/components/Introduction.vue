<template>
    <div class="intro-container">
        <!--router-link v-for="(chapitre, index) in chapitres"
                    :key="index"
                    :to="{ name: chapitre.route }"
                    @click.native="chapitre.isActive = !chapitre.isActive"
                    v-scroll-to='{
                        el: findScrollTo(index),
                        onDone: goToContent(index),
                        x: true}'>-->
            <intro  v-for="(chapitre, index) in chapitres"
                    :key="index"
                    v-scroll-to='{
                        el: findScrollTo(index),
                        onDone: goToContent(index),
                        x: true}'
                    :chapitre="chapitre"
                    :index="index"></intro>
    </div>
</template>

<script>
import Intro from './Intro.vue'

export default {
    props: {
        chapitres: Array
    },
    components: {
        Intro, 
    },
    methods: {
        findScrollTo(id) {
            console.log("find scroll - " + id);
            return "#chapter-" + id;
        },
        goToContent(id) {
            console.log("id -+- " + id);
        //    document.querySelector('body').classList.add("hide-scroll-y");
          //  document.querySelector('#content-' + id).classList.add("scrollTo-enter-active");
            //Ici rajouter un emit d'une data dans l'app pour cacher les
        },
    },
    computed: {
        findElement: function(id) {
            return "#chapter-" + id;
        }
    }
}
</script>

<style lang="scss">
    .scrollTo-enter-active, .scrollTo-leave-active {
        transition: transform .5s ease;
        transform: translateX(-100vw);
    }
</style>