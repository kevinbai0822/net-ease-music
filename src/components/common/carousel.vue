<template>
    <div class="carousel-wrap">
        <div class="carousel-panel">
            <div class="carousel-items" v-for="img in imgList" :key="img.id">
                <img :src="img.src" alt="">
            </div>
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
    overflow: hidden;
    .carousel-panel{
        display: flex;
        width: 100%;
        .carousel-items{
            flex: 0 0 33.3333%;
            img{
                width: 100%;
            }
        }
    }
}
</style>
