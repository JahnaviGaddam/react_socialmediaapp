import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './Context/DataContext';

const EditPost = () => 
{

  const {posts, handleEdit, editBody,setEditBody, editTitle, setEditTitle}=useContext(DataContext);

  const {id} =useParams();
  const post=posts.find(post => (post.id).toString()===id);

  useEffect(()=>{
    if(post){
      setEditTitle(post.title);
      setEditBody(post.body)
    }
  },[post,setEditTitle,setEditBody])
  return (
    <main className='newPost'>
      {editTitle && 
        <>
         <h2>Edit Post</h2>
         <form className='newPostForm' onSubmit={(e) => e.preventDefault()} >
            <label htmlFor='postTitle'>Title:</label>
            <input className='editTitle'
              id='postTitle'
              type='text'
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              />
            <label htmlFor='postBody' >Post:</label>
            <textarea  className='editText'
              id='postBody'
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button className='edit' type='submit' onClick={() => handleEdit(post.id)}> Submit </button>
         </form>
        </>
      }
      {
        !editTitle &&
        <>
           <h2>Page not Found</h2>
           <p>
              Well, that's dissappointing.
          </p>
        </>
      }
    </main>
  )
}

export default EditPost