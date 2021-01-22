<template>
  <div class="third-view">
    
    <div class="content-container"
            >
        <div class="paragraph">
        <p v-html="content[0]"> {{ content[0] }} </p>
        <br/>
        <p v-html="content[1]"
            :class="{'citation' : chapitre.id == 1 }"> {{ content[1] }} </p>
        </div>
    </div>

    <Subtitle   :subtitle="subtitle"
                :color="chapitre.color"
                :id="chapitre.id"/>

    <Illustration :legend="legend"
                  :i="3"
                  :chapter="chapitre.id"
                  />
  </div>
</template>

<script>
import Subtitle from "@/components/Subtitle.vue"
import Illustration from "@/components/Illustration.vue"

export default {
    props: {
        chapitre: Object,
        content: Array,
        subtitle: String,
        legend: Object
    },
    components: {
        Subtitle, Illustration
    },
    data() {
        return {
             relax: {
              speed: -1,
              horizontal: true,
              vertical: false
            }
        }
    }
}
</script>

<style lang="scss">
.no-legend {
    position: relative;
}

.third-view {
    display: flex;
    .content-container {
        align-self: center;
        width: 50vw;
        padding-right: 2vw;
        padding-left: 10vw;
        padding-top: 6vw;
    }
    .figure-first {
        align-items: center;
        img {
            max-height: 69vh;
        }
        figcaption {
            left: 0;
        }
    }
    .subtitle-container {
        position: relative;
        .underlined-yellow {
            top: 15.5vh;
            height: 15vh;
            width: 50vw;
            left: -45vw;
        }
    }
}
</style>