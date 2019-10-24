<template>
    <div class="recommend">
        <van-grid :border="false" :column-num="4">
            <van-grid-item v-for="(item, index) in recommend">
                <van-image round class="recommend-img" :src="item.cover + '?imageView2/1/w/200/h/200'" />
                <span class="recommend-text">{{item.title}}</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Grid, GridItem, Image } from 'vant';

    Vue.use(Grid).use(GridItem).use(Image);

    export default {
        name: 'HomeRecommend',
        props: {
            recommend: {
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped> /*去掉scoped后样式才能覆盖成功*/
    /*覆盖样式统一为： 页面id 组件类名 元素  ，否则容易出现样式污染*/
    .recommend .recommend-text{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 60px !important;
        font-size: 12px;
        color: #7d7e80;
        padding-top: 3px;
    }
</style>