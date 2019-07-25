<template>
    <div class="question">
        <span>问题：</span>
        <span>{{ questionContent }}</span>
        <button @click="nextQuestion"
                v-if="hasQuestion">下一个问题</button>
    </div>
</template>

<script>
    export default {
        // 路由的子路由切换时执行
        beforeRouteUpdate (to, from, next) {
            console.log('question: route-update');
            // console.log(to, from, next);
            const id = to.params.id;
            const index = this.questionList.findIndex(ele => ele.questionId === id);
            if (index !== -1) {
                this.questionContent = this.questionList[index].questionContent;
                this.questionId = this.questionList[index].questionId;
            } else {
                this.questionContent = '没有问题了!';
                this.hasQuestion = false;
            }
            next();
            
        },
        mounted () {
            // console.log(this.$route);
            const id = this.$route.params.id;
            // 如果遍历函数返回 true ，则会返回当前项的索引
            const index = this.questionList.findIndex(ele => ele.questionId === id);
            this.questionContent = this.questionList[index].questionContent;
            this.questionId = this.questionList[index].questionId;
        },

        data () {
            return {
                questionId: '',
                questionContent: '',
                hasQuestion: true,
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
        },
        methods: {
            nextQuestion () {
                this.$router.push({
                    name: 'question',
                    params: {
                        id: ++ this.questionId
                    }
                })
            }
        }
        
    }
</script>
