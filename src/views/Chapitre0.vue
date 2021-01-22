<template>
  <div class="content" :id="setContentId()">
    
    <first-view :chapitre="chapitre"
                :content="intro"
                :legend="src[0]"/>
    <div class="void-div"/>
    <div class="next"
        v-scroll-to='{
                        el: "#chapter-1",
                        onDone: resetFocus,
                        x: false
                        }'> 
      <!--img  src="@/assets/img/arrow.svg"
      
            :class="chapitre.color"/-->
    </div>
  </div>
</template>

<script>
import FirstView from "@/components/FirstView.vue"
import VueRellax from 'vue-rellax'
import Vue from 'vue'
import content from '@/assets/data/partie0.json'
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
        intro: content.intro,
        src: source[0],
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
      resetFocus() {
         document.querySelector("body").classList.remove("hide-scroll-y"); // je remets le scroll y
          this.chapitre.isActive = !this.chapitre.isActive;
      }
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

.void-div {
  width: 21vw;
}


li {
  list-style: none;
}
</style>