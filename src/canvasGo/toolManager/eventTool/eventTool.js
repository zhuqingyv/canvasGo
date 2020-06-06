/*
 * @Author: zhuqingyu
 * @Date: 2020-06-06 10:56:02
 * @LastEditTime: 2020-06-06 11:27:10
 * @LastEditors: zhuqingyu
 */ 
import Selector from './select/select.js'
class Event {
    constructor() {
        this.selector = new Selector(this)
    }
}
export default Event