/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 17:22:17
 * @LastEditTime: 2020-06-06 11:47:03
 * @LastEditors: zhuqingyu
 */ 
import CSS from './cssTool/css.js'
import DOCUMENT from './documentTool/document.js'
import RENDER from './renderTool/render.js'

class TOOL_MANAGER {
    constructor(config) {
        this.config = config ? config : Object.create(null)
        this.css = new CSS(config ? config.css : null);
        this.document = new DOCUMENT(config ? config.dom : {}, this.css);
        this.document.create();
        this.render = new RENDER(config.parent, this.document.domTree, this.css);
        this.render.render()
    }
}
export default TOOL_MANAGER