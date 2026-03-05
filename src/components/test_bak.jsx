import React, { useState, useEffect, useRef } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)
    const [Active, setActive] = useState(false);
    const times = useRef(0);

    function addCount() {
        setCount(count => count + 2)
    }

    useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    function calculate() {
        times.current++
        console.log(`計算了${times.current}次`);
    }

    return (
        <section>
            <h2>目前總和為{count}</h2>
            <button onClick={addCount}>點擊</button>
            <div className={`title ${Active ? 'active' : ''}`} onClick={() => setActive(!Active)}>標題</div>
            <button onClick={calculate}>計算</button>
        </section>
    )
}