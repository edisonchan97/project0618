<template>
  <div class="movie">
    <hello>
      <button :style="{background:$store.state.bgColor}">{{$store.state.back}}</button>
    </hello>
    <movie-nav></movie-nav>

    <router-view></router-view>
     <hello-footer></hello-footer>

  </div>
</template>

<script>
     import Hello from '../common/Hello'
     import HelloFooter from '../common/HelloFooter'
      import MovieNav from './MovieNav'
      import MovieTop250 from './MovieTop250'
export default {

  data () {
    return {

    }
  },
  components:{
      Hello,
      MovieNav,
      HelloFooter,
      MovieTop250
    },
     mounted(){
       this.$store.dispatch('changeTitle',['movie','rgb(33, 150, 243)','首页'])
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";


</style>
