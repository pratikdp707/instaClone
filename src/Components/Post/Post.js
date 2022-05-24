import React from "react";
import "./Post.css";
import profile from '../../images/pp1.png'
import postImg from '../../images/post.jpg'
import like from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'


const Post = (props) => {
  return (
    <>
      <div className="post_container">
        {/* Header */}
        <div className="post_header">
            <img className="post_img" src = {profile}></img>
            <div className="post_username">{props.post.Username}</div>
        </div>

        {/* Image */}
        <div>
            <img src={props.post.postImg} width= "700px"></img>
        </div>

        {/* Likes */}
        <div>
            <div style={{"marginLeft" : "10px"}}>
                <img className="post_reactimg" src={like}></img>
                <img className="post_reactimg" src={comment}></img>
                <img className="post_reactimg" src={share}></img>
            </div>
            <div style={{"fontWeight" : "bold", "marginLeft" : "17px"}}>
                {props.post.Likes} likes
            </div>
        </div>

        {/* Comments */}
        <div>
            <div className="post_comment">Sample comment 1</div>
            <div className="post_comment">Sample comment 1</div>
            <div className="post_comment">Sample comment 1</div>
            <input className = "post_addcomment" type="text" placeholder ="Add a comment..."></input>
        </div>
      </div>
    </>
  );
};

export default Post;
