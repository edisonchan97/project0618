import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieComing from '@/components/movie/MovieComing'
import MovieHot from '@/components/movie/MovieHot'
import MovieTop250 from '@/components/movie/MovieTop250'
import Music from '@/components/music/Music'
import Photo from '@/components/photo/Photo'
import Book from '@/components/book/Book'
import MusicAlbums from '@/components/music/MusicAlbums'
import MusicList from '@/components/music/MusicList'
import PhotoList from '@/components/photo/PhotoList'
import PhotoShow from '@/components/photo/PhotoShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      redirect: '/movie/top250'//重定向
    },
    {
      path: '/movie',
      component: Movie,
      children:[//细节啊啊 ！！！！
        {path:'/movie/top250',component:MovieTop250},
        {path:'/movie/hot',component:MovieHot},
        {path:'/movie/coming',component:MovieComing}
      ]
    },
    {
      path: '/',
      redirect: '/movie/top250'
    },
    {
    path:'/music',
  redirect:'/music/music-albums'
},
    //{
    //  path: '/music/music-list/:id',
    //  component: MusicList
    //},
    {
      path:'/music',
      component:Music,
      children:[//细节啊啊 ！！！！
        {path:'/music/music-albums',component:MusicAlbums},
        {path:'/music/music-list/:id',component:MusicList}
      ]
    },
    {
      path: '/photo',
      redirect:'/photo/photo-list'
    },
    {
      path: '/photo',
      component: Photo,
      children:[
        {path:'/photo/photo-list',component:PhotoList},
        {path:'/photo/photo-show/:src',component:PhotoShow}

      ]
    }
    ,   {
      path: '/book',
      component: Book
    }
  ]
})
