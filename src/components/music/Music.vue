<template>
  <div class="music">
    <hello></hello>
    <router-view></router-view>
     <hello-footer></hello-footer>
  </div>
</template>

<script>
      import Hello from '../common/Hello'
      import HelloFooter from '../common/HelloFooter'
      import Axios from 'axios'
export default {

  data () {
    return {
    albums:[]
    }
  },
  components:{
      Hello,
      HelloFooter
    },
  mounted(){
    this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);


        Axios.get('../../../static/musiclist.json').then((res)=>{
          this.albums =res.data.albums;
        });

  },
      methods:{
        changeTitle(title)
        {
          this.$store.dispatch('changeTitle', [title, 'rgb(0, 150, 136)', '<']);
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";
.music-box{
  margin: 1rem 0;

}
.music li{
  width: 50%;
  float: left;
}
.music li img{
  width: 100%;
}

</style>
