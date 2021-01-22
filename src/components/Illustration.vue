<template>
  <figure class="figure-first" :class="findClass('img-intro-')">
        <figcaption> <span class="italic">{{ legend.titre }},</span> <span v-if="legend.auteur">{{legend.auteur}},</span> {{legend.annee }} </figcaption>
        <img :src="getImg(chapter, i)" v-if="chapter != 0">
        <video v-else controls>
            <source src="@/assets/img/0/0.mp4">
        </video>
    </figure>
</template>

<script>
export default {
    props: {
        chapter: Number,
        legend: Object,
        i: Number
    //    part: String
    },
    methods: {
      findClass(str) {
            return str + this.chapter;
        },
      getImg(id, i) {
      console.log('id - ' + id);
      console.log("@/assets/img/" + id + "/" + i + ".png");
      return require("@/assets/img/" + id + "/" + i + ".png");
      }
    }
}
</script>

<style>

</style>