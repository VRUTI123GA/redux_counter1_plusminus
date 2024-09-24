import { useSelector } from 'react-redux'

const Child = () => {

    const { count } = useSelector(store => store.counter)

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default Child