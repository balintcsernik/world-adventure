export const MISSION_TEMPLATES = {
  'Ms. Apple':[
    {title:'Classroom Tour',desc:'Check the desks, chalkboard, and bookshelf!',type:'interact',targets:['desk0','chalkboard','bookshelf'],need:3,rewardCoins:10},
    {title:'Art & Science',desc:'Inspect the globe, fishbowl, and poster!',type:'interact',targets:['globe','fishbowl','poster'],need:3,rewardCoins:12},
  ],
  'Chef Marco':[
    {title:'Kitchen Check',desc:'Inspect the menu, fridge, and vending machine!',type:'interact',targets:['menu','fridge','vending'],need:3,rewardCoins:10},
    {title:'Lunch Rush',desc:'Check all 3 tables and the plant!',type:'interact',targets:['tbl0','tbl1','tbl2','plant'],need:4,rewardCoins:12},
  ],
  'Coach Kim':[
    {title:'Gym Challenge',desc:'Bounce 2 balls, climb, and do yoga!',type:'interact',targets:['ball0','ball1','climb','yoga'],need:4,rewardCoins:20,rewardItem:'fast_shoes'},
    {title:'Trophy Hunt',desc:'Check the trophy, climb wall, and bounce a ball!',type:'interact',targets:['trophy','climb','ball2'],need:3,rewardCoins:15},
  ],
  'Mr. Page':[
    {title:'Library Tour',desc:'Check the bookshelf, catalog, and beanbag!',type:'interact',targets:['bigshelf','catalog','beanbag'],need:3,rewardCoins:10},
    {title:'Reading Corner',desc:'Sit in chair, check globe, and browse catalog!',type:'interact',targets:['chair','globe2','catalog'],need:3,rewardCoins:12},
  ],
  'Ms. Rainbow':[
    {title:'Art Gallery',desc:'Paint at easel, sculpt clay, and stamp the wall!',type:'interact',targets:['easel','clay','wall'],need:3,rewardCoins:15,rewardItem:'cape_rainbow'},
    {title:'Studio Clean',desc:'Check paints, supplies, and sculpt clay!',type:'interact',targets:['paints','supplies','clay'],need:3,rewardCoins:12},
  ],
  'Mr. Beat':[
    {title:'Band Practice',desc:'Play piano, drums, and guitar!',type:'interact',targets:['piano','drums','guitar'],need:3,rewardCoins:15},
    {title:'Sound Check',desc:'Test the speakers, drums, and guitar!',type:'interact',targets:['speakers','drums','guitar'],need:3,rewardCoins:12},
  ],
  'Dr. Spark':[
    {title:'Lab Explorer',desc:'Use the microscope, beakers, and periodic table!',type:'interact',targets:['micro','beakers','periodic'],need:3,rewardCoins:12},
    {title:'Star Gazer',desc:'Use telescope, check coats, and look at beakers!',type:'interact',targets:['telescope','coats','beakers'],need:3,rewardCoins:12},
  ],
  'Principal Lee':[
    {title:'School Explorer',desc:'Visit all 9 school rooms!',type:'visit',targets:['classroom','cafeteria','gymnasium','playground','library','artroom','musicroom','sciencelab','shop'],need:9,rewardCoins:25},
  ],
  'Mail Carrier':[
    {title:'Special Delivery',desc:'Visit Home, Store, and Main St!',type:'visit',targets:['home','city_store','street1'],need:3,rewardCoins:15,rewardItem:'scarf'},
    {title:'Express Mail',desc:'Visit 5 city rooms!',type:'visit',targets:['street1','street2','home','city_store','movie_theater'],need:5,rewardCoins:20},
  ],
  'Mom':[
    {title:'Tidy Up',desc:'Clean toybox, check couch, and look at photos!',type:'interact',targets:['toybox','couch','photo'],need:3,rewardCoins:10,rewardItem:'teddy'},
    {title:'Home Helper',desc:'Check the fridge, TV, and make the bed!',type:'interact',targets:['fridge_h','tv','bed'],need:3,rewardCoins:12},
  ],
  'Store Clerk':[
    {title:'Window Shopper',desc:'Check shelves, candy, and the counter!',type:'interact',targets:['shelf_s1','shelf_s2','candy','store_counter'],need:4,rewardCoins:12},
    {title:'City Tour',desc:'Visit the store, theater and pool!',type:'visit',targets:['city_store','movie_theater','pool'],need:3,rewardCoins:12},
  ],
  'Dog Walker':[
    {title:'Park Play',desc:'Try the swing, slide, and sandbox!',type:'interact',targets:['swing','slide','sandbox'],need:3,rewardCoins:12},
    {title:'Dog Walk Route',desc:'Visit 3 streets!',type:'visit',targets:['street1','street2','school_exit'],need:3,rewardCoins:10},
  ],
  'Projectionist':[
    {title:'Movie Night',desc:'Get tickets, popcorn, and check the projector!',type:'interact',targets:['ticketbooth','popcorn','projector'],need:3,rewardCoins:12},
    {title:'Front Row',desc:'Check seats, screen, and grab popcorn!',type:'interact',targets:['seats','screen','popcorn'],need:3,rewardCoins:10},
  ],
  'Lifeguard':[
    {title:'Pool Day',desc:'Use locker, try diving board, and grab towels!',type:'interact',targets:['locker','diveboard','towels'],need:3,rewardCoins:12},
    {title:'Swim & Splash',desc:'Splash in pool, check the chair, and dive!',type:'interact',targets:['pool_water','lifeguard_chair','diveboard'],need:3,rewardCoins:15},
  ],
  'Pilot':[
    {title:'World Traveler',desc:'Visit all 4 destinations!',type:'visit',targets:['france','northpole','hungary','egypt'],need:4,rewardCoins:30},
    {title:'Departure Check',desc:'Check board, luggage, and visit the caf\u00E9!',type:'interact',targets:['departureboard','luggage','cafe_airport'],need:3,rewardCoins:12},
  ],
  'Chef Pierre':[
    {title:'French Feast',desc:'Visit bakery, caf\u00E9, and pick flowers!',type:'interact',targets:['bakery','cafe_fr','flowers_fr'],need:3,rewardCoins:12},
    {title:'Paris Tour',desc:'See Eiffel Tower, try a baguette, and visit bakery!',type:'interact',targets:['eiffel','baguette','bakery'],need:3,rewardCoins:12},
  ],
  'Explorer Sven':[
    {title:'Arctic Explorer',desc:'Build snowman, see polar bear, and visit igloo!',type:'interact',targets:['snowman','polarbear','igloo'],need:3,rewardCoins:15},
    {title:'Aurora Watcher',desc:'Watch aurora, break ice, and build snowman!',type:'interact',targets:['aurora_view','iceblock','snowman'],need:3,rewardCoins:12},
  ],
  'Guide Anna':[
    {title:'Budapest Tour',desc:'Visit baths, Parliament, and cross the bridge!',type:'interact',targets:['baths','parliament','bridge'],need:3,rewardCoins:12},
    {title:'Local Flavors',desc:'Try l\u00E1ngos, see colorful houses, and cross bridge!',type:'interact',targets:['langos','colorhouse','bridge'],need:3,rewardCoins:12},
  ],
  'Archaeologist Nile':[
    {title:'Treasure Hunter',desc:'Explore pyramid, sphinx, and read hieroglyphs!',type:'interact',targets:['pyramid','sphinx_obj','hieroglyphs'],need:3,rewardCoins:15},
    {title:'Desert Discovery',desc:'Visit oasis, ride camel, and see hieroglyphs!',type:'interact',targets:['oasis','camel','hieroglyphs'],need:3,rewardCoins:12},
  ],
};
