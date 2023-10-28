import React from "react";
import {Link} from "react-router-dom";

export default function Posts({posts}){
    return(
        <div style={{flex:1,width:'40%',flexDirection:"row",display:"inline-block",}}>
        {posts.map((post) => (
                <div
                    key={post.id}
                    style={{flex:1, borderColor: 'gray', borderWidth: 1, borderStyle: 'solid', margin: 20 ,borderRadius:20,padding:20,flexDirection:"column"}}
                >
                    <Link to={`/post/${post.id}`}>
                        <p>{post.name}</p>
                    </Link>
                    <p>{post.username}</p>
                    <p>{post.post_info}</p>
                    <br />
                </div>
            ))}

        </div>
    )
}