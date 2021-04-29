import React,{useReducer,useEffect} from 'react';
function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, step } = state;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'tick' });
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);
    // 现在useEffect不依赖count，依赖的是dispatch，而dispatch在每次render之后都是不变的，所以就不会每次render之后都清除计时器再重新设置计时器
    // 其实这里把dependency数组设为[]也是完全一样的

    return (
        <>
            <h1>{count}</h1>
            <input value={step} onChange={e => {
                dispatch({
                    type: 'step',
                    step: Number(e.target.value)
                });
            }} />
        </>
    );
}

const initialState = {
    count: 0,
    step: 1,
};

function reducer(state, action) {
    const { count, step } = state;
    if (action.type === 'tick') {
        return { count: count + step, step };
    } else if (action.type === 'step') {
        return { count, step: action.step };
    } else {
        throw new Error();
    }
}



export default Counter