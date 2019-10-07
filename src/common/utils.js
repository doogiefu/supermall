/**
 * Created by PhpStorm.
 * Script Name:
 * Create: 2019/9/30 15:12
 * Description:
 * Author: Doogie<fdj@kuryun.cn>
 */
//防抖动
export function debounce(func, delay){
  let timer = null
  return function (...args){
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}