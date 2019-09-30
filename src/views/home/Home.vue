<template>
    <div id="home">
        <van-nav-bar id="nav-bar" title="购物街" fixed/>
        <home-swipe class="home-banner" :banners="banner"></home-swipe>
        <home-recommend :recommend="recommend"></home-recommend>
        <home-goods class="home-goods"></home-goods>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar } from 'vant';
    import HomeSwipe from './childComps/HomeSwipe';
    import HomeRecommend from './childComps/HomeRecommend';
    import HomeGoods from './childComps/HomeGoods';

    import {getMultiData} from 'network/home'

    Vue.use(NavBar);

    export default {
        name: 'Home',
        components: {
            NavBar, HomeSwipe, HomeRecommend, HomeGoods
        },
        data(){
            return {
                banner: [],
                recommend: [],
                goods: [],
                type: 'recommend'
            }
        },
        created(){
            getMultiData().then(res => {
                this.banner = res.data.banner;
                this.recommend = res.data.recommend;
            })
        }
    }
</script>

<style scoped>
    #nav-bar{background-color: #1989fa;}
    .home-banner{margin-top: 46px;}
    .van-nav-bar__title{color: #fff;}
    .home-goods{margin-top: 10px; padding-bottom: 50px;}
</style>