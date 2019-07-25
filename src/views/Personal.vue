<template>
    <div class="personal">
        <span>姓名:</span>
        <input type="text" v-model="personName">
        <button @click="sure">确定</button>
    </div>
</template>

<script>
    export default {
        // 导航守卫
        // 当路由将要发生改变时执行
        beforeRouteLeave (to, from, next) { 
            // console.log(to, from, next);
            // to -- 要跳转到的页面的一些信息
            // from -- 当前页面的一些信息
            // next -- 执行 next 函数就会跳转到目标页面
            if (this.personName) {
                let flag = confirm('是否要离开此页面?');
                if (flag) {
                    next();
                }
            } else {
                next();
            }
        },
        data () {
            return {
                personName: ''
            }
        },
        methods: {
            sure () {
                this.personName = ''
            }
        }
    }
</script>
