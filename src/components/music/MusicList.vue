<template>
  <div class="music-list">
    <hello>

    </hello>
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

    }
  },
  components:{
      Hello,
      HelloFooter
    },
      mounted(){
//          this.$store.dispatch('changeTitle', ['nice','rgb(0, 150, 136)','<']);
//      this.$store.dispatch('changeBgcolor', bgcolor)
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
