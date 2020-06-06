/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 17:21:21
 * @LastEditTime: 2020-06-06 10:39:54
 * @LastEditors: zhuqingyu
 */
import cssMap from './cssMap/cssMap.js'
class CSS {
    constructor(data) {
        this._data = data
        this.cssMap = cssMap
    }
}
export default CSS