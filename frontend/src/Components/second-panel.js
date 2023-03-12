import React from 'react';
import "./second-panel.css"


function Second({setPage, link}) {


    function submitHandler() {
        setPage({page: "firstPage"})
    }

    function returnSong(){
        return(<iframe title = "spotify" style={{borderRadius:"12px"}} src={link} width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>)
      }
      
    return( 
        <div className='container'>
            <button type='submit' onClick={submitHandler} style={{backgroundColor: "#FC8EAC", float: 'left', width: "60px", height:"30px", fontSize: "20px"}} > Back</button>
            <div>
                {returnSong()};
            </div>
           
        </div>
)
    ;
    
}
export default Second;