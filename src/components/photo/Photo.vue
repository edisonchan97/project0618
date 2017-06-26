<template>
  <div class="photo">
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
  data(){
    return {

    }
  },
  components:{
      Hello,
      HelloFooter
    },
     mounted(){
       this.$store.dispatch('changeTitle',['photo','rgb(63, 81, 181)','<']);

       Axios.get('static/photo-data.json').then((res)=>{
         this.$store.dispatch('photoList',res.data.photoData);
         console.log(this.photoData);
       })
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";


</style>
