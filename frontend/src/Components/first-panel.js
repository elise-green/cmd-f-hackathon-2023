import React from 'react'
import "./first-panel.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react"

function Intro() {
    return (
      <div className="container">
        <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <h1 style={{ color: '#A3FEB4', fontFamily: 'Kaisei Tokumin'}}>
            How was your day today?</h1>
            <form>
                <label style={{color:'white', fontFamily: 'Arial', fontWeight: 'bold'}}>Write 2-3 sentences about your day so that 
                    we can generate a personalized spotify playlist just for you!</label>
                <br />
                <br />
                <input
        type="text"
        name="user-response"
        style={{ width: '500px', height: '200px' }}
      />
            </form>
            <br />
            <button
                onClick={() =>  window.location.href='/second-panel'}>
                Generate</button>
      </div>
    )
  }

export default Intro;