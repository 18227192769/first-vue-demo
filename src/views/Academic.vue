<template>
    <div class="academic">
        <ul class="questions">
            <router-link class="question"
                         v-for="item in questionList"
                         :key="item.questionId"
                         tag="li"
                         :to="{name: 'question', params: {id: item.questionId}}">
                         {{ item.questionContent }}
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        // 将要通过路由进入前执行
        beforeRouteEnter (to, from, next) {
            // 该函数中不能使用 this, 因为函数执行在渲染组件之前
            // console.log(to, from, next);

            // 执行 next 函数渲染组件
            //      next函数可以传入一个函数，传入函数的第一个参数接收当前组件的实例对象
            next(vm => {
                console.log(vm);
            })
        },
        data () {
            return {
                questionList: [
                    {
                        questionId: 201901,
                        questionContent: '到底什么是es6中的class? 怎么实现class?'
                    },
                    {
                        questionId: 201902,
                        questionContent: '什么是es6箭头函数? 与普通函数主要区别在哪里? 到底该不该使用箭头函数?'
                    },
                    {
                        questionId: 201903,
                        questionContent: '什么是es6结构赋值，每次都创建一个对象吗? 会加重GC的负担吗? 为什么?'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .question {
        padding: 5px;
        cursor: pointer;
    }
</style>

