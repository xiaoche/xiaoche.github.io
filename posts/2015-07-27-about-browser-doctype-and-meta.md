# 浏览器DOCTYPE及兼容模式meta知识整理

针对最近出现的几例IE8及360浏览器兼容性问题，我对Html页面的`DOCTYPE`及部分`meta`标签知识进行了整理。

## 1. 关于DOCTYPE
1.1 `DOCTYPE`每个页面必须*有且只有一个*，*必须放在页面最开头*，且`DOCTYPE`前无任何代码。

1.2 现存在的几种`DOCTYPE`形式
*	HTML5模式

```` 
<!DOCTYPE html>
```` 

*	HTML 4.01 Strict

	该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

```` 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```` 

*	HTML 4.01 Transitional

	该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

```` 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
```` 

*	HTML 4.01 Frameset

	该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。

```` 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" 
"http://www.w3.org/TR/html4/frameset.dtd">
```` 

使用Html5的DOCTYPE是最为安全，建议统一使用Html5的DOCTYPE

```` 
<!DOCTYPE html>
```` 


## 2. IE8以上浏览器Quirks模式
一个正常标准的页面一般不会出现`Quirks`模式渲染，但是有些因素会自动触发兼容性文档视图。比如：

* 存在于注册表中的兼容性视图列表，
* 当url匹配时将自动切换到兼容性视图
* 在注册表中的对应字段指定了使用兼容性视图来显示所有网站
* 未指定`DOCTYPE`，则使用`Quirks`模式
* 曾经遇到过错误

这个时候设置`X-UA-Compatible`就可以防止这个自动触发的行为。

```` 
<meta http-equiv="X-UA-Compatible" content="IE=edge" >
```` 

这里的content值有`IE=9;` `IE=8;` `IE=7;` `IE=EmulateIE7;` `IE=edge;` `chrome=1;`

`IE=edge` 默认以最高IE版本渲染，
建议设置`mate`为

```` 
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
```` 

若浏览者有安装Chrome Frame，且浏览者的IE浏览器版本为IE8或更低，此代码会自动引导浏览器激活插件进行排版及运算；但若浏览者并没有安装插件或IE版本为IE9或更高，就和`<meta http-equiv="X-UA-Compatible" content="edge" />`一样，走IE高版本。

部分大网站`X-UA-Compatible`设置情况

<table>
<thead>
<tr>
  <th>有设置</th>
  <th>无设置</th>
</tr>
</thead>
<tbody>
<tr>
  <td>淘宝</td>
  <td>网易</td>
</tr>
<tr>
  <td>支付宝</td>
  <td>新浪</td>
</tr>
<tr>
  <td>腾讯</td>
  <td>阿里巴巴</td>
</tr>
<tr>
  <td>百度</td>
  <td>豆瓣</td>
</tr>
<tr>
  <td>GitHub</td>
  <td>Amazon</td>
</tr>
<tr>
  <td>Yahoo</td>
  <td>YouTube</td>
</tr>
<tr>
  <td></td>
  <td>Facebook</td>
</tr>
</tbody>
</table>

 
## 3. 360极速模式与兼容模式
根据360官方文档，设置`meta`标签可以默认以极速模式渲染

```` 
<meta name="renderer" content="webkit" /> 
```` 

网上有部分用户反映无效，本人在windows两个版本下测试均有效。

WIN 7系统 IE浏览器版本为`IE 8.0.7601.17514`，360浏览器版本为`7.1.8` 内核版本：`31.0.1650.63`
WIN XP系统 IE浏览器版本为`IE 8.0.6001.18702`，360浏览器版本为`7.1.1.572` 内核版本：`31.0.1650.63`

## 4. 浏览器兼容性问题
虽说我们向客户许诺兼容IE8以上版本浏览器，可360浏览器等国内奇葩双核浏览器的兼容性模式还是以客户端的IE版本为核心，就有可能出现IE7，甚至IE6的情况，客户无法辨认是否IE8以上。

鉴于此，建议在页面上加一个浏览器判断，如低于IE8以下，给出一个友情弹出层，提示用户升级浏览器或者选择其他浏览器。

## 5. 总结
根据以上内容，在HTML规范书写的情况下，建议用以下代码规范HTML头部

```` 
<!DOCTYPE html>
<!--Html5 doctype-->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!--IE浏览器默认以最高版本渲染-->
<meta name="renderer" content="webkit" />
<!--双核360浏览器以极速模式渲染-->
```` 

以上内容为个人整理，如有不对望指正。





