<template>
  <div class="book">
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
    this.$store.dispatch('changeTitle',['book','rgb(121, 85, 72)','<'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";


</style>
