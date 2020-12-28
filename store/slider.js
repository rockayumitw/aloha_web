

  export const state = () => ({
    sliders: [
      {
        id: 1,
        image: '././images/image1.jpg',
        content: 'Discover your ideal hotel',
        url: '/'
      },
      {
        id: 2,
        image: '././images/image5.jpg',
        content: 'Discover your ideal hotel',
        url: '/'
      }
    ],
    balis: [
      {
        id: 1,
        name: 'Hotel Aqua',
        url: '/',
        image: './images/image24.jpg', 
        score: 5.0,
        sale_price: 'TWD 3,980',
        special_price: 'TWD 2,480',
        reviews: '2k',
      },
      {
        id: 2,
        name: 'Mr. Kawasaki Inn',
        url: '/',
        image: './images/image2.jpg', 
        score: 4.0,
        sale_price: '',
        special_price: 'TWD 3,380',
        reviews: '500',
      },
      {
        id: 3,
        name: 'Weekly Paradise',
        url: '/',
        image: './images/image3.jpg', 
        score: 4.0,
        sale_price: '',
        special_price: 'TWD 4,780',
        reviews: '470',
      },
      {
        id: 4,
        name: 'Beast Hotel',
        url: '/',
        image: './images/image4.jpg', 
        score: 4.0,
        sale_price: '',
        special_price: 'TWD 1,980',
        reviews: '283',
      },
      {
        id: 1,
        name: 'Beast Hotel',
        url: '/',
        image: '././images/image5.jpg', 
        score: 4.0,
        sale_price: '',
        special_price: 'TWD 1,980',
        reviews: '283',
      }
    ],
    populars:[
      {
        id: 1,
        name: 'Osaka',
        url: '/',
        image: './images/image4.jpg', 
        location:'JAPAN',
      },
      {
        id: 2,
        name: 'Kyoto',
        url: '/',
        image: './images/image5.jpg', 
        location:'JAPAN',
      },
      {
        id: 3,
        name: 'Reykjavík',
        url: '/',
        image: './images/image6.jpg', 
        location:'iceland',
      },{
        id: 4,
        name: 'Paris',
        url: '/',
        image: './images/image25.jpg', 
        location:'France',
      },{
        id: 5,
        name: 'Roma',
        url: '/',
        image: './images/image26.jpg', 
        location:'Italy',
      },{
        id: 6,
        name: 'Bangkok',
        url: '/',
        image: './images/image7.jpg', 
        location:'Thailand',
      }
    ],
    Inspirations:[
      {
        id: 1,
        image: './images/image8.jpg', 
        url: '/',
        title: 'The fifth most visited country',
        content: 'Italy is the fifth most visited country in the world, with a total of 52.3 million…'
      },
      {
        id: 2,
        image: './images/image9.jpg', 
        url: '/',
        title: 'Visit Thailand for Bangkok',
        content: 'Italy is the fifth most visited country in the world, with a total of 52.3 million…'
      },
      {
        id: 3,
        image: './images/image10.jpg', 
        url: '/',
        title: 'Lord of the Rings Toury',
        content: 'Italy is the fifth most visited country in the world, with a total of 52.3 million…'
      }
    ],
    searchResult:[
      {
        id: 1,
        image: './images/image11.jpg',
        city:'Rachada, Bangkok',
        url: '/',
        distance: '2km',
        name: 'Rachada Hotel',
        room_classis: 'Deluxe Double Room',
        people: 2,
        bed: 1,
        size: "Queen", 
        tags:[
          {name: 'Free cancellation'},
          {name: 'No prepayment'}
        ],
        score: 4,
        comment: 283,
        night: 'per night',
        sale_price: null,
        special_price: 1980,
      },
      {
        id: 2,
        image: './images/image12.jpg',
        city:'Phaya Thai, Bangkok',
        url: '/',
        distance: '2.9km',
        name: 'Forever Place',
        room_classis: 'Standard Double Room',
        people: 2,
        bed: 1,
        size: "Queen", 
        tags:[
          {name: 'Free cancellation'}
        ],
        score: 5.0,
        comment: 121,
        night: 'per night',
        sale_price: 1980,
        special_price: 1680,
      },
      {
        id: 3,
        image: './images/image17.jpg',
        city:'Bangkapi, Bangkok',
        url: '/',
        distance: '14km',
        name: 'LUV Hotel',
        room_classis: 'Standard Double Room',
        people: 2,
        bed: 1,
        size: "Queen", 
        tags:[
          {name: 'Free cancellation'}
        ],
        score: 4.0,
        comment: 325,
        night: 'per night',
        sale_price: null,
        special_price: 2460,
      },
      {
        id: 4,
        image: './images/image14.jpg',
        city:'Chatuchack, Bangkok',
        url: '/',
        distance: '12km',
        name: 'WOW Life Hotel',
        room_classis: 'Standard Double Room',
        people: 2,
        bed: 1,
        size: "Queen", 
        tags:[
          {name: 'No prepayment'}
        ],
        score: 4.0,
        comment: 204,
        night: 'per night',
        sale_price: 2880,
        special_price: 2240,
      },
      {
        id: 5,
        image: './images/image15.jpg',
        city:'Chatuchack, Bangkok',
        url: '/',
        distance: '8km',
        name: 'Celebrity Palace',
        room_classis: 'Standard Double Room',
        people: 2,
        bed: 1,
        size: "Queen", 
        tags:[
          {name: 'No prepayment'}
        ],
        score: 5.0,
        comment: 189,
        night: 'per night',
        sale_price: 2120,
        special_price: 1890,
      },
      {
        id: 6,
        image: './images/image16.jpg',
        city:'Chatuchack, Bangkok',
        url: '/',
        distance: '4.4km',
        name: 'RR Space',
        room_classis: 'Standard Double Room',
        people: 2,
        bed: 1,
        size: "Queen", 
        tags:[
          {name: 'No prepayment'}
        ],
        score: 5.0,
        comment: 112,
        night: 'per night',
        sale_price: null,
        special_price: 1890,
      }
    ]
  })

  export const getters = {  
    sliders: state => {
        return state.sliders
    },
    balis: state => {
      return state.balis
    },
    populars: state => {
      return state.populars
    },
    Inspirations: state => {
      return state.Inspirations
    },
    searchResult: state =>{
      return state.searchResult
    },
  }

  export const mutations = {
    SAVE_SLIDERS (state, sliders) {
      state.sliders = sliders
    },
  }