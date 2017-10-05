<template>
    <div class="volume-wrap">
        <!-- <volume></volume> -->
        <div class="volume-panel" @mousemove="voMove" @mouseup="voUp">
            <div class="volume-total" ref='vTotal'></div>
            <div class="volume-current" :style='{width: voBarWid + "%"}'></div>
            <div class="volume-slider" ref='vSlider' @mousedown="voStart"></div>
        </div>
    </div>
</template>
<script>
import volume from 'icons/volume-high'
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: 'volume',
    data(){
        return{
            voSlider: null,
            isSlider: false,
            startX: null,
            voWidth: null,
            curLeft: null,
            voBarWid: null,
            newLeft: null,
        }
    },
    components: {
        volume,
    },
    computed: {
        ...mapGetters([
            'playVolume'
        ])
    },
    mounted(){
        this.voWidth = this.$refs.vTotal.offsetWidth
        this.voSlider = document.querySelector('.volume-slider')
        this.voBarWid = this.playVolume * 100
        this.voSlider.style.left = this.playVolume * 100 + '%'
    },
    methods: {
        voStart(e){
            this.isSlider = true
            e.stopPropagation()
            let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
            let x = e.pageX || e.clientX + scrollX
            this.startX = x
            this.curLeft = (this.voSlider.style.left.replace("%",""))/100
        },
        voMove(e){
            e.stopPropagation()
            this.voBarWid = null
            let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
            let x = e.pageX || e.clientX + scrollX
            let _that = this
            if(this.startX){
                let minus = (x - this.startX)/this.voWidth + this.curLeft
                if(minus>=0 && minus<=1){
                    this.newLeft = minus * 100 + '%'
                    this.voBarWid = minus * 100
                    this.voSlider.style.left = this.newLeft
                    this.$store.commit('setVolume', minus)
                }
            }
        },
        voUp(e){
            e.stopPropagation()
            this.isSlider = false
            this.startX = null
            this.voSlider.style.left = this.newLeft
            let curVolume = this.newLeft.replace("%","") / 100
            this.$store.commit('setVolume', curVolume)
        }
    }
}
</script>
<style lang='scss'>
@import '../../assets/base/variable.scss';

.volume-wrap {
    position: absolute;
    // display: flex;
    // align-items: center;
    padding: 0 .12rem;
    top: -0.45rem;
    right: .1rem;
    width: 2.95rem;
    height: 0.5rem;
    border: $border;
    background-color: #fff;
    &:after{
        content: '';
        position: absolute;
        border: 10px solid transparent;
        border-top: 10px solid #fff;
        bottom: -20px;
        right: 82px;
        z-index: 200;
    }
    &:before{
        content: '';
        position: absolute;
        border: 12px solid transparent;
        border-top: 12px solid #dddde1;
        bottom: -24px;
        right: 80px;
        z-index: 100;
    }
    .volume-panel {
        position: relative;
        height: 100%;
        margin-left: 6px;
        margin-right: 6px;
        .volume-total {
            position: absolute;
            top: 50%;
            left: 0;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            height: 2px;
            width: 100%;
            background-color: #e4e4e4
        }
        .volume-current {
            position: absolute;
            top: 50%;
            left: 0;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            height: 2px;
            background-color: $theme-color;
        }
        .volume-slider {
            position: absolute;
            top: 50%;
            left: 0;
            -webkit-transform: translate3d(-50%, -50%, 0);
            transform: translate3d(-50%, -50%, 0);
            -webkit-transform-origin: center;
            transform-origin: center; // transition: all .3s ease;
            width: 12px;
            height: 12px;
            background: #fff;
            border-radius: 50%;
            border: 1px solid #e4e4e4;
            cursor: pointer;

            &:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate3d(-50%, -50%, 0);
                transform: translate3d(-50%, -50%, 0);
                -webkit-transform-origin: center;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: $theme-color;
            }
        }
    }
}
</style>
