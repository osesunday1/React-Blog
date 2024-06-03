import React, { useState } from "react";
import useFetch from "./useFetch";
import SelectedAuthor from "./SelectedAuthor";
import AuthorName from "./AuthorName";

const Authors = () => {
  const { data, isPending, error } = useFetch('https://blog-api-abgq.onrender.com/api/v1/blogs/authors');
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  return (
    <section className="section-container">
      <div className="author-blog">
        <h3>Authors</h3>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && <AuthorName authors={data} onSelectAuthor={setSelectedAuthor} />}
      </div>
      <div className="author-blog-list">
        {selectedAuthor && <SelectedAuthor author={selectedAuthor} />}
      </div>
    </section>
  );
}

export default Authors;