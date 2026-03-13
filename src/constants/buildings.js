export const MAP_AREAS = [
  {name:'School',icon:'\u{1F3EB}',x:20,y:130,rooms:[0,1,2,3,4,5,6,7,8],w:70,h:45},
  {name:'City',icon:'\u{1F3D9}\u{FE0F}',x:110,y:130,rooms:[9,10,11,12,13],w:65,h:45},
  {name:'Fun',icon:'\u{1F3AC}',x:195,y:130,rooms:[14,15],w:55,h:45},
  {name:'Airport',icon:'\u2708\u{FE0F}',x:270,y:130,rooms:[16],w:55,h:45},
  {name:'France',icon:'\u{1F5FC}',x:40,y:35,rooms:[17],w:55,h:38},
  {name:'N. Pole',icon:'\u{1F3D4}\u{FE0F}',x:120,y:28,rooms:[18],w:55,h:38},
  {name:'Hungary',icon:'\u{1F3DB}\u{FE0F}',x:210,y:35,rooms:[19],w:58,h:38},
  {name:'Egypt',icon:'\u{1F3DC}\u{FE0F}',x:295,y:28,rooms:[20],w:55,h:38},
];

export const CITY_BUILDINGS = [
  {idx:0,name:'School',areaIdx:0,pctX:.38,pctY:.62,buildW:90,buildH:100,glowColor:'#fbbf24',
   roofColor:'#ef4444',wallColor:'#fef3c7',accentColor:'#dc2626',doorColor:'#92400e',buildFn:'buildSchoolEl'},
  {idx:1,name:'City',areaIdx:1,pctX:.54,pctY:.58,buildW:80,buildH:110,glowColor:'#6366f1',
   roofColor:'#6366f1',wallColor:'#ede9fe',accentColor:'#4338ca',doorColor:'#374151',buildFn:'buildCityEl'},
  {idx:2,name:'Fun Zone',areaIdx:2,pctX:.70,pctY:.60,buildW:85,buildH:95,glowColor:'#ec4899',
   roofColor:'#ec4899',wallColor:'#fce7f3',accentColor:'#be185d',doorColor:'#831843',buildFn:'buildFunEl'},
  {idx:3,name:'Airport',areaIdx:3,pctX:.54,pctY:.42,buildW:100,buildH:90,glowColor:'#64748b',
   roofColor:'#475569',wallColor:'#f1f5f9',accentColor:'#334155',doorColor:'#1e293b',buildFn:'buildAirportEl'},
  {idx:4,name:'France',areaIdx:4,pctX:.88,pctY:.56,buildW:60,buildH:120,glowColor:'#f472b6',
   roofColor:'#9d174d',wallColor:'#fce7f3',accentColor:'#be185d',doorColor:'#6b7280',buildFn:'buildFranceEl'},
  {idx:5,name:'N. Pole',areaIdx:5,pctX:.88,pctY:.30,buildW:85,buildH:85,glowColor:'#93c5fd',
   roofColor:'#e2e8f0',wallColor:'#f0f9ff',accentColor:'#94a3b8',doorColor:'#475569',buildFn:'buildPoleEl'},
  {idx:6,name:'Hungary',areaIdx:6,pctX:.12,pctY:.56,buildW:90,buildH:95,glowColor:'#dc2626',
   roofColor:'#dc2626',wallColor:'#fef3c7',accentColor:'#16a34a',doorColor:'#92400e',buildFn:'buildHungaryEl'},
  {idx:7,name:'Egypt',areaIdx:7,pctX:.12,pctY:.30,buildW:90,buildH:105,glowColor:'#f59e0b',
   roofColor:'#f59e0b',wallColor:'#fef3c7',accentColor:'#d97706',doorColor:'#78350f',buildFn:'buildEgyptEl'},
];

export const DESTINATIONS = [
  {room:17,name:'Paris, France',icon:'\u{1F1EB}\u{1F1F7}',desc:'Eiffel Tower & Croissants!'},
  {room:18,name:'North Pole',icon:'\u{1F3D4}\uFE0F',desc:'Snow, Igloos & Aurora!'},
  {room:19,name:'Budapest, Hungary',icon:'\u{1F1ED}\u{1F1FA}',desc:'Colorful City & Baths!'},
  {room:20,name:'Ancient Egypt',icon:'\u{1F3DC}\uFE0F',desc:'Pyramids & Sphinx!'},
];
