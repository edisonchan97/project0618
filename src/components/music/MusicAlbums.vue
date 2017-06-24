<template>
  <div class="music-albums">
    <ul class="music-box">
      <li v-for="pic in albums" ><!--@click="changeTitle(pic.name)"-->
        <router-link :to="'/music/music-list/'+pic.id">
          <img :src="pic.bg" alt="" @click="changeTitle(pic.name)" />

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
      albums:[]
    }
  },
  components:{

    },
      mounted(){
        this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
        Axios.get('../../../static/musiclist.json').then((res)=>{
          this.albums = res.data.albums;
      });
      },
      methods:{
        changeTitle(name)
        {console.log(name);
          this.$store.dispatch('changeTitle', [name, 'rgb(0, 150, 136)', '<']);

//      this.$store.state.title = name;
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
