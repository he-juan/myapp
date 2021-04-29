import React,{useReducer} from 'react';

function ReducerDemo(){
    let style={disabled:false}
    const  [count,dispatch]= useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1;
            case 'sub':
                if(state > 0){
                    return state -1;
                }else {
                    style ={disabled:true}
                    return state
                }

            default:
                return state;
        }
    },0)

    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={()=>{dispatch('add')}}>增加</button>&nbsp;
            <button style={style}  onClick={()=>{dispatch('sub')}}>减少</button>
        </div>
    )

}

export default ReducerDemo;