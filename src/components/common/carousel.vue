<template>
    <div class="carousel-wrap">
        <div class="carousel-panel" v-for="img in imgList" :key="img.id">
            <img :src="img.src" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'carousel',
    data() {
        return {

        }
    },
    props: {
        imgList: {
            type: Array,
            twoWay: true
        }
    },
    components: {

    },
    methods: {

    }
}
</script>
<style lang='scss'>
@import '../../assets/base/variable.scss';

.carousel-wrap{
    display: flex;
    width: 100%;
    overflow: hidden;
    .carousel-panel{
        width: 33.3333%;
        flex-basis: 33.3333%;
        img{
            width: 100%;
        }
    }
}
</style>
