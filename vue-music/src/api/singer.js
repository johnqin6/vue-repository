import { commonParams } from './config'
import axios from 'axios'

export function getSingerList (param) {
  const url = '/uqq/cgi-bin/musicu.fcg'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq.json',
    g_tk: 5381,
    format: 'json',
    inCharset: 'utf8',
    loginUin: 0,
    data: {
      'comm': { 'ct': 24, 'cv': 0 },
      'singerList': {
        'module': 'Music.SingerListServer',
        'method': 'get_singer_list',
        'param': param
      }
    },
    '-': 'getUCGI25623611785621114'
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSingerDetail (singerId) {
  const url = '/uqq/cgi-bin/musicu.fcg'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq.json',
    g_tk: 5381,
    format: 'json',
    inCharset: 'utf8',
    loginUin: 0,
    data: {
      'comm': { 'ct': 24, 'cv': 0 },
      'singer': {
        'method': 'get_singer_detail_info',
        'param': { 'sort': 5, 'singermid': singerId, 'sin': 0, 'num': 100 },
        'module': 'music.web_singer_info_svr'
      }
    },
    '-': 'getUCGI0966630712027079'
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
