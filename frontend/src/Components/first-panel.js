import React from 'react'
import "./first-panel.css"

function Intro(props) {
    function submitHandler() {
        props.setPage("secondPage")
    }

    return (
      <div className="container">
        <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <h1 style={{ color: '#A3FEB4', fontFamily: 'Kaisei Tokumin'}}>How was your day today?</h1>
            <form>
                <label style={{color:'white', fontFamily: 'Arial', fontWeight: 'bold'}}>Write 2-3 sentences about your day so that 
                    we can generate a personalized spotify playlist just for you!</label>
                <br />
                <br />
                <input
                  type="text"
                  name="user-response"
                  style={{ width: '500px', height: '200px', opacity: 0.7, borderRadius: '15px', fontWeight: 'bold'}}
                /><br />
                <button type='submit' onClick={submitHandler}
                style={{ borderRadius: '15px', marginTop: '20px', backgroundColor: '#A3FEB4', height: '30px', fontFamily: 'Arial', fontWeight: 'bold' }}>
                    Generate</button>
            </form>
            <br />
      </div>
    )
  }

export default Intro;