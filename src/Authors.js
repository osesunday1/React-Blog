import { useState } from "react";
import useFetch from "./useFetch";
import SelectedAuthor from "./SelectedAuthor";

const Authors = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    const [selectedAuthor, setSelectedAuthor] = useState(null);

    // Create a Set to store unique authors
    const uniqueAuthors = new Set();

    return (
        <section className="section-container">
            <div className="author-blog">
                <h3>Authors</h3>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {blogs && blogs.map(blog => {
                    if (!uniqueAuthors.has(blog.author)) {
                        uniqueAuthors.add(blog.author);
                        return (
                            <div key={blog.author}>
                                <div className="author-list" onClick={() => setSelectedAuthor(blog.author)}>
                                    {blog.author}
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="author-blog-list">
                {selectedAuthor && <SelectedAuthor author={selectedAuthor} />}
            </div>
        </section>
    );
}

export default Authors;