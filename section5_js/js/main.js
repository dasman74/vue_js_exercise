//グローバルフィルタリング
Vue.filter('numberFormat', function(value){
    return value.toLocaleString()
}),
Vue.filter('toUSD', function(jpy){
    return jpy / 100
}),
/**
 * suffix 接尾辞
 */

Vue.filter('readMore', function(text, length, suffix){
    return text.substring(0, length) + suffix

})
var app = new Vue({
  el: '#app',
  data:{
      message:'hello vue js',
      count:100,
      ok:true,
      price:298000,
      jpyPrice:298000,
      text:'dsfsddddddddddddddddddddddddddddddddddddddddddddddddd',
      url:'https://www.google.com'
  },
  computed: {
      reverseMessage: function(){
          return this.message.split('').reverse().join('')
      }
  },
  methods: {
      reversedMessageMethod: function(){
          return this.message.split('').reverse().join('')
      }
  }

  //フィルタリング
  /*filters: {
      numberFormat : function(value){
          return value.toLocaleString()
      }
  }*/
})
