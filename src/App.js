import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeTown from "./pages/HomeTown";
import ProfilePage from "./pages/Profile";
import DetailPage from "./pages/detailPage";
import PostDetail from "./pages/detailPage";
import Footer from "./component/footer";


const About = styled.div`
  background-color: lightgreen;
  padding: 20px;
`;

const Contact = styled.div`
  background-color: lightyellow;
  padding: 20px;
`;

const Nav = styled.nav`
  background-color: lightgray;
  padding: 10px;
`;

const App = () => {
    const [showNav, setShowNav] = useState(true);
    const [post, setPost] = useState([
        {
            id: 1,
            name: 'John Doe',
            username: 'johndoe123',
            post_info: 'Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something',
        },
        {
            id: 2,
            name: 'Alen Alen',
            username: 'johndoe123',
            post_info: 'Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something',
        }
    ]);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <Router>
            <div>
                    <Nav>
                        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </Nav>

                <Routes>
                    <Route path="/" element={<HomeTown addPost={setPost} posts={post} />} />
                    <Route path="/about" element={<About><h1>KBTU</h1><br/>
                        REACT COURSE</About>} />
                    <Route
                        path="/profile"
                        element={<ProfilePage />}
                    />
                    <Route path="/post/:id" element={<PostDetail posts={post}/>} />

                </Routes>

            </div>
            <Footer />
        </Router>
    );
};

export default App;
