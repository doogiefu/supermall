<template>
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in banners" :key="index">
            <a :href="image.url">
                <img v-lazy="image.image" class="banner" />
            </a>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem, Lazyload  } from 'vant';

    Vue.use(Swipe).use(SwipeItem).use(Lazyload);

    export default {
        name: 'HomeSwipe',
        props: {
            banners: {
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.banner{width: 100%;}
</style>