<template>
  <div class="content" :id="setContentId()">
    
    <first-view   :chapitre="chapitre"
                  :content="intro"
                  :legend="src[this.chapitre.id][0]"/>
  
    <second-view  :chapitre="chapitre"
                  :content="p[0]"
                  :subtitle="subtitles[0]"
                  :legend="src[this.chapitre.id][1]"
                  v-if="chapitre.id != 0"/>

    <third-view   :chapitre="chapitre"
                  :content="p[1]"
                  :subtitle="subtitles[1]"
                  v-if="chapitre.id == 1"
                  :legend="src[this.chapitre.id][1]"
                  />
  </div>
</template>

<script>
import FirstView from "@/components/FirstView.vue"
import SecondView from "@/components/SecondView.vue"
import ThirdView from "@/components/ThirdView.vue"
import source from '@/assets/data/sources.json'
import VueRellax from 'vue-rellax'
import Vue from 'vue'

Vue.use(VueRellax);


export default {
  
    props: {
        chapitre: Object,
        content: Object,
        source: Array
    },
    components: {
      FirstView, SecondView, ThirdView
    },
    data() {
      return {
         rellax: {
               speed: 0,
               horizontal: true,
               vertical: false
           },
        intro: this.content.intro,
        src: source,
        subtitles: this.content.subtitles,
        p: this.content.p,
      }
    },
    methods: {
      getImg(id, i) {
        return require("@/assets/img/" + id + "/" + i + ".png");
      },
      setContentId() {
        console.log("id - " + this.chapitre.id);
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