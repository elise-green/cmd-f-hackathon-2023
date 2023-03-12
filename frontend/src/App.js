
import './App.css';
import  Second from "./Components/second-panel";
import Intro from "./Components/first-panel"
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("firstPage")
  const pageList = {
    firstPage: <Intro setPage={setPage}/>,
    secondPage: <Second/>
  }

  return (
    <div className="App">
      {pageList[page]}
    </div>
  );
}

export default App;
