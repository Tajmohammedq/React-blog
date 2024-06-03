import React, { useContext } from 'react'
import { useParams} from 'react-router-dom/cjs/react-router-dom.min';
import DataContext from './context/DataContext';

function Postpage() {
  const {allposts,deletepost}=useContext(DataContext)
  const {id}= useParams();
  const post=allposts.filter((ele)=>ele.id===id)
  return (
    <div className='spacing overflow-auto ms-3 '>
      <h2>{post[0].title}</h2>
      <p>{post[0].timeAndDate}</p>
      <p>
        {post[0].body}
      </p>
      <button className='col-3 btn btn-danger' onClick={(e)=>{deletepost(e,post[0].id) }}>Delete Post</button>
    </div>
  )
}

export default Postpage
