import axios from 'axios'
import jsonp from '../utils/jsonp'
import { commonParams, options } from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const params = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    format: 'json',
    g_tk: 2116745061,
    '_': 1565858943461
  })

  return jsonp(url, params, options)
}

export function getDiscList () {
  const url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const params = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json' // 使用的时axios,所以format使用的是json,不是jsonp
  })

  return axios.get(url, { params: params }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSongList (disstid) {
  const url = '/api/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  return jsonp(url, data, options)
}
