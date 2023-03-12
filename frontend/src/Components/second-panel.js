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
            
            </container>
            <br/> <br/><br/><br/><br/><br/><br/> <br/><br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <button  style ={{backgroundColor: "#FC8EAC",  width: "120px", height:"30px", fontSize: "20px"}} > Regenerate </button>
           
        </div>
)
    ;
    
}
export default Second;