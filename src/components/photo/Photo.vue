<template>
  <div class="photo">
    <hello></hello>
     <hello-footer></hello-footer>
  </div>
</template>

<script>
     import Hello from '../common/Hello'
     import HelloFooter from '../common/HelloFooter'
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
       this.$store.dispatch('changeTitle',['photo','rgb(63, 81, 181)','<'])
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";


</style>
