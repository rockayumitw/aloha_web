"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutations = exports.getters = exports.state = void 0;

var state = function state() {
  return {
    sliders: [{
      id: 1,
      image: '/images/image1.jpg',
      url: '/'
    }, {
      id: 2,
      image: '/images/image5.jpg',
      url: '/'
    }],
    balis: [{
      id: 1,
      name: 'Hotel Aqua',
      url: '/',
      image: '/images/image5.jpg',
      score: 5.0,
      sale_price: 'TWD 3,980',
      special_price: 'TWD 2,480',
      reviews: '2k'
    }, {
      id: 1,
      name: 'Hotel Aqua',
      url: '/',
      image: '/images/image5.jpg',
      score: 5.0,
      sale_price: 'TWD 3,980',
      special_price: 'TWD 2,480',
      reviews: '2k'
    }, {
      id: 1,
      name: 'Mr. Kawasaki Inn',
      url: '/',
      image: '/images/image5.jpg',
      score: 4.0,
      sale_price: '',
      special_price: 'TWD 3,380',
      reviews: '500'
    }, {
      id: 1,
      name: 'Weekly Paradisen',
      url: '/',
      image: '/images/image5.jpg',
      score: 4.0,
      sale_price: '',
      special_price: 'TWD 4,780',
      reviews: '470'
    }, {
      id: 1,
      name: 'Beast Hotel',
      url: '/',
      image: '/images/image5.jpg',
      score: 4.0,
      sale_price: '',
      special_price: 'TWD 1,980',
      reviews: '283'
    }],
    populars: [{
      id: 1,
      name: 'Osaka',
      url: '/',
      image: '/images/image5.jpg',
      location: 'JAPAN'
    }, {
      id: 1,
      name: 'Osaka',
      url: '/',
      image: '/images/image5.jpg',
      location: 'JAPAN'
    }, {
      id: 1,
      name: 'Kyoto',
      url: '/',
      image: '/images/image5.jpg',
      location: 'JAPAN'
    }, {
      id: 1,
      name: 'Reykjavík',
      url: '/',
      image: '/images/image5.jpg',
      location: 'iceland'
    }],
    Inspirations: [{
      id: 1,
      image: '/images/image5.jpg',
      url: '/',
      title: 'The fifth most visited country',
      content: 'Italy is the fifth most visited country in the world, with a total of 52.3 million…'
    }, {
      id: 1,
      image: '/images/image5.jpg',
      url: '/',
      title: 'Visit Thailand for Bangkok',
      content: 'Italy is the fifth most visited country in the world, with a total of 52.3 million…'
    }, {
      id: 1,
      image: '/images/image5.jpg',
      url: '/',
      title: 'Lord of the Rings Toury',
      content: 'Italy is the fifth most visited country in the world, with a total of 52.3 million…'
    }],
    searchResult: [{
      id: 1,
      image: '/images/image1.jpg',
      city: 'Rachada, Bangkok',
      url: '/',
      distance: '2km',
      name: 'Rachada Hotel',
      room_classis: 'Deluxe Double Room',
      people: 2,
      bed: 1,
      size: "Queen",
      tags: [{
        name: 'Free cancellation'
      }, {
        name: 'No prepayment'
      }],
      score: 4,
      comment: 283,
      night: 'per night',
      sale_price: null,
      special_price: 1980
    }, {
      id: 1,
      image: '/images/image1.jpg',
      city: 'Rachada, Bangkok',
      url: '/',
      distance: '2km',
      name: 'Rachada Hotel',
      room_classis: 'Deluxe Double Room',
      people: 2,
      bed: 1,
      size: "Queen",
      tags: [{
        name: 'Free cancellation'
      }, {
        name: 'No prepayment'
      }],
      score: 4,
      comment: 283,
      night: 'per night',
      sale_price: 1980,
      special_price: 1680
    }]
  };
};

exports.state = state;
var getters = {
  sliders: function sliders(state) {
    return state.sliders;
  },
  balis: function balis(state) {
    return state.balis;
  },
  populars: function populars(state) {
    return state.populars;
  },
  Inspirations: function Inspirations(state) {
    return state.Inspirations;
  },
  searchResult: function searchResult(state) {
    return state.searchResult;
  }
};
exports.getters = getters;
var mutations = {
  SAVE_SLIDERS: function SAVE_SLIDERS(state, sliders) {
    state.sliders = sliders;
  }
};
exports.mutations = mutations;