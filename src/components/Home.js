import {useState} from 'react';
const Home = () => {

const [blogs, setBlogs] = useState([
    {title: "My Website", body:"Welcome to my website...", author: 'saheed', id: 1},
    {title: "About", body:"About My Website...", author: 'shittu', id: 2},
    {title: "Contact Us", body:"Contact Me...", author: 'luigi', id: 3},

]);
    return ( 
        <div className="home">
         {blogs.map((blog) => (
         <div className='blog-preview' key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>Written by {blog.author}</p>
         </div>
         ))}
            
        </div>
     );
}
 
export default Home;