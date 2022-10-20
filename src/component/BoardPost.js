import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../css/BoardPost.css'

function BoardPost() {

  // const [id, setId] = useState('')
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  // const location = useLocation('');
  const navigate = useNavigate('');
  

       const register = () => {
        axios.post('http://ec2-3-38-111-117.ap-northeast-2.compute.amazonaws.com:32574/api/boards/posts', {
          id : null,
          title: title,
          content: content,
          })
         .then(function (response) {
          // Handle success.
          console.log(response.data);
          alert('글 작성이 완료되었습니다.')
          navigate("/BoardList")
        })
      }
        // .catch(error => {
        //   // Handle error.
        //   console.log('An error occurred:', error.response);
        // });

  return (
    <div>
      <h1>글 작성</h1>
        <form>
        <label>Title : </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <hr />
        <label>Content : </label>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
        <hr />
        <button onClick={register}>Post</button>
        </form>
     </div>
      )
    }

export default BoardPost;
