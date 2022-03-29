<template>
  <section id="welcome">
     <Anim/>
      <h1 class="intro-title bebas">
          Wax et tissus en Afrique de l'Ouest
      </h1>
  </section>
</template>

<script>
import VueRellax from 'vue-rellax'
import Vue from 'vue'
import Anim from '@/components/Anim.vue'

Vue.use(VueRellax);

export default {
    components: {
        Anim
    }
}
</script>

<style lang="scss">
    #welcome {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        position: relative;
        
    }
</style>