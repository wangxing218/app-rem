# App-rem 移动端自适应布局解决方案
做为一名移动端的前端开发者，是否遇到过这样的问题：
+ 无法将设计稿一比一的还原成demo；
+ 每次取得的像素尺寸，都除以2或者除以3；
+ 每次设置背景都得设置background-size;
+ 在不同尺寸的移动设备上总会有些地方走形；
+ 更多...

有了App-rem自适应布局框架，这些问题将不再是问题，拿到设计稿，是多少就写多少。
框架将为你自动适配不同的移动设备。

##[点击查看demo](https://wangxing218.github.io/app-rem/test/demo.html)

##使用方法
1. 在头部引用rem.js（仅10几行代码）
```html
<script src="rem.js"></script>
```
2. 按设计稿和标准尺寸设置html参数（以iphone6为例）
```html
<html data-width="750" data-dpr="2">
```
> data-width为设计稿的真实尺寸，data-dpr为设计尺寸相对于物理机尺寸的倍数，此处为 750 / 375
> 两个参数都有默认值，也可以不用设置，直接在rem.js里修改。

3. 按设计稿编写您的css代码。
```css
html {
    font-size: 100px;
}
header{
    height: .88rem;
    line-height: .88rem;
}
```


> 这里给html设置字体大小为100px,是为了让页面渲染得更顺畅，rem.js原理利用就是css中rem单位的特性。
其他元素在设计图中是多少px，就将数据 除100得到相应的rem值。



##作者
###网站： <a href="http://www.boyxing.com/" target="_blank">www.boyxing.com 星仔博客</a>
### QQ ： <a href="http://wpa.qq.com/msgrd?v=3&uin=1263996779&site=qq&menu=yes" target="_blank">1263996779</a>
