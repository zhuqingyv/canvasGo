/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 10:28:43
 * @LastEditTime: 2020-06-05 11:29:51
 * @LastEditors: zhuqingyu
 */ 
import TOOL_MANAGER from './toolManager/toolManager.js'
class CanvasGo {
    constructor(config) {
        this.toolManager = new TOOL_MANAGER(config)
        window.c = this
    }
}
export default CanvasGo