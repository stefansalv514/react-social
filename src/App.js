import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";


const App = () => {
  return (
      <BrowserRouter>

        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper__content">
                {/*<Route path="/Dialogs" component={Dialogs}/>*/}
                {/*<Route path="/Profile" component={Profile}/>*/}

                <Route path="/Dialogs" render={() => <Dialogs />} />
                <Route path="/Profile" render={() => <Profile />} />
            </div>
        </div>

      </BrowserRouter>
  );
}

export default App;
