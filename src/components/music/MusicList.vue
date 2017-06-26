<template>
  <div class="music-list">
    <div class="aplayer">
    <a-player :music="musicList" :narrow="false" autoplay="true" showlrc="3" v-if="isShow"  theme="#e6d0b2"
              listmaxheight="200px" mode="random">
<!--v-if="isShow"-->
    </a-player>
    </div>
  </div>
</template>

<script>

  import Axios from 'axios'
  import APlayer from 'vue-aplayer'

export default {
  data() {
    return {
      musicList:[],
      musicData:[],
      isShow:false
    }
  },
  components:{
    APlayer
//    必须要和上面的import同名
  },
  mounted(){


//      console.log(this.$route.params.id);
//    为什么这一行去掉之前，点击时间绑定在li上就好使  this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
//    Axios.get('../../../static/musiclist.json').then((res)=>{
//      this.albums = res.data.albums;
//  });
    Axios.get('static/music-data.json').then((res)=>{
       this.musicData = res.data.musicData;

      for(var i=0;i<this.musicData.length;i++){
        var obj={};
        obj.title=this.musicData[i].title;
        obj.author=this.musicData[i].author;
        obj.pic=this.musicData[i].musicImgSrc;
        obj.url=this.musicData[i].src;
        obj.lrc=this.musicData[i].lrc;
        this.musicList.push(obj)
      }
    this.isShow=true;
    console.log(this.musicList);
     });
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
  .aplayer{
    margin-top: 0.5rem;
  }


</style>
