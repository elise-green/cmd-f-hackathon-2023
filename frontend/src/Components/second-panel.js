import React from 'react';
import "./second-panel.css"


<<<<<<< HEAD
function Second(props) {
=======
function Second({setPage, link}) {


    function submitHandler() {
        setPage({page: "firstPage"})
    }

    function returnSong(text){
        return(<iframe title = "spotify" style={{borderRadius:"12px"}} src= "text" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>)
      }
>>>>>>> 1afbb632da2d4f926c8c9837c8728bf3a322022b
      
    return( 
        <div className='container'>
            <container>
            <iframe style={{borderRadius:"12px"}} src={props.url} width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </container>
<<<<<<< HEAD
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <button  style ={{backgroundColor: "#FC8EAC",  width: "120px", height:"30px", fontSize: "20px"}} > Regenerate </button>
=======
           
>>>>>>> 1afbb632da2d4f926c8c9837c8728bf3a322022b
        </div>
)
    ;
    
}
export default Second;