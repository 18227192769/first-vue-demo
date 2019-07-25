<template>
    <button @click="login">登录</button>
</template>
<script>
    export default {
        methods: {
            login () {
                // 存储时间1天
                const date = new Date( +new Date() + 1 * 24 * 60 * 60 * 1000 );
                // 转换为世界标准时间UTC
                document.cookie = `login=true;expires=${date.toUTCString()}`;
            }
        }    
    }
</script>

