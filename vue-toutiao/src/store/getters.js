const getters = {
  // app
  articleInfo: state => state.app.articleInfo,
  pageLoading: state => state.app.pageLoading,

  // user
  isLogin: state => state.user.isLogin,
  user: state => state.user.user,
  footerBarList: state => state.user.footerBarList,
}

export default getters;