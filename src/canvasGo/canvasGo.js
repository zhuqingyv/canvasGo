/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 10:28:43
 * @LastEditTime: 2020-06-06 10:55:17
 * @LastEditors: zhuqingyu
 */ 
import TOOL_MANAGER from './toolManager/toolManager.js'
class CanvasGo {
    constructor(config) {
        this.config = config
        if(document.readyState !== 'complete') {
            window.addEventListener('DOMContentLoaded', this.init.bind(this), false);
            return
        }
        this.init()
    }
    init() {
        this.toolManager = new TOOL_MANAGER(this.config)
        window.addEventListener('resize', e => {
            this.toolManager.render.resize.bind(this.toolManager.render)(e)
        })
        window.c = this
    }
    get document() {
        return this.toolManager.document
    }
}
export default CanvasGo