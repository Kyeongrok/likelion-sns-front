import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WritePost from './WritePost';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyPost from './WritePost'
import BoardList from './BoardList';

 function Router() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/BoardList" element={<BoardList/>}/>
            <Route path="/WritePost" element={<WritePost/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/MyPost" element={<MyPost/>}/>
        </Routes>
         <button>save</button>
      </BrowserRouter>
    </div>
  )
}

export default Router;