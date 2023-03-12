import React from 'react';
import "./second-panel.css"


function Second(props) {
      
    return( 
        <div className='container'>
            <container>
            <iframe style={{borderRadius:"12px"}} src={props.url} width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </container>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <button  style ={{backgroundColor: "#FC8EAC",  width: "120px", height:"30px", fontSize: "20px"}} > Regenerate </button>
        </div>
)
    ;
    
}
export default Second;