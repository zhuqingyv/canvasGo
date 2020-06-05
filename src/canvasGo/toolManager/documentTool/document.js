/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 17:21:14
 * @LastEditTime: 2020-06-04 22:38:54
 * @LastEditors: zhuqingyu
 */
import Block from './block/block.js'
import Inline from './inline/inline.js'
class DOCUMENT {
    constructor(data) {
        this.Block = Block // 快级元素
        this.Inline = Inline // 行内元素
        this._data = data
    }
}
export default DOCUMENT