# App-rem 移动端自适应布局解决方案
做为一名移动端的前端开发者，是否遇到过这样的问题：
+ 无法将设计稿一比一的还原成demo；
+ 每次取得的像素尺寸，都除以2或者除以3；
+ 每次设置背景都得设置background-size；
+ 在不同尺寸的移动设备上总会有些地方走形；
+ 更多...

有了App-rem自适应布局框架，这些问题将不再是问题，拿到设计稿，是多少就写多少。
框架将为你自动适配不同的移动设备。

##[点击查看demo](https://wangxing218.github.io/app-rem/test/demo.html)
![image](https://wangxing218.github.io/app-rem/test/er.png)

##使用方法
第一步： 在头部引用rem.js
```html
<script src="rem.js"></script>
```
第二步： 按设计稿和标准尺寸设置html参数（以iphone6为例）
```html
<html data-width="750" data-dpr="2">
```
> 强烈建议不需要在html标签中设置width和dpr的值，data-width可以在rem.js中设定,dpr不用管，让它自动适配就好了
> data-width为设计稿的真实尺寸，data-dpr为像素比，此处为 750 / 375


第三步： 按设计稿编写您的css代码。
```css
html {
    font-size: 100px;
}
div,p{
	max-height: 1000rem;
}
.header{
    height: .88rem;
    line-height: .88rem;
}
div,p{
	max-height: 100rem;
}
```
> 这里给html设置字体大小为100px,是为了让页面渲染得更顺畅，并不是非必要的。rem.js原理利用就是css中rem单位的特性。
其他元素在设计图中是多少px，就将数据 除100得到相应的rem值。
> div，p设置最大高度，是为了解决字体用rem单位时出现的偏差较大的bug。


##作者
### QQ ： <a href="http://wpa.qq.com/msgrd?v=3&uin=1263996779&site=qq&menu=yes" target="_blank">1263996779</a>
