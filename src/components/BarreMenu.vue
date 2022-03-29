<template>
  <div class="menu" v-if="chapitre.isActive">
       <transition name="fade">
                <div id="menu-bar-container"
                    v-if="chapitre.isActive"
                    @click="menu = !menu">
                    <img src='@/assets/img/bars.svg' id="menu-bar"/>
                </div>
            </transition>
            <transition name="show-menu">
               <Menu :chapitre="chapitre"
                    :menu="menu"
                    v-if="menu"
                    @hide-menu="hideMenu"
                    />
            </transition>
  </div>
</template>

<script>
import Menu from "./Menu.vue"

export default {
    props: {
        chapitre: Object
    },
    components: {
        Menu
    },
    data() {
        return {
            menu: false
        }
    },
    methods: {
        hideMenu() {
            this.menu = !this.menu;
        }
    }
}
</script>

<style lang="scss">
.menu {
    position: fixed;
    top: 0;
    img {
        color: $black;
        width: 1.5vw;
        margin: 1.5vw;
        cursor: pointer;
    }
    #menu-bar-container {
        position: fixed;
    }
}

.fade-enter-active {
  transition: opacity 2.5s;
}

.fade-leave-active {
  transition: opacity .01s;
}


.fade-enter, .fade-leave-to {
  opacity: 0;
}

.show-menu-enter-active {
    animation: showMenu .5s ease;
}

.show-menu-leave-active {
    animation: showMenu .5s ease reverse;
}


@keyframes showMenu {
    from {
        transform: translateX(-100vw);
    }
    to {
        transform: translateX(0vw);
    }
}
</style>