import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {     
    product1:{
    name:"Vans Men's Black Old Skool Sneakers",
    price:1800,
    amount:0
  },
  product2:{
    name:"Vans Classic Slip-on Mens Black / White Checkerboard Canvas Sneakers",
    price:1737,
    amount:0
  },
  product3:{
    name:"VANS OLD SKOOL TRUE WHITE SNEAKERS",
    price:2400,
    amount:0
  },
  product4:{
    name:"Vans Old Skool - Navy",
    price:2160,
    amount:0
  },
  product5:{
    name:"VANS OLD SKOOL RACING RED WHITE SNEAKERS",
    price:3032,
    amount:0
  },
  product6:{
    name:"VANS SK8-HI BLACK/WHITE",
    price:2600,
    amount:0
  },
  sum: 0,count:0,
  say: function (message) {
  alert(message)
}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
