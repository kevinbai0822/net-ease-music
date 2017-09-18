<template>
    <div class="player-wrap">
        <audio controls>
            <source :src="playList[0].url" type="audio/mpeg"/>
        </audio>
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

        }
    },
    mounted(){
        console.log(this.playList)
    }
}
</script>
<style lang="scss" scoped="">
.player-wrap{
    width: 100%;
}
</style>
