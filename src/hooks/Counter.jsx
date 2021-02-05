import React from 'react';

function Counter(initialCount = 0) {
    const [count, setCount] = React.useState(initialCount)// hook

    // React.useEffect(() => {
    //     setInterval(() => {
    //         console.log(count ,'count')
    //         setCount((prevCount) => {
    //             return prevCount+ 1
    //         })
    //     }, 1000) 
    // }, [])

    const updateCount = () => {
        setCount( count + 1)
    }
    return [count, updateCount]
}
export default Counter;