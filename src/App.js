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
          <img src='https://uploads-ssl.webflow.com/5f3b26c2b3bde9e2894607e8/6049a6bd314be972946af637_OSC%20Korea%20CI%20blue.svg'
            height="45px"
        ></img> 
        </div>
        <div className="header">
          <div className='serviceName'>
          Osc Board
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
