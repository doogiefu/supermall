<template>
    <div style="text-align: center;">
        <h2>按钮类型</h2>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>

        <h2>朴素按钮</h2>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button } from 'vant';

    Vue.use(Button);

    export default {
        name: 'Button'
    }
</script>

<style scoped>

</style>