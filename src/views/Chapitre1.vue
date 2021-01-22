<template>
  <div class="content" :id="setContentId()">
    <first-view   :chapitre="chapitre"
                  :content="intro"
                  :legend="src[0]"/>
    <second-view  :chapitre="chapitre"
                  :content="p[0]"
                  :subtitle="subtitles[0]"/>
  </div>
</template>

<script>
import FirstView from "@/components/FirstView.vue"
import SecondView from "@/components/SecondView.vue"
import VueRellax from 'vue-rellax'
import Vue from 'vue'
import content from "@/assets/data/partie1.json"
import source from '@/assets/data/sources.json'

Vue.use(VueRellax);

export default {
    props: {
        chapitre: Object,
    },
    components: {
      FirstView, SecondView
    },
    data() {
      return {
        intro: content.intro,
        src: source[1],
        subtitles: content.subtitles,
        p: content.p,
        rellax: {
          speed: -2,
          horizontal: true,
          vertical: false
        },

      }
    },
    methods: {
      getImg(id, i) {
        return require("@/assets/img/" + id + "/" + i + ".png");
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