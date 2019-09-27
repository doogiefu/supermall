<template>
    <div class="tab-bar-item" @click="clickItem" :class="[classDefault, activeClass]">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div>
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { TabbarItem } from 'vant';

    Vue.use(TabbarItem);

    export default {
        name: 'TabBarItem',
        props: {
            path: String,
            classActive:{
                type: String,
                default: 'active'
            },
            classDefault:{
                type: String,
                default: 'default'
            }
        },
        /*data(){
            return{
                activeClass: 1
            }
        },*/
        methods: {
            clickItem(){
                if(this.$route.path != this.path) this.$router.push(this.path)
            }
        },
        computed: {
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeClass(){
                return this.isActive ? this.classActive : ''
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-top: 3px;
    }
    .tab-bar-item.default{
        color: #8a8a8a;
        font-size: 14px;
    }
    .tab-bar-item.active{color: #1296db;}
</style>