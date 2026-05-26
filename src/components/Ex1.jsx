import {useState} from 'react'
import {Button} from 'react-bootstrap'

function Ex1() {
  const [counter, setCount] = useState(0);
  const handleIncrease = () => {setCount(counter + 1)}
    const handleDecrease = () => {setCount(counter - 1)}

  return (
    <div>
        <h3>
            Counter: {counter}</h3>
            <Button onClick={handleDecrease} className='me-3' variant='primary'>Decreasing </Button>
            <Button onClick={handleIncrease} variant ='primary'>Increasing</Button>

    </div>
  )
}

export default Ex1