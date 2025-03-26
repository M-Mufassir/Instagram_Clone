import React, { useEffect, useState } from 'react'

function Posts() {

    const [posts, setpost] = useState([]);

    useEffect(() => { 

        fetch('http://localhost:3000/posts').
        then((data) => data.json()).
        then((data) => setpost(data)).
        catch((error) => console.log(error))
    }, []);

  return (
      <div className ="d-flex justify-content-center">
        {posts.length>0 ? (

            <div >
                {posts.map((posts) => (
                    <div className='my-3' key={posts.id}>
                        <div className ='d-flex'>
                            <img className='dp rounded-circle' src = {posts.user.profilePic} alt='profile pic' />
                            <h5>{posts.user.username}</h5>
                        </div>
                        <img className='image' src={posts.imageUrl} alt='post' />

                        <div className='d-flex'>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-send"></i>
                            <i className="bi bi-bookmark"></i>   
                        </div>
                        <div>
                            <b>{posts.likes} </b> likes
                        </div>
                            <p>{posts.caption}</p>
                    </div>
                ))}
            </div>
        ) : (
            <div>
                Loading Posts..
            </div>
        )}
        
    </div>
  )
}

export default Posts