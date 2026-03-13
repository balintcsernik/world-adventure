export const CFG = {
  SPEED: 3.2, FAST_SPEED: 4.8, INTERACT_R: 80,
  FOOD_STACK_OFFSET: 14, FOOD_STACK_SNAP: 35, FOOD_CHAR_SNAP: 45,
  FOOD_SIZE: 24, FOOD_WOBBLE_K: 0.18, FOOD_WOBBLE_DAMP: 0.82,
  WORLD_ROOMS: ['classroom','cafeteria','gymnasium','playground','library','artroom','musicroom','sciencelab','shop','school_exit','street1','street2','home','city_store','movie_theater','pool','airport','france','northpole','hungary','egypt'],
  ROOM_NAMES: {classroom:'Classroom',cafeteria:'Cafeteria',gymnasium:'Gymnasium',playground:'Playground',library:'Library',artroom:'Art Room',musicroom:'Music Room',sciencelab:'Science Lab',shop:'School Shop',school_exit:'School Exit',street1:'Main Street',street2:'Elm Avenue',home:'My Home',city_store:'Corner Store',movie_theater:'Movie Theater',pool:'Swimming Pool',airport:'Airport',france:'Paris, France',northpole:'North Pole',hungary:'Budapest, Hungary',egypt:'Ancient Egypt'},
  ROOM_W: 800,
};

export const PAL = {
  classroom:{bg1:'#fff7ed',bg2:'#fed7aa',floor:'#d4a574',wall:'#fbbf24',accent:'#f97316'},
  cafeteria:{bg1:'#ecfdf5',bg2:'#a7f3d0',floor:'#86c5a0',wall:'#34d399',accent:'#059669'},
  gymnasium:{bg1:'#ede9fe',bg2:'#c4b5fd',floor:'#a78bfa',wall:'#7c3aed',accent:'#6366f1'},
  playground:{bg1:'#e0f2fe',bg2:'#bae6fd',floor:'#5b9e5f',wall:'#0ea5e9',accent:'#0284c7'},
  library:{bg1:'#fef3c7',bg2:'#fde68a',floor:'#a16207',wall:'#92400e',accent:'#78350f'},
  artroom:{bg1:'#fce7f3',bg2:'#f9a8d4',floor:'#c084fc',wall:'#e879f9',accent:'#a855f7'},
  musicroom:{bg1:'#dbeafe',bg2:'#93c5fd',floor:'#1d4ed8',wall:'#3b82f6',accent:'#2563eb'},
  sciencelab:{bg1:'#d1fae5',bg2:'#6ee7b7',floor:'#047857',wall:'#10b981',accent:'#059669'},
  shop:{bg1:'#fef3c7',bg2:'#fde68a',floor:'#78350f',wall:'#f59e0b',accent:'#d97706'},
  school_exit:{bg1:'#0f0e2a',bg2:'#1a1040',floor:'#3a3a4a',wall:'#2a2a3e',accent:'#4a4a6a'},
  street1:{bg1:'#0c0b24',bg2:'#1e1245',floor:'#2e2e3e',wall:'#3a3a50',accent:'#4a4a6a'},
  street2:{bg1:'#0e0d28',bg2:'#1a1340',floor:'#2e2e3e',wall:'#3a3a50',accent:'#4a4a6a'},
  home:{bg1:'#fff7ed',bg2:'#fed7aa',floor:'#92400e',wall:'#f59e0b',accent:'#d97706'},
  city_store:{bg1:'#ecfdf5',bg2:'#a7f3d0',floor:'#374151',wall:'#059669',accent:'#047857'},
  movie_theater:{bg1:'#1e1b4b',bg2:'#312e81',floor:'#374151',wall:'#4c1d95',accent:'#7c3aed'},
  pool:{bg1:'#e0f2fe',bg2:'#bae6fd',floor:'#93c5fd',wall:'#0ea5e9',accent:'#0284c7'},
  airport:{bg1:'#f1f5f9',bg2:'#e2e8f0',floor:'#6b7280',wall:'#475569',accent:'#334155'},
  france:{bg1:'#fce7f3',bg2:'#fbcfe8',floor:'#6b7280',wall:'#9d174d',accent:'#be185d'},
  northpole:{bg1:'#e0f2fe',bg2:'#bae6fd',floor:'#e2e8f0',wall:'#cbd5e1',accent:'#94a3b8'},
  hungary:{bg1:'#fef3c7',bg2:'#fde68a',floor:'#6b7280',wall:'#dc2626',accent:'#16a34a'},
  egypt:{bg1:'#fef3c7',bg2:'#fde68a',floor:'#d4a574',wall:'#92400e',accent:'#78350f'},
};

export const WEATHER = {
  classroom:'sunny',cafeteria:'cloudy',gymnasium:'rainy',playground:'sunny',
  library:'sunset',artroom:'rainbow',musicroom:'night',sciencelab:'snowy',shop:'sunny',
  school_exit:'sunny',street1:'sunny',street2:'cloudy',home:'sunset',city_store:'sunny',
  movie_theater:'night',pool:'sunny',airport:'cloudy',france:'sunny',northpole:'snowy',hungary:'sunny',egypt:'sunny'
};

export const FONT = 'Nunito, sans-serif';
