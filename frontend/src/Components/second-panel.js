import React from 'react';
import "./second-panel.css"
function Second(props) {

    function submitHandler() {
        props.setPage("firstPage")
    }
    return( 
        <div className='container'>
            <button type='submit' onClick={submitHandler}  style={{backgroundColor: "#FC8EAC", float: 'left', width: "60px", height:"30px", fontSize: "20px"}} > Back</button>
            <container>
                <h2>SPOTIFY</h2>
                <iframe title="myFrame"
                style={{borderRadius:'12px'}}
                src="https://open.spotify.com/embed/playlist/7hzUdiqw27hdWI5IhkkoUB?utm_source=generator"
                 width="80%" height="500"
                 allow="autoplay; clipboard-write; encrypted-media; 
                 fullscreen; picture-in-picture" loading="lazy"></iframe>
            </container>
            <br/> <br/><br/><br/><br/><br/><br/> <br/><br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <button  style ={{backgroundColor: "#FC8EAC",  width: "120px", height:"30px", fontSize: "20px"}} > Regenerate </button>
           
        </div>
)
    ;
    
}
export default Second;