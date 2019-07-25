<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    // 发送请求 -- axios 返回的是一个 promise 对象
    axios.get('/api/student/findAll', {
      params: {
        appkey: '1419479392_1553871312917'
      }
    }).then(res => {
      console.log(res);
    })
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter');
    next();
  }
}
</script>
