/**
 * Created by PhpStorm.
 * Script Name:
 * Create: 2019/9/29 14:53
 * Description:
 * Author: Doogie<fdj@kuryun.cn>
 */

import {request} from './request'

export function getMultiData() {
    return request({
        url: '/api/home/getmultidatapost'
    })
}

export function listGoods(data) {
    return request({
        url: '/api/home/listgoodspost',
        data: data
    })
}