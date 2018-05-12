# MonkeyNews

![图片来自网络](https://user-gold-cdn.xitu.io/2018/5/12/163548005e9308c8?imageView2/1/w/1304/h/734/q/85/interlace/1)

> 学习就如同长跑，要想跑的远，就不能跑得太快。

## 背景介绍

这段时间了解了一些前端方面的知识，并且用 React Native 写了一个简易新闻客户端 Demo。

React Native 和原生开发各有所长，具体就不细说。混合使用能充分发挥各自长处，唯一的缺憾就是 React Native 和原生通信过程相对不那么友好。

在这里分享一下学习过程中个人认为比较重要的知识点和学习资料，本文尽量写得轻一些，希望对读者能够有所帮助。


## 预备知识

有些前端经验的小伙伴学起 React Native 就像老马识途，东西都差不多，变来变去也玩不出什么花样。

[**HTML5**](http://www.runoob.com/html/html5-intro.html)：H5 元素对比 React Native 组件，使用方式如出一辙。

[**CSS**](http://www.runoob.com/css/css-tutorial.html)：React Native 的 FlexBox 用来为组件布局的，和 CSS 亲兄弟关系。

[**JavaScript**](http://www.runoob.com/js/js-tutorial.html)：用 JavaScript 写，能不了解一下吗？ JavaScript 之于 React Native 就如同砖瓦之于摩天大楼。

[**React JSX**](http://www.runoob.com/react/react-jsx.html)：React 使用 JSX 来替代常规的 JavaScript。JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。


## 一、开始学习 React Native

![图片来自网络](https://user-gold-cdn.xitu.io/2018/5/12/1635481951c0a8df?w=200&h=157&f=jpeg&s=3999)

React Native 社区相对比较成熟，中文站的内容也比较全面，从入门到进阶，环境安装到使用指南，学习 React Native 推荐从官网 [https://reactnative.cn](https://reactnative.cn) 开始。FlexBox 布局、组件、API 建议在该官网查看，注意网页顶部可以切换 React Native 的历史版本。

### 1.1 安装开发环境

1. [ React Native 官网推荐搭建开发环境指南传送门](https://reactnative.cn/docs/0.51/getting-started.html
)。(记得设置 ``App Transport Security Settings`` ，允许 http 请求)
2. [已建立原生项目，将 React Native 集成到现有原生项目传送门](https://reactnative.cn/docs/0.51/integration-with-existing-apps.html#content)
3. [基于第2点，React Native 与原生混编的情况下，React Native 与原生如何通信传送门](https://reactnative.cn/docs/0.51/communication-ios.html#content)
4. 在 IDE 选择这一点上，不要过多纠结，个人使用 [WebStorm](https://www.jetbrains.com/webstorm/) ，比较省心。

### 1.2 生命周期

```
class Clock extends React.Component {
  // 构造函数 通常进行一些初始化操作 如定义 state 初始值
  constructor(props) {
    super(props);
  }
  
  // 组件已挂载
  componentDidMount() {}
  
  // 组件即将被卸载
  componentWillUnmount() {}
  
  // 渲染函数 
  render() {
    return (
      <View></View>
    );
  }
}
```

### 1.3 Props 与 State

一个组件所有的数据来自于 Props 与 State ，分布是外部传入的属性和内部状态。

[Props](https://reactnative.cn/docs/0.51/props.html#content) 是父组件给子组件传递数据用的，Props 由外部传入后无法改变，可以同时传递多个属性。
```
// 父组件 传递一个属性 name 给子组件
<Greeting name='xietao3' />

// 子组件使用父组件传递下来的属性 name
<Text>Hello {this.props.name}!</Text>
```

[State](https://reactnative.cn/docs/0.51/state.html#content) ：用来控制组件内部状态，每次修改都会重新渲染组件。
```
// 初始化 state
constructor(props) {
    super(props);
    this.state = { showText: 'hello xietao3' };
}

// 使用 state
render() {
    // 根据当前showText的值决定显示内容
    return (
      <Text>{this.state.showText}</Text>
    );
}

// 修改state，触发 render 函数，重新渲染页面
this.setState({showText: 'hello world'});
```

**举个栗子(如果理解了就跳过吧)：**

我们使用两种数据来控制一个组件：props 和 state。 props 是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。 对于需要改变的数据，我们需要使用 state 。

一般来说，你需要在 ``constructor`` 中初始化 state  ，然后在需要修改时调用setState方法。

假如我们需要制作一段不停闪烁的文字。文字内容本身在组件创建时就已经指定好了，所以文字内容应该是一个 prop 。而文字的显示或隐藏的状态（快速的显隐切换就产生了闪烁的效果）则是随着时间变化的，因此这一状态应该写到 state 中。

### 1.4 组件与 API

说到组件就不得不说 React Native 的组件化思想，尼古拉斯 · 赵四 曾经说过，组合由于继承。简单来说就是多级封装嵌套、组合使用，提高基础组件复用率。

**组件怎么用？**

授人以鱼不如授人以渔，[点击这里打开官方文档](https://reactnative.cn/docs/0.51) ，在左边导航栏中找到你想使用的组件并且点击，里面就有组件的使用方式和属性的详细介绍。

**关于 API**

建议写第一个 Demo 之前把所以 API 浏览一遍，磨刀不误砍柴工，不一定要会用，但一定要知道这些提供了哪些功能，后面开发中可能会用得上。API 列表同样可以在官网左边导航栏中找到。

## 二、助力 React Native 起飞

以下内容不建议在第一个 Demo 中使用：

### 2.1 Redux

Redux([中文教程](http://www.redux.org.cn/)、[英文教程](https://redux.js.org/)) 是 JavaScript 状态容器，提供可预测化的状态管理。

部分推荐教程：
    
* [[阮一峰] - Redux 入门教程（一）：基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

* [[阮一峰] - Redux 入门教程（二）：中间件与异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)

* [[阮一峰] - React-Redux 的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)

### 2.2 CodePush

React Native 热更新的发动机，接入的时候绕了很多圈圈，后面发现接入还挺方便的。CodePush 除了可以使用微软提供的服务进行热更新之外，还可以自建服务器进行热更新。

推荐教程：

* [CodePush 接入官方文档](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native)
* [微软的React Native热更新 - 使用篇](https://www.jianshu.com/p/67de8aa052af)
* [react-native-code-push进阶篇](https://www.jianshu.com/p/6e96c6038d80?from=timeline)

## 三、 与原生端通信

3.1 [在 React Native 中使用原生UI组件](https://reactnative.cn/docs/0.51/native-component-ios.html)

**填坑：**
* 原生端的 Manager 文件如果有 RCT 前缀，在 RN 中引用的时候不要加 RCT。
* 原生 UI 组件的 RCTBubblingEventBlock 类型属性命名一定要以 on 开头，例如 onChange。


3.2 [在 React Native 中发消息通知给原生端](https://reactnative.cn/docs/0.51/native-modules-ios.html)(由于RN调用原生端是异步的，最好在回调中通过通知把消息传递到具体的类)

3.3 [在原生端发消息通知给 React Native ](https://reactnative.cn/docs/0.51/native-modules-ios.html#%E7%BB%99javascript%E5%8F%91%E9%80%81%E4%BA%8B%E4%BB%B6)(建议在Manager中写一个类方法，这样外部也可以灵活发送通知)

这里其实是有 Demo 的,但是还没整理好🤦️。

## 四、React Native 进阶资源

有时候一下子看到好多感兴趣的东西，容易分散注意力，在未到达一定水平之前建议不要想太多，入门看官网就足够了。当你掌握了那些知识之后，你就可以拓展一下你的知识库了。

* [awesome-react-native](https://github.com/jondot/awesome-react-native) 19000+⭐️（包含热门文章、信息、第三方库、工具、学习书籍视频等）
* [react-native-guide](https://github.com/reactnativecn/react-native-guide) 11900+⭐️ （中文 react-native 学习资源、开 源App 和组件）
* [js.coach](https://js.coach/?collection=React+Native) （第三方库搜索平台）
* [个人收集的一些开源项目](https://github.com/ReactNative-xietao3)（读万卷书不如行万里路，行万里路不如阅码无数！经常看看别人的代码，总会有新收获的）


## 五、React Native 第一个小 Demo

### 5.1 MonkeyNews 简介

[MonkeyNews](https://github.com/xietao3/MonkeyNews)，纯 React Native 新闻客户端，部分参考知乎日报，并且使用了其部分接口
由于是练手项目，仅供参考，这里附上 [GitHub 地址](https://github.com/xietao3/MonkeyNews)，感兴趣的可以了解(star)一下。

![首页](https://user-gold-cdn.xitu.io/2018/5/12/1635454b92c0d9b5?w=224&h=400&f=gif&s=2134947)

![频道](https://user-gold-cdn.xitu.io/2018/5/12/1635455802d88ef1?w=222&h=400&f=gif&s=1423175)

![个人中心](https://user-gold-cdn.xitu.io/2018/5/12/1635455cca5d7a7d?w=224&h=400&f=gif&s=560627)

### 5.2 用到的第三方库：

* react-native-code-push：React Native 热更新
* react-native-swiper：用于轮播图
* react-navigation：TabBar + NavigationBar

### 5.3 项目结构

>Common<br>
>>MKSwiper.js<br>
MKNewsListItem.js<br>MKImage.js<br>
MKPlaceholderView.js<br>
MKThemeListItem.js<br>
MKLoadingView.js<br>
...<br>

>Config<br>
>> MKConstants.js<br>

>Pages<br>
>>Home
>>>MKHomePage.js<br>
MKNewsDetailPage.js<br>
>>Category<br>
>>>MKCategoryPage.js<br>
MKThemeDetailPage.js<br>
>>UserCenter<br>
>>>MKUserCenterPage.js<br>

>Services
>>MKServices.js<br>
>>APIConstants.js

>Styles
>>commonStyles.js


## 六、总结

在对 React Native 有了一些了解之后，个人感觉目前 React Native 的状况很难替代原生开发，至少现阶段还不行。

**个人认为的缺点**：React Native 的双端运行的优点并不明显，很多原生 API 使用起来都比较麻烦，很大程度上抵消了双端运行带来的开发效率提升，这种情况下我甚至更愿意用原生 iOS 和 Android 各写一套。

**优点**：React Native 和原生组合使用，通过动态路由动态在原生页面和 React Native 页面之间切换，可以在原生页面出现 bug 的时候切换至 React Native 页面，或者比较简单的页面直接使用 React Native 开发都是非常不错的。

总之， React Native 也是可以大有作为的。
