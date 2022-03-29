<template>
  <div class="third-view">
    
    <Subtitle   :subtitle="subtitle"
                :id="chapitre.id"
                v-if="chapitre.id == 2"
                v-rellax="relax"/>

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
                :id="chapitre.id"
                v-if="chapitre.id == 1"/>

    <Illustration :legend="legend"
                  :i="2"
                  :chapter="chapitre.id"
                  />

    <img src="../assets/img/motifs/0.png" v-if="chapitre.id == 2"
        class="motifs"
        v-rellax="rellaxImg"/>

    <Next :chapitre="chapitre"/>
  </div>
</template>

<script>
import Subtitle from "@/components/Subtitle.vue"
import Illustration from "@/components/Illustration.vue"
import Next from "@/components/Next.vue"

export default {
    props: {
        chapitre: Object,
        content: Array,
        subtitle: String,
        legend: Object
    },
    components: {
        Subtitle, Illustration, Next
    },
    data() {
        return {
             relax: {
              speed: 1,
              horizontal: true,
              vertical: false
            },
            rellaxImg: {
                speed: -2,
                horizontal: true,
                vertical: false
            }
        }
    },
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
    .next {
        width: 11vw;
        color: $black;
    }
}

#content-2 {
    .third-view {
        position: relative;
        .subtitle-container {
            padding: 0;
            width: 100vw;
            position: absolute;
            bottom: 0;
            left: 18vw;
            .underlined {
                width: 90vw;
                left: -38.4vw;
            }
        }
        .figure-first {
            padding-right: 4vw;
        }
        img {
            max-height: 100vh;
        }
        .content-container {
            width: 80vw;
            padding: 0;
            display: flex;
            justify-content: center;
            padding-left: 5vw;
            padding-right: 3vw;
            .paragraph {
                max-width: 65vw;
            }
        }

        .motifs {
            right: 35vw;
        }

        .next {
            z-index: 9999;
        }
    }
}

#content-1 {
    .third-view {
        padding-left: 10vw;
        .content-container {
            padding-right: 4vw;
        }
    }
}
</style>