<template>
    <div class="recommendation-wrap">
        <h1 class="page-title">发现音乐</h1>
        <div class="recommendation-tab">
            <ul>
                <li :class='{"selected": reValue == index}' v-for='(r,index) in reTab' :key='r.id' @click='reValue = index'>{{r.title}}</li>
            </ul>
        </div>
        <div class="poster-wrap">
            <carousel :imgList='posterList'></carousel>
        </div>
        <div class="personal-wrap">
            <div class="personal-radio">
                <i class="personal-icon">
                    <radio></radio>
                </i>
                <div class="personal-content">
                    <span class="content-name">私人FM</span>
                    <span class="content-des">享受你的音乐专属推荐</span>
                </div>
            </div>
            <div>
                <i class="personal-icon">
                    <span>{{day}}</span>
                </i>
                <div class="personal-content">
                    <span class="content-name">每日歌曲推荐</span>
                    <span class="content-des">根据你的口味生成</span>
                </div>
            </div>
            <div>
                <i class="personal-icon">
                    <mucisBox></mucisBox>
                </i>
                <div class="personal-content">
                    <span class="content-name">排行榜</span>
                    <span class="content-des">最热音乐榜</span>
                </div>
            </div>
        </div>
        <div class="recommend-panel">
            <div class="recommend-panel-top">
                <calendarCheck class="top-icon"></calendarCheck>
                <h1 class="top-title">推荐歌单</h1>
                <a href="" class="top-more">更多></a>
            </div>
        </div>
        <div class="song-sheet">
            <div class="song-item">
                <div class="song-album"></div>
            </div>
            <div class="song-item">
                <div class="song-album"></div>                
            </div>
            <div class="song-item">
                <div class="song-album"></div>
            </div>
            <div class="song-item">
                <div class="song-album"></div>
            </div>
            <div class="song-item">
                <div class="song-album"></div>
            </div>
            <div class="song-item"></div>
            <div class="song-item"></div>
        </div>
    </div>
</template>
<script>
import carousel from './common/carousel'
import radio from 'icons/radio'
import mucisBox from 'icons/music-box-outline'
import calendarCheck from 'icons/calendar-check'
export default {
    name: 'index',
    data() {
        return {
            reTab: [
                {
                    title: '个性推荐',
                    url: ''
                },
                {
                    title: '歌单',
                    url: ''
                },
                {
                    title: '主播电台',
                    url: ''
                },
                {
                    title: '最新音乐',
                    url: ''
                },
                {
                    title: '歌手',
                    url: ''
                }
            ],
            reValue: 0,
            posterList: [
                {
                    src: 'static/images/poster1.jpg'
                },
                {
                    src: 'static/images/poster2.jpg'
                },
                {
                    src: 'static/images/poster3.jpg'
                },
                {
                    src: 'static/images/poster4.jpg'
                }
            ],
            day: '' //当前日期
        }
    },
    components: {
        carousel,
        radio,
        mucisBox,
        calendarCheck,
    },
    mounted() {
        let date = new Date()
        this.day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    }
}
</script>
<style lang='scss'>
@import '../assets/base/variable';

.recommendation-wrap {
    .recommendation-tab {
        margin-top: 0.2rem;
        border-bottom: $border;
        width: 100%;
        ul {
            display: flex;
            li {
                margin-right: 0.3rem;
                margin-bottom: -1px;
                padding-bottom: 0.1rem;
                font-size: 0.15rem;
                cursor: pointer;
            }
            .selected {
                color: $theme-color;
                border-bottom: 2px solid $theme-color;
            }
        }
    }
    .poster-wrap {
        margin-top: .4rem;
    }
    .personal-wrap {
        display: flex;
        margin-top: 30px;
        &>div {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            &:not(:last-child) {
                border-right: $border;
            }
            i {
                display: block;
                width: .5rem;
                height: .5rem;
                line-height: .5rem;
                border: 1px solid $theme-color;
                border-radius: 50%;
                text-align: center;
                .material-design-icon {
                    width: 4em;
                    margin: auto;
                    height: 100%;
                    align-items: center;
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                    svg {
                        fill: $theme-color;
                        width: .32rem;
                        height: .32rem;
                    }
                }
                span {
                    font-size: .25rem;
                    font-style: normal;
                    color: $theme-color;
                }
            }
            .personal-content {
                margin-left: .10rem;
                span {
                    display: block;
                }
                .content-name {
                    font-size: .15rem;
                    color: #333;
                }
                .content-des {
                    margin-top: .10rem;
                    font-size: .12rem;
                    color: #808080;
                }
            }
        }
    }
    .recommend-panel {
        margin-top: .3rem;
        padding-bottom: .10rem;
        border-bottom: $border;
        .recommend-panel-top {
            position: relative;
            .material-design-icon {
                display: inline-block;
                vertical-align: middle;
                width: .25rem;
                height: .20rem; 
                svg {
                    fill: $theme-color;
                    width: .25rem;
                    height: .20rem;
                }
            }
            .top-title{
                display: inline-block;
                vertical-align: middle;
                font-size: .15rem;
                font-weight: normal;
            }
            .top-more{
                position: absolute;
                right: 0;
                top: .04rem;
                font-size: .12rem;
                color: #acacac;
            }
        }
    }
    .song-sheet{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        width: calc(100% + .2rem);
        margin-left: -0.2rem;
        .song-item{
            margin-left: 0.2rem;
            margin-bottom: 0.3rem;
            width: calc(25% - 0.2rem);
            box-sizing: border-box;
            .song-album{
                padding-bottom: 100%;
                width: 100%;
                height: 0;
                background: url('../../static/images/album3.jpg') center no-repeat;
            }
        }
    }
}
</style>

