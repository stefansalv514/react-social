import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";


const MyPosts = () => {
    let posts = [
        {id: 1, message: "Now you now", likesCount: 12},
        {id: 2, message: "person", likesCount: 125},
        {id: 3, message: "nonstop", likesCount: 777},
    ];

    let postsElements = posts.map(p => <Post message={p.message} LikesCount={p.likesCount} />)

    return (
        <div className="postsBlock">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className="posts__block">
                {postsElements}
            </div>
        </div>
    );
}


export default MyPosts;