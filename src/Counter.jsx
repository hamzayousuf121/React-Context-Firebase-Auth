import React from 'react';

// class Counter extends React.Component {

//     constructor() {
//         super();

//         this.state = {
//             count: 0
//         }
//     }
//     updateCount = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Counter App</h1>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.updateCount}>Update counter</button>
//             </div>
//         )
//     }
// }

function Counter(props) {
    let [count, setCounter] = React.useState(props.count) // hook
    let [inputValue, setInputValue] = React.useState('') // hook
    let [userName, setUserName] = React.useState('') // hook
    // let count = myCounter[0];
    // const setCounter = myCounter[1]
    const updateCount = () => {
        function sqaure(count) {
            return count * count
        }
        setCounter(count + 1)
    }

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onInputUsernameChange = (event) => {
        setUserName(event.target.value)
    }
    React.useEffect(() => {
        console.log('count: ', count)
    }, [count, userName]) // Run when count and username changed
   
    React.useEffect(() => {
        console.log('count: ', count)
    }) // Run when any state change and props change

    React.useEffect(() => {
        console.log('component Did Mount: ', count)

        return () => {
            console.log("Component will unmount")
        }
    }, []) // component Did Mount

    return (
        <div>
            <h1>Counter App</h1>
            <input onChange={onInputChange} />
            <p>{inputValue}</p>
            <hr />
            <h4>Username</h4>
            <input onChange={onInputUsernameChange} />
            <p>{userName}</p>
            <hr />
            <p>{count}</p>
            <button onClick={updateCount}>Update counter</button>
        </div>
    )
}
export default Counter;