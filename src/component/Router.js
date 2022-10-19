import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WritePost from './WritePost';
import SignIn from './SignIn';
import SignUp from './SignUp';
import BoardList from './BoardList';
import BoardPost from './BoardPost';

 function Router() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/BoardList" element={<BoardList/>}/>
            <Route path="/WritePost" element={<WritePost/>}/>
            <Route path="/BoardPost" element={<BoardPost/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;