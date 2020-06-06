/*
 * @Author: zhuqingyu
 * @Date: 2020-06-05 14:29:09
 * @LastEditTime: 2020-06-06 10:33:47
 * @LastEditors: zhuqingyu
 */ 
class DomTree {
    constructor(document) {
        this.object = {}
        this.document = document
    }
    add(child) {
        child.parent.addChild(child)
    }
    remove(data) {

    }
    get tree() {
        return this.document
    }
}
export default DomTree