function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle (arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

export function debounce (func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 随机一个大写字母
export function randomUpperChar () {
  return String.fromCharCode(getRandomInt(65, 90))
}

// 随机一个小写写字母
export function randomLowerChar () {
  return String.fromCharCode(getRandomInt(97, 122))
}

/**
 * 获取指定字母表
 * @param {*} type 0: 大小写字母表 1: 大写字母表 2: 小写字母表
 */
export function getCharList (type) {
  let list = []
  switch (type) {
    case 0:
      let arr1 = setCharList(65, 90)
      let arr2 = setCharList(97, 122)
      list = [...arr1, ...arr2]
      break
    case 1:
      list = setCharList(65, 90)
      break
    default:
      list = setCharList(97, 122)
  }
  return list
}

/**
 * 生成指定位置的字母表
 * @param {*} start
 * @param {*} end
 * return array 字母表
 */
export function setCharList (start, end) {
  let list = []
  for (let i = start; i <= end; i++) {
    list.push(String.fromCharCode(i))
  }
  return list
}

/**
 * 统计对象数组指定键对应的数组项
 * @param {*} arr
 * @param {*} key
 * return Object  返回统计后的对象
 */
export function countWithArrKey (arr, key) {
  arr = [...arr]
  let obj = {}
  arr.forEach(item => {
    if (!obj[item[key]]) {
      obj[item[key]] = []
    }
    obj[item[key]].push(item)
  })
  return obj
}

/**
 * 将对象转化为指定键的数组
 * @param {*} obj 目标对象
 * @param {*} option 对象数组的键值配置
 * return Array
 */
export function transFromArrWithObj (obj, option) {
  let arr = []
  for (let key in obj) {
    let _obj = {}
    _obj[option.key1] = key
    _obj[option.key2] = obj[key]
    arr.push(_obj)
  }
  return arr
}

/**
 * 对象数组排序
 * @param {*} arr
 * @param {*} key 需要排序的属性
 * @param {*} type ascd: 正序，desc: 倒序
 */
export function arrSort (arr, key, type) {
  let _type = type || 'ascd'
  let _arr = [...arr]
  _arr.sort((a, b) => {
    if (_type === 'ascd') {
      return a[key].charCodeAt() - b[key].charCodeAt()
    } else {
      return b[key].charCodeAt() > a[key].charCodeAt()
    }
  })
  return _arr
}
