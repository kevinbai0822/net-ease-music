import Vue from 'vue'
import {apiServer} from './apiConfig'

export const Song = (type, id) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(apiServer, {
            params: {
                type,
                id
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