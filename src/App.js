import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";


const App = (props) => {
  return (
      <BrowserRouter>

        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper__content">
                <Route path="/Dialogs"
                       render={() => <Dialogs state={props.state.dialogsPage.dialogs} />} />
                <Route path="/Profile"
                       render={() => <Profile state={props.state.profilePage} />} />
            </div>
        </div>

      </BrowserRouter>
  );
}


export default App;