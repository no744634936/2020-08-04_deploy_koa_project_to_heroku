import React,{useEffect}from 'react';
import {BrowserRouter,Route} from "react-router-dom"

import './App.css';

import {useSelector,useDispatch} from "react-redux"
import fetchUser from "./redux/currentUser/currentUserAction.js"
import Header from "./components/header/Header.js"
import CurrentUser from "./components/currentUser/CurrentUser.js"
import Landing from "./components/landing/landing.js"

const Dashboard=()=><h2>Dashboard</h2>

//这里是在测试react 的.end.development环境变量是设置成功
console.log("stripe key is :",process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
console.log("development or production ? answer is :",process.env.NODE_ENV);

function App() {
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchUser());
    },[dispatch])

    let current_user_data=useSelector(state=>state.current_user)
  return (
        <BrowserRouter>
            <div className="App">
                <Header></Header>
                <Route exact path="/" component={Landing}></Route>
                <Route exact path="/current_user" component={CurrentUser}></Route>
                <Route exact path="/surveys" component={Dashboard}></Route>
                <a href="/auth/google">login with google</a>
            </div>
        </BrowserRouter>
  );
}

export default App;
