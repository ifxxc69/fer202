import React from 'react'
import { useState } from 'react'
import { Table, Modal, Button, ModalBody } from 'react-bootstrap'
import { students } from '../data'

function Ex3() {
    
    const [show, setShow] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState(null) 

    const handleShow = (s) => {
        setSelectedStudent(s)
        setShow(true)
    }

    return (
        <div>
            <Table bordered striped hover>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Date of birth</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s.id} onClick={() => handleShow(s)} style={{ cursor: 'pointer' }}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.email}</td>
                            <td>{s.gender}</td>
                            <td>{s.dob}</td>
                        </tr>
                    ))} {/* Added the missing closing parenthesis here */}
                </tbody>
            </Table>
           
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Student detail</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    {selectedStudent && (
                        <div>
                            <p><b>ID</b>: {selectedStudent.id}</p>
                            <p><b>Full Name</b>: {selectedStudent.name}</p>
                            <p><b>Email</b>: {selectedStudent.email}</p>
                            <p><b>Gender</b>: {selectedStudent.gender}</p>
                            <p><b>Date of Birth</b>: {selectedStudent.dob}</p>
                        </div>
                    )}
                </ModalBody>
                <Modal.Footer>
                    <Button onClick={() => setShow(false)} variant='success'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Ex3