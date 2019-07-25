export default {
    namespaced: true,
    state: {
        title: '课程学习',
        cursename: '深入浅出vue.js',
        price: 520
    },
    getters: {
        curse (state) {
            return `课程名：${state.cursename}, 价格；${state.price}`;
        }
    },
    mutations: {
        updatePrice (state, {val}) {
            state.price = val;
        }
    }
}