import React from "react";
import './Post.css';


const Post = (props) => {
    return (
        <div className="posts__item">
            <img src="#" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}


export default Post;