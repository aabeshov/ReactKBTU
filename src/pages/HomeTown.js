import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Posts from "./Posts";
import CustomInput from "../component/custom_input";

const HomeTown = ({ addPost, posts }) => {
    const [number, setNumber] = useState(0);
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({
        id: posts.length + 1,
        name: '',
        username: '',
        post_info: '',
    });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addingPost = () => {
        addPost([...posts, formData]);
        setFormData({
            id: posts.length + 2,
            name: '',
            username: '',
            post_info: '',
        });
    };

    return (
        <div style={{ }}>
            <Posts posts={posts} />
            <div style={{borderStyle:"solid",borderColor:"gray",borderWidth:1,maxWidth:150}} >
                <form>
                <CustomInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Name"
                    onFocus={()=>{alert("Enter your name for your post")}}
                />
                <br />
                <CustomInput
                    name="post_info"
                    value={formData.username}
                    onChange={handleFormChange}
                    placeholder="Username"
                    onFocus={()=>{alert("Enter your data for your post")}}
                    />
                <br />
                <CustomInput
                    name="post_info"
                    value={formData.post_info}
                    onChange={handleFormChange}
                    placeholder="Post"
                    onFocus={()=>{alert("Enter your data for your post")}}
                />
                <br />
                <button type="button" onClick={addingPost} >Add Post</button>
            </form>
            </div>
        </div>
    );
};

export default HomeTown;
