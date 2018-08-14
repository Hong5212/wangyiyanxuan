## `FooterGuide`

- 如何实现路由切换
  - 首先定义路由
  - 然后再定义点击方法，方法要传`$route.path`作为参数
- 如何实现哪个路由被选中
  - 首先要定义一个类(`on`)
  - 然后再动态绑定类`:class"{on: isCurrent('path')}"`

## `Home`

- 如何实现知道头部的导航选中哪一个
  - 首先要有拿到所有列表项的`index`( 遍历的下标 )和当前是选中哪个列表项的活动下标`activeIndex`
  - 判断`index`和`activeIndex`是否相等，如果相等，就给当前列表项添加一个类(`class`)
  - 然后给每个列表项目添加点击事件，点击事件传入`index`
  - 最后再在点击事件里面更新`activeIndex`为`index`

- `swiper`的指示器为什么不显示
  - 进去`swiper`中文官网，点击 在线演示 的 基础演示
  - 选中一个有指示器的演示，点击右上角的 在新窗口打开
  - 右键检查，查看源代码，点击最下面的那个`<script>`标签

- `mockjs`的使用
  - 先下载`mockjs`包，然后再使用`Mock.mock(url, {code: 0, data: data})`

- 发送`ajax`请求
  - 如果是要用`axios`，首先要下载`axios`包
- 引入自定义模块的问题
  - 如果是引入同等级的自定义模块，要加`./`，如果不加`./`就会报错

- 遍历拿不到数据
  - 少了根元素

- 定义变量的初始值问题
  - 如果你想要的数据是数组，而你在`state`里面定义的是空对象
  - 就会抛出`Expected Array, got Object`( 预料是数组，获得是对象 )
  - 解决方法
    - 把`state`里面的初始值改为空数组
   
    
- 使用`better-scroll`实现水平滑动，但是不能垂直滑动
  - 问题：可以水平滑动，但是水平滑动的区域不能上下滑动
  - 方法：在`BScroll`的配置对象里面添加个`eventPassthrough`
  - `eventPassthrough`的默认值是空字符串，可选值有`vertical`和`horizontal`
  
  
    
## `register-login`

- 怎样在其他页面显示`FooterGuide`( 底部导航 )，在注册登录页面不显示

  - 需要用到`vue-route`的**路由元信息**
  - 首先在需要显示或者不显示`FooterGuide`每一条路由对象里面配置`meta字段`
  - `meta`的值是一个对象，对象里面可以定义一个对应的属性名，属性值得布尔值得键值对
  - 然后在`App.vue`里面的组件标签写`v-show="this.$route.meta.对应的属性名"`
