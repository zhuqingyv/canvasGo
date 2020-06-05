/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 17:23:13
 * @LastEditTime: 2020-06-04 22:08:56
 * @LastEditors: zhuqingyu
 */ 
import Hierarchy from './Hierarchy/Hierarchy.js'
import Painter from './Painter/Painter.js'
class RENDER {
    constructor(target) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.Hierarchy = new Hierarchy(); //层级关系管理器
        this.Painter = new Painter(); // 绘制器
        this.document = null;
        this.css = null;
        this._width = 0;
        this._height = 0;

        this.parent = target ? target : document.body;
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0px';
        this.canvas.style.left = '0px';
        this.parent.appendChild(this.canvas);
    }
    render() {
        
    }
    get width() {
        return this._width
    }
    set width(val) {
        this._width = val
    }
    get height() {
        return this._height
    }
    set height(val) {
        this._height = val
    }
}
export default RENDER