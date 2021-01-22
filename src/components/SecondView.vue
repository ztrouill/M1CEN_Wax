<template>
  <div class="second-view" :id="getId()">
     <div class="content-container">
      <subtitle :subtitle="subtitle"
                :color="chapitre.color"
                :id="chapitre.id"
                v-rellax="rellax"
                />
     
        <div class="paragraph second" v-rellax="relax">
          <p v-html="content[0]"> {{ content[0] }} </p>
          <br v-if="chapitre.id==3"/>
          <br v-if="chapitre.id==3"/>
          <p v-html="content[1]" v-if="chapitre.id==3"> {{ content[1] }} </p>
        </div>
      </div>
      <Illustration :legend="legend"
                    :i="1"
                    :chapter="chapitre.id"
                    v-if="chapitre.id > 1"/>
                    
  <figure class="img-container" v-if="chapitre.id==1">
            <img :src="getImg(chapitre.id, 1)">
            <img v-if="chapitre.id == 1" :src="getImg(chapitre.id, 2)">
        </figure>

    </div>
</template>

<script>
import Vue from 'vue'
import VueRellax from 'vue-rellax'
import Subtitle from "@/components/Subtitle.vue"
import Illustration from '@/components/Illustration.vue'

Vue.use(VueRellax);
export default {
    props: {
        chapitre: Object,
        content: Array,
        subtitle: String,
        legend: Object
    },
    data() {
        return {
            relax: {
              speed: -1,
              horizontal: true,
              vertical: false,
            }
        }
    },
    computed: {
      rellax: function() 
      {
        const relax = {
          speed: -1,
          horizontal: true,
          vertical: false
        }
        return this.chapitre.id == 1 ? false : relax;
              
           }
    },
    components: {
        Subtitle, Illustration
    },
    methods: {
        getImg(id, i) { 
            return require("@/assets/img/" + id + "/" + i +".png");
      },
      getId() {
          return "snd-view-" + this.chapitre.id;
      }
    }
}
</script>

<style lang="scss">



#snd-view-1 {
  display: flex;
  justify-content: space-between;
  align-content: space-evenly;
  width: 175vw;
  .content-container {
  width: 100vw;
  display: flex;
  align-items: center;
  padding-left: 3vw;
  .second > p {
    font-size: 2.5vh;
    .bold > .underlined {
      top: 1.3vh;
    }
  }
  }
  .img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  img {
    width: 45vw;
    padding-top: 15vh;
    &:first-child {
        padding-left: 10vw;
      }
    }
    &:last-child {
      padding-left: 10vw;
    }
  }
}

.paragraph.second > p {
  font-size: 2.8vh;
  .bold > .underlined {
    top: 1.8vh;
  }
}



#snd-view-2, #snd-view-3 {
  display: flex;
  //flex-direction: column;
  width: 129vw;
  .subtitle {
    font-size: 7vw;
    .underlined {
      width: 105vw;
      left: -30vw;
    }
  }
  .content-container {
    width: 90vw;//60vw;
    .subtitle-container {
      padding-left: 0;
    }
    .paragraph {
      padding: 6vw;
      width: 65vw;
    }
  //align-self: center;
  //padding-top: 5vw;//6vw;
  }
}

#snd-view-3 {
  padding-left: 20vw;
  .subtitle {
    .underlined {
      width: 60vw;
    }
  }
  .content-container {
    .paragraph {
      padding-top: 0;
    }
  }
  .img-intro-3 {
    figcaption {
      top: 96vh;
      left: 4.5vw;
    }
    img {
      top: 0;
      left: 0;
      max-height: 100vh;
    }
  }
}

.padding-top {
  padding-top: 4vw;
}
</style>