<template>
  <div class="content">
    {{chapitre.id}}
    <Menu/>
    <first-view :chapitre="chapitre"></first-view>
      <img :src="getImg(chapitre.id)" v-if="chapitre.id != 0">
       <video v-else controls>
        <source src="@/assets/img/0/0.mp4">
      </video>
  </div>
</template>

<script>
import FirstView from "@/components/FirstView.vue"
//import Parallax from "vue-parallaxy"
import VueRellax from 'vue-rellax'
import Vue from 'vue'
import Menu from '@/components/Menu.vue'

Vue.use(VueRellax);

export default {
    props: ["chapitre", "content", "source"],
    components: {
      FirstView, Menu
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
      getImg(id) {
        return require("@/assets/img/" + id + "/0.png");
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
</style>