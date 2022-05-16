import React from 'react'
import { API_URL } from "../Constants/URL"
import { Button, Form, FormGroup } from "reactstrap"
import { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

const postData = async () => {
   await axios.post(API_URL,{
        firstName,
        lastName,
    });
    navigate('/read');
}


    return (
        <Form>
            <FormGroup>
                <label>First Name</label>
                <input 
                value={firstName} 
                onChange={ e => setFirstName(e.target.value)}
                placeholder='first name' />

                <label>last Name</label>
                <input 
                value={lastName}
                 onChange={ e => setLastName(e.target.value)}
                 placeholder='last name' />

                <Button onClick={postData}>Submit</Button>
            </FormGroup>
        </Form>
    )
}

export default Create