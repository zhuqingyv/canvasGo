/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 17:23:13
 * @LastEditTime: 2020-06-06 11:40:14
 * @LastEditors: zhuqingyu
 */ 
import Hierarchy from './Hierarchy/Hierarchy.js'
import Painter from './Painter/Painter.js'
class RENDER {
    constructor(target, domTree, css) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.Hierarchy = new Hierarchy(); //层级关系管理器
        this.Painter = new Painter(); // 绘制器

        // 初始化数据
        this.domTree = domTree.document
        this.css = css;
        this._width = 0;
        this._height = 0;
        this.currentRenderDom = null; // 当前渲染的外层元素
    
        this.init(target)
    }
    init(target) {
        this.parent = target ? target : document.body;
        this.width = target ? target.width : window.innerWidth;
        this.height = target ? target.height : window.innerHeight;
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0px';
        this.canvas.style.left = '0px';
        this.resizeParent = target ? this.parent : window;

        this.resizeParent.addEventListener('resize', this.resize)
        this.parent.appendChild(this.canvas);
    }
    render() {
        this.domTree
    }
    resize(e) {
        this.height = e.target.innerHeight
        this.width = e.target.innerWidth
    }
    update() {
        this.width = this.parent.width
        this.height = this.parent.height
    }

    get width() {
        return this._width
    }
    set width(val) {
        this._width = val;
        this.canvas.width = val;
        // this.parent.height = `${val}px`;
    }

    get height() {
        return this._height
    }
    set height(val) {
        this._height = val;
        this.canvas.height = val;
        // this.parent.height = `${val}px`;
    }
}
export default RENDER