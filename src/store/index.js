import Vue from 'vue'
import Vuex from 'vuex'
import student from './student'
import learn from './learn'

// 在 vue 实例上注入一个属性 $store
Vue.use(Vuex)

export default new Vuex.Store({
  // 当环境变量不为 生产模式 时，开启严格模式，对代码进行深度检测
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    student,
    learn
  },
  // state: {
  //   studentList: []
  // },
  // // 和 vue 中的计算属性相同
  // getters: {
  //   student (state) {
  //     return `姓名：${state.name}，年龄：${state.age}`
  //   },
  //   newStudentList (state, getters) {
  //     // 通过参数可以获取 state，getters 中的属性
  //     console.log(getters.student);
  //     return state.studentList.map(ele => `姓名：${ele.name}，年龄：${ele.age}`)
  //   }
  // },
  // // 同步
  // mutations: {
  //   // mutations的函数中不应该存在异步操作
  //   updateStudentList (state, {tempObj}) {
  //     state.studentList.push(tempObj);
  //   }
  // },
  // // 异步
  // actions: {
  //   async_updateStudentList ( {commit}, payload ) {
  //     setTimeout(() => {
  //       commit('updateStudentList', payload)
  //     }, 1000)
  //   }
  // }
})
