<template>
  <div id="app">
    <!--<Welcome>-->

    <Chapitre v-for="chapitre in chapitres"
              :key="chapitre.id"
              :chapitre="content[chapitre.id].chapitre"
              :source="src[chapitre.id]"
              :content="content[chapitre.id]"
              />

    <!--<Galerie-->
  </div>
</template>

<script>

//https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working

import Chapitre from '@/components/Chapitre.vue'
//import Introduction from '@/components/Introduction.vue'
import partie0 from "@/assets/data/partie0.json"
import partie1 from "@/assets/data/partie1.json"
import partie2 from "@/assets/data/partie2.json"
import partie3 from "@/assets/data/partie3.json"
import source from '@/assets/data/sources.json'

export default {
  name: 'App',
  components: {
    Chapitre
  },
  data() {
    return {
      isFocus: false,
      src: source,
      content : [partie0, partie1, partie2, partie3],
      chapitres: [
          {
            id : 0,
            title: "Introduction",
            color: "red",
            route: 'introduction',
            isActive: false
          },
          {
            id : 1,
            title: "Une histoire (mé)tissée",
            color: "yellow",
            route: "histoire-metisee",
            isActive: false
          },
          {
            id : 2,
            title: "Usages",
            color: "blue",
            route: "usages",
            isActive: false
          },
          {
            id : 3,
            title: "Un langage non verbal",
            color: "purple",
            route: "langage-non-verbal",
            isActive: false
          }
      ],
    }
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a, ul {
  text-decoration: none;
}

#app {
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}
</style>
