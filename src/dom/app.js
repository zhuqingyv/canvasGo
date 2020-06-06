/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 22:19:02
 * @LastEditTime: 2020-06-06 10:49:32
 * @LastEditors: zhuqingyu
 */ 
import child from './child.js'
import child2 from './child2.js'
export default {
    "<div class='app-box'>":[
        child,
        "<span class='text'>",
        child2
    ],
    "<script>": {
        name:'App',
        data() {
            return {}
        }
    },
    "<style>": {
        '.app-box': {
            'width':100,
            'height:': 100,
            '.content-item': {}
        }
    }
}