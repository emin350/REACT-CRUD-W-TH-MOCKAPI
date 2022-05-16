import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { API_URL } from '../Constants/URL';

function Read() {
  const [apiData, setAPIData] = useState([]);
  const navigate = useNavigate();

const deleteUser = async (id) => {
   await axios.delete(API_URL + id);
    callGetAPI();
    }

const updateUser = ({firstName,lastName,id}) => {
 localStorage.setItem('id',id)
 localStorage.setItem('firstName',firstName)
 localStorage.setItem('lastName',lastName)
  navigate('/update')
 
}


  const callGetAPI = async () => {
    const res = await axios.get(API_URL);
    setAPIData(res.data)
  }

  useEffect(() => {
    callGetAPI();
  }, []);


  return (
    <div>
      {
        apiData.map((data,index) => (
          <ul key={index}>
           <div>{data.firstName} </div> 
           <div> {data.lastName} </div> 
           <button onClick = { () => deleteUser(data.id)} >Delete</button>
           <button onClick = { () => updateUser(data)}  >Update</button>
          </ul>
        ))
      }
    </div>
  )
}

export default Read;