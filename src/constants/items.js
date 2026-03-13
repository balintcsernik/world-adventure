export const SHOP_ITEMS = [
  {id:'crown',name:'Golden Crown',desc:'Fit for royalty!',price:15,slot:'hat',icon:'\u{1F451}'},
  {id:'wizhat',name:'Wizard Hat',desc:'Magical!',price:10,slot:'hat',icon:'\u{1F9D9}'},
  {id:'catears',name:'Cat Ears',desc:'Meow!',price:8,slot:'hat',icon:'\u{1F63A}'},
  {id:'pirate_hat',name:'Pirate Hat',desc:'Arrr!',price:12,slot:'hat',icon:'\u{1F3F4}\u200D\u2620\uFE0F'},
  {id:'cape_red',name:'Red Cape',desc:'Hero time!',price:12,slot:'cape',icon:'\u{1F9B8}'},
  {id:'cape_blue',name:'Blue Cape',desc:'Cool as ice!',price:12,slot:'cape',icon:'\u{1F9CA}'},
  {id:'cape_rainbow',name:'Rainbow Cape',desc:'All colors!',price:18,slot:'cape',icon:'\u{1F308}'},
  {id:'fast_shoes',name:'Rocket Shoes',desc:'Walk faster!',price:20,slot:'shoes',icon:'\u{1F45F}'},
  {id:'bunny_shoes',name:'Bunny Shoes',desc:'Bouncy!',price:15,slot:'shoes',icon:'\u{1F430}'},
  {id:'magnifier',name:'Magnifying Glass',desc:'See sparkles!',price:8,slot:'tool',icon:'\u{1F50D}'},
  {id:'flashlight',name:'Flashlight',desc:'Light up!',price:8,slot:'tool',icon:'\u{1F526}'},
  {id:'bubble_wand',name:'Bubble Wand',desc:'Bubbles!',price:12,slot:'tool',icon:'\u{1FAE7}'},
  {id:'camera',name:'Camera',desc:'Snap photos!',price:14,slot:'tool',icon:'\u{1F4F7}'},
  {id:'butterfly_wings',name:'Butterfly Wings',desc:'Flutter!',price:25,slot:'accessory',icon:'\u{1F98B}'},
  {id:'star_glasses',name:'Star Glasses',desc:'Be a star!',price:10,slot:'accessory',icon:'\u2B50'},
  {id:'sparkle_bag',name:'Sparkle Backpack',desc:'Glittery!',price:16,slot:'accessory',icon:'\u{1F392}'},
];

export const CITY_STORE_ITEMS = [
  {id:'scarf',name:'Cozy Scarf',desc:'Warm!',price:0,slot:'accessory',icon:'\u{1F9E3}'},
  {id:'sunhat',name:'Sun Hat',desc:'Shade!',price:0,slot:'hat',icon:'\u{1F452}'},
  {id:'skateboard',name:'Skateboard',desc:'Roll!',price:0,slot:'tool',icon:'\u{1F6F9}'},
  {id:'lollipop',name:'Lollipop',desc:'Sweet!',price:0,slot:'tool',icon:'\u{1F36D}'},
  {id:'teddy',name:'Teddy Bear',desc:'Cuddly!',price:0,slot:'accessory',icon:'\u{1F9F8}'},
  {id:'kite',name:'Kite',desc:'Fly!',price:0,slot:'tool',icon:'\u{1FA81}'},
  {id:'umbrella',name:'Umbrella',desc:'Dry!',price:0,slot:'tool',icon:'\u2602\uFE0F'},
  {id:'sneakers',name:'Cool Sneakers',desc:'Style!',price:0,slot:'shoes',icon:'\u{1F45F}'},
];

export const ALL_ITEMS = [...SHOP_ITEMS, ...CITY_STORE_ITEMS];
