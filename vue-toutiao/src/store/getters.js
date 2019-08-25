const getters = {
  // app
  articleInfo: state => state.app.articleInfo,
  pageLoading: state => state.app.pageLoading,

  // user
  isLogin: state => state.user.isLogin,
  user: state => state.user.user,
  footerBarList: state => state.user.footerBarList,

  // 首页
  newsList: state => state.home.newsList,
  newsLoading: state => state.home.newsLoading,
  homeNewsIndex: state => state.home.newsIndex,
  homeNewsPrevIndex: state => state.home.newsPrevIndex,
  homeEnd: state => state.home.end,
}

export default getters;