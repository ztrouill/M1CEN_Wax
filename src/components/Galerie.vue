<template>
    <section id="galerie" >
       
        <Intro :chapitre="galerie"
                @mouseenter="galerie.isActive = !galerie.isActive"
                v-scroll-to='{
                        el: "#galerie",
                        onDone: onDone,
                        x: true}'/>
        <div v-if="galerie.isActive" class="g2-container">
            <transition name="show-sources">
                <Source v-if="sourcePageActive"
                        @hide-source="hideSource"
                        :isActive="sourcePageActive"/>
            </transition>
            <span id="go-to-sources" @click="showSources()">Aller plus loin</span>
            <LottieAnimation path="loader.json" class="loader"/>
            <div class="galerie-img-container galerie-hide scroll-x-to-enter-active" 
                >
                <vue-load-image v-for="(a, i) in 12"
                                :key="source[1][i].source"
                >
                    <img slot="image"
                        :src="getImgSrc(1, i)"
                        @click="showDetail(1, i)"
                        :class="{ 'hide-text-img' : i == 1}"
                        @load="incrImg()"
                        class="galerie-img"
                    />
                    <img slot="preloader" src="../assets/img/img-loader.gif"/>
                </vue-load-image>

                <vue-load-image v-for="(b, j) in 4"
                                :key="source[2][j].source"
                >
                    <img slot="image"
                        :src="getImgSrc(2, j)"
                        @click="showDetail(2, j)"
                        @load="incrImg()"
                        class="galerie-img"
                    />
                    <img slot="preloader" src="../assets/img/img-loader.gif"/>
                </vue-load-image>

                <vue-load-image v-for="(c, k) in 5"
                                :key="source[3][k].source"
                                >

                    <img slot="image"
                        :src="getImgSrc(3, k)"
                        @click="showDetail(3, k)"
                        @load="incrImg()"
                        class="galerie-img"
                    />
                    <img slot="preloader" src="../assets/img/img-loader.gif"/>
                </vue-load-image>
            </div>
            <BarreMenu :chapitre="galerie" v-if="!sourcePageActive"/>
            <transition name="show-detail">
            <GalerieDetail v-if="detail"
                            :color="color"
                            :chap="chap"
                            :i="img"
                            :source="source"
                            :detail="detail"
                            @hide-detail="hideDetail"/>
        </transition>
            
        
        </div>
        
    </section>
</template>

<script>

import Vue from 'vue'
import VueRellax from 'vue-rellax'
import VueLoadImage from 'vue-load-image'
import Intro from "@/components/Intro.vue"
import BarreMenu from "@/components/BarreMenu.vue"
import GalerieDetail from "@/components/GalerieDetail.vue"
import Source from "@/components/Source.vue"
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

Vue.use(VueRellax);

export default {
    props: {
        chapitre: Array,
        source: Array
    },
    components: {
     // VueZoom,
        Intro, BarreMenu, GalerieDetail, Source, VueLoadImage, LottieAnimation
    },
    data() {
        return {
            galerie: {
                id: 4,
                color: "white",
                title: "<span class='red-color'>G</span><span class='yellow-color'>a</span><span class='blue-color'>l</span><span class='purple-color'>e</span><span class='red-color'>r</span><span class='yellow-color'>i</span><span class='blue-color'>e</span>",
                isActive: false
            },
            chap: 1,
            img: 0,
            detail: false,
            color: "",
            sourcePageActive: false,
            imgLoad: 0
        }
    },
    methods: {
        getImgSrc(folder, img) {
            return require("@/assets/img/" + folder + "/" + img + ".png");
        },

        showSources() {
            document.querySelector("body").classList.add("hide-scroll-x");
            this.sourcePageActive = !this.sourcePageActive
        },
        showDetail(chap, i) {
            this.chap = chap;
            this.img = i;
            this.color = this.chapitre[chap].color;
            this.detail = !this.detail;
            document.querySelector("body").classList.add("hide-scroll-x");
        },
        showGalerie() {
            document.querySelector(".galerie-img-container").classList.add("scroll-x-to-enter-active");
            document.querySelector(".galerie-img-container").classList.remove("galerie-tmp-transform");
        },
        
        hideDetail() {
                this.detail = !this.detail;
        },
        hideSource() {
                this.sourcePageActive = !this.sourcePageActive;
                document.querySelector("body").classList.add("hide-scroll-y");
                document.querySelector("body").classList.remove("hide-scroll-x");
        },
        getBgClass(id) {
                return this.chapitre[id].color + "-background";
        },
        onDone() {
            this.galerie.isActive = !this.galerie.isActive
            document.querySelector('body').classList.add("hide-scroll-y");
        },
        incrImg() {
            this.imgLoad++;
            
            if (this.imgLoad == 21) {
                const galerie = document.querySelector(".galerie-img-container");
                const loader = document.querySelector(".loader");

                galerie.classList.remove("galerie-hide");
                galerie.classList.add("galerie-show");
                loader.style.display = "none";
            }
        }
    },
}
</script>

