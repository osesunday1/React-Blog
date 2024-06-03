import React from 'react';

const AuthorName = ({ authors, onSelectAuthor }) => {
  if (!authors) {
    return null; // or a loading indicator
  }

  return (
    <ul className="author-list">
      {authors.map((author, index) => (
        <li key={index} onClick={() => onSelectAuthor(author)}>
          {author}
        </li>
      ))}
    </ul>
  );
};

export default AuthorName;