/*
 * @Author: zhuqingyu
 * @Date: 2020-06-05 20:57:34
 * @LastEditTime: 2020-06-05 21:02:53
 * @LastEditors: zhuqingyu
 */ 
class Position {
    constructor() {
        this._x = 0;
        this._y = 0;
        this._left = 0;
        this._right = 0;
        this._top = 0;
        this._bottom = 0;
    }
    get x() {
        return this._x
    }
    set x(val) {
        this.x = parseFloat(val)
    }

    get y() {
        return this._y
    }
    set y(val) {
        this._y = parseFloat(val)
    }

    get left() {
        return this._left
    }
    set left(val) {
        this._left = parseFloat(val)
    }

    get right() {
        return this._right
    }
    set right(val) {
        this._right = parseFloat(val)
    }

    get top() {
        return this._top
    }
    set top(val) {
        this._top = parseFloat(val)
    }

    get bottom() {
        return this._bottom
    }
    set bottom(val) {
        this._bottom = parseFloat(val)
    }
}
export default Position