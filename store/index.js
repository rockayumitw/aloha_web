// import server from '../apis/http.js'
// import { apiTestData } from "../apis/course";
import axios from 'axios'
import { apiTestData } from '~/api/course.js'

export const state = () => ({
  // sliders: [
  //   {
  //     image: '/assets/images/image1.jpg',
  //     url: '/'
  //   },
  //   {
  //     image: '/assets/images/image2.jpg',
  //     url: '/'
  //   }
  // ],
})

export const getters = {  
  // sliders: state => () => state.sliders,
}

export const mutations = { 
  SET_LOGIN (state, val) {
    state.isLogin = val
  },
}

export const actions = { 
  setLogin(state, val) {
    state.commit("SET_LOGIN", val)
  },
  setCountDown(state, val) {
    state.commit("SET_COUNTDOWN", val)
  },
  setSliderData(state,val){
    state.commit("SET_SLIDERDATA", val)
  },
  setRecommendMasterData(state, val) {
    state.commit("SET_RECOMMENDEDMASTERDATA", val)
  },
  setHotStreamData(state, val) {    // 設定熱門直播資料
    state.commit("SET_HOTSTREAMDATA", val)
  },
  //////// 測試api
  // nuxtServerInit(vuexContext, context){
  //   return axios.get('https://jsonplaceholder.typicode.com/users').then( res =>{
  //     console.log(res.data)
  //     const fackData =[]
  //     for(const key in res.data){
  //       fackData.push({...res.data[key], id:key})
  //     }
  //     console.log(fackData)
  //     vuexContext.commit('SET_TESTDATA', fackData)
  //   }).catch( e => context.error(e))
  // },
  async getTestData({ commit }){  // 測試取得資料
    const res = await apiTestData().then(res => res.data).catch(err => console.error(err));
    commit('SET_TESTDATA',res)
  },
}




