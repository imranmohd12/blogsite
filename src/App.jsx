import './App.css';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout())
      }
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  },[]);

  return loading
  ?<h1>loading...</h1>
  :(
    <>
      <Header/>
      
      <Footer/>
    </>
    )
}

export default App
