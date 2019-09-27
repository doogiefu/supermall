<template>
    <div>
        <van-tabbar v-model="currentTab"
                    active-color="#1989fa"
                    inactive-color="#7d7e80"
                    safe-area-inset-bottom>
            <van-tabbar-item to="/home" name="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" name="/category">
                <span>分类</span>
                <i class="iconfont icon-category-o" slot="icon" slot-scope="props"></i>
            </van-tabbar-item>
            <van-tabbar-item to="/cart" name="/cart" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/profile" name="/profile" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Tabbar, TabbarItem} from 'vant';

    Vue.use(Tabbar).use(TabbarItem);

    export default {
        name: 'MainTavBar',
        computed: {
            currentTab(){
                return this.$route.path
            }
        },
        components:{
            Tabbar, TabbarItem
        }
    }
</script>