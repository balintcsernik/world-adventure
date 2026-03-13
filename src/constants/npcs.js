export const TEACHERS = {
  classroom:{name:'Ms. Apple',color:'#ef4444',hair:'#92400e',dress:'#dc2626',iris:'#4a8c3f',lines:['Welcome to class!','Can you find all the hidden coins?','Try opening the desks!','Great job exploring!']},
  cafeteria:{name:'Chef Marco',color:'#22c55e',hair:'#1e1b4b',dress:'#16a34a',iris:'#6b4226',lines:['Hungry? Check under the trays!','Pizza day is the best day!','Dont forget to hydrate!','The fridge has secrets...']},
  gymnasium:{name:'Coach Kim',color:'#3b82f6',hair:'#f59e0b',dress:'#2563eb',iris:'#3b82f6',lines:['Lets get moving!','Try bouncing all the balls!','Climb to the top for a prize!','Stretch those legs!']},
  library:{name:'Mr. Page',color:'#92400e',hair:'#6b7280',dress:'#78350f',iris:'#5a7c5a',lines:['Shhh... welcome to the library!','Every book hides a story...','Check the card catalog!','Reading is an adventure!']},
  artroom:{name:'Ms. Rainbow',color:'#a855f7',hair:'#ec4899',dress:'#8b5cf6',iris:'#8b5cf6',lines:['Time to create!','Add your handprints to the wall!','Mix those colors!','Art is everywhere!']},
  musicroom:{name:'Mr. Beat',color:'#1d4ed8',hair:'#1e1b4b',dress:'#3b82f6',iris:'#6b4226',lines:['Feel the rhythm!','Play all 8 piano keys!','Try the drums!','Music makes everything better!']},
  sciencelab:{name:'Dr. Spark',color:'#059669',hair:'#fff',dress:'#10b981',iris:'#3b82f6',lines:['Science time!','Look through the microscope!','Mix the beakers carefully!','Discover the universe!']},
  playground:{name:'Mr. Recess',color:'#f59e0b',hair:'#92400e',dress:'#ea580c',iris:'#4d7c0f',lines:['Welcome to recess!','Try the swings, they\u2019re awesome!','Build a castle in the sandbox!','Monkey bars are great exercise!','Fresh air makes you smarter!','Race you to the slide!']},
};

export const PETS = {
  classroom:{name:'Goldie',type:'fish',emoji:'\u{1F420}',color:'#f59e0b'},
  cafeteria:{name:'Whiskers',type:'cat',emoji:'\u{1F431}',color:'#f97316'},
  gymnasium:{name:'Buddy',type:'dog',emoji:'\u{1F415}',color:'#92400e'},
  library:{name:'Owlbert',type:'owl',emoji:'\u{1F989}',color:'#78350f'},
  artroom:{name:'Painty',type:'chameleon',emoji:'\u{1F98E}',color:'#22c55e'},
  musicroom:{name:'Tweety',type:'bird',emoji:'\u{1F426}',color:'#3b82f6'},
  sciencelab:{name:'Sparky',type:'hamster',emoji:'\u{1F439}',color:'#f59e0b'},
  playground:{name:'Flutter',type:'butterfly',emoji:'\u{1F98B}',color:'#a855f7'},
};

export const STREET_NPCS = {
  school_exit:[{name:'Principal Lee',color:'#374151',hair:'#6b7280',dress:'#1e1b4b',iris:'#5a7c5a',lines:['Have a great afternoon!','See you tomorrow!','Be safe!']}],
  street1:[
    {name:'Mail Carrier',color:'#3b82f6',hair:'#1e1b4b',dress:'#2563eb',iris:'#6b4226',lines:['Special delivery!','Letters for all!','Beautiful day!'],wander:true,accessory:'mailbag'},
    {name:'Dog Walker',color:'#22c55e',hair:'#f59e0b',dress:'#16a34a',iris:'#3b82f6',lines:['Say hi to Rex!','Good boy!','Nice walk!'],wander:true,accessory:'dogs'},
    {name:'Ice Cream Man',color:'#f97316',hair:'#92400e',dress:'#ea580c',iris:'#4a8c3f',lines:['Ice cream!','Cool treats!','Best in town!'],wander:true,accessory:'icecart'},
  ],
  street2:[
    {name:'Jogger',color:'#ec4899',hair:'#1e1b4b',dress:'#db2777',iris:'#6b4226',lines:['On your left!','Morning run!','Stay active!'],wander:true},
    {name:'Gardener',color:'#22c55e',hair:'#6b7280',dress:'#16a34a',iris:'#5a7c5a',lines:['Beautiful flowers!','Need more sun!','Green thumb!'],wander:true},
  ],
  home:[{name:'Mom',color:'#ec4899',hair:'#92400e',dress:'#f472b6',iris:'#3b82f6',lines:['Welcome home!','Did you have fun?','Dinner soon!','How was school?']}],
  city_store:[{name:'Store Clerk',color:'#8b5cf6',hair:'#f59e0b',dress:'#7c3aed',iris:'#4a8c3f',lines:['Take anything!','It\'s all free!','Come back anytime!']}],
  movie_theater:[{name:'Projectionist',color:'#4c1d95',hair:'#1e1b4b',dress:'#7c3aed',iris:'#6b4226',lines:['Enjoy the show!','Popcorn is the best!','Shh, movie starting!']}],
  pool:[{name:'Lifeguard',color:'#ef4444',hair:'#f59e0b',dress:'#dc2626',iris:'#3b82f6',lines:['No running!','Great swimming!','Stay safe!','Dive in!']}],
  airport:[{name:'Pilot',color:'#1e3a5f',hair:'#374151',dress:'#1e40af',iris:'#5a7c5a',lines:['Ready for takeoff!','Where to today?','Buckle up!','Clear skies!']}],
  france:[{name:'Chef Pierre',color:'#dc2626',hair:'#1e1b4b',dress:'#991b1b',iris:'#6b4226',lines:['Bonjour!','Try ze croissant!','Magnifique!','Ooh la la!']},{name:'Mime Marcel',color:'#fff',hair:'#1e1b4b',dress:'#1e1b4b',iris:'#3b82f6',lines:['...','*waves*','*pretends to be in a box*'],wander:true}],
  northpole:[{name:'Explorer Sven',color:'#3b82f6',hair:'#fde68a',dress:'#1d4ed8',iris:'#3b82f6',lines:['Brrr, cold!','See the aurora!','Amazing ice!']},{name:'Penguin Pete',color:'#1e1b4b',hair:'#fff',dress:'#1e1b4b',iris:'#6b4226',lines:['Waddle waddle!','Fish?','So cold!'],wander:true}],
  hungary:[{name:'Guide Anna',color:'#dc2626',hair:'#92400e',dress:'#b91c1c',iris:'#4a8c3f',lines:['Szia!','Try the baths!','Beautiful city!']},{name:'Baker B\u00E9la',color:'#f59e0b',hair:'#78350f',dress:'#d97706',iris:'#6b4226',lines:['Fresh l\u00E1ngos!','Yummy!','Best in Budapest!'],wander:true}],
  egypt:[{name:'Archaeologist Nile',color:'#f59e0b',hair:'#1e1b4b',dress:'#d97706',iris:'#6b4226',lines:['Ancient wonders!','Dig here!','Watch the camels!']},{name:'Pharaoh Kid',color:'#fbbf24',hair:'#1e1b4b',dress:'#f59e0b',iris:'#3b82f6',lines:['I am the pharaoh!','Find my treasure!','Sand everywhere!'],wander:true}],
};
