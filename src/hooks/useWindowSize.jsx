import React from 'react';

function useWindowSize() {
    const [size, setSize] = React.useState(window.innerWidth)
    React.useEffect(() => {
        window.addEventListener('resize', function (event) {
            console.count()
            console.log(event.target.innerWidth)
            setSize(event.target.innerWidth)
        })
    }, [])

    return size;
}

export default useWindowSize