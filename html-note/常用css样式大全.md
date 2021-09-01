## 常用css样式大全
### 字体属性：(font)

```css
大小 {font-size: x-large;}(特大) xx-small;(极小) 一般中文用不到，只要用数值就可以，单位：PX、PD
样式 {font-style: oblique;}(偏斜体) italic;(斜体) normal;(正常)
行高 {line-height: normal;}(正常) 单位：PX、PD、EM
粗细 {font-weight: bold;}(粗体) lighter;(细体) normal;(正常)
变体 {font-variant: small-caps;}(小型大写字母) normal;(正常)
大小写 {text-transform: capitalize;}(首字母大写) uppercase;(大写) lowercase;(小写) none;(无)
修饰 {text-decoration: underline;}(下划线) overline;(上划线) line-through;(删除线) blink;(闪烁)
常用字体{font-family: "Microsoft YaHei"}(微软雅黑),"MicrosoftJhengHei"(华文细黑), "STHeiti", 
"MingLiu","Courier New", "Courier, monospace", "Times New Roman", "Times", "serif", "Arial","Helvetica", "sans-serif"," Verdana"

```

### 背景属性： (background)

```
色彩 {background-color: #FFFFFF;}
图片 {background-image: url();}
重复 {background-repeat: no-repeat;}
滚动 {background-attachment: fixed;}(固定) scroll;(滚动)
位置 {background-position: left;}(水平) top(垂直);
简写方法 {background:#000 url(..) repeat fixed left top;} /简写·这个在阅读代码中经常出现，
要认真的研究

```


### 区块属性： (Block) 这个属性第一次认识，要多多研究

```
字间距 {letter-spacing: normal;} 数值 /*这个属性似乎有用，多实践下*/
对齐 {text-align: justify;}(两端对齐) left;(左对齐) right;(右对齐) center;(居中)
缩进 {text-indent: 数值px;}
垂直对齐 {vertical-align: baseline;}(基线) sub;(下标) super;(下标) top; text-top; middle;bottom; text-bottom;
词间距{word-spacing: normal; 数值}
空格{white-space: pre;(保留)} nowrap;(不换行)
显示 {display:block;}(块) inline;(内嵌) list-item;(列表项) run-in;(追加部分) compact;
(紧凑) marker;(标记)       table; inline-table; table-raw-group; table-header-group; 
table-footer-group; table-raw; table-column-group; table-column; table-cell; table-caption;
(表格标题) /*display 属性的了解很模糊*/

```