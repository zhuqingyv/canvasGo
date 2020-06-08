/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 18:51:53
 * @LastEditTime: 2020-06-07 08:48:45
 * @LastEditors: zhuqingyu
 */ 
import Position from './Position/position.js'
import Event from '../../../common/Event/event.js'
import Texture from '../../../common/Texture/texture.js'
import cssMap from '../../cssTool/cssMap/cssMap.js'
class Element {
    constructor(data, parent) {
        this.type = 'element'
        this.data = data;
        this.style = data.style;
        this.children = data.children;
        this.name = this.data.name;
        this.parent = parent;
        this.Event = Event;
        this.position = new Position();
        this.Texture = new Texture(this.getComputedStyle());
    }
    getComputedStyle() {
        let result = {}
        if(this.style) {
            for(let key in this.style) {
                debugger
                this.loopStyle(this.style[key])
                // if(this.style[key] && this.class.some(_class => _class === this.style[key])) {
                //     // result[key] = this.style[key]
                //     for(let)
                //     if(cssMap[this.style[key]]) {
                //         console.log()
                //     }
                // }
            }
        }
    }
    loopStyle(list) {
        
    }
    render() {}
    addChild(child) {
        this.children.push(child)
    }
    get class() {
        return this.data.class ? this.data.class : []
    }
}
export default Element