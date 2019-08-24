import axios from '@/utils/fetch';

const app = {
  state: {
    articleInfo: {},
    pageLoading: false
  },
  mutations: {
    GETARTICLE (state, info) {
      state.articleInfo = info;
    }
  },
  actions: {
    getArticle ({commit}, params) {
      return new Promise((resolve, reject) => {
        axios.get('article/info', params)
             .then(res => {
               console.log(res);
               commit('GETARTICLE', res.data);
               resolve(res.data);
             }).catch( err => {
               reject(err);
             });
      })
    }
  }
}
export default app;
