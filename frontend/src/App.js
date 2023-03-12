
import './App.css';
import  Second from "./Components/second-panel";
import Intro from "./Components/first-panel"
import { useState, useEffect } from 'react';

function App() {

  let isDone = false;

  // const [data, setData] = useState();

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(this)
  //   }
  //   fetch('http://localhost:8080', requestOptions)
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .then(isDone = true)
  //     .catch(err => console.log(err))
  // }, [])

    if (data === "happy") {
      return "https://open.spotify.com/embed/playlist/37i9dQZF1DWSf2RDTDayIx?";
    }
    if (data === "sad") {
      return "https://open.spotify.com/embed/playlist/37i9dQZF1EIg6gLNLe52Bd?";
    }
    if (data === "excited") {
      return "https://open.spotify.com/embed/playlist/37i9dQZF1EIfOPBNnIofh7?";
    }
    if (data === "stressed out") {
      return "https://open.spotify.com/embed/playlist/37i9dQZF1DWUvQoIOFMFUT?";
    }
    if (data === "angry") {
      return "https://open.spotify.com/embed/playlist/37i9dQZF1EIgNZCaOGb0Mi?";
    }
    if (data === "calm") {     
      return "https://open.spotify.com/embed/playlist/37i9dQZF1DWTC99MCpbjP8?";
    }
    if (data === "anxious") {
      return "https://open.spotify.com/embed/playlist/37i9dQZF1EIg42NGihn0NZ?";
    }
    if (data === "productive") {
      return "https://open.spotify.com/embed/playlist/37i9dQZF1DWZZbwlv3Vmtr?";
    }
    if (data === "in love") {
      return "https://open.spotify.com/embed/playlist/37i9dQZF1DX19jOGJFjAzV?";
    }


  return (
    <div className="App">
      {(isDone === true) ? <Second url={JSON.stringify(data)}/> : <Intro />};
    </div>
  );
}

export default App;
