import React,{useState,useEffect} from 'react'
import axios from'axios'


function UserList() {
   const [list, setList] = useState([{}]) 
// Fetch Data
  useEffect(()=>{
   const fetchData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(responde=>setList(responde.data))
    .catch(error=>alert(error))
   }
   fetchData()
  },[])
  
    return (
      <div className="App">
      <ul className="list">
        {list.map(el=>
        <div className="card">
        <h1 className="name">{el.name} </h1>
        <h2>{el.username}</h2>
        
        <div>
        <h4>email:</h4>
          <p> {el.email}</p>
        </div>
        
        <div>
        <h4>GSM:</h4>
        <p> {el.phone}</p>
        </div>
       
        <div>
          <h4>Website</h4>
          <p>{el.website}</p>
        </div>
         
        <div>
          <h4> Adress</h4>
          <p> {el.address.street}</p>
         <p>{el.address.sweet}</p>
         <p>{el.address.city}</p>
        </div>
            
           
          </div>

            )}
        </ul>
      </div>
    );
  }
export default UserList

// 

// }


