
import './App.css';
import  Second from "./Components/second-panel";
import Intro from "./Components/first-panel"
import { useState } from 'react';

function App() {
  const [page, setPage] = useState({page: "firstPage", link: undefined})
  const pageList = {
    firstPage: <Intro setPage={setPage}/>,
    secondPage: <Second link = {page.link} setPage={setPage}
    />
  }

  return (
    <div className="App">
   {pageList[page.page]}
  
    </div>
  );
}
export default App;
