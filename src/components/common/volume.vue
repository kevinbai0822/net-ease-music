<template>
    <div class="volume-wrap">
        <div class="volume-panel">
            <div class="volume-total"></div>
            <div class="volume-current"></div>
            <div class="volume-slider"></div>
        </div>
    </div>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: 'volume',
    data(){
        return{

        }
    },
    computed: {
        ...mapGetters([
            'playVolume'
        ])
    }
}
</script>
<style lang='scss'>
@import '../../assets/base/variable.scss';

.volume-wrap {
    position: absolute;
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
