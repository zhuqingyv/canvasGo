/*
 * @Author: zhuqingyu
 * @Date: 2020-06-04 10:47:00
 * @LastEditTime: 2020-06-04 10:55:03
 * @LastEditors: zhuqingyu
 */ 
module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
};
