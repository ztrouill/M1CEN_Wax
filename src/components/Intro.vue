<template>
    <div class="intro-wrapper">
        <div class="intro-bg" 
        :class="chapitre.color">
            <div class="white-layer" >
                <div class="intro-content">
                    <h1 class="intro-title bebas" v-html="chapitre.title">{{chapitre.title}}</h1>
                    <p class="intro-text" v-html="introduction[chapitre.id]"></p>
                </div>
            </div>
        </div>
        <Anim v-if="chapitre.id==4"/>
    </div>
</template>

<script>

import Anim from '@/components/Anim.vue'

export default {
    props: {
        chapitre: Object,
    },
    components: { Anim// Menu intro
    },
    data() {
        return {
            introduction: [
                `Cri de guerre d’une culture, le <span class="bold">wax<div class="underlined underlined-white"></div></span>
                représente l’identité de l’Afrique de l’Ouest. Ces <span class="bold">modèles<div class="underlined underlined-white"></div></span>
                et <span class="bold">couleurs<div class="underlined underlined-white"></div></span> marquent la personnalité de toute une génération.
                Mais sa <span class="bold">provenance<div class="underlined underlined-white"></div></span> a toujours été un point d’interrogation pour ceux qui s’y intéressent.
                Avez-vous déjà pensé à toute la <span class="bold">symbolique<div class="underlined underlined-white"></div></span> derrière ce tissu ?`,
                `Comment s’habillaient les peuples d’Afrique de l’Ouest, <span class="bold">avant<div class="underlined underlined-white"></div></span> ?
                Mais quel est cet avant dont on parle ? Avant la <span class="bold">colonisation<div class="underlined underlined-white"></div></span> ?
                Avant les explorations de l’Afrique par les <span class="bold">voyageurs<div class="underlined underlined-white"></div></span> <span class="bold">européens<div class="underlined underlined-white"></div></span>
                à partir du <span class="bold">XVe siècle<div class="underlined underlined-white"></div></span> ?
                Plongez dans l’histoire métissée des <span class="bold">tissus<div class="underlined underlined-white"></div></span>
                et des <span class="bold">costumes<div class="underlined underlined-white"></div></span> en Afrique de l’Ouest... `,
                `<span class="italic">’Une femme doit savoir faire <span class="bold">usage<div class="underlined underlined-white"></div></span>
                du tissu-pagne, et plus spécifiquement de la <span class="bold">tenue-<div class="underlined underlined-white"></div></span><span class="bold">pagne<div class="underlined underlined-white"></div></span>,
                en adéquation avec les <span class="bold">circonstances<div class="underlined underlined-white"></div></span> de cette utilisation.</span>’
                Anne-Sophie Deleuze, anthropologue`,
                `N’allez pas penser que le wax n’est qu’un simple tissu, en effet il regorge de
                <span class="bold">symboliques<div class="underlined underlined-white"></div></span> et de <span class="bold">significations<div class="underlined underlined-white"></div></span>
                pour ceux et celles qui le portent...`,
                `Retrouvez ici toutes les illustrations et les sources...`
            ],
            showText: false
        }
    },
    methods: {
        getChapter() {
            return "chapter-" + this.index;
        },
    },
    computed: {
        chapter: function() {
            return "chapter-" + this.index
        }
    }
}
</script>

<style lang="scss">

@for $i from 0 through 3 {
    .bg-#{$i} {
        background: url("../assets/img/" + $i + "/bg.png");
    }
}

.intro-bg.red {
    .underlined-white {
        background-color: adjust-color($color: $red, $saturation: 10%, $lightness: 20%);
    }
    &:hover {
        .underlined-white {
            transition: background-color .5s ease;
            background-color: $red;
        }
    }
}

.intro-bg.yellow {
    .underlined-white {
        background-color: adjust-color($color: $yellow, $saturation: 10%, $lightness: 20%);
    }
     &:hover {
        .underlined-white {
            transition: background-color .5s ease;
            background-color: $yellow;
        }
    }
}

.intro-bg.blue {
    .underlined-white {
        background-color: adjust-color($color: $blue, $saturation: 10%, $lightness: 20%);
    }
     &:hover {
        .underlined-white {
            transition: background-color .5s ease;
            background-color: $blue;
        }
    }
}

.intro-bg.purple {
    .underlined-white {
        background-color: adjust-color($color: $purple, $saturation: 10%, $lightness: 20%);
    }
     &:hover {
        .underlined-white {
            transition: background-color .5s ease;
            background-color: $purple;
        }
    }
}

.intro-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
}

.white-layer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 1s;
    position: relative;
   &:hover {
        background-color:#FFFFFF;
        transition: 1s;
    }
}

.intro-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: scale(1);
    transition: 1s;
    position: absolute;
    width: 100%;
    &:hover {
        transform: scale(1.1);
        transition: 1s;
    }
}

.intro-bg {
    height: 70%;
    width: 100%;
    background-attachment: fixed;
    background-size: contain;
    cursor: pointer;
}

.intro-text {
    font-family: 'Josefin Sans';
    color: $black;
    font-size: 1.3em;
    line-height: 2.2em;
    width: 70%;
    margin: 0 auto;
    text-align: justify;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
}

#galerie {
    .intro-text {
        text-align: center;
    }
}
</style>