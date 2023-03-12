import React, { useState } from 'react'
import "./first-panel.css"

function Intro( {setPage}) {
    const [textResult, setTextResult] = useState("");

    async function handleGenerate(event) {
    
      const inputElement = document.getElementById("formInput"); 
      const inputValue = inputElement.value; 
    
      const url = `http://localhost:8080/`;
      let response = await fetch(url, {
        method: `POST`,
        body: JSON.stringify({ userResponse: inputValue }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      const data = await response.json();
      console.log(data);
      const playlistLink = select_playlist(data);
      setPage({page: 'secondPage', link: playlistLink});
      console.log(textResult);
      return response;
    } 

function select_playlist(text) {
  if (text === "happy") {
    return "https://open.spotify.com/embed/playlist/37i9dQZF1DWSf2RDTDayIx?";
  }
  if (text === "sad") {
    return "https://open.spotify.com/embed/playlist/37i9dQZF1EIg6gLNLe52Bd?";
  }
  if (text === "excited") {
    return "https://open.spotify.com/embed/playlist/37i9dQZF1EIfOPBNnIofh7?";
  }
  if (text === "stressed out") {
    return "https://open.spotify.com/embed/playlist/37i9dQZF1DWUvQoIOFMFUT?";
  }
  if (text === "angry") {
    return "https://open.spotify.com/embed/playlist/37i9dQZF1EIgNZCaOGb0Mi?";
  }
  if (text === "calm") {     
    return "https://open.spotify.com/embed/playlist/37i9dQZF1DWTC99MCpbjP8?";
  }
  if (text === "anxious") {
    return "https://open.spotify.com/embed/playlist/37i9dQZF1EIg42NGihn0NZ?";
  }
  if (text === "productive") {
    return "https://open.spotify.com/embed/playlist/37i9dQZF1DWZZbwlv3Vmtr?";
  }
  if (text === "in love") {
    return "https://open.spotify.com/embed/playlist/37i9dQZF1DX19jOGJFjAzV?";
  }
}

    return (
      <div className="container">
        <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <h1 style={{ color: '#A3FEB4', fontFamily: 'Kaisei Tokumin'}}>How was your day today?</h1>
            
                <label style={{color:'white', fontFamily: 'Arial', fontWeight: 'bold'}}>Write 2-3 sentences about your day so that 
                    we can generate a personalized spotify playlist just for you!</label>
                <br />
                <br />
                <input
                  type="text"
                  name="userResponse"
                  value={textResult}
                  onInput={(e) => setTextResult(e.target.value)}
                  id="formInput"
                  style={{ width: '500px', height: '200px', opacity: 0.7, borderRadius: '15px', fontWeight: 'bold'}}
                /><br />
                <button 
                onClick={event => handleGenerate()}
                style={{ borderRadius: '15px', marginTop: '20px', backgroundColor: '#A3FEB4', height: '30px', fontFamily: 'Arial', fontWeight: 'bold' }}>
                    Generate</button>
          
            <br />
      </div>
    )
  }


export default Intro;