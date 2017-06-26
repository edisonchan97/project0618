<template>
  <div class="top-250">
     <div class="movie-list" v-for="movie in movieList">
          <div class="movie-img">
          <img :src="movie.images.small" alt="">
          </div>
         <div class="movie-title">
            <span>{{movie.title}}</span>
            <p><span v-for="genres in movie.genres">{{genres}}
            </span>
            ({{movie.year}}) (平均{{movie.rating.average}}分)</p>
         </div>
    </div>
    <div id="loading" v-show="show" ><img src="../../assets/img/loading.gif" alt=""/></div>
  </div>
</template>

<script>


    import Axios from 'axios'
    import $ from 'jquery'
export default {

  data () {
    return {
    movieList:[],
      show:false
    }
  },
 mounted:function(){
   this.loadData();
  var _this =this;
    $(window).scroll(function(){
     var windowHeight= $(this).height();
     var scrollTop= $(this).scrollTop();
     var height= $(document).height();
      if(windowHeight + scrollTop >= height){
        _this.show =true;
       _this.loadData();
      }
    });

 },
    methods:{
      loadData(){
        var length=this.movieList.length;
        Axios.get(API_PROXY+'https://api.douban.com/v2/movie/top250?count=10&start='+this.movieList.length+'')
          .then((res)=>{
          this.movieList =this.movieList.concat(res.data.subjects);
        this.show=false;
      });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/reset.css";
  .top-250{
  margin-top:2rem;
    margin-bottom: 1rem;
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
#loading{
  text-align: center;
}
</style>
