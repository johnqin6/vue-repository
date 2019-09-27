/**
 * 侧边栏开启和关闭，以及一些菜单的设置
 */

const state = {
  opened: sessionStorage.getItem('open')
    ? sessionStorage.getItem('open')
    : 'false',
  msgIsShow: false,
  showDriver: localStorage.getItem('driver')
    ? localStorage.getItem('driver')
    : 'yes'
}

export default {
  namespaced: true,
  state
}
