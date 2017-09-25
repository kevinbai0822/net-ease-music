import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {    //管理组件中的状态，在组件计算属性中调用
        playList: [
            {
                name: '东极岛',
                url: './static/东极岛岛歌.mp3'
            },
            {
                name: '机动战士',
                url: './static/FIGHT.mp3'
            }
        ],
        playUrl: '',
        playIndex: 0
    },
    getters: {
        playList: state => state.playList,
        playUrl: state => state.playUrl,
        playIndex: state => state.playIndex,
    },
    mutations: {    //定义方法促使试图更新，在组件的methods中提交
        setUrl: (state, url) => {state.playUrl = url},
        playNext: (state) => {
            state.playIndex += 1
            state.playUrl = state.playList[state.playIndex].url
        }
    }
})