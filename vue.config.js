/**
 * Created by PhpStorm.
 * Script Name:
 * Create: 2019/9/27 11:21
 * Description:
 * Author: Doogie<fdj@kuryun.cn>
 */

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}