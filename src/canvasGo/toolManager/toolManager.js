/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 17:22:17
 * @LastEditTime: 2020-06-04 22:28:51
 * @LastEditors: zhuqingyu
 */ 
import CSS from './cssTool/css.js'
import DOCUMENT from './documentTool/document.js'
import RENDER from './renderTool/render.js'
class TOOL_MANAGER {
    constructor(config) {
        this.css = new CSS(config ? config.css : null);
        this.document = new DOCUMENT(config ? config.dom : null);
        this.render = new RENDER(config.parent, this.document, this.css);
    }
}
export default TOOL_MANAGER