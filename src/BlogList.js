import { Link } from "react-router-dom";


const BlogList = ({blogs, title, deleteHandler}) => {


  return (
    <>
    <div className="blog-list" >
        <h2>{title}</h2>
        {blogs.map((blog)=>(
        <div className="blog-preview" key={blog._id}> 
        <Link to={`/blogs/find/${blog._id}`}>
        <h2>{blog.title}</h2> 
        <p>written by: {blog.name}</p>
        </Link>
        </div>
        ))}
    </div>
  </>
  );
}

export default BlogList;