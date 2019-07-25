// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// // 使用路由 -- 同时会在vue实例上添加 $router 和 $route 两个属性
// Vue.use(Router)

// // 路由的两种模式: hash mode / history mode
// // 使用hash mode时url上会显示一个 # , history mode则不会
// export default new Router({
//   // 使用历史模式
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       // 懒加载 -- 该路由被访问时才加载对应的组件
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })



import Router from 'vue-router';
import Vue from 'vue';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'active',
  routes: [
    // {
    //   path: '/',
    //   // 当访问 / 路径时，重定向到 /home
    //   redirect: '/home'
    // },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // 路由独享守卫
      beforeEnter (to, from, next) {
        console.log('beforeEnter');
        // 访问该路由时，需要调用 next 方法才能进入
        next();
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('_v/Learn')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('./views/Student'),
      // 路由元信息
      meta: {
        login: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community'),
      // 路由元信息
      meta: {
        login: true
      },
      // 跳转到该路由时，默认定向到指定的子路由
      redirect: '/community/academic',
      // 嵌套路由
      children: [
        {
          path: 'academic',
          name: 'academic',
          component: () => import('./views/Academic')
        },
        {
          path: 'download',
          name: 'download',
          component: () => import('./views/DownLoad')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('./views/Personal')
        }
      ]
    },
    {
      // 动态路由
      path: '/question/:id',
      name: 'question',
      component: () => import('./views/Question')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: () => import('./views/NotFound')
    },
    {
      // 匹配所有路径
      path: '*',
      redirect (to) {
        // 当访问 / 路径时重定向到 /home
        if (to.path === '/') {
          return '/home';
        } else {
          return '/NotFound'
        }
      }
    }
  ]
})