import React from "react";
import CustomInput from "./custom_input";

export default function AddPostComp({formData,handleFormChange,addingPost}){
    return(
        <div style={{flex:1,borderStyle:"solid",borderColor:"gray",borderWidth:1,maxWidth:150,marginLeft:'40%'}} >
            <form>
                <CustomInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Name"
                />
                <br />
                <CustomInput
                    name="username"
                    value={formData.username}
                    onChange={handleFormChange}
                    placeholder="Username"
                />
                <br />
                <CustomInput
                    name="post_info"
                    value={formData.post_info}
                    onChange={handleFormChange}
                    placeholder="Post"
                />
                <br />
                <button type="button" onClick={addingPost} >Add Post</button>
            </form>
        </div>
    )
}