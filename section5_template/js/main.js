new Vue({
  el: '#app',
  data:{
      message:'hello <span stye="color:red">vue js</span>'
  },
  methods: {
      clickHandler: function(event){
          this.message = this.message.split('').reverse().join('')
      }
  }
})
