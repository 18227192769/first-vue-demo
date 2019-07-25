<template>
    <div class="studentList">
        <div>学生列表：</div>
        <ul>
            <li v-for="item in list"
                :key="item.id">{{ `name：${item.name}，age：${item.age}` }}</li>
        </ul>
        <hr />
        <ul>
            <li v-for="(item, index) in newStudentList"
                :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

    // 返回的是 state 中的数据的函数，函数返回了该数据的值，类似计算属性中的属性
    console.log( mapState('student', ['studentList']) );
    console.log( mapGetters('student', ['newStudentList']) );
    export default {
        computed: {
            // 扩展之后得到: studentList: () => { return this.$store.state.studentList }
            ...mapState('student', ['studentList']),
            // 重命名取出来的数据
            ...mapState({
                list: state => state.student.studentList
            }),
            ...mapGetters('student', ['newStudentList'])
        },
        updated () {
            console.log(this.studentList, this.list);
        }
    }
</script>

<style scoped>
    .studentList {
        font-size: 14px;
        margin: 20px;
    }
    ul {
        list-style: none;
    }
</style>
