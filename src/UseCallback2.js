import React, { memo, useCallback, useState } from 'react'

function PageA (props) {
    const { onClick, children } = props
    console.log(111, props)
    return <div onClick={onClick}>{children}</div>
}

function PageB ({ onClick, name }) {
    console.log(222)
    return <div onClick={onClick}>{name}</div>
}

const PageC = memo(PageB)

function UseCallback2() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const handleClick1 = () => {
        setA(a + 1)
    }

    const handleClick2 = useCallback(() => {
        setB(b + 1)
    }, [b])

    return (
        <>
            <PageA onClick={handleClick1}>{a}</PageA>
            <PageC onClick={handleClick2} name={b} />
        </>
    )
}

export default UseCallback2