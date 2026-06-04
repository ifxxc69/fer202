import {useRef, useState} from 'react'
import {Button} from 'react-bootstrap'

function Hook2() {
    const [count, setCount] = useState(0)
    const refCount = useRef(0)
    const objectCount ={count:0}
    const handleIncreasing = () => {
        setCount(count + 1)
        refCount.current++
        objectCount.count++
    }
    const handleDecreasing = () => {
        setCount(count - 1)
        refCount.current--
        objectCount.count--
    }
    console.log(count)
    console.log(refCount.current)
    console.log(objectCount.count)
    
  return (
    <div>
      Ref:{refCount.current}<br/>
      State:{count}<br/>
      Object:{objectCount.count}<br/>
      <Button variant='primary' onClick={handleIncreasing}>Increase</Button>
      <Button variant='success' onClick={handleDecreasing}>Decrease</Button>
    </div>
  )
}

export default Hook2

