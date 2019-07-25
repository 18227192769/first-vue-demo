<template>
    <div>
        <p>{{ $store.state.learn.title }}</p>
        <span>{{ $store.getters['learn/curse'] }}</span>
        <button @click="updatePrice">更新价格</button>
    </div>
</template>

<script>
    export default {
        methods: {
            updatePrice () {
                const val = 1000;
                this.$store.commit('learn/updatePrice', {val})
            }
        }
    }
</script>
