import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false;

/*
  导航解析流程:
    首次渲染时:
      1.调用全局的 beforeEach 守卫
      2.在路由配置里调用 beforeEnter
      3.解析异步路由组件
      4.在被激活的路由组件里调用 beforeRouteEnter
      5.调用全局的 beforeResolve 守卫
      6.导航被确认
      7.调用全局的 afterEach 守卫
      8.触发DOM更新

    切换路由时:
      1.在失活的组件里调用 beforeRouteLeave 守卫
      2.调用全局的 beforeEach 守卫
      3.在重用的组件里调用 beforeRouteUpdate 守卫
      4.在路由配置里调用 beforeEnter
      5.解析异步路由组件
      6.在被激活的路由组件里调用 beforeRouteEnter
      7.调用全局的 beforeResolve 守卫
      8.导航被确认
      9.调用全局的 afterEach 守卫
      10.触发DOM更新
*/


// 全局守卫 -- 守卫每一个路由
// 执行顺序 全局守卫 -> 路由独享守卫 -> 组件内守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  // 不调用 next 方法则无法进入路由
  // next();

  // console.log(to);
  // 判断要前往的路由上是否具有 路由元信息(login: true)
  const needLogin = to.matched.some(ele => ele.meta.login === true);
  // console.log(needLogin);
  const isLogin = document.cookie.includes('login=true');
  if (needLogin) {
    if (isLogin) {
        next();
      } else {
        const flag = window.confirm('登录后才能访问o，是否前往登录?')
        if (flag) {
          next('/login');
        }
      }
  } else {
    next();
  }
  
});
// 路由全部加载完毕才会执行 -- 在组价内守卫 beforeRouteEnter 之后执行
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');
  next();
})
// 导航被确认后执行 -- 最后执行 -- 触发DOM更新
router.afterEach(() => {
  console.log('afterEach');
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
