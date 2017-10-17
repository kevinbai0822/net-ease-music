import Vue from 'vue'
import {apiServer} from './apiConfig'

export const Song = (id) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(apiServer+'?type=song', {
            params: {id}
        }).then(
        (rst) => {
            resolve(rst.data)
        },
        (rst) => {
            reject(rst.data)
        })
    })
}

export const Search = (s, search_type) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(apiServer+'?type=search', {
            params: {
                s,
                search_type
            }
        }).then(
        (rst) => {
            resolve(rst.data)
        },
        (rst) => {
            reject(rst.data)
        })
    })
}

export const PlayList = (id) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(apiServer+'?type=playlist', {
            params: {id}
        }).then(
        (rst) => {
            resolve(rst.data)
        },
        (rst) => {
            reject(rst.data)
        })
    })
}

export const SongDetail = (id) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(apiServer+'?type=detail', {
            params: {id}
        }).then(
        (rst) => {
            resolve(rst.data)
        },
        (rst) => {
            reject(rst.data)
        })
    })
}