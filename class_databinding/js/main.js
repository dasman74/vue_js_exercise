var app = new Vue({
  el: '#app',
  data:{
      isLarge:true,
      hasError:true,
      largeClass:'large',
      dangerClass:'text-danger',
      largeClass2:{
          large:true,
          'bg-gray':true,
      },
      dangerClass2:{
          'text-danger':true
      },
      isLarge2:true,
      color: 'blue',
      fontSize:36,
      styleObject:{
          color:'blue',
          fintSize:'36px',
      }
  },
})
