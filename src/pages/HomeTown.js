import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Posts from "./Posts";
import CustomInput from "../component/custom_input";
import AddPostComp from "../component/AddPostComp";

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
        <div style={{ flex:1,flexDirection:"row"}}>
            <Posts posts={posts} />
            <AddPostComp addingPost={addingPost} handleFormChange={handleFormChange} formData={formData} />
        </div>
    );
};

export default HomeTown;
