<template>
    <div class="home-goods">
        <van-tabs v-model="activeName" sticky @change="changeTab" color="#1989fa">
            <van-tab title="推荐" name="recommend">
                <van-row>
                    <van-list class="goods-list" :offset="0"
                              v-model="loading"
                              :finished="finished"
                              finished-text="没有更多了"
                              @load="onLoad"
                    >
                        <van-col class="goods-item" span="12"
                                 v-for="item in list"
                                 :key="item.id"
                                 @click="clickGoods(item.id)"
                        >
                            <van-image class="goods-cover" :src="item.cover + '?imageView2/1/w/200/h/250'" />
                            <div class="goods-text">{{item.title}}</div>
                        </van-col>
                    </van-list>
                </van-row>
            </van-tab>
            <van-tab title="热卖" name="hot">
                <van-list class="goods-list" :offset="0"
                          v-model="loading"
                          :finished="finished"
                          finished-text="没有更多了"
                          @load="onLoad"
                >
                    <van-col class="goods-item" span="12"
                             v-for="item in list"
                             :key="item.id"
                             @click="clickGoods(item.id)"
                    >
                        <van-image class="goods-cover" :src="item.cover + '?imageView2/1/w/200/h/250'" />
                        <div class="goods-text">{{item.title}}</div>
                    </van-col>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Tab, Tabs, List, Cell, Row, Col } from 'vant';

    import {listGoods} from 'network/home'

    Vue.use(Tab).use(Tabs).use(List).use(Cell).use(Row).use(Col);

    export default {
        name: 'HomeGoods',
        data(){
            return {
                activeName: 'recommend',
                currentPage: 0,
                pageSize: 6,
                list: [],
                loading: false,
                finished: false
            }
        },
        methods: {
            clickGoods(id){
                console.log(id);
            },
            onLoad(){
                this.currentPage++
                this.getData()
            },
            changeTab(name, title){
                this.currentPage = 1
                this.finished = false
                this.list = []
                this.getData()
            },
            getData(){
                listGoods({
                    type: this.activeName,
                    current_page: this.currentPage,
                    page_size: this.pageSize
                }).then(res => {
                    this.loading = false;
                    this.list.push(...res.data.list) //遍历res.data.list 并插入到this.list
                    if(res.data.list.length < this.pageSize){
                        this.finished = true
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .home-goods .goods-list{margin-top: 20px;}
    .home-goods .goods-item{padding: 0 10px;}
    .home-goods .goods-text{
        font-size: 12px;
        color: #666;
        line-height: 15px;
        margin: 3px 5px 7px 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .van-tab--active{color: #1989fa}
</style>