## 一、react 生命周期 ##
[钩子函数](https://www.cnblogs.com/fightjianxian/p/12457433.html)

 1. 生命周期
     - Initialization -->  Mounting --> updation --> Unmounting
         -   初始化阶段    --> 虚拟DOM挂载阶段 --> 组件更新阶段 --> 组件卸载阶段
 2. 生命周期阶段
     - <font color=red>Initialization</font>:属性和状态的初始化，在es6的constructor构造器里完成
    ```
       class Xiao extends Componet {
         constructor(props){
            super(props);
            this.state={}
          }
    }
    ```

     - <font color=red>Mounting</font>:
         - componentWillMount --> render --> componentDidMount
              -  ![title](/api/file/getImage?fileId=60861c0909eb7d0d960001b9)

     - <font color=red>updation</font>:
          - state的变化： shouldComponentUpdate --> componentWillUpdate --> render --> componentDidUpdate
          - props 的变化： componentWillReceiveProps --> shouldComponentUpdate --> componentWillUpdate --> render --> componentDidMount

          ![title](/api/file/getImage?fileId=6086210c09eb7d0d960001bb)
         - 总结：该生命周期触发需要满足两个条件：
             `1.组件第一次存在于DOM中，函数不会被执行`
             `2.如果已经存在于DOM里，第二次发生变化时，函数才会被执行`

     - <font color=red>unMounting</font>:
          - componentWillUnmount



----------

## 二、基本使用##



>[react中关于useState/useEffect的基本使用](https://www.jianshu.com/p/8df94a560d11) https://www.jianshu.com/p/8df94a560d11
> [react路由的基本使用](https://reactrouter.com/web/example/url-params)https://reactrouter.com/web/example/url-params