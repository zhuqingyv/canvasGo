/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 22:19:02
 * @LastEditTime: 2020-06-06 10:49:13
 * @LastEditors: zhuqingyu
 */
import child from './child.js'
export default {
    "<div class='child2-box'>":[
        child
    ],
    "<script>": {
        name: 'child2',
        data() {
            return {}
        }
    },
    "<style>": {
        '.child-box': {
            'width':50,
            'height:': 50,
            'background': '#ff0000'
        }
    }
}