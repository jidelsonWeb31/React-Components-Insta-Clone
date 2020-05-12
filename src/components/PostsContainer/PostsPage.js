//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data.js"
const PostsPage = (props) => {
  // set up state for your data
  const [post, setPost] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        dummyData.map((postObj, index) => {
          return <Post key={index} post={postObj} />
        })
      }
    </div>
  );
};

export default PostsPage;
