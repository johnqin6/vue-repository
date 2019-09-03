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
