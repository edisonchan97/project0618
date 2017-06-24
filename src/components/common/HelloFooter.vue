<template>
    <div id="footer" :style="{background:$store.state.bgColor}">
      <!-- 属性名必须要:动态绑定-->
    		<ul>
    			<li><router-link to="/movie">电影</router-link></li>
    			<li><router-link to="/music">音乐</router-link></li>
    			<li><router-link to="/book">书籍</router-link></li>
    			<li><router-link to="/photo">图片</router-link></li>
    		</ul>
    	</div>

</template>

<script>
export default {
  name: 'footer',
  data ()
{
  return {}
},
methods(){
  changeTitle(title,bgcolor,back)
    {
      this.$store.dispatch('changeTitle', [title,bgcolor,back])
//      this.$store.dispatch('changeBgcolor', bgcolor)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";

      	#footer{
        		position: fixed;
        		width: 100%;
        		bottom: 0;
        	}
        #footer ul{
           		display: flex;
           	}
        #footer{
             		height: 1rem;
             		color: #fff;
             	}
        #footer li{
          		flex:1;
          		text-align: center;
          		font-size: 14px;
          		line-height: 1rem;
          	}
        #footer a{
          color: #ccc ;
          outline:none;

        }
#footer a.router-link-active{
  font-weight: bold;
  color: #ffffff;
}

</style>
