/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 17:21:21
 * @LastEditTime: 2020-06-05 11:22:22
 * @LastEditors: zhuqingyu
 */
import cssMap from './cssMap/cssMap.js'
class CSS {
    constructor(data) {
        this._data = data
        this.cssMap = cssMap
    }
    getComputedStyle(element) {}
}
export default CSS