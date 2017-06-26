<template>
  <div class="book">
    <hello></hello>
    <swipe class="my-swipe">
      <swipe-item class="item1"></swipe-item>
      <swipe-item class="item2"></swipe-item>
      <swipe-item class="item3"></swipe-item>
    </swipe>
     <hello-footer></hello-footer>
  </div>
</template>

<script>
  import Hello from '../common/Hello'
  import HelloFooter from '../common/HelloFooter'
  import {Swipe,SwipeItem} from 'vue-swipe'
  Swipe.auto= false;
export default {

  data () {
    return {

    }
  },
  components:{
        Hello,
        HelloFooter,
        Swipe,
        SwipeItem
    },
  mounted(){
    this.$store.dispatch('changeTitle',['book','rgb(121, 85, 72)','<'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/vue-swipe.css";

  .my-swipe {
  height: 500px;
  font-size: 30px;
  text-align: center;
  margin-top: 1.1rem;
}
.my-swipe .mint-swipe-item{
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.item1 {
  background: url('https://img3.doubanio.com/lpic/s27102925.jpg');
}

.item2 {
  background: url('https://img3.doubanio.com/lpic/s6989253.jpg');
}

.item3 {
  background: url('https://img3.doubanio.com/lpic/s24468373.jpg');
}

</style>
