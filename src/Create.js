import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, name, body };
    
    setLoading(true);

    fetch('https://blog-api-abgq.onrender.com/api/v1/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      console.log('New blog added');
      setLoading(false);
      navigate('/'); 
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      setLoading(false);
    });
  }

  return (
    <div className="create">
      <h2>Add A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog Title</label>
        <input type="text" required onChange={(e) => setTitle(e.target.value)} />

        <label> Blog Author</label>
        <input type="text" required onChange={(e) =>{
           let newName = e.target.value
               newName = newName.toLowerCase();
           setName(newName)}} />

        <label> Blog Body</label>
        <textarea required rows={5} onChange={(e) => setBody(e.target.value)}></textarea>

        {!loading ? (<button>Add Blog</button>) : (<button disabled>Adding Blog...</button>)}
      </form>
    </div>
  );
}

export default Create;