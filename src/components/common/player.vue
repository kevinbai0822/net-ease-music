<template>
    <div class="play-panel">
        <div class="album-cover"></div>
        <div class="play-operate">
            <a href="javascript:;" class="prev">
                <prev  />
            </a>
            <a href="javascript:;" v-if="isPlay"  @click='playerPlay' class="play">
                <play />
            </a>
            <a href="javascript:;" v-else  @click='playerPause' class="play">
                <pause />
            </a>
            <a href="javascript:;" @click='playNext' class="next">
                <next />
            </a>
        </div>
        <div class="play-msg">
            <div class="song-wrap">
                <p class="song-msg">
                    <span class="song-name">东极岛岛歌</span> -
                    <span class="songer-name">上海音乐学院学生</span>
                </p>
                <p class="play-time-msg">
                    <span class="play-time">{{songCurrentTime}}</span> /
                    <span class="song-time">{{songDuration}}</span>
                </p>
            </div>
            <div class="progress-wrap">
                <div class="player-wrap">
                    <div class="player-handle-wrap" @mousemove="sliderMove" @mouseup="sliderUp">
                        <div class="player-duration" ref='progressBar'></div>
                        <div class="played-duration" :style="{width: playBarWid + '%'}"></div>
                        <div class="player-slider" @mousedown="sliderDown"></div>
                    </div>
                    <audio ref='audio' autoplay='' preload="true" @timeupdate="songPlaying">
                        <source :src="playUrl" type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        </div>
        <div class="play-setting-wrap">
            <a href="javascript:;">
                <heart />
            </a>
            <a href="javascript:;">
                <loop />
            </a>
            <a href="javascript:;">
                <volume />
            </a>
            <a href="javascript:;">
                <playList />
            </a>
        </div>
    </div>
</template>
<script>
import prev from 'icons/skip-previous-circle'
import next from 'icons/skip-next-circle'
import play from 'icons/play-circle'
import pause from 'icons/pause-circle'
import loop from 'icons/loop'
import playList from 'icons/playlist-play'
import volume from 'icons/volume-high'
import heart from 'icons/heart-outline'

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
            player: null,
            isPlay: true,
            songDuration: '00:00',
            songCurrentTime: '00:00',
            isEnd: Boolean,
            proBarWid: null,    //进度条长度
            playBarWid: null,   //播放条长度
            playSlider: Object, //滑块dom
            isSlider: true, //是否处于滑动状态,true为自然播放状态
            startX: null,
            curLeft: null,  //点击滑块时移动的距离
            newLeft: null,
            newTime: null,  //滑动之后新的时间
            playUrl: '',
            playIndex: null,    //播放位置
        }
    },
    components: {
        prev,
        next,
        play,
        pause,
        loop,
        playList,
        volume,
        heart,
    },
    mounted() {
        this.player = this.$refs.audio
        this.isEnd = this.player.ended
        this.proBarWid = this.$refs.progressBar.offsetWidth
        this.playSlider = document.querySelector(".player-slider")
        let that = this
        document.addEventListener('mouseup', function(){
            // that.sliderUp(event)
        })
    },
    methods: {
        formatTime(number) {
            let minute = parseInt(number / 60),
                second = parseInt(number % 60)
            minute = minute >= 10 ? minute : "0" + minute
            second = second >= 10 ? second : "0" + second
            return minute + ':' + second
        },
        playerPlay() {
            // if(this.playIndex == null){
            //     this.playIndex = 0
            //     this.playUrl = this.playList[0].url
            //     this.player.play()
            // }else if(this.playIndex != null){
            //     this.playIndex += 1
            //     this.playUrl = this.playList[this.playIndex].url
            // }
            // this.player.load()
            this.player.play()
            this.isPlay = !this.isPlay
            this.songDuration = this.formatTime(this.player.duration)
        },
        playerPause() {
            this.player.pause()
            this.isPlay = !this.isPlay
        },
        playerEnd(){
            this.player.currentTime = 0
        },
        playNext(){
            // if(this.playIndex == null){
            //     this.playIndex = 0
            //     this.playUrl = this.playList[0]
            //     this.player.load()
            //     this.player.play()
            // }else if(this.playIndex != null){
            //     this.playIndex += 1
            //     this.playUrl = this.playList[this.playIndex]
            //     this.player.load()
            //     this.player.play()
            // }
        },
        songPlaying(){
            this.songCurrentTime = this.formatTime(this.player.currentTime)
            if(this.isSlider){
                this.playBarWid = this.player.currentTime / this.player.duration * 100
                this.playSlider.style.left = this.playBarWid + '%'
            }
            if(this.player.ended){
                this.isPlay = true
                this.playerEnd()
            }
        },
        sliderDown(e){
            this.isSlider = false
            e.stopPropagation()
            let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
            let x = e.pageX || e.clientX + scrollX
            this.startX = x
            this.curLeft = (this.playSlider.style.left.replace("%",""))/100
        },
        sliderMove(e){
            e.stopPropagation()
            this.playBarWid = null
            let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
            let x = e.pageX || e.clientX + scrollX
            if (this.startX){
                let distance = (x - this.startX)/this.proBarWid + this.curLeft
                if(distance>=0 && distance<=1){
                    this.newLeft = distance * 100 + '%'
                    this.playBarWid = distance * 100
                    this.playSlider.style.left = this.newLeft
                    this.songCurrentTime = this.formatTime(this.player.duration * distance)
                }
            }
        },
        sliderUp(e){
            e.stopPropagation()
            this.isSlider = true
            this.startX = null
            this.playSlider.style.left = this.newLeft
            if(this.newLeft){
                this.player.currentTime = this.newLeft.replace("%","") / 100 * this.player.duration
            }
            console.log(this.player.currentTime)
        },
    },
    watch: {
        
    }
}
</script>
<style lang="scss">
@import '../../assets/base/variable.scss';

.play-panel {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: .63rem;
    border-top: $border;
    user-select: none;
    .album-cover {
        width: .63rem;
        height: .63rem;
        background: url("../../assets/images/album1.jpg") center no-repeat;
        background-size: cover;
    }
    .play-operate {
        display: flex;
        align-items: center;
        margin-left: .35rem;
        a {
            .material-design-icon {
                width: .30rem;
                height: .30rem;
                margin-top: .01rem;
                svg {
                    width: .30rem;
                    height: .30rem;
                    fill: $theme-color;
                }
            }
            &:not(:last-child) {
                margin-right: .2rem;
            }
        }
        .play {
            .material-design-icon {
                width: .35rem;
                height: .35rem;
                margin: 0;
                svg {
                    width: .35rem;
                    height: .35rem;
                }
            }
        }
    }
    .play-msg {
        flex-grow: 1;
        margin-left: .3rem;
        .song-wrap {
            position: relative;
            height: .15rem;
            p {
                position: absolute;
                span:first-child {
                    color: #666;
                }
                span:last-child {
                    color: #979797;
                }
            }
            .song-msg {
                left: 0;
                font-size: .13rem;
            }
            .play-time-msg {
                right: 0;
            }
        }
        .progress-wrap {
            margin-top: .05rem;
            width: 100%;
            .player-wrap {
                width: 100%;
                height: 20px;
                .player-handle-wrap {
                    position: relative;
                    height: 100%;
                    margin-left: 6px;
                    margin-right: 6px;
                    .player-duration {
                        position: absolute;
                        top: 50%;
                        left: 0;
                        -webkit-transform: translateY(-50%);
                        transform: translateY(-50%);
                        height: 2px;
                        width: 100%;
                        background-color: #e4e4e4
                    }
                    .played-duration {
                        position: absolute;
                        top: 50%;
                        left: 0;
                        -webkit-transform: translateY(-50%);
                        transform: translateY(-50%);
                        height: 2px;
                        background-color: $theme-color;
                    }
                    .player-slider {
                        position: absolute;
                        top: 50%;
                        left: 0;
                        -webkit-transform: translate3d(-50%, -50%, 0);
                        transform: translate3d(-50%, -50%, 0);
                        -webkit-transform-origin: center;
                        transform-origin: center;
                        // transition: all .3s ease;
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
        }
    }
    .play-setting-wrap {
        margin-left: .4rem;
        a {
            margin-right: .35rem;
            .material-design-icon {
                width: .18rem;
                height: .18rem;
                svg {
                    width: .18rem;
                    height: .18rem;
                    fill: #7e7e7e;
                }
            }
        }
    }
}
</style>
