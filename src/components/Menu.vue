<template>
  <nav class="menu-wrapper">
      <ul class="menu-main">
            <li class="bebas menu-main-title"
                    v-for="menu in menus"
                    :key="menu.id"
                    @mouseover="playAnimationIn"
                    @mouseleave="playAnimationOut"
                    v-scroll-to='{
                        el: findScrollTo(menu.id),
                        onDone: setFocus,
                        onStart: hideMenu,
                        x: false}'
                   >
                        {{ menu.id }} {{ menu.title }}
                    <div class="underlined menu-main-underlined underlined-start"
                        :class="getColor(menu.color)"/>
            </li>
        <li class="bebas menu-main-galerie"
              v-scroll-to='{
                        el: "#galerie",
                        onStart: hideMenu,
                        x: false}'>
            <span class="red-color to-black">G</span><span class="yellow-color to-black">A</span><span class="blue-color to-black">L</span><span class="purple-color to-black">E</span><span class="red-color to-black">R</span><span class="yellow-color to-black">I</span><span class="blue-color to-black">E</span>
        </li>
      </ul>
      <div class="cross-container" @click="removeMenu">
          <img src="@/assets/img/cross.svg"/>
      </div>
  </nav>
</template>

<script>
export default {
    props: {
        chapitre: Object,
        menu: Boolean
    },
    methods: {
        getColor(color) {
            return "underlined-" + color;
        },
        playAnimationIn(event) {
            const el = event.target.childNodes[1];
            el.classList.remove("underlined-start");
            el.classList.add("underlined-in");
            el.classList.remove("underlined-out");
            el.classList.add("underlined-finish");
        },
        playAnimationOut(event) {
            const el = event.target.childNodes[1];
            el.classList.add("underlined-out");
            el.classList.remove("underlined-in");
            el.classList.add("underlined-start");
            el.classList.remove("underlined-finish");
        },
        findScrollTo(id) {
            return "#chapitre-" + id;
        },
        setFocus() {
            if (document.querySelector("#content-" + this.chapitre.id))
                document.querySelector("#content-" + this.chapitre.id).classList.remove("scrollTo-enter-active");
          
        },
        hideMenu() {
            document.querySelector("body").classList.remove("hide-scroll-y"); 
            this.$emit('hide-menu', this.menu);
            this.chapitre.isActive = !this.chapitre.isActive;
        },
        removeMenu() {
            this.$emit('hide-menu', this.menu);
        }
    },

    data() {
        return {
            menus: [
                {
                    id: 0,
                    title: "Introduction",
                    color: "red",
                },
                {
                    id: 1,
                    title: "Une histoire (mé)tissée",
                    color: "yellow",
                },
                {
                    id: 2,
                    title: "Usages",
                    color: "blue"
                },
                {
                    id: 3,
                    title: "Un langage non verbal",
                    color: "purple"
                },
            ],
            hover: 3,
        }
    }
}
</script>

<style lang="scss">
a {
    color: $black;
}
.menu {
    z-index: 999;
}

.menu-wrapper {
    position: fixed;
    z-index: 999999;
    background: white;
    height: 100%;
    .menu-main {
        display: flex;
        flex-direction: column;
        text-align: left;
        height: 100%;
        justify-content: center;
        z-index: 999;
        margin-left: 3vw;
        margin-right: 6vw;
        .menu-main-title {
            position: relative;
            font-size: 4.5em;
            padding-bottom: 5vh;
            cursor: pointer;
        }
        .menu-main-title:last-child {
            padding-bottom: 14vh;
        }
        .menu-main-underlined {
            height: 40px;
            top: 6vh;
            left: -3vw;
        }
        .menu-main-galerie {
            font-size: 4vw;
            text-align: right;
            margin-right: -3vw;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            position: absolute;
            bottom: 0;
            margin-bottom: 2vh;
            right: 5vw;
            cursor: pointer;
        }
    }

    .underlined-start {
        width: 0;
    }

    .underlined-finish {
        width: 110%;
    }

    .underlined-in {
        animation: underlined-in 1.5s;
        //width: 110%
    }

    .underlined-out {
        animation: underlined-out 1.5s;
        width: 0;
    }
    @keyframes underlined-in {
        from {
            width: 0;
        }
        to {
            width: 110%;
        }
    }

     @keyframes underlined-out {
        from {
            width: 110%;
        }
        to {
            width: 0;
        }
     }
    .cross-container {
        position: absolute;
        top: 0;
        right: 0;
        img {
            width: 1.5vw;
            margin: 2vw;
        }
    }
}

.to-black {
    &:hover {
        color: $black;
    }
}


</style>