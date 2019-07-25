<template>
    <div id="community">
        <ul class="nav">
            <router-link tag="li" :to="{name: 'academic'}">学术讨论</router-link>
            <router-link tag="li" :to="{name: 'download'}">资源下载</router-link>
            <router-link tag="li" :to="{path: 'personal'}">个人中心</router-link>
        </ul>
        <router-view class="router-view" />
    </div>
   
</template>

<script>
    export default {
        beforeRouteUpdate () {
            console.log(111);
        }
    }
</script>


<style scoped>
    .nav {
        padding: 0;
        list-style: none;
        font-size: 14px;
    }
    .nav li {
        float: left;
        margin-right: 10px;
        padding: 10px;
        
        cursor: pointer;
    }
    .nav::after {
        display: block;
        content: '';
        clear: both;
    }
    .active-exact {
        color: #fff;
        background-color: rgb(91, 184, 212);
    }
    .router-view {
        padding: 10px;
        font-size: 14px; 
    }
</style>
