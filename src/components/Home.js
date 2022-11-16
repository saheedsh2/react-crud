import {useState} from 'react';
import BlogList from './BlogList';
const Home = () => {

const [blogs, setBlogs] = useState([
    {title: "My Website", body:"Welcome to my website...", author: 'saheed', id: 1},
    {title: "About", body:"About My Website...", author: 'shittu', id: 2},
    {title: "Contact Us", body:"Contact Me...", author: 'luigi', id: 3},

]);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs !!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'luigi')} title="Luigi's Blogs !!"/>

            
        </div>
     );
}
 
export default Home;