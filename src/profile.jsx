import React from 'react'
import axios from 'axios'
import {useState, useEffect  } from 'react'
import { data, useParams, Link, useNavigate } from 'react-router-dom'

function profile() {

    const [profile, setProfile] = useState(null);
    const [followers, setfollowers] = useState([]);
   const [Followed, setFollowed]= useState(0)

    useEffect(() => {
        axios.get('http://localhost:3000/profile')
        .then(data => setProfile(data.data))
        .catch(err=> console.log(err))

    }, [])

    useEffect(()=> {
        axios.get('http://localhost:3000/Followers')
        .then(data => setfollowers(data.data))
        .catch(err => console.log(err))
    } ,[Followed])



function HandleOnChange(e){
    setProfile(prev=>({
        ...prev,
        [e.target.name] : e.target.value
    }))
}

const handleUpdate = async ()=> {
    axios.put('http://localhost:3000/profile',profile)
    .then(console.log("Updated"))
    .catch(err => console.log(err))
}

const handleUnfollow = async(id)=>{
    axios.delete(`http://localhost:3000/Followers/${id}`)
    .then (alert("Un Followed"))
    .catch(err=> console.log(err))
    .then (setFollowed(!Followed))
    
}

  return (
    <div className="m-5">
        {profile? (
            <div>
                <h5>{profile.username}</h5>
                <img src={profile.profilePic} className="profile rounded-circle" alt='Profile Pic'></img>

                <input type="text" 
                    value={profile.username} 
                        name="username"
                            className="form-control my-4 w-25"
                                onChange={HandleOnChange}/>

                <input type="text" 
                    name="profilePic" 
                        value={profile.profilePic} 
                            className="form-control w-50"
                                onChange={HandleOnChange}/>

                <button onClick={handleUpdate} className="btn btn-primary my-4">Update</button>
                  <Link to={`http://localhost:5173`}><button  className="btn btn-secondary my-4 mx-5">Home</button></Link>
                

            </div>
        ) : (
             <div>Loading..</div>
            )}


        {followers.length>0?(
                followers.map((follower)=>(
                    <div key={follower.id} className="d-flex my-2 w-50">
                        {follower.username}
                        <button className="btn btn-secondary ms-auto"
                            onClick={()=>{handleUnfollow(follower.id)}} >Un Follow</button>
                    </div>
                ))
             ) : (

            <div> Loading..</div>
          )}
    </div>
  )
}

export default profile