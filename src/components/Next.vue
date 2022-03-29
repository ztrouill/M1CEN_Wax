<template>
  <span class="bebas next"
          :class="getColor()"
          v-scroll-to='{
                        el: findScrollTo(),
                        onDone: onDone,
                        onStart: onStart,
                        x: false,
                        y: true}'>
          >>
    </span>
</template>

<script>
export default {
    props: {
        chapitre: Object
    },
    methods: {
        findScrollTo() {
            if (this.chapitre.id == 3)
                return "#galerie";
            let i = this.chapitre.id;
            i++;
            return "#chapitre-" + i;
      },
        onStart() {
            document.querySelector("#ruban-container").setAttribute("style", "display: none");
            this.chapitre.isActive = !this.chapitre.isActive;
        },
        onDone() {
            document.querySelector('body').classList.remove("hide-scroll-y");
            document.querySelector("#ruban-container").removeAttribute("style");
        },
        getColor() {
            return this.chapitre.color + "-color";
        }
    }
}
</script>

<style lang="scss">
.next {
   cursor: pointer;
   font-size: 15vh;
 }

 #snd-view-3 {
     .next {
        padding-right: 10vw;
     }
 }
</style>