<template>
    <div class="player-wrap">
        <audio controls>
            <source :src="playUrl" type="audio/mpeg"/>
        </audio>
    </div>
</template>
<script>
export default {
    name: 'player',
    props: {
        playUrl: {
            type: String
        }
    },
    data() {
        return {

        }
    },
    mounted(){
        console.log(this.playUrl)
    }
}
</script>
<style lang="scss" scoped="">
.player-wrap{
    width: 100%;
}
</style>
