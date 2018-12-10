# first-my-demo

> My swell Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8999
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).\

## tips
``` bash
# 根据项目运行环境（PC端 或 移动端），修改参数配置
修改 nuxt.config.js 文件 build配置下的postcss 的相关参数值：
1.当为PC端时，设置 { remUnit: 192 }; - 要求UI设计图width = 1920px;
2.当为移动端时，设置 { remUnit: 75 }; - 要求UI设计图width = 750px;
```
