<template>
  <div class="music-list">

  </div>
</template>

<script>

  import Hello from '../common/Hello'
  import HelloFooter from '../common/HelloFooter'
  import Axios from 'axios'

export default {
  data() {
    return {

    }
  },
  components:{
    Hello,
      HelloFooter
  },
  mounted(){
//      console.log(this.$route.params.id);
//    为什么这一行去掉之前，点击时间绑定在li上就好使  this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
//    Axios.get('../../../static/musiclist.json').then((res)=>{
//      this.albums = res.data.albums;
//  });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .music-box{
    margin: 1rem 0;
  }
  .music-box li{
      width: 50%;
      float: left;
  }
  .music-box li img{
    width: 100%;
  }

</style>
