import React from 'react';
import "./second-panel.css"


function Second({page, link}) {


    function submitHandler() {
        page.setPage({page: "secondPage"})
    }

    function returnSong(text){
        return(<iframe title = "spotify" style={{borderRadius:"12px"}} src= "text" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>)
      }
      
    return( 
        <div className='container'>
            <button type='submit' onClick={submitHandler}  style={{backgroundColor: "#FC8EAC", float: 'left', width: "60px", height:"30px", fontSize: "20px"}} > Back</button>
            <container>
            returnSong(link);
            </container>
           
        </div>
)
    ;
    
}
export default Second;