<style lang="scss">
    #galerie {
        height: 100vh;
        flex-direction: row;
        .intro-wrapper {
            cursor: pointer;
        }
        .figure-detail {
            position: fixed;
            top: 0;
            left: 0;
            align-items: center;
            overflow-x: hidden;
            width: 100vw;
            figcaption {
                position: relative;
                left: 0;
                align-self: center;
                width: 50vw;
                height: 100vh;
                padding: 0 3vw;
                display: flex; 
                align-items: center;  
                div:not(:last-child) {
                    text-align: justify;
                    padding-bottom: 2vh;
                    max-width: 44vw;
                }
            }
            .img-detail-container {
                background: white;
                width: 100vw;
            }
        }
        #ruban-container {
            z-index: 0;
            .underlined-yellow {
                top: 48vh;
            }
        }
    }
    
    .galerie-container {
        display: flex;
        align-items: center;

        .figure-first {
            width: 100vw;
            justify-content: center;
            align-items: center;
        }
    }

    .hideImg {
        display: none;
    }

    .hover {
        &:hover {
            transform: scale(1.3);
        }
    }

    .g-container {
        display: flex;
    }

    .g2-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    .galerie-img-container {
        display: flex;
        padding-left: 10vw;
        padding-top: 3vh;
        max-height: 100vh;
        flex-wrap: wrap;
        align-content: center;
        width: 165vw;
        img {
            max-height: 27vh;
            padding-right: 3vw;
            padding-bottom: 5vh;
            &:hover {
                transition: transform 1s ease;
                transform: scale(1.2);
            }
            transition: transform 1s ease;
            transform: scale(1);
        }
    }

    .galerie-hide {
        opacity: 0;
        filter: blur(10px);
    }

    .galerie-show {
        opacity: 1;
        filter: blur(0);
        transition: all 0.7s;
    }


    .galerie2-container:last-child {
        img {
            padding-bottom: 0;
        }
    }

    .galerie-tmp-transform {
        transform: translateX(100vw);
    }

.show-detail-enter-active {
    animation: showDetail .5s ease;
}

.show-detail-leave-active {
    animation: showDetail .5s ease reverse;
}

@keyframes showDetail {
    from {
        transform: translateX(100vw);
    }
    to {
        transform: translateX(0vw);
    }
}

.show-sources-enter-active {
    animation: showSources .5s ease;
}

.show-sources-leave-active {
    animation: showSources .5s ease reverse;
}

@keyframes showSources {
    from {
        transform: translateY(-100vw);
    }
    to {
        transform: translateY(0vw);
    }
}

#go-to-sources {
    text-decoration: underline dotted;
    cursor: pointer;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 2vh;
    font-style: italic
}

.hide-text-img {
    display: none;
}

#motif-galerie {
    width: 100vw;
}

.loader {
    position: absolute;
}
</style>