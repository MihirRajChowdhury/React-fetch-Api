import React,{useEffect, useState} from 'react'
import "./App.css"
const Useeffect = () => {
    const [users,setUsers]=useState([]);
   async function getUsers(){
    const response= await fetch("https://jsonplaceholder.typicode.com/photos");
    // const data=await response.json();
   setUsers(await response.json());
    // console.log(data);
    // console.log(users);
    }
    useEffect(() => {
        getUsers();
    },[])
    
  return (
    <>
       <h2>List of Github users</h2>
       <div className="big-Box">
   {
    
    users.map((user)=>{
      return  <div className='Box'>
      <img src={user.url} alt="Find it" />
        <h4>{user.title}</h4>
        
        <h5>User Id :{user.id}</h5>
       
      </div>
     
    })
   
   }
   </div>

       
    </>
  )
}

export default Useeffect