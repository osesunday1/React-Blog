import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data:blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`)

    const deleteHandler =()=>{
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE'
      }).then(()=>{
        navigate('/'); 
      })
    }
    const adminHandler = ()=>{
      navigate('/'); 
    }

  return (
    <div className="blog-details">
        {isPending && <div> Loading</div>}
        {error && <div> {error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <h3>Written by: <strong>{blog.author}</strong></h3>
                <div >
                <p>{blog.body}</p>
                </div>
                {blog.author === 'ose' ? (<div><i><strong>Admin's post cannot be deleted </strong> </i> <button onClick={adminHandler}> Back </button></div>) : (<button onClick={deleteHandler}>delete</button>)}
             </article>
            )}
    </div>
  );
}

export default BlogDetails;