import React,{useState,createContext,useContext} from 'react';
//用createContext实现组件传值
const CountContext =  createContext();

//子组件
function Counter(){
    //接受共享变量
    let count = useContext(CountContext)
    console.warn("count:",count)
    return <h2>{count}</h2>
}


function Context(){
    let [count,setCount] = useState(0);
    let [click,setClick] = useState(9)
    return(
        <div>
            <h2>我是Money,努力赚钱</h2>
            <span>数量:{count}</span>&nbsp;&nbsp;&nbsp; <span>点击数:{click}</span>
            <br/><br/>
            <button onClick={()=>{setCount(count+1)}}>点我改变数量</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => {setClick(click+1)}}>点我改变点击数</button>
            <CountContext.Provider value={count}  >
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Context;