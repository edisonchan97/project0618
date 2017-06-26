<template>
  <div class="photo-show">
    <hello></hello>
      <!--<div class="photo-box">-->
      <!-- -->
        <!--<img :src="$store.state.photoList[$route.params.index]" alt=""/>-->
    <!--</div>-->

    <v-touch @swipeleft="next" @swiperight="prev" class="photo-box"
      :style="bgStyle">

    </v-touch>
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
     index:this.$route.params.src
    }
  },
  components:{
      Hello,
      HelloFooter
    },
      computed:{
        bgStyle(){
          return {
            background:"url('"+ this.$store.state.photoList[this.index].src+"') no-repeat center/ contain #000"
          }
        }
      },
      methods:{
        next(){
          if(this.index<this.$store.state.photoList.length-1)
          {this.index++;
            console.log(this.$store.state.photoList.length);
          }
          else{
            this.index=0;
          }
        },
        prev(){
          if(this.index>0)
          { this.index--;}else{
            this.index=this.$store.state.photoList.length-1;
          }
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";
.photo-box{
  position: absolute;
  top:1rem;
  bottom: 0;
  width: 100%;
}


</style>
