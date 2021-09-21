### 元素类

el绑定的元素

```vue
 new Vue({
     el:"#app",
})
或者
new Vue({
    ...
}).$mount("#app")
```

![vue](https://github.com/zclin0512/html-note/blob/main/html-note/assets/1632214706084.png)

### 对象类

- data：存放数据（对象，元素，数组等，需要使用return给返回出来）

- methods：具体操作，主要处理业务逻辑

- computed：处理属性的计算，会被缓存(属性值发生改变时才会改变),方法名(){return}

- watch：监听数据和路由

  - 键:监听的表达式
  - 值:要执行的回调函数
  - 发生变化时,要执行的业务逻辑
  - 监听路由改变跳转不同页面this.$route.path

- filters：自定义过滤器，filters:{"过滤器名称":回调函数}

- directives：自定义指令

  ```
  directives:{"指令名称":{bind(el){},inserted(el){},updated(el){}}
  ```

  

- components：存放组件

  ```
  components:{"组件名称":{template:""}}
  ```

  

- router：存放路由



### 函数类(生命周期函数)

1. (创建中)第一个生命周期函数beforeCreate
   - 创建了一个空的vue实例
   - data和methods还没有被初始化(即不能访问)
2.  (创建中)第二个生命周期函数created

   - data和methods已经被初始化(可以调用和操作)
3.  (创建中)第三个生命周期函数beforeMount
   - 开始编译模板
   - 执行vue中指令,在内存中生成一个模板字符串
   - 将模板字符串渲染为内存中DOM
   - 模板编译完成,保存在内存中
4.  (创建中)第四个生命周期函数(实例完全创建好)mounted
   - 将内存中编译好的模板已经挂载到页面
   - 可以利用插件操作DOM节点
   - 如果没有修改,此实例创建成功
5.  (执行中)第五个生命周期函数beforeUpdate
   - 触发条件:data发生改变
   - data数据发生改变,取到新数据
   - 页面尚未改变,数据为原来的
6. (执行中)第六个生命周期函数updated
   - 先根据data中新数据在内存中重新渲染DOM树
   - 将内存中新DOM树渲染到页面(Model层到View层)
   - 页面数据已更新
7. (销毁中)第七个生命周期函数beforeDestroy
   - beforeDestroy(){},
   - data,methods,过滤器,指令处于可用状态,尚未销毁
8. (销毁中)第八个生命周期函数destroyed
   - 组件完全被销毁,data,methods,过滤器,指令不可用
     

