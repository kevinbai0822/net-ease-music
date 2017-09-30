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
    </div>
</template>
<script>
import carousel from './common/carousel'
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
            posterList:[
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
    }
}
</script>
<style lang='scss'>
@import '../assets/base/variable';

.recommendation-wrap{
    .recommendation-tab{
        margin-top: 0.2rem;
        border-bottom: $border;
        width: 100%;
        ul{
            display: flex;
            li{
                margin-right: 0.3rem;
                margin-bottom: -1px;
                padding-bottom: 0.1rem;
                font-size: 0.15rem;
                cursor: pointer;
            }
            .selected{
                color: $theme-color;
                border-bottom: 2px solid $theme-color;
            }
        }
    }
    .poster-wrap{
        margin-top: .4rem;
    }
}
</style>

