import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({  posts}) => {
    const { id } = useParams();
    console.log(id)
    const post = posts.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div style={{ borderColor: 'gray', borderWidth: 1, borderStyle: 'solid', margin: 20 }}>
            <p>{post.name}</p>
            <p>{post.username}</p>
            <p>{post.post_info}</p>
        </div>
    );
};

export default PostDetail;
