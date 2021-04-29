
import React,{useState,useEffect} from 'react';

function Concat(){
    let [click,setClick] = useState(1)

    let [name,setName] = useState("lucy")
    let [age,setAge] = useState('18')
    let [sex,setSex] = useState("女")

    console.warn("useState:",useState())
    useEffect(()=>{
        console.log(`useEffect---${click}`);
    });
    return(
        <div>
            <h2>生活,需好好享受</h2>
            <p>点击:{click}</p>
            <button onClick={()=>{setClick(click+1)}}>按鈕</button>
            <br/>
            <br/>
            
            <p>姓名：{name}</p>
            <p>年齡：{age}</p>
            <p>性別：{sex}</p>


        </div>
    )
}
export default  Concat
