import React, { useContext } from "react";
import DataContext from "./Context/DataContext";

const NewPost=()=>{

  const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody}=useContext(DataContext);

  return (
    <main className="newPost">
      <h>New Post</h>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label> 
        <input 
          id="postTitle"
          type="text"
          required
          className="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor="postBody">Post:</label>
          <textarea
            className="textarea"
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            />
          <button type="submit" className="button">Submit</button>
      </form>
    </main>
  )
}

export default NewPost;