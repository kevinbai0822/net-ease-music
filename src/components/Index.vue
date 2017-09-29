<template>
    <div class="recommendation-wrap">
        <h1 class="page-title">发现音乐</h1>
        <div class="recommendation-tab">
            <ul>
                <li class='selected'>个性推荐</li>
                <li>歌单</li>
                <li>主播电台</li>
                <li>最新音乐</li>
                <li>歌手</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'index',
    data() {
        return {

        }
    }
}
</script>
<style lang='scss'>
@import '../assets/base/variable';

.recommendation-wrap{
    .recommendation-tab{
        margin-top: 0.2rem;
        // padding-bottom: 0.1rem;
        border-bottom: $border;
        width: 100%;
        ul{
            display: flex;
            li{
                margin-right: 0.3rem;
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
}
</style>

