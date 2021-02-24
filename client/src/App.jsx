import React from "react";
import Header from "./components/Header/Header";
import { Route, Redirect } from 'react-router-dom';
import DownloadPage from "./components/DownloadPage/DownloadPage";
import EditPage from "./components/EditPage/EditPage";


function App(props) {
  return (
    <div className="App">
      <Header />
        <Route path="/downloadPage" render={ () => <DownloadPage /> } />
        <Route path="/editPage" render={ () => <EditPage /> } />
        <Redirect from='/' to='/editPage' />

    </div>
  );
}

export default App;
