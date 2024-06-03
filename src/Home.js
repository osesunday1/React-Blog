import { useState, useEffect } from "react"
import BlogList from "./BlogList"
import useFetch from "./useFetch"



const Home = () => {

    const {data, isPending, error} = useFetch('https://blog-api-abgq.onrender.com/api/v1/blogs')

    const blogs = data


    return ( 
        
        <>
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>loading...</div> }
           {blogs && <BlogList blogs={blogs} title = {`All Blogs!`} /> }
           
        </div>
        </>
     );
}


 
export default Home;