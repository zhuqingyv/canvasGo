/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 18:51:53
 * @LastEditTime: 2020-06-06 11:46:12
 * @LastEditors: zhuqingyu
 */ 
import Position from './Position/position.js'
import Event from '../../eventTool/eventTool.js'
import Texture from '../../../common/Texture/texture.js'
class Element {
    constructor(data, parent) {
        this.type = 'element'
        this.data = data
        this.parent = parent
        this.children = data.children
        this.name = this.data.name
        this.Event = Event
        this.position = new Position()
    }
    render() {}
    addChild(child) {
        this.children.push(child)
    }
}
export default Element