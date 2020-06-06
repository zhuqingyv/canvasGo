/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 17:21:14
 * @LastEditTime: 2020-06-06 11:49:20
 * @LastEditors: zhuqingyu
 */
import Block from './block/block.js'
import Inline from './inline/inline.js'
import ElementMap from './elementMap/elementMap.js'
import DomTree from './domTree/domTree.js'
import Event from '../eventTool/eventTool.js'
class DOCUMENT {
    constructor(data, css) {
        this.type = 'document'
        this._data = data // 元素信息
        this.Block = Block // 快级元素
        this.Inline = Inline // 行内元素
        this.ElementMap = ElementMap // 判断行内还是块级别
        this.Event = Event // 事件系统
        this.domTree = new DomTree(this)
        this.children = []
    }
    create() {
        this.buildDom(this.data, this)
        this.created()
    }
    created() {}
    buildDom(data, parent) {
        let element = Object.create(null)
        let _children
        if(typeof data === 'string') {
            let info = this.getDomInfo(data)
            let displayType = this.ElementMap.Block[info.type] ? 'block' : this.ElementMap.Inline[info.type] ? 'inline' : null
            if(displayType) {
                element.type = info.type
                element.class = info.class
                switch (displayType) {
                    case 'block': {
                        this.domTree.add(new this.Block(element, parent))
                        break
                    }
                    case 'inline': {
                        this.domTree.add(new this.Inline(element, parent))
                        break
                    }
                }
            }
        } else {
            for(let key in data) {
                let info = this.getDomInfo(key)
                if(this.ElementMap.Block[info.type] || this.ElementMap.Inline[info.type]) {
                    /* 标签名 */
                    element.type = info.type
                    element.class = info.class
                    _children = data[key] && data[key].length ? data[key] : []
                } else if(info.type === 'style') {
                    /* 样式 */
                    element.style = data[key]
                } else if(info.type === 'script') {
                    /* 脚本 */
                    element.script = data[key]
                    element.name = data[key].name
                }
            }
            if(this.ElementMap.Block[element.type]) {
                element = new this.Block(element, parent)
                this.domTree.add(element)
            } else if(this.ElementMap.Inline[element.type]){
                element = new this.Inline(element, parent)
                this.domTree.add(element)
            }
            if(_children.length) {
                _children.forEach(o => {
                    this.buildDom(o, element)
                })
            }
        }
    }
    getDomInfo(str) {
        let startIndex = str.search(/\</) + 1;
        let endIndex = str.search(/\>/);
        let center = str.substring(startIndex, endIndex)
        let className = []
        center = center.split(' ')
        center.forEach(string => {
            if(string.search(/class\=/) !== -1) {
                className.push(string.substring(string.search(/\=/) +2, string.length - 1).split(' '))
            }
        })
        /* 获取class名 */
        return {
            type: center[0], // 标签名例如：div
            class: className
        }
    }
    mixCSS() {}
    addChild(child) {
        this.children.push(child)
    }
    get data() {
        return this._data
    }
    set data(val) {
        this._data = val
    }
}
export default DOCUMENT