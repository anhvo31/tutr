import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { data } from './Teacher_info.js';



const Teachers = () => {
    const [search, setSearch] = useState('');
    return(
        <div className='App'>
            <Container>
                <h1 className="text-center mt-4">Search for tutors</h1>
                <Form>
                    <InputGroup className="my-3">
                        <Form.Control
                        onChange={(e) =>setSearch(e.target.value)}
                        placeholder="Search by subject"
                        />
                    </InputGroup>
                </Form>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Subjects Taught</th>
                            <th>Credentials</th>
                            <th>Hourly Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter((item) => {
                            return search.toLowerCase() === ''
                            ? item
                            : item.subjects_taught.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((item) => (
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.subjects_taught}</td>
                            <td>{item.credentials}</td>
                            <td>{item.hourly_rate}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
    </Container>
    </div>
    )
}


export default Teachers ;