import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Suggesstions() {

  const[profile, setprofile] = useState(null);
  const[Suggesstions, setSuggesstions] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/profile').
    then((data) => data.json()).
    then((data) => setprofile(data)).
    catch((error) => console.log(error))

    fetch('http://localhost:3000/suggesstions').
    then((data) => data.json()).
    then((data) => setSuggesstions(data)).
    catch((error) => console.log(error))

  } , []);
  
  const handleFollow = async (id, username)=> {
    axios.post('http://localhost:3000/Followers', { "id": id, "username": username})
    .then(() => {
      alert('Followed');
    })
    .catch (err=> console.log(err))
  }


  return (
    <div className='suggesstions w-75 m-4'>
      <div className = ''>
        {profile ?
          <div className='d-flex'>
            <img className='dp rounded-circle' src={profile.profilePic} alt='profile pic' />
            <h5>{profile.username}</h5>
            <small className='ms-auto text-primary'>Switch</small>
          </div>
          : <div>Loading Profile...</div>}

      </div>

      <div className='d-flex my-3'>
        <p>Suggessted For You</p>
        <b className='ms-auto'>See All</b>
      </div>

    
      {Suggesstions.length >0 ? (
        <div >
           {Suggesstions.map((Suggesstions) => (
             <div key={Suggesstions.id}>
               <div className = 'd-flex'>
                 <img className='dp rounded-circle' src={Suggesstions.profilePic} alt='profile pic' />
                  <h5>{Suggesstions.username}</h5>
                  <a className = "text-primary ms-auto" onClick={()=>{handleFollow(Suggesstions.id,Suggesstions.username)}}>Follow</a>
               </div>
             </div>
           ))}
         </div>
       ) : (
        <div>Loading Suggesstions...</div>
      )}
      
      
    </div>
  )
}

export default Suggesstions