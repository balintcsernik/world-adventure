import React from 'react';

export default function RestartDialog() {
  return (
    <div id="restart-dialog" style={{display:'none',position:'fixed',inset:0,background:'rgba(0,0,0,.6)',zIndex:9999,alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fff',borderRadius:20,padding:'28px 24px',maxWidth:320,textAlign:'center',boxShadow:'0 8px 30px rgba(0,0,0,.3)'}}>
        <div style={{fontSize:36,marginBottom:8}}>&#128260;</div>
        <h2 style={{color:'#1e1b4b',margin:'0 0 8px'}}>Restart Game?</h2>
        <p style={{color:'#6b7280',fontSize:14,margin:'0 0 20px'}}>This will erase all progress and start fresh!</p>
        <div style={{display:'flex',gap:12,justifyContent:'center'}}>
          <button id="confirm-restart" style={{background:'#ef4444',color:'#fff',border:'none',borderRadius:12,padding:'12px 24px',fontSize:16,fontWeight:'bold',cursor:'pointer'}}>Yes, Restart</button>
          <button id="cancel-restart" style={{background:'#e5e7eb',color:'#374151',border:'none',borderRadius:12,padding:'12px 24px',fontSize:16,fontWeight:'bold',cursor:'pointer'}}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
