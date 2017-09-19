<template>
    <div class="player-wrap">
        <div class="player-handle-wrap">
            <div class="player-duration"></div>
            <div class="played-duration"></div>
            <div class="player-slider"></div>
        </div>
        <audio ref='audio'>
            <source :src="playList[0].url" type="audio/mpeg"/>
        </audio>
        <button @click='getSong'>click</button>
    </div>
</template>
<script>
export default {
    name: 'player',
    props: {
        playList: {
            type: Array,
            twoWay: true
        }
    },
    data() {
        return {
            player: null
        }
    },
    mounted(){
        this.player = this.$refs.audio
    },
    methods: {
        getSong(){
            
        },
        play(){
            
        }
    }
}
</script>
<style lang="scss" scoped="">
@import '../../assets/base/variable.scss';
.player-wrap{
    width: 100%;
    height: 20px;
    .player-handle-wrap{
        position: relative;
        height: 100%;
        margin-left: 6px;
        margin-right: 6px;
        width: 100%;
        .player-duration{
            position: absolute;
            top: 50%;
            left: 0;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            height: 2px;
            width: 100%;
            background-color: #e4e4e4
        }
        .played-duration{
            position: absolute;
            top: 50%;
            left: 0;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            height: 2px;
            width: 50%;
            background-color: $theme-color;
        }
        .player-slider{
            position: absolute;
            top: 50%;
            -webkit-transform: translate3d(-50%,-50%,0);
            transform: translate3d(-50%,-50%,0);
            -webkit-transform-origin: center;
            transform-origin: center;
            transition: all .3s ease;
            width: 12px;
            height: 12px;
            background: #fff;
            border-radius: 50%;
            border: 1px solid #e4e4e4;
            cursor: pointer;

            &:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate3d(-50%,-50%,0);
                transform: translate3d(-50%,-50%,0);
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
