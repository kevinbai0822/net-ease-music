import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {    //管理组件中的状态，在组件计算属性中调用
        playList: [
            {
                name: '东极岛岛歌',
                author:'上海音乐学院学生',
                url: './static/东极岛岛歌.mp3',
                album: './static/images/album1.jpg',
            },
            {
                name: '机动战士',
                author: '川井憲次',
                url: './static/FIGHT.mp3',
                album: './static/images/album3.jpg',
            },
            {
                name: 'GO!!',
                author: '平野義久',
                url: './static/GO!!.mp3',
                album: './static/images/album2.jpg',
            },
            {
                name: '荒野の戦い',
                author: '平野義久',
                url: './static/荒野の戦い.mp3',
                album: './static/images/album2.jpg',
            }
        ],
        playUrl: '',
        playIndex: 0,
        playDuration: '00:00',
        playModel: 'loop',
        playVolume: 0.6
    },
    getters: {
        playList: state => state.playList,
        playUrl: state => state.playUrl,
        playIndex: state => state.playIndex,
        playDuration:  state => state.playDuration,
        playModel: state => state.playModel,
        playVolume: state => state.playVolume,
    },
    mutations: {    //定义方法促使试图更新，在组件的methods中提交
        setUrl: (state, url) => {state.playUrl = url},
        setModel: (state, model) => {state.playModel = model},
        setDuration: (state, duration) => {state.playDuration = duration},
        setVolume: (state, volume) => {state.playVolume = volume},
        playNext: (state) => {
            if(state.playModel === 'order'){
                if(state.playIndex < state.playList.length - 1){
                    state.playIndex += 1
                }
            }else if(state.playModel === 'loop'){
                if(state.playIndex === state.playList.length - 1){
                    state.playIndex = 0                   
                }else if(state.playIndex < state.playList.length - 1){
                    state.playIndex += 1
                }
            }else if(state.playModel === 'random'){
                state.playIndex = Math.floor((Math.random() * state.playList.length))
            }
            state.playUrl = state.playList[state.playIndex].url
        },
        playPrev: (state) => {
            if(state.playIndex > 0){
                state.playIndex -= 1
                state.playUrl = state.playList[state.playIndex].url
            }
        },
    }
})