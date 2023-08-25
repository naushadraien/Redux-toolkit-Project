
import Login from './components/Login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const App = () => {


  const navigate = useNavigate();

  const {token} = useSelector((state)=>state.login);
  console.log(token);
  

  const authorizedUser=()=>{
    if(token){
      navigate('/home');
    } else{
      navigate('/');
    }
  }

  useEffect(() => {
    authorizedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('render');
  }, [token, navigate]);
  

 

  return (
    <>
      <Routes>
      <Route exact path="/" element={<Login/>} />
      </Routes>
      <Routes>
      <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App