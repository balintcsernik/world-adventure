import React from 'react';

export default function MissionTracker() {
  return (
    <div id="mission-tracker" style={{
      position:'fixed',top:52,left:'50%',transform:'translateX(-50%)',
      background:'rgba(255,255,255,.92)',borderRadius:12,padding:'4px 14px',
      fontSize:11,fontWeight:600,color:'#6366f1',zIndex:10,
      boxShadow:'0 2px 8px rgba(0,0,0,.12)',display:'none',maxWidth:260,textAlign:'center'
    }}>
      <div id="tracker-title" style={{marginBottom:2}}></div>
      <div style={{display:'flex',alignItems:'center',gap:6}}>
        <div style={{flex:1,height:5,background:'#e5e7eb',borderRadius:3,overflow:'hidden'}}>
          <div id="tracker-fill" style={{height:'100%',background:'linear-gradient(90deg,#6366f1,#a78bfa)',borderRadius:3,transition:'width .3s',width:'0%'}}></div>
        </div>
        <span id="tracker-count" style={{fontSize:10,color:'#9ca3af'}}></span>
      </div>
    </div>
  );
}
