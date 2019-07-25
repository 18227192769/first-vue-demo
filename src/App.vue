<template>
  <div id="app">
    <div class="top">
      <!-- <router-link class="title" tag="div" to="/home">四川大学锦江学院</router-link> -->
      <div class="title" @click="redirect_home">四川大学锦江学院</div>
      <ul id="nav">
        <!-- 
          路由链接:
            可以通过 tag 属性指定 router-link 渲染为什么标签, 默认是 a 标签

            to 属性可以通过 路由路径 / 对象的方式进行设置
              eg: 
                路由路径: /
                对象: {path: '/'} / {name: 'home'}

            vue 会根据当前的路由情况给 router-link 加上两个 class 类名:
              当前路由和标签所对应的路由链接完全匹配时: router-link-exact-active
              当前路由路径包含了标签所对应的路由链接: router-link-active

              两个类的名字可以在 router.js 文件中进行配置:
                eg:
                  linkExactActiveClass: 'active-exact',
                  linkActiveClass: 'acitve',
        -->
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" to="/learn">课程学习</router-link>
        <router-link tag="li" to="/student">学员展示</router-link>
        <router-link tag="li" to="/about">关于</router-link>
        <router-link tag="li" to="/community">社区</router-link>
      </ul>
    </div>
    <!-- 路由加载的组件会替换该标签 -->
    <div class="main">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
  export default {
    methods: {
      redirect_home () {
        // 向页面栈里压入一个新的页面，实现跳转
        this.$router.push('/home');
        // 将页面栈里的当前页面替换会另一个页面
        // this.$router.replace('/home');

        // 跳转页面 -- 0  当前页面
        //            1  前进一个页面
        //            -2 后退两个页面
        // this.$router.go(0)
      }
    }
  }
</script>


<style scoped>
  #app {
    min-width: 750px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: rgb(109, 197, 224);
    color: #fff;
  }
  .title {
    margin-left: 100px;
    cursor: pointer;
  }
  #nav {
    width: 300px;
    height: 60px;
    list-style: none;
    margin: 0;
    margin-right: 100px;
  }
  #nav li {
    float: left;
    line-height: 60px;
    margin: 0 10px;
    font-size: 14px;
    cursor: pointer;
  }
  .main {
    padding: 20px 100px;
  }
  .active {
    font-weight: 700;
  }
</style>
