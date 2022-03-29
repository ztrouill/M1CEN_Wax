<template>
   <figure class="figure-first figure-detail">
        <vue-magnifier class="img-detail-container" :src="getImg(chap, i)" :src-large="getImg(chap, i)"
                        :class="getBorderColor()"/>
        <figcaption :class="getBgClass(chap)" >
            <div class="figcaption-container">
                <div v-if="source[chap][i].titre">
                    <span class="bold"> Titre : </span>
                    <span class="italic"> {{ source[chap][i].titre }} </span>
                </div>

                <div v-if="source[chap][i].auteur">
                    <span class="bold"> Auteur : </span>
                    <span> {{ source[chap][i].auteur }} </span>
                </div>   

                <div v-if="source[chap][i].annee">
                    <span class="bold"> Année : </span>
                    <span> {{ source[chap][i].annee }} </span>
                </div> 

                <div v-if="source[chap][i].ouvrage">
                    <span class="bold"> Ouvrage : </span>
                    <span class="italic"> {{ source[chap][i].ouvrage }} </span>
                </div> 

                <div v-if="source[chap][i].legende">
                    <span class="bold"> Légende : </span>
                    <span > {{ source[chap][i].legende }} </span>
                </div> 

                <div v-if="source[chap][i].collection">
                    <span class="bold"> Collection : </span>
                    <span > {{ source[chap][i].collection }} </span>
                </div> 

                <div v-if="source[chap][i].source">
                    <a :href="source[chap][i].source" class="bold"> Source </a>
                </div>
            </div>
            <div class="cross-container" @click="removeDetail">
                <img src="@/assets/img/cross.svg"/>
            </div>
        </figcaption>
    </figure>
</template>

<script>
import VueMagnifier from "@/components/vue-magnifier"

export default {
    props: {
        chap : Number,
        i: Number,
        color: String,
        source: Array,
        detail: Boolean
    },
    components: {
        VueMagnifier
    },
    methods: {
          getBgClass() {
            return this.color + "-background";
      },
      getImg(id, i) {
            return require("@/assets/img/" + id + "/" + i + ".png");
      },
      getBorderColor() {
          return "border-" + this.color;
      },
      removeDetail() {
          document.querySelector("body").classList.remove("hide-scroll-x");
          this.$emit('hide-detail', this.detail);
      }
    }
}
</script>

<style lang="scss">
    #galerie {
        .preview {
            height: 100vh;
        }
        .magnifying-glass {
            width: 250px;
            height: 250px;
        }
        .border-yellow {
            .magnifying-glass {
                border: 5px solid $yellow;
            }
        }
         .border-blue {
            .magnifying-glass {
                border: 5px solid $blue;
            }
        }
         .border-purple {
            .magnifying-glass {
                border: 5px solid $purple;
            }
        }
        a {
            text-decoration: underline dotted;
        }
        .figure-detail {
            .cross-container {
                position: absolute;
                top: 1vh;
                right: 1vw;
                img {
                    width: 1vw;
                }
            }
        }
    }
</style>