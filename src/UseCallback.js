import React, { useState, memo, useMemo, useCallback } from 'react'

const Child = memo((props) => {
    console.log("child",props);

    return (
        <div>
            <input type="text" onChange={props.onChange}  placeholder='请输入..'/>
        </div>
    )
})

const Parent = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    const handleOnChange = useCallback((e) => {
        setText(e.target.value)
    },[])

    return (
        <div>
            <span>count: {count}</span>&nbsp;&nbsp;
            <button onClick={() => {
                setCount(count + 1)
            }}>+1</button> &nbsp;&nbsp;
            <button onClick={() => {
                if(count > 0){
                    setCount(count - 1)
                }
            }}>-1</button>

            <div style={{color:'red'}}>文本: {text}</div>
            <Child onChange={handleOnChange} />
        </div>
    )
}

function UseCallback() {
    return <div><Parent /></div>
}

export default UseCallback