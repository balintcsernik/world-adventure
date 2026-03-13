import React from 'react';

export default function MapOverlay() {
  return (
    <div id="map-overlay" style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,.7)',zIndex:200,display:'none',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fff',borderRadius:20,padding:20,width:'92%',maxWidth:420,maxHeight:'85vh',overflowY:'auto'}}>
        <h2 style={{textAlign:'center',color:'#6366f1',marginBottom:10}}>&#128506; World Map</h2>
        <canvas id="map-canvas" width={380} height={300} style={{width:'100%',borderRadius:12,background:'#e0f2fe'}}></canvas>
        <button className="trade-close" id="close-map">Close Map</button>
      </div>
    </div>
  );
}
