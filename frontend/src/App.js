
import './App.css';
import  Second from "./Components/second-panel";
import Intro from "./Components/first-panel"
import { useState } from 'react';
import select_playlist from "./Components/first-panel"

function App() {
  const [page, setPage] = useState("firstPage")
  const pageList = {
    firstPage: <Intro setPage={setPage}/>,
    secondPage: <Second link = {x} setPage={setPage}/>
  }

  return (
    <div className="App">
      {pageList[page]}
      <Second link="https://open.spotify.com/embed/playlist/37i9dQZF1DWZZbwlv3Vmtr?" setPage={setPage}/>
    </div>
  );
}

export default App;
