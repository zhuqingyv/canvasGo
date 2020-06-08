/*
 * @Author: zhuqingyu
 * @Date: 2020-06-06 11:41:33
 * @LastEditTime: 2020-06-07 08:00:37
 * @LastEditors: zhuqingyu
 */ 
class Texture {
    constructor(style) {
        this.source = document.createElement('canvas');
        this.ctx = this.source.getContext('2d');
        this.style = style;
        this.render()
    }
    render() {}
}
export default Texture