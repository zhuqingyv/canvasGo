/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 17:33:20
 * @LastEditTime: 2020-06-04 17:48:09
 * @LastEditors: zhuqingyu
 */ 
const express = require('express')
const path = require('path')

const app = express()
const port = 3000
app.listen(port, () => { console.log(`${port} 端口success！`) })
app.use(express.static(path.join(__dirname, 'src')))