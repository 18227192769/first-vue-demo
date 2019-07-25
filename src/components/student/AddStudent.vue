<template>
    <div class="addStudent">
        <div>添加学生：</div>
        <div>
            <label for="">姓名：</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label for="">年龄：</label>
            <input type="text" v-model="age">
        </div>
        <div>
            <button @click="addStudent">添加</button>
        </div>
        <hr />
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
    export default {
        data () {
            return {
                name: '',
                age: ''
            }
        },
        methods: {
            ...mapMutations('student', ['updateStudentList']),
            ...mapActions('student', ['async_updateStudentList']),
            addStudent () {
                const tempObj = {
                    name: this.name,
                    age: this.age,
                    id: +new Date()
                }

                // 触发同步任务修改状态
                // this.$store.commit('updateStudentList', {tempObj});
                this.updateStudentList({tempObj});

                // 触发异步任务修改状态
                // this.$store.dispatch('async_updateStudentList', {tempObj});
                this.async_updateStudentList({tempObj})
            }
        }
    }
</script>

<style scoped>
    .addStudent {
        font-size: 14px;
    }
    div {
        margin: 10px;
    }
</style>

