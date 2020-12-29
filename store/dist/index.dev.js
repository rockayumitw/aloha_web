"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

// import server from '../apis/http.js'
// import { apiTestData } from "../apis/course";
// import axios from 'axios'
// import { apiTestData } from '~/api/course.js'
var state = function state() {
  return {// sliders: [
    //   {
    //     image: '/assets/images/image1.jpg',
    //     url: '/'
    //   },
    //   {
    //     image: '/assets/images/image2.jpg',
    //     url: '/'
    //   }
    // ],
  };
};

exports.state = state;
var getters = {// sliders: state => () => state.sliders,
};
exports.getters = getters;
var mutations = {
  SET_LOGIN: function SET_LOGIN(state, val) {
    state.isLogin = val;
  }
};
exports.mutations = mutations;
var actions = {
  setLogin: function setLogin(state, val) {
    state.commit("SET_LOGIN", val);
  },
  setCountDown: function setCountDown(state, val) {
    state.commit("SET_COUNTDOWN", val);
  },
  setSliderData: function setSliderData(state, val) {
    state.commit("SET_SLIDERDATA", val);
  },
  setRecommendMasterData: function setRecommendMasterData(state, val) {
    state.commit("SET_RECOMMENDEDMASTERDATA", val);
  },
  setHotStreamData: function setHotStreamData(state, val) {
    // 設定熱門直播資料
    state.commit("SET_HOTSTREAMDATA", val);
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
  getTestData: function getTestData(_ref) {
    var commit, res;
    return regeneratorRuntime.async(function getTestData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap(apiTestData().then(function (res) {
              return res.data;
            })["catch"](function (err) {
              return console.error(err);
            }));

          case 3:
            res = _context.sent;
            commit('SET_TESTDATA', res);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports.actions = actions;