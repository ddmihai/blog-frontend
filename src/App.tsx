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





function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="blogs" element={<BlogsPage />} />

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
