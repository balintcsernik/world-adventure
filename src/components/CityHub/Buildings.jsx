import React from 'react';

// Helper: darken a hex color
function darken(hex, a) {
  let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.max(0, r * (1 - a) | 0)},${Math.max(0, g * (1 - a) | 0)},${Math.max(0, b * (1 - a) | 0)})`;
}

// ── School: Toy Block School ──
export function SchoolBuilding() {
  return (
    <div className="building-wrapper">
      <div className="building-roof" />
      <div className="building-body">
        {[0, 1, 2, 3].map(i => <div key={i} className="building-window" />)}
      </div>
    </div>
  );
}

// ── City: Tall apartment/office block ──
export function CityBuilding({ bldg }) {
  const { buildW: w, buildH: h, wallColor, roofColor, accentColor, doorColor } = bldg;
  const bodyH = h * 0.72;
  return (
    <div className="bldg-wrap" style={{ width: w }}>
      <div className="bldg-ground-shadow" />
      <div className="bldg-roof-flat" style={{ height: 12, background: roofColor }} />
      <div className="bldg-body" style={{
        width: w, height: bodyH,
        background: `linear-gradient(180deg,${wallColor},${darken(wallColor, .08)})`
      }}>
        <div className="bldg-side" style={{ background: darken(wallColor, .15) }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4, padding: '6px 8px' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bldg-window" style={{ height: 10, color: accentColor }} />
          ))}
        </div>
        <div style={{
          width: '60%', height: 8, margin: '0 auto', background: '#f59e0b',
          borderRadius: '0 0 3px 3px', clipPath: 'polygon(10% 0%,90% 0%,100% 100%,0% 100%)',
          boxShadow: '0 2px 3px rgba(0,0,0,.15)'
        }} />
        <div className="bldg-door" style={{ width: 18, height: 22, background: doorColor, margin: '2px auto 0' }}>
          <div className="bldg-knob" />
        </div>
      </div>
    </div>
  );
}

// ── Fun Zone: Marquee theater ──
export function FunBuilding({ bldg }) {
  const { buildW: w, buildH: h, wallColor, roofColor, doorColor } = bldg;
  const bodyH = h * 0.6;
  const lightColors = ['#ef4444', '#fbbf24'];
  return (
    <div className="bldg-wrap" style={{ width: w }}>
      <div className="bldg-ground-shadow" />
      <div className="bldg-roof-flat" style={{
        height: 14, background: roofColor,
        display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '0 4px'
      }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: '50%',
            background: lightColors[i % 2], boxShadow: `0 0 4px ${lightColors[i % 2]}`
          }} />
        ))}
      </div>
      <div className="bldg-body" style={{ width: w, height: bodyH, background: wallColor }}>
        <div className="bldg-side" style={{ background: darken(wallColor, .12) }} />
        <div className="bldg-icon" style={{
          top: 12, left: '50%', transform: 'translateX(-50%)', fontSize: 22
        }}>&#127916;</div>
        <div className="bldg-door" style={{
          width: '40%', height: '45%', background: doorColor,
          margin: 'auto auto 0', borderRadius: '6px 6px 0 0'
        }} />
      </div>
    </div>
  );
}

// ── Airport: Modern terminal with control tower ──
export function AirportBuilding({ bldg }) {
  const { buildW: w, buildH: h, wallColor, roofColor, accentColor, doorColor } = bldg;
  return (
    <div className="bldg-wrap" style={{ width: w }}>
      <div className="bldg-ground-shadow" />
      {/* Control tower */}
      <div style={{
        position: 'absolute', right: 6, bottom: h * 0.4,
        width: 14, height: h * 0.5,
        background: `linear-gradient(180deg, ${accentColor}, ${darken(accentColor, .1)})`,
        borderRadius: '3px 3px 0 0', zIndex: 2
      }}>
        {/* Tower cab (glass box) */}
        <div style={{
          position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
          width: 22, height: 14, background: '#bae6fd',
          border: `2px solid ${accentColor}`, borderRadius: '3px 3px 0 0',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,.15)'
        }}>
          {/* Antenna */}
          <div style={{
            position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
            width: 2, height: 10, background: accentColor, borderRadius: 1
          }}>
            <div style={{
              position: 'absolute', top: -3, left: '50%', transform: 'translateX(-50%)',
              width: 6, height: 3, borderRadius: '50%', background: '#ef4444'
            }} />
          </div>
        </div>
        {/* Tower windows */}
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 6, height: 4, background: '#bae6fd', borderRadius: 1,
            margin: `${8 + i * 10}px auto`, border: '1px solid rgba(0,0,0,.1)'
          }} />
        ))}
      </div>
      {/* Curved terminal roof */}
      <div style={{
        height: 16, background: roofColor,
        borderRadius: '40% 40% 0 0', margin: '0 -3px',
        borderBottom: '4px solid rgba(0,0,0,.15)'
      }} />
      {/* Terminal body */}
      <div className="bldg-body" style={{
        width: w, height: h * 0.45,
        background: `linear-gradient(180deg, ${wallColor}, ${darken(wallColor, .06)})`
      }}>
        <div className="bldg-side" style={{ background: darken(wallColor, .12) }} />
        {/* Glass windows strip */}
        <div style={{
          display: 'flex', gap: 3, padding: '6px 8px', margin: '0 auto'
        }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{
              flex: 1, height: 14, background: '#bae6fd', borderRadius: 2,
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,.1), 0 0 0 1.5px ' + accentColor
            }} />
          ))}
        </div>
        {/* Departure board */}
        <div style={{
          width: '50%', height: 8, margin: '2px auto',
          background: '#1e293b', borderRadius: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ width: '70%', height: 2, background: '#22d3ee', borderRadius: 1 }} />
        </div>
        {/* Wide entrance */}
        <div className="bldg-door" style={{
          width: '35%', height: '30%', background: doorColor,
          margin: 'auto auto 0', borderRadius: '4px 4px 0 0'
        }}>
          {/* Revolving door lines */}
          <div style={{
            position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
            width: 1, height: '60%', background: 'rgba(255,255,255,.3)'
          }} />
        </div>
      </div>
      {/* Plane icon */}
      <div style={{
        position: 'absolute', top: -18, left: 12,
        fontSize: 16, transform: 'rotate(-15deg)',
        filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.2))'
      }}>&#9992;&#65039;</div>
    </div>
  );
}

// ── France: Eiffel Tower ──
export function FranceBuilding({ bldg }) {
  const { buildW: w, buildH: h } = bldg;
  return (
    <div className="bldg-wrap" style={{ width: w, height: h }}>
      <div className="bldg-ground-shadow" />
      {/* Tower structure — pure CSS lattice */}
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        {/* Antenna/spire */}
        <div style={{
          width: 3, height: 18, background: 'linear-gradient(180deg, #6b7280, #9ca3af)',
          borderRadius: '2px 2px 0 0', zIndex: 2
        }}>
          <div style={{
            position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)',
            width: 5, height: 5, borderRadius: '50%', background: '#fbbf24',
            boxShadow: '0 0 6px #fbbf24'
          }} />
        </div>
        {/* Top section (narrow) */}
        <div style={{
          width: 10, height: 20,
          background: 'linear-gradient(180deg, #9ca3af, #78716c)',
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'
        }} />
        {/* Platform 1 */}
        <div style={{
          width: 22, height: 5, background: '#78716c',
          borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,.2)',
          border: '1px solid #57534e'
        }} />
        {/* Middle section */}
        <div style={{
          width: 18, height: 22,
          background: 'linear-gradient(180deg, #78716c, #57534e)',
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
          position: 'relative'
        }}>
          {/* Lattice lines */}
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: 'absolute', left: '15%', right: '15%',
              top: `${25 + i * 28}%`, height: 1,
              background: 'rgba(255,255,255,.3)'
            }} />
          ))}
        </div>
        {/* Platform 2 */}
        <div style={{
          width: 32, height: 5, background: '#57534e',
          borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,.2)',
          border: '1px solid #44403c'
        }} />
        {/* Base section (wide legs) */}
        <div style={{
          width: 30, height: 30,
          background: 'linear-gradient(180deg, #57534e, #44403c)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
          position: 'relative'
        }}>
          {/* Arch cutout */}
          <div style={{
            position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: 14, height: 12,
            background: 'transparent',
            borderRadius: '50% 50% 0 0',
            boxShadow: 'inset 0 0 0 20px #44403c',
            // Use a pseudo-approach: just make the arch visible
          }} />
        </div>
        {/* Ground arch */}
        <div style={{
          width: 40, height: 6, marginTop: -2,
          background: '#44403c', borderRadius: '0 0 4px 4px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
            width: 16, height: 10, borderRadius: '50% 50% 0 0',
            background: 'rgba(135,206,235,.3)',
            border: '2px solid #57534e', borderBottom: 'none'
          }} />
        </div>
      </div>
      {/* French flag accent */}
      <div style={{
        position: 'absolute', top: 22, right: -4,
        display: 'flex', width: 9, height: 6, borderRadius: 1, overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(0,0,0,.2)'
      }}>
        <div style={{ flex: 1, background: '#2563eb' }} />
        <div style={{ flex: 1, background: '#fff' }} />
        <div style={{ flex: 1, background: '#dc2626' }} />
      </div>
    </div>
  );
}

// ── North Pole: Igloo with aurora ──
export function PoleBuilding({ bldg }) {
  const { buildW: w, doorColor } = bldg;
  return (
    <div className="bldg-wrap" style={{ width: w }}>
      {/* Snow mound */}
      <div style={{
        position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)',
        width: '120%', height: 20,
        background: 'radial-gradient(ellipse at center, #e2e8f0 0%, #e2e8f0 60%, transparent 70%)',
        borderRadius: '50%', zIndex: -1
      }} />
      {/* Igloo dome */}
      <div style={{
        width: 60, height: 34,
        background: 'linear-gradient(180deg, #f8fafc, #e2e8f0)',
        borderRadius: '50% 50% 0 0', margin: '0 auto',
        border: '1.5px solid #cbd5e1', borderBottom: '5px solid rgba(0,0,0,.1)',
        position: 'relative'
      }}>
        {/* Brick lines */}
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            position: 'absolute', left: '10%', right: '10%',
            top: `${25 + i * 22}%`, height: 1,
            background: '#cbd5e1', opacity: .6
          }} />
        ))}
        {/* Snowflake */}
        <div className="bldg-icon" style={{
          top: 4, left: '50%', transform: 'translateX(-50%)', fontSize: 14
        }}>&#10052;&#65039;</div>
      </div>
      {/* Door */}
      <div style={{
        width: 16, height: 14, background: doorColor,
        borderRadius: '50% 50% 0 0', margin: '-1px auto 0',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,.2)'
      }} />
      <div className="bldg-ground-shadow" style={{ bottom: -10 }} />
      {/* Penguin */}
      <div style={{
        position: 'absolute', bottom: -2, left: -8, fontSize: 14,
        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,.2))'
      }}>&#128039;</div>
    </div>
  );
}

// ── Hungary: Parliament with side towers ──
export function HungaryBuilding({ bldg }) {
  const { buildW: w, buildH: h, wallColor, roofColor, accentColor, doorColor } = bldg;
  const bodyH = h * 0.5;
  return (
    <div className="bldg-wrap" style={{ width: w }}>
      <div className="bldg-ground-shadow" />
      {/* Left tower */}
      <div style={{
        position: 'absolute', left: 0, bottom: 0,
        width: 12, height: h * 0.55,
        background: accentColor, borderRadius: '3px 3px 0 0', zIndex: 1
      }}>
        <div style={{
          position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
          width: 0, height: 0,
          borderLeft: '7px solid transparent', borderRight: '7px solid transparent',
          borderBottom: `10px solid ${accentColor}`
        }} />
      </div>
      {/* Right tower */}
      <div style={{
        position: 'absolute', right: 8, bottom: 0,
        width: 12, height: h * 0.55,
        background: accentColor, borderRadius: '3px 3px 0 0', zIndex: 1
      }}>
        <div style={{
          position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
          width: 0, height: 0,
          borderLeft: '7px solid transparent', borderRight: '7px solid transparent',
          borderBottom: `10px solid ${accentColor}`
        }} />
      </div>
      {/* Central dome */}
      <div className="bldg-roof-dome" style={{ width: 36, height: 20, background: roofColor }}>
        <div style={{
          position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)',
          width: 8, height: 8, borderRadius: '50%', background: darken(roofColor, .15)
        }} />
      </div>
      {/* Body */}
      <div className="bldg-body" style={{ width: w, height: bodyH, background: wallColor }}>
        <div className="bldg-side" style={{ background: darken(wallColor, .15) }} />
        <div style={{ display: 'flex', gap: 4, padding: '6px 14px' }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="bldg-window" style={{ flex: 1, height: 12, color: accentColor }} />
          ))}
        </div>
        <div className="bldg-door" style={{
          width: 16, height: 20, background: doorColor, margin: 'auto auto 0'
        }}>
          <div className="bldg-knob" />
        </div>
      </div>
    </div>
  );
}

// ── Egypt: Pyramid with Sphinx ──
export function EgyptBuilding({ bldg }) {
  const { buildW: w, buildH: h, roofColor, wallColor, accentColor, doorColor } = bldg;
  return (
    <div className="bldg-wrap" style={{ width: w, height: h }}>
      <div className="bldg-ground-shadow" />
      {/* Main pyramid */}
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'
      }}>
        {/* Pyramid body */}
        <div style={{
          width: 70, height: 70,
          background: `linear-gradient(135deg, ${roofColor} 0%, ${accentColor} 50%, ${darken(accentColor, .2)} 100%)`,
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
          position: 'relative',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,.3))'
        }}>
          {/* Highlight edge */}
          <div style={{
            position: 'absolute', top: 0, left: '50%', width: 1,
            height: '100%', background: 'rgba(255,255,255,.15)',
            transform: 'rotate(26deg)', transformOrigin: 'top center'
          }} />
          {/* Brick lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} style={{
              position: 'absolute', left: `${10 + i * 3}%`, right: `${10 + i * 3}%`,
              top: `${30 + i * 14}%`, height: 1,
              background: 'rgba(120,53,15,.2)'
            }} />
          ))}
          {/* Eye of Horus */}
          <div style={{
            position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%,-50%)',
            fontSize: 14, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,.3))'
          }}>&#128065;</div>
          {/* Door */}
          <div style={{
            position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: 14, height: 18,
            background: doorColor, borderRadius: '4px 4px 0 0',
            boxShadow: 'inset 0 2px 6px rgba(0,0,0,.4)'
          }} />
        </div>
        {/* Small secondary pyramid */}
        <div style={{
          position: 'absolute', right: -4, bottom: 0,
          width: 30, height: 30,
          background: `linear-gradient(135deg, ${darken(roofColor, .1)}, ${darken(accentColor, .15)})`,
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
          opacity: 0.7
        }} />
        {/* Sand base */}
        <div style={{
          position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)',
          width: '130%', height: 10,
          background: 'radial-gradient(ellipse, rgba(254,243,199,.6) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
      </div>
      {/* Camel */}
      <div style={{
        position: 'absolute', bottom: -2, right: -10, fontSize: 13,
        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,.2))'
      }}>&#128043;</div>
    </div>
  );
}

// ── Registry: map buildFn name -> React component ──
const BUILDING_COMPONENTS = {
  buildSchoolEl: SchoolBuilding,
  buildCityEl: CityBuilding,
  buildFunEl: FunBuilding,
  buildAirportEl: AirportBuilding,
  buildFranceEl: FranceBuilding,
  buildPoleEl: PoleBuilding,
  buildHungaryEl: HungaryBuilding,
  buildEgyptEl: EgyptBuilding,
};

export default BUILDING_COMPONENTS;
