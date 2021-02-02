import React from "react";
import Header from "./components/Header/Header";
import { Route } from 'react-router-dom';
import DownloadPage from "./components/DownloadPage/DownloadPage";
import EditPage from "./components/EditPage/EditPage";


function App(props) {
  return (
    <div className="App">
      <Header />
        <Route path="/downloadPage" render={ () => <DownloadPage /> } />
        <Route path="/editPage" render={ () => <EditPage /> } />

    </div>
  );
}

export default App;
