<template>
  <div class="photo-list">
    <ul class="photo-box">
      <li v-for="(pic,index) in $store.state.photoList" ><!--@click="changeTitle(pic.name)"-->
        <router-link :to="'/photo/photo-show/'+index">
        <img :src="pic.src" alt="" />
          </router-link>
      </li>
    </ul>

  </div>

</template>

<script>

      import Axios from 'axios'
export default {

  data () {
    return {
    }
  },
  components:{

    },
      mounted(){
        this.$store.dispatch('changeTitle',['photo','rgb(63, 81, 181)','<']);
        Axios.get('static/photo-data.json').then((res)=>{
          this.$store.dispatch('photoList',res.data.photoData);
      });
      },
      methods:{

      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";
.photo-list{
  margin: 1rem 0;
}
.photo-box li{
  width: 50%;
  float: left;
}
.photo-box li img{
  width: 100%;
}
ul{
  overflow: hidden;
}

</style>
