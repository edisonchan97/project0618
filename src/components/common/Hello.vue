<template>
    	<div class="header " :style="{background:$store.state.bgColor}">
    		<slot>
          <button @click="backup" :style="{background:$store.state.bgColor}">{{$store.state.back}}</button>
        </slot>


          <h2>
          {{$store.state.title}}
        </h2>

    	</div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
methods:{
  backup:function(){
    history.go(-1);
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";

      	.header{
      		height: 1rem;
      		display: flex;
      		text-align: center;
      		background: rgb(33,150,243);
      		color: #fff;

      	}
        .header button{
      		height: 1rem;
      		width: 1rem;
      		/*background: rgb(33,150,243);*/
      		border: 0;
      		color: #fff;
      	}
      	.header h2{
      		flex:1;
      		font-size: 30px;
      		text-indent: -1rem;
      		line-height: 1rem;
      	}
      	.header{
      	   top:0;
           width:100%;
           position:fixed;
      	}

</style>
