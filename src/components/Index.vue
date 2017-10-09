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
                    <span>09</span>
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
    </div>
</template>
<script>
import carousel from './common/carousel'
import radio from 'icons/radio'
import mucisBox from 'icons/music-box-outline'
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
            ]
        }
    },
    components: {
        carousel,
        radio,
        mucisBox,
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
                span{
                    font-size: .25rem;
                    font-style: normal;
                    color: $theme-color;
                }
            }
            .personal-content{
                margin-left: .10rem;
                span{
                    display: block;
                }
                .content-name{
                    font-size: .15rem;
                    color: #333;
                }
                .content-des{
                    margin-top: .10rem;
                    font-size: .12rem;
                    color: #808080;
                }
            }
        }
    }
}
</style>

