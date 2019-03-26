new Vue({
  el: '#app',
  data: {
      counter:0,
      message:'',
  },
  methods:{
      clickHandler: function(event){
          console.log(event)
          console.log(event.target.tagName)
          console.log(event.target.innerHTML)
          console.log(event.target.type)
          this.counter++
      },
      clickHandler2: function($event, message){
          console.log($event)
          console.log($event.target.tagName)
          console.log($event.target.innerHTML)
          console.log($event.target.type)
          this.message=message
          this.counter++
      },
      //.onceの動作
      clickHandler3: function(){
          this.message=new Date().toLocaleTimeString()
      },
      //キー修飾子
      clear: function(){
          this.message=''
      },
      clickHandler4: function(){
          alert('shift+click')
      },
      clickHandler5: function(){
          alert('click')
      },

  }
})
