import './App.css';
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import Footer from './component/Footer';
import Router from './component/Router';


function App() {

  // const navigate = useNavigate('')

  return (
      <div className="container">
        <div>

        </div>
        <div className="header">
          <div className='serviceName'>
          Likelion Board
          </div>
        </div>
        <div className="main">
            <nav className="left-bar">
              <a className='left-bar-button' href='/BoardList'> 글 목록</a>
              <a className='left-bar-button' href='/BoardPost'>글 작성</a>
              <a className='left-bar-button' href='/SignUp'>회원 가입</a>
              <a className='left-bar-button' href='/SignIn'>로그인</a>
              {/* <a className='left-bar-button' href='/MyPost'>내 글</a> */}
            </nav>
          <div className="content-wraper">
            <div className="content-box" >
              <Router/>
            </div>

          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
