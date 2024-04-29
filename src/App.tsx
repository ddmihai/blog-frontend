import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import ProfilePage from './pages/Profile/ProfilePage';
import CreateBlogPage from './pages/CreateBlog/CreateBlogPage';
import Header from './components/Header/Header';
import BlogsPage from './pages/Blogs/BlogsPage';
import BlogPostById from './pages/BlogPost/BlogPostById';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getUserData } from './lib/users/getUserData';





function App() {


  const [user, setUser] = useState();

  useEffect(() => {
    axios.get('/').then(() => console.log('Server starting'));
    getUserData().then(data => setUser(data))
  }, [])

  return (
    <Router>
      <Header user={user} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/blogs" element={<BlogsPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path='/profile' element={<ProfilePage />} />

        <Route path='/create-blog' element={<CreateBlogPage />} />
        <Route path='/individual-blog' element={<BlogPostById />} />
      </Routes>
    </Router>
  );
}

export default App;
