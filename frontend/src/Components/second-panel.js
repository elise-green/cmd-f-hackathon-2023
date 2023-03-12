import React from 'react';
import "./second-panel.css"
function Second() {
    return( 
        <div className='.container'>
            <container>
                <h2>SPOTIFY</h2>
                <iframe title="myFrame"
                style={{borderRadius:'12px'}}
                src="https://open.spotify.com/embed/playlist/7hzUdiqw27hdWI5IhkkoUB?utm_source=generator"
                 width="80%" height="500"
                 allow="autoplay; clipboard-write; encrypted-media; 
                 fullscreen; picture-in-picture" loading="lazy"></iframe>
            </container>
            <button> Regenerate </button>
            <button> Back</button>
        </div>
)
    ;
    
}
export default Second;