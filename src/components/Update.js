import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router';
import { Button, Form, FormGroup } from "reactstrap"
import {API_URL} from "../Constants/URL"
import axios from 'axios';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const update = async () => {
    await axios.put(API_URL + id, {
      firstName,
      lastName,
    });
  navigate('/read');
  }

useEffect(()=>{
 setId(localStorage.getItem('id'))
 setFirstName(localStorage.getItem('firstName'))
 setLastName(localStorage.getItem('lastName'))

},[])

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

                <Button onClick={update} >Update</Button>
            </FormGroup>
        </Form>
  )
}

export default Create