<template>
    <section class="main">
        <Intro :chapitre="chapitre"
                :id="chapter()"
                v-scroll-to='{
                        el: findScrollTo(),
                        onDone: onDone,
                        x: true}'
        />
        <div v-if="chapitre.isActive" >
            <Content :chapitre="chapitre"
                        :content="content"
                        :source="source"
                        class="scroll-x-to-enter-active"
                        v-if="chapitre.id != 4"/>
            <BarreMenu :chapitre="chapitre"/>                  
        </div>
    </section>
</template>

<script>
import BarreMenu from './BarreMenu.vue'
import Content from './Content.vue'
import Intro from './Intro.vue'

export default {
    props: {
        chapitre: Object,
        content: Object,
        source: Array
    },
    components: {
        BarreMenu, Content, Intro
    },

    methods: {
       chapter() {
           return 'chapitre-' + this.chapitre.id;
       },
         findScrollTo() {
            return "#chapitre-" + this.chapitre.id;
        },
         onDone() {
            this.chapitre.isActive = !this.chapitre.isActive
            document.querySelector('body').classList.add("hide-scroll-y");
            document.querySelector('#app').classList.remove("hide-scroll-x");
            this.scrollContainer();
        },
        getId() {
            return "#content-" + this.chapitre.id;
        },

        scrollContainer() {
            const container = document.querySelector("html");
            // Scroll horizontally with mouse
            document.addEventListener("wheel", (e) => {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            });
        }
    }
}
</script>

<style lang="scss">
    .scroll-x-to-enter-active {
     animation: slideTo .5s ease;
    
    }
    .scroll-x-to-enter {
        transform: translateX(0);
    }

    @keyframes slideTo {
        from {
            transform: translateX(100vw);
        }
        to { 
            transform: translateX(0vw);
        }
    }
</style>