<template>
    <div id="ruban-container">
        <span class="ruban"><div class="underlined underlined-red" ></div></span>
        <span class="ruban"><div class="underlined underlined-yellow"></div></span>
        <span class="ruban"><div class="underlined underlined-blue"></div></span>
        <span class="ruban"><div class="underlined underlined-purple"></div></span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#ruban-container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    .ruban {
        position : relative;
        width: 100vw;
        height: 13vh;
        .underlined-yellow, .underlined-purple {
            width: 100vw;
            height: 6vh;
        }

        .underlined-yellow {
            top: 50vh;
            animation: rubanHorizontal 15s ease infinite;
        }
            .underlined-purple {
            top: 10vh;
            animation: rubanHorizontal 10s ease alternate-reverse infinite;
        }
        .underlined-red, .underlined-blue{
            height: 100vh;
            width: 6vh;
        }
        .underlined-blue {
            left: 40vw;
            top: 0;
            animation: rubanVertical 10s ease alternate-reverse infinite;
        }
            .underlined-red {
            left: -25vw;
            top: -200vh;
            animation: rubanVertical 6s ease infinite;
        }
    }
}

@keyframes rubanHorizontal {
    from {
        left: 50vw;
    }
    to {
        left: -200vw;
    }
}

@keyframes rubanVertical {
    from {
        top: -110vh;
    }
    to {
        top: 200vh;
    }
}
</style>