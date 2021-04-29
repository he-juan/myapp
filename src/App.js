import React,{Component} from 'react';
import Concat from './Concat.js'
import ConcatForm from "./ConcatForm.js";
import Context from "./Context.js";
import ReducerDemo from "./Reduce";
import ParamsExample from "./router/Route";
import NestingExample from './router/Route2'
import Example from "./router/Route3";
import UseCallback from './UseCallback'
import UseCallback2 from './UseCallback2'
import Counter from './useEffect/UseEffect'

class App  extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    componentWillMount(){
      console.log("componentWillMount --> 开始准备挂载")
    }

    shouldComponentUpdate(){
       console.log(`shouldComponentUpdate --> 准备开始更新,${this.state.count}`)
        return true
    }
    componentWillUpdate(){
      console.warn(`componentWillUpdate  --> 更新中 ,${this.state.count}`)
    }
    componentDidUpdate(){
      console.log(`componentDidUpdate --> 更新完成,${this.state.count}`)
    }
    componentDidMount(){
      console.log(`componentDidMount --> 挂载完成, ${this.state.count}`)
    }
    render(){
      console.log("render   --> 挂载中")
      let style ={
          textAlign:'center',
          marginLeft:'50'
      }
        return(
            <div >
                <h1 style={{color:'skyblue'}}>一、练习</h1>
                <div style={style}>
                    <h2>我是Money,努力赚钱</h2>
                    <p>数量:{this.state.count}</p>
                    <button onClick={this.addCount}>点击我</button>
                </div>

                <h1 style={{color:'skyblue'}}>二、练习</h1>
                <div style={style}>
                    <Concat />
                </div>

                <h1 style={{color:'skyblue'}}>三、练习</h1>
                <div style={style}>
                    <ConcatForm/>
                </div>

                <h1 style={{color:'skyblue'}}>四、练习</h1>
                <div style={style}>
                    <Context/>
                </div>

                <h1 style={{color:'skyblue'}}>五、练习</h1>
                <div style={style}>
                    <ReducerDemo />
                </div>

                <h1 style={{color:'skyblue'}}>六、练习</h1>
                <div style={style}>
                    < ParamsExample />
                </div>

                <h1 style={{color:'skyblue'}}>七、练习</h1>
                <div style={style}>
                    < NestingExample />
                </div>

                <h1 style={{color:'skyblue'}}>八、练习</h1>
                <div style={style}>
                    < Example />
                </div>

                <h1 style={{color:'skyblue'}}>九、练习</h1>
                <div style={style}>
                    < UseCallback />
                </div>

                <h1 style={{color:'skyblue'}}>⑩、练习</h1>
                <div style={style}>
                    < UseCallback2 />
                </div>

                <h1 style={{color:'skyblue'}}>十一、练习</h1>
                <div style={style}>
                    < Counter />
                </div>
            </div>

        )
    };
    addCount=()=>{
        this.setState({
            count:++this.state.count
        })
    }
}

export default App;