import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const SelectedAuthor = ({ author }) => {
  const { data, error, isPending } = useFetch(`https://blog-api-abgq.onrender.com/api/v1/blogs/find/author/${author}`);
  
  const blogs = data || [];

  return (
    <div className="author-blog-list">
      <h3>Blogs by {author}</h3>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && blogs.map(blog => (
        <div key={blog._id} className="author-blog-preview">
          <Link to={`/blogs/find/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SelectedAuthor;