/*
 * @Author: zhuqingyu
 * @Date: 2020-06-05 10:11:33
 * @LastEditTime: 2020-06-05 11:30:36
 * @LastEditors: zhuqingyu
 */ 
const cssMap = {
    // 位置/大小 关系
    'width': Number || String,
    'height': 1,
    'display': 1,
    'position': 1,
    'text-align': 1,
    'overflow': 1,
    'background': {
        'color': 1,
        'image': 1
    },
    // 样式
    'color': 1,
    'font': {
        'size': 1,
        'color': 1,
        'family': 1,
        'bold': 1
    }
}
export default cssMap