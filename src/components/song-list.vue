<template>
    <div class="song-list-wrap">
        <div class="list-head">
            <h1>播放列表</h1>
        </div>
        <ul class="song-list">
            <li v-for="pl in playList" :key='pl.id'>
                <div class="song-name">{{pl.name}}</div>
                <div class="song-author">{{pl.author}}</div>
                <div class="song-duration">02:30</div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed: {
        ...mapGetters([
            'playList',
            'playUrl',
            'playIndex',
            'playDuration',
            'playModel',
            'playVolume',
        ])
    }
}
</script>

<style lang='scss'>
@import '../assets/base/variable.scss';
.song-list-wrap{
    position: absolute;
    width: 4.75rem;
    height: 4.3rem;
    border: $border;
    bottom: .63rem;
    right: 0;
    background-color: #fff;
    .list-head{
        position: absolute;
        top: 0;
        padding-left: .3rem;
        width: 100%;
        height: .45rem;
        line-height: .45rem;
        border-bottom: $border;
        box-sizing: border-box;
        h1{
            display: inline-block;
            font-weight: normal;
            font-size: .15rem;
        }
    }
    .song-list{
        margin-top: .45rem;
        height: calc(100% - 0.45rem);
        overflow-y: auto;
        overflow-x: hidden;
        li{
            padding-left: .3rem;
            width: 100%;
            display: flex;
            align-items: center;
            height: .45rem;
            &:nth-child(odd){
                background-color: #f2f2f3;
            }
            div{
                display: block;
                height: .45rem;
                line-height: .45rem;
            }
            .song-name{
                font-size: 15px;
                width: 2.2rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .song-author{
                width: 1.2rem;
                margin-left: .25px;
                color: #a2a2a2;
                font-size: 13px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .song-duration{
                margin-left: .15px;
                color: #a2a2a2;
                font-size: 13px;
            }
        }
    }
}
</style>
