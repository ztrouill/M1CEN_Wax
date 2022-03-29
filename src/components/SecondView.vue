<template>
  <div class="second-view" :id="getId()" v-rellax="rellax">
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
                    v-if="chapitre.id > 0"/>
                    
    <Next :chapitre="chapitre"
          v-if="this.chapitre.id == 3"/>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRellax from 'vue-rellax'
import Subtitle from "@/components/Subtitle.vue"
import Illustration from '@/components/Illustration.vue'
import Next from "@/components/Next.vue"

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
        Subtitle, Illustration, Next
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

  .figure-first {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    figcaption {
      left: 0;
      bottom: 5vh;
    }
    img {
      width: 45vw;
      }
    }
}

.paragraph.second > p {
  font-size: 2.5vh;
  .bold > .underlined {
    top: 1.3vh;
  }
}

#snd-view-2, #snd-view-3 {
  display: flex;
  width: 129vw;
  .subtitle {
    font-size: 7vw;
    .underlined {
      width: 105vw;
      left: -30vw;
    }
  }
  .content-container {
    width: 90vw;
    .subtitle-container {
      padding-left: 0;
    }
    .paragraph {
      padding: 6vw;
      width: 65vw;
    }
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
      padding: 17vw;
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

#snd-view-2 {
  .figure-first {
    figcaption {
      left: -22.5vw;
    }
  }
}
</style>