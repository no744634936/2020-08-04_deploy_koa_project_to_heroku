import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import {Provider} from "react-redux";
import './App.css';
import store from "./redux/store.js"

//测试用的component
// const Header=()=><h2>Header</h2>;
// const Dashboard=()=><h2>Dashboard</h2>
// const SurveyNew=()=><h2>SurveyNew</h2>
// const Landing=()=><h2>Landing</h2>

import Header from "./components/header/Header.js"
import CurrentUser from "./components/currentUser/CurrentUser.js"



function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <div className="App">
                <Header></Header>

                <Route exact path="/current_user" component={CurrentUser}></Route>
                {/* <Route exact path="/" component={Landing}></Route>
                <Route exact path="/surveys" component={Dashboard}></Route>
                <Route path="/surveys/new" component={SurveyNew}></Route> */}
                <a href="/auth/google">login with google</a>
            </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
