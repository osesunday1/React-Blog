import { useState } from "react";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const {data, isPending, error} = useFetch('http://localhost:8000/blogs',update)
  

  const id = (Number(data.length)+1)
  const navigate = useNavigate();


  const handleSubmit= (e) =>{
    e.preventDefault()

    const blog= {title, author, body, id};
    
    setLoading(true);

    fetch('http://localhost:8000/blogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog)
    })
    .then(() => {
      console.log('new blog added');
      setUpdate(() => !update); 
      setLoading(false);
      navigate('/'); 
    });

    

  }

  

  
  return (
    <div className="create">
        <h2>Add A New Blog</h2>

        <form onSubmit={handleSubmit}>
          <label> Blog Title</label>
          <input type="text" required onChange={(e)=> setTitle(e.target.value)}/>

          
          <label> Blog Author</label>
          <input type="text" required onChange={(e)=> setAuthor(e.target.value)} />

          <label> Blog Body</label>
          <textarea required onChange={(e)=> setBody(e.target.value)}></textarea>

          {!loading ? (<button>Add Blog</button>) : (<button disabled>Adding Blog...</button>)}

        </form>
    </div>
  );
}

export default Create;