<template>
    <div class="carousel-wrap">
        <div class="carousel-panel" ref='cPanel' :style='{transform: "translateX("+ slide +"%)", transition: "all 1s ease"}'>
            <div class="carousel-items" v-for="img in imgList" :key="img.id">
                <img :src="img.src" alt="">
            </div>
        </div>
        <button @click='slider'>sdagbh</button>
    </div>
</template>
<script>
export default {
    name: 'carousel',
    data() {
        return {
            itemsNum: 0,
            slideNum: 0,
            slide: null,
            isLoop: true,
        }
    },
    props: {
        imgList: {
            type: Array,
            twoWay: true
        }
    },
    mounted(){
        this.itemsNum = this.$refs.cPanel.childNodes.length
    },
    components: {

    },
    methods: {
        slider(){
            if(this.isLoop){
                let temp = this.imgList.shift()
                this.slide = 0
                this.imgList.push(temp)
            }
            // this.slide = -33.3333
            // if(this.slideNum < this.itemsNum - 1){
            //     this.slideNum++
            //     this.slide = this.slideNum * -33.3333
            // }else if(this.slideNum === this.itemsNum - 1){
            //     this.slideNum = 0
            //     this.slide = 0
            // }
        }
    }
}
</script>
<style lang='scss'>
@import '../../assets/base/variable.scss';

.carousel-wrap{
    &::-webkit-scrollbar{
        display: none;
    }
    overflow-x: hidden;
    .carousel-panel{
        display: flex;
        width: 100%;
        align-items: flex-end;
        transition: all 1s ease;
        .carousel-items{
            flex: 0 0 33.3333%;
            transform-origin: bottom;
            img{
                width: 100%;
            }
        }
    }
}
</style>
