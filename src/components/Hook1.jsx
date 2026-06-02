import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function Hook1() {
    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)

    // th1: Không có dependency array
    useEffect(() => {
        console.log('data khong dependancy (Chạy mỗi khi render)')
    });

    // th2: Dependency array rỗng
    useEffect(() => {
        console.log('Empty array (Chỉ chạy 1 lần duy nhất khi mount)')
    }, []);

    // th3: Phụ thuộc vào counterA
    useEffect(() => {
        console.log('Co tham so counter A (Chạy khi counterA thay đổi)')
    }, [counterA]);

    // th4: Phụ thuộc vào counterB
    useEffect(() => {
        console.log('Co tham so counter B (Chạy khi counterB thay đổi)')
    }, [counterB]);

    return (
        <div className="p-4">
            <h3>
                Counter A: {counterA} <br/>
                Counter B: {counterB} <br/>
                <hr />
                {/* Sửa lại style={{width: 200}} và hàm onClick */}
                <Button 
                    variant='primary' 
                    style={{ width: 200 }} 
                    className='me-4' 
                    onClick={() => setCounterA(counterA + 1)}
                >
                    Increasing A
                </Button>
                
                <Button 
                    variant='success' 
                    style={{ width: 200 }} 
                    className='me-4' 
                    onClick={() => setCounterB(counterB + 1)}
                >
                    Increasing B
                </Button>
            </h3>
        </div>
    )
}

export default Hook1