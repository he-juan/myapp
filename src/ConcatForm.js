import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function  Index(){
    useEffect(()=>{
        console.log(`哈哈，我又來了,我是Index,`)
        return () =>{
            console.warn("sorry, 我走了 ，请记得我是Index")
        }
    });
    return <h2 style={{color:'red'}}>我是首页</h2>
}
function List(){
    useEffect(()=>{
        console.log(`哈哈，我又來了,我是List,`)
        return () =>{
            console.warn("sorry, 我走了 ，请记得我是List")
        }
    });
    return <h2 style={{color:'red'}}>我是列表</h2>
}
function Personal(){
    useEffect(() =>{
      console.log(`欢迎进入个人中心`)
        return () =>{
            console.warn("sorry, 我走了 ，请记得我是个人中心")
        }
    })
    return <h2 style={{color:'red'}}>欢迎进入个人中心</h2>
}

//useEffect 组件的进入和离开生命周期
function ConcatForm(){
    const [count,setCount]=useState(0);
    // useEffect(()=>{//异步   代替生命周期
    //     console.log(`useEffect---${count}`);
    // });
    useEffect(()=>{
        console.log('========='+count);
        return ()=>{
            console.log('=========');
        }
    },[count]);
    return(
        <div>
            <p>数量:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>点击我</button>
            <Router>
                <ul>
                    <li><Link to='/home' >首页</Link></li>
                    <li><Link to='/list' >列表</Link></li>
                    <li><Link to='/personal'>个人中心</Link></li>
                </ul>
                <Route path='/home' exact component={Index} />
                <Route path='/list' component={List} />
                <Route path='/personal'  component={Personal}/>
            </Router>
        </div>
    )
}
export default ConcatForm;