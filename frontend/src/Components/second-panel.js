import React from 'react';
import "./second-panel.css"


function Second({setPage, link}) {


    function submitHandler() {
        setPage({page: "firstPage"})
    }

    function returnSong(text){
        return(<iframe title = "spotify" style={{borderRadius:"12px"}} src= "text" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>)
      }
      
    return( 
        <div className='container'>
            <container>
            <iframe style={{borderRadius:"12px"}} src={props.url} width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </container>
           
        </div>
)
    ;
    
}
export default Second;