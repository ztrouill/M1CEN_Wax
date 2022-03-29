<template>
  <div v-html="subtitle"
        class="bebas subtitle-container"
       

        >
      {{subtitle}}
  </div>
</template>

<script>
import Vue from 'vue'
import VueRellax from 'vue-rellax'
import vuescroll from 'vue-scroll'

Vue.use(VueRellax);
Vue.use(vuescroll);

export default {
    props: {
        subtitle: String,
        color: String,
        id: Number
    },
    data() {
        return {
        }
    },
    computed: {
        isFirst: function() {
            return this.id == 1 ? false : true
        }
    },
    methods: {
        getColor() {
            return 'underlined-' + this.color;
        },
    },

}
</script>

<style lang="scss">
.subtitle-container {
    text-align: left;
    font-size: 7em;
    line-height: 15.5vw;
    padding-left: 4.5vw;
}

.subtitle {
    position: relative;
}

.underlined-left {
    padding-left: 0;
    .subtitle {
        padding-left: 4vw;
        .underlined {
            width: 115%;
            left: -7%;
        }
    }
}
</style>