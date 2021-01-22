<template>
  <div class="first-view" :class="findColor()" >
      <div >
        <div class="fw-wrapper" >
            <div class="number">{{ chapitre.id }}</div>
            <div class="paragraph first" :class="getClass(chapitre.id)">
                <p v-html="p" v-for="(p, i) in content" :key="i"> {{ p }} </p>
            </div>
        </div>
            <h1 class="bebas fw-intro">{{ chapitre.title }}</h1>
      </div>
      <Illustration :legend="legend"
                    :i="0"
                    :chapter="chapitre.id"
                    v-if="chapitre.id != 0"/>
                    
      <figure v-else
              class="figure-first"
              :class="findClass('img-intro-')">
        <figcaption> <span class="italic">{{ legend.titre }},</span> <span v-if="legend.auteur">{{legend.auteur}},</span> {{legend.annee }} </figcaption>           
        <video controls>
                <source src="@/assets/img/0/0.mp4">
            </video>
    </figure>

     <!--figure class="figure-first" :class="findClass('img-intro-')">
        <figcaption> <span class="italic">{{ legend.titre }},</span> <span v-if="legend.auteur">{{legend.auteur}},</span> {{legend.annee }} </figcaption>
        <img :src="getImg(chapitre.id)" v-if="chapitre.id != 0">
        <video v-else controls>
            <source src="@/assets/img/0/0.mp4">
        </video>
    </figure-->
  </div>
</template>

<script>
import VueRellax from 'vue-rellax'
import Vue from 'vue'
import Illustration from './Illustration.vue'
Vue.use(VueRellax);

export default {
    props: {
        chapitre : Object,
        content: Array,
        legend: Object
    },
    components: {
        Illustration
    },
    data() {
        return {
           rellax: {
               speed: -2,
               horizontal: true,
               vertical: false
           }
        }
    },
    methods: {
        findColor() {
            return "underlined-" + this.chapitre.color;
        },
        getClass(id) {
            return "paragraph-" + id;
        },
        findClass(str) {
            return str + this.chapitre.id;
        },
        getImg(id) {
        console.log('id - ' + id);
        return require("@/assets/img/" + id + "/0.png");
      },
    }
}
</script>

<style lang="scss">
.first-view {
    height: 100vh;
  //  width: 100vw;
    padding-left: 5vw;
    display: flex;
}

.number {
    font-size: 65vh;
    font-family: "Bebas Neue";
}

.fw-wrapper {
    display: flex;
    align-items: center;
    width: 80vw;
    .paragraph {
        padding-left: 2vw;
        max-width: 57vw;//60%;
    }
}

.fw-intro {
    text-align: left;
    font-size: 5vw;
}

.figure-first { 
    display: flex;
    position: relative;
    figcaption {
        align-self: flex-end;
        padding-bottom: 2vh;
        font-size: .8em;
        position: absolute;
        left: -380px;//-35vw;
    }
}

.img-intro-0 {
    figcaption {
        left: -30.5vw;
    }
}

.img-intro-1 {
    figcaption {
        left: -29.5vw;
    }
}

.img-intro-2 {
    figcaption {
        left: -31.5vw;
    }
}

#content-3 {
    .first-view {
        width: 100vw;
    }
    .img-intro-3 {
    justify-content: center;
    width: 100%;
    img {
        position: absolute;
        top: -15vh;
        left: -2vw;
        max-height: 125vh;
    }
    figcaption {
       left: 0;
       top: 7vh;
    }
}
}
</style>