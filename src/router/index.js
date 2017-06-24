import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieComing from '@/components/movie/MovieComing'
import MovieHot from '@/components/movie/MovieHot'
import MovieTop250 from '@/components/movie/MovieTop250'
import Music from '@/components/music/Music'
import Photo from '@/components/photo/Photo'
import Book from '@/components/book/Book'
import MusicList from '@/components/music/MusicList'

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
        {path:'/movie/coming',compoent:MovieComing}
      ]
    },
    {
      path: '/',
      redirect: '/movie/top250'
    },
    {
    path: '/music',
  component: Music
},
    {
      path: '/music/music-list/:id',
      component: MusicList
    },
    {
      path: '/photo',
      component: Photo
    }
    ,   {
      path: '/book',
      component: Book
    }
  ]
})
