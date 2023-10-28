import React, { useState } from 'react';

export default function ProfilePage({}){
    const [profile, setProfile] = useState({
        id: 1,
        name: 'John Doe',
        age: 30,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Profile Page</h2>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" value={profile.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input type="number" name="age" value={profile.age} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Bio:
                    <textarea name="bio" value={profile.bio} onChange={handleChange} />
                </label>
            </div>
            {/*<button onClick={setProfile({...profile,name: })}>Save changes</button>*/}
        </div>
    );
};

