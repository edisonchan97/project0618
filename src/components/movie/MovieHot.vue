<template>
  <div class="hot">
    <div class="movie-list" v-for="movie in movieList">
      <div class="movie-img">
        <img :src="movie.images.small" alt="">
      </div>
      <div class="movie-title">
        <span>{{movie.title}}</span>
        <p><span v-for="genres in movie.genres">{{genres}}</span>
          ({{movie.year}}) (平均{{movie.rating.average}}分)</p>
      </div>
    </div>
    <div class="loading" v-show="show">
      <span><img src="../../assets/img/loading.gif"></span>
    </div>
  </div>
</template>

<script>


  import Axios from 'axios'
  import $ from 'jquery'

  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";
  .hot{
    margin-top:2rem;
    background:#eee;
  }
  .movie-list{
    padding:0.4rem;
    margin: 0.4rem 0;
  }
  .movie-list .movie-img{
    float:left;
    width:0.8rem;
    height:0.8rem;
  }
  .movie-list .movie-img img{
    width:100%;
    height:100%;
  }
  .movie-list .movie-title{
    float:left;
    border-bottom:1px solid #555;
    margin-left:0.6rem;
    width:4.0rem;
  }
  .loading{
    text-align: center;
  }
</style>
