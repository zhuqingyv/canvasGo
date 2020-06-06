/*
 * @Author: zhuqingyu
 * @Date: 2020-06-06 11:26:13
 * @LastEditTime: 2020-06-06 11:38:56
 * @LastEditors: zhuqingyu
 */ 
class Selector {
    constructor(event) {}
    // 射线法判定是否选中
    checkPointerOver(point, points){
        //射线法
      let leftSide = 0;
      const A = point;
      for (let i = 0; i < points.length; i++) {
        let B, C;
        if (i === points.length - 1) {
          B = {
            x: points[i][0],
            y: points[i][1]
          };
          C = {
            x: points[0][0],
            y: points[0][1]
          };
        } else {
          B = {
            x: points[i][0],
            y: points[i][1]
          };
          C = {
            x: points[i + 1][0],
            y: points[i + 1][1]
          };
        }
        //判断左侧相交
        let sortByY = [B.y, C.y].sort((a,b) => a-b)
        if (sortByY[0] < A.y && sortByY[1] > A.y){
          if(B.x < A.x || C.x < A.x){
            leftSide ++
          }
        }
      }
      return leftSide % 2 === 1
    }
}
export default Selector