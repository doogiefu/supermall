/**
 * Created by PhpStorm.
 * Script Name:
 * Create: 2019/9/26 16:38
 * Description:
 * Author: Doogie<fdj@kuryun.cn>
 */

import axios from 'axios'

export function request (config){
    //1、创建axios实例
    const instance = axios.create({
        baseURL: 'http://kyshop.fdj.oudewa.cn',
        timeout: 5000
    })

    if(! config.hasOwnProperty("method")){
        config.method = 'post';
    }
    if(config.hasOwnProperty("data")){
        config.data = JSON.stringify(config.data);
    }

    //2、axios拦截器
    //请求拦截
    instance.interceptors.request.use(config => {
        /*setTimeout(() => {
            console.log('请求拦截处');
        })*/
        //使用请求拦截器的几个场景：
        //1、config补充
        //2、进入新页面的loading动效
        //3、特殊权限判断，例如接口需要token
        return config  //一定要返回
    }, err => {
        console.log(err);
    })

    //响应拦截
    instance.interceptors.response.use(res => {
        //使用响应拦截器的几个场景：
        //1、config补充
        //2、进入新页面的loading动效
        //3、特殊权限判断，例如接口需要token
        return res.data  //一定要返回
    }, err => {
        console.log(err);
    })
    //3、发送实际请求
    return instance(config)
}