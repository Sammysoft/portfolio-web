import React from "react";
import { Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
   <>
    <div>
      <Route path='/' exact component={Homepage} />
      <Route path='/about' exact component={AboutPage} />
    </div>
   </>
  );
}

export default App;
