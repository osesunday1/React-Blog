import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const SelectedAuthor = ({ author }) => {
    const { data: blogs, error, isPending } = useFetch(`http://localhost:8000/blogs?author=${author}`);

    return (
        <div className="author-blog-list">
            <h3>Blogs by {author}</h3>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && blogs.map(blog => (
                <div key={blog.id} className="blog-preview">
                  <Link to = {`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                  </Link>
                </div>
            ))}
        </div>
    );
}

export default SelectedAuthor;