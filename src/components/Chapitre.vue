<template>
    <section>
        <Intro :chapitre="chapitre"
                :id="chapter()"
                v-scroll-to='{
                        el: findScrollTo(),
                        onDone: onDone,
                        x: true}'/>
            <div v-if="chapitre.isActive" class="scroll-x-to-enter-active">
                    <Content :chapitre="chapitre"
                                :content="content"
                                :source="source"
                                />
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
            console.log("find scroll - " + this.chapitre.id);
            return "#chapitre-" + this.chapitre.id;
        },
         onDone() {
           // const id = this.chapitre.id;
            console.log("hello world");
            this.chapitre.isActive = !this.chapitre.isActive
            document.querySelector('body').classList.add("hide-scroll-y");
           document.querySelector("#chapitre-" + this.chapitre.id).classList.add("scroll-x-enter-active");
            if (document.querySelector(".active"))
                console.log("hey boy")
            console.log(document.querySelector(this.findScrollTo()));
           // document.querySelector(this.getId()).classList.add("scroll-x-enter-active");
            //Ici rajouter un emit d'une data dans l'app pour cacher les
        },
        getId() {
            return "#content-" + this.chapitre.id;
        }
    },
}
</script>

<style lang="scss">
    .scroll-x-to-enter-active {
     animation: slideTo .5s ease;
     //transition: transform 1s;
   //@ transform: translateX(-100vw);
    }
    .scroll-x-to-enter {
        transform: translateX(0);
    }

   /// .im-active {
      //  transform: translateX(0vw);
    //}

    @keyframes slideTo {
        from {
            transform: translateX(100vw);
        }
        to { 
            transform: translateX(0vw);
        }
    }

    
</style>