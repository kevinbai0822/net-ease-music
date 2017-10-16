import Vue from 'vue'
import Vuex from 'vuex'
import {PlayList, Song} from '../config/webapi'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {    //管理组件中的状态，在组件计算属性中调用
        playList: [
            {
                name: '歌曲名称',
                author: '歌手',
                album: '',
                url: '',
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
        setList: (state, list) => (state.playList = list),
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
        getList: (state) => {
            let task = []
            let arr = []
            PlayList(368962216).then((data) => {
                arr = data.playlist.tracks
                for (let i of arr){
                    task.push(Song(i.id))
                }
            }).then(() => {
                Promise.all(task).then((data) => {
                    if(arr){
                        state.playList.shift()
                        for(let j in arr){
                            let obj = {}
                            obj.name = arr[j].name
                            obj.author = arr[j].ar[0].name
                            obj.album = arr[j].al.picUrl
                            obj.url = data[j].data[0].url
                            state.playList.push(obj)
                        }

                    }
                    state.playUrl = state.playList[0].url
                })
            })
        }
    },
    actions: {
        
    }
})