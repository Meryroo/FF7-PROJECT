const mock = [
  {
    id: 1,
    name: '1st Ray',
    level: 4,
    atributes: {
      HP: 18,
      MP: 0,
    },
    earned: {
      exp: 12,
      AP: 1,
      gil: 5,
    },
    items: {
      drop: ['?'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['Lightning'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Sector 1, No. 1 reactor'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/1stray_jhnjfl.png',
  },
  {
    id: 2,
    name: '2-Faced',
    level: 18,
    atributes: {
      HP: 330,
      MP: 80,
    },
    earned: {
      exp: 100,
      AP: 10,
      gil: 156,
    },
    items: {
      drop: ['Hi-Potion'],
      morph: ['None'],
      steal: ['Phoenix down'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['Earth'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Corel prison'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/2faced_d357qm.png',
  },
  {
    id: 3,
    name: '8 Eye',
    level: 30,
    atributes: {
      HP: 500,
      MP: 220,
    },
    earned: {
      exp: 1000,
      AP: 100,
      gil: 720,
    },
    items: {
      drop: ['?'],
      morph: ['Magic source'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['Poison'],
      immune: ['Gravity'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Temple of the ancients'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/8eye_m8yp56.png',
  },
  {
    id: 4,
    name: 'Acrophies',
    level: 35,
    atributes: {
      HP: 2400,
      MP: 220,
    },
    earned: {
      exp: 800,
      AP: 90,
      gil: 1200,
    },
    items: {
      drop: ['?'],
      morph: ['None'],
      steal: ['Water ring'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['Water'],
      absorbs: ['Wind'],
    },
    enemy_skill: ['None'],
    location: ['Coral valley', 'Coral valley cave'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/acrophies_itcyps.png',
  },
  {
    id: 5,
    name: 'Adamantaimai',
    level: 30,
    atributes: {
      HP: 1600,
      MP: 240,
    },
    earned: {
      exp: 720,
      AP: 100,
      gil: 2000,
    },
    items: {
      drop: ['Phoenix down'],
      morph: ['None'],
      steal: ['Adaman bangle'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['Gravity'],
      absorbs: ['None'],
    },
    enemy_skill: ['Death force'],
    location: ['Wutai area (Shore)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/adamantaimai_wewzkl.png',
  },
  {
    id: 6,
    name: 'Aero Combatant',
    level: 11,
    atributes: {
      HP: 190,
      MP: 0,
    },
    earned: {
      exp: 40,
      AP: 4,
      gil: 110,
    },
    items: {
      drop: ['Potion'],
      morph: ['None'],
      steal: ['Potion'],
    },
    strategy: {
      weakness: ['Gravity', 'Wind'],
      immune: ['Earth'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Plate suport (Sector 7)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/aerocombatant_xfjgwm.png',
  },
  {
    id: 7,
    name: 'Allemange',
    level: 48,
    atributes: {
      HP: 8000,
      MP: 200,
    },
    earned: {
      exp: 1300,
      AP: 100,
      gil: 1360,
    },
    items: {
      drop: ['Eye drop'],
      morph: ['None'],
      steal: ['Eye drop'],
    },
    strategy: {
      weakness: ['Wind'],
      immune: ['Earth'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Northern cave', 'Inside the planet'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/allemagne_v3k97a.png',
  },
  {
    id: 8,
    name: 'Ancient Dragon',
    level: 34,
    atributes: {
      HP: 2400,
      MP: 450,
    },
    earned: {
      exp: 800,
      AP: 80,
      gil: 800,
    },
    items: {
      drop: ['Turbo ether'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['Gravity', 'Wind'],
      immune: ['Earth', 'Water'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Temple of the ancients'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/ancientdragon_gpykex.png',
  },
  {
    id: 9,
    name: 'Ark dragon',
    level: 18,
    atributes: {
      HP: 280,
      MP: 124,
    },
    earned: {
      exp: 84,
      AP: 10,
      gil: 840,
    },
    items: {
      drop: ['Ether'],
      morph: ['Phoenix down'],
      steal: ['Ether'],
    },
    strategy: {
      weakness: ['Wind'],
      immune: ['Earth'],
      absorbs: ['Fire'],
    },
    enemy_skill: ['Flame thrower'],
    location: ['Mythril mine'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/arkdragon_uymfvn.png',
  },
  {
    id: 10,
    name: 'Armored golem',
    level: 41,
    atributes: {
      HP: 10000,
      MP: 200,
    },
    earned: {
      exp: 2500,
      AP: 100,
      gil: 2680,
    },
    items: {
      drop: ['Echo screen'],
      morph: ['Guard source'],
      steal: ['Turbo ether'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Northern cave'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/armoredgolem_mcfpuh.png',
  },
  {
    id: 11,
    name: 'Attack squad',
    level: 34,
    atributes: {
      HP: 1300,
      MP: 100,
    },
    earned: {
      exp: 300,
      AP: 10,
      gil: 420,
    },
    items: {
      drop: ['8inch cannon'],
      morph: ['None'],
      steal: ['Tranquilizer', 'S-Mine'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: [
      'Press room and path 2 (Upper Junon)',
      'Corel reactor',
      'Rocket town',
      'Wutai area',
    ],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/attacksquad_afoim5.png',
  },
  {
    id: 12,
    name: 'Bad rap',
    level: 38,
    atributes: {
      HP: 9000,
      MP: 120,
    },
    earned: {
      exp: 1100,
      AP: 70,
      gil: 2500,
    },
    items: {
      drop: ['Dazers'],
      morph: ['Luck source'],
      steal: ['Ink'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Hallway (In Gelnika, the sunken plane)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/badrap_olasrp.png',
  },
  {
    id: 13,
    name: 'Bagnarada',
    level: 16,
    atributes: {
      HP: 450,
      MP: 60,
    },
    earned: {
      exp: 110,
      AP: 11,
      gil: 120,
    },
    items: {
      drop: ['Hi-Potion'],
      morph: ['Guard source'],
      steal: ['Diamond pin'],
    },
    strategy: {
      weakness: ['Ice'],
      immune: ['Fire ', 'Gravity'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Corel area (East side)', 'Corel reactor', 'Mt. Corel (West side)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/bagnadrana_fyu7ix.png',
  },
  {
    id: 14,
    name: 'Bagrisk',
    level: 19,
    atributes: {
      HP: 400,
      MP: 50,
    },
    earned: {
      exp: 240,
      AP: 30,
      gil: 275,
    },
    items: {
      drop: ['Soft'],
      morph: ['?'],
      steal: ['Soft'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Cosmo area'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/bagrisk_cexzv8.png',
  },
  {
    id: 15,
    name: 'Bahba velamyu',
    level: 23,
    atributes: {
      HP: 640,
      MP: 40,
    },
    earned: {
      exp: 285,
      AP: 20,
      gil: 280,
    },
    items: {
      drop: ['Mute mask'],
      morph: ['Mute mask'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Nibel area'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/bahbavelamyu_njqdpi.png',
  },
  {
    id: 16,
    name: 'Bandersnatch',
    level: 30,
    atributes: {
      HP: 860,
      MP: 100,
    },
    earned: {
      exp: 510,
      AP: 40,
      gil: 600,
    },
    items: {
      drop: ['Hi-Potion'],
      morph: ['Ice crystal'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['Fire'],
      immune: ['Ice'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Icicle area', 'Great glacier', 'Frostbite cave'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/bandersnatch_b764yu.png',
  },
  {
    id: 17,
    name: 'Bandit',
    level: 17,
    atributes: {
      HP: 360,
      MP: 0,
    },
    earned: {
      exp: 99,
      AP: 10,
      gil: 220,
    },
    items: {
      drop: ['Tent'],
      morph: ['None'],
      steal: [' X-Potion'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Corel prison'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/bandit_tr9nfz.png',
  },
  {
    id: 18,
    name: 'Battery cap',
    level: 24,
    atributes: {
      HP: 640,
      MP: 58,
    },
    earned: {
      exp: 270,
      AP: 32,
      gil: 386,
    },
    items: {
      drop: ['Eyedrop', 'Dazers'],
      morph: ['None'],
      steal: ['Dazers'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Nibel area'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/batterycap_irxbtc.png',
  },
  {
    id: 19,
    name: 'Beachplug',
    level: 16,
    atributes: {
      HP: 200,
      MP: 100,
    },
    earned: {
      exp: 95,
      AP: 10,
      gil: 155,
    },
    items: {
      drop: ['Hi-Potion'],
      morph: ['Turbo ether'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['Big guard'],
    location: ['Corel area', 'Gold saucer area', 'Gongaga area (Shore)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/beachplug_mottor.png',
  },
  {
    id: 20,
    name: 'Behemoth',
    level: 45,
    atributes: {
      HP: 7000,
      MP: 400,
    },
    earned: {
      exp: 1500,
      AP: 100,
      gil: 2200,
    },
    items: {
      drop: ['?'],
      morph: ['None'],
      steal: ['War gong', 'Phoenix down'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['????'],
    location: ['Sector 8 (Underground)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/behemoth_bhxet3.png',
  },
  {
    id: 21,
    name: 'Bizarre bug',
    level: 28,
    atributes: {
      HP: 975,
      MP: 0,
    },
    earned: {
      exp: 420,
      AP: 40,
      gil: 340,
    },
    items: {
      drop: ['X-Potion'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Wutai area', 'Wutai da-chao statue'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/bizarrebug_z0hkla.png',
  },
  {
    id: 22,
    name: 'Black bat',
    level: 25,
    atributes: {
      HP: 550,
      MP: 0,
    },
    earned: {
      exp: 270,
      AP: 24,
      gil: 80,
    },
    items: {
      drop: ['Vampire fang'],
      morph: ['Vampire fang'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['Earth'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Mansion', 'Basement', 'Hidden steps'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/blackbat_jovfsk.png',
  },
  {
    id: 23,
    name: 'Bloatfloat',
    level: 18,
    atributes: {
      HP: 240,
      MP: 0,
    },
    earned: {
      exp: 90,
      AP: 9,
      gil: 125,
    },
    items: {
      drop: ['Hi-Potion'],
      morph: ['Hi-Potion'],
      steal: ['Soft'],
    },
    strategy: {
      weakness: ['Wind'],
      immune: ['Earth'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Corel reactor', 'Mt. Corel'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/bloatfloat_vnq2nv.png',
  },
  {
    id: 24,
    name: 'Blood taste',
    level: 8,
    atributes: {
      HP: 72,
      MP: 0,
    },
    earned: {
      exp: 24,
      AP: 2,
      gil: 32,
    },
    items: {
      drop: ['Antidote'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['No. 5 reactor'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/bloodtaste_qzssbj.png',
  },
  {
    id: 25,
    name: 'Blugu',
    level: 4,
    atributes: {
      HP: 120,
      MP: 0,
    },
    earned: {
      exp: 18,
      AP: 2,
      gil: 35,
    },
    items: {
      drop: ['Potion'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['Lightning', 'Wind'],
      immune: ['Earth'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Lower sector 4 plate'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/blugu_kvahnu.png',
  },
  {
    id: 26,
    name: 'Bomb',
    level: 18,
    atributes: {
      HP: 600,
      MP: 30,
    },
    earned: {
      exp: 150,
      AP: 20,
      gil: 192,
    },
    items: {
      drop: ['Shrapnel'],
      morph: ['Shrapnel'],
      steal: ['Right arm'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['Fire ', 'Earth'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Bridge to North Corel'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/bomb_epy8qn.png',
  },
  {
    id: 27,
    name: 'Boundfat',
    level: 0,
    atributes: {
      HP: 0,
      MP: 0,
    },
    earned: {
      exp: 0,
      AP: 0,
      gil: 0,
    },
    items: {
      drop: ['Dazers'],
      morph: ['Dazers'],
      steal: ['Dazers'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['Ice'],
    },
    enemy_skill: ['Death sentence'],
    location: ['Coral valley', 'Coral valley cave', 'Forgotten city'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826134/ff7_enemies/boundfat_kpewy2.png',
  },
  {
    id: 28,
    name: 'Brain pod',
    level: 15,
    atributes: {
      HP: 240,
      MP: 46,
    },
    earned: {
      exp: 52,
      AP: 6,
      gil: 95,
    },
    items: {
      drop: ['Ether'],
      morph: ['Deadly waste'],
      steal: ['Antidote'],
    },
    strategy: {
      weakness: ['Holy'],
      immune: ['Earth'],
      absorbs: ['Poison'],
    },
    enemy_skill: ['None'],
    location: ['Shinra building (67-69 floors)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/brainpod_kk4foh.png',
  },
  {
    id: 29,
    name: 'Bullmotor',
    level: 19,
    atributes: {
      HP: 420,
      MP: 96,
    },
    earned: {
      exp: 92,
      AP: 9,
      gil: 140,
    },
    items: {
      drop: ['Ether'],
      morph: ['Turbo ether'],
      steal: ['X-Potion'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['Matra magic'],
    location: ['Corel prison'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/bullmotor_vvarno.png',
  },
  {
    id: 30,
    name: 'Cactuar',
    level: 20,
    atributes: {
      HP: 200,
      MP: 20,
    },
    earned: {
      exp: 1,
      AP: 1,
      gil: 10000,
    },
    items: {
      drop: ['?'],
      morph: ['Hi-Potion'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Corel desert'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/cactuar_iqbmvy.png',
  },
  {
    id: 31,
    name: 'Cactuer',
    level: 40,
    atributes: {
      HP: 6000,
      MP: 120,
    },
    earned: {
      exp: 1000,
      AP: 100,
      gil: 1000,
    },
    items: {
      drop: ['?'],
      morph: ['Tetra element'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Cactus island', 'North Corel areas'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/cactuar_iqbmvy.png',
  },
  {
    id: 32,
    name: 'Capparwire',
    level: 15,
    atributes: {
      HP: 210,
      MP: 20,
    },
    earned: {
      exp: 60,
      AP: 6,
      gil: 103,
    },
    items: {
      drop: ['Potion'],
      morph: ['None'],
      steal: ['Ether'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Junon area'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/capparwire_zcqqms.png',
  },
  {
    id: 33,
    name: 'Captain',
    level: 34,
    atributes: {
      HP: 2000,
      MP: 90,
    },
    earned: {
      exp: 850,
      AP: 84,
      gil: 1050,
    },
    items: {
      drop: ['?'],
      morph: ['None'],
      steal: ['Shinra alpha'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Submarine'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/captain_bzz8o6.png',
  },
  {
    id: 34,
    name: 'Castanets',
    level: 15,
    atributes: {
      HP: 190,
      MP: 0,
    },
    earned: {
      exp: 65,
      AP: 7,
      gil: 113,
    },
    items: {
      drop: ['Hi-Potion'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['Fire'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Mythril mine'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/castanets_onv8gq.png',
  },
  {
    id: 35,
    name: 'Ceasar',
    level: 8,
    atributes: {
      HP: 120,
      MP: 0,
    },
    earned: {
      exp: 23,
      AP: 2,
      gil: 55,
    },
    items: {
      drop: ['Potion'],
      morph: ['None'],
      steal: ['Tranquilizer'],
    },
    strategy: {
      weakness: ['Ice'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Sewer'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826136/ff7_enemies/ceasar_lbuf07.png',
  },
  {
    id: 36,
    name: 'Christopher',
    level: 34,
    atributes: {
      HP: 6000,
      MP: 200,
    },
    earned: {
      exp: 1300,
      AP: 80,
      gil: 800,
    },
    items: {
      drop: ['Phoenix down', 'Ether'],
      morph: ['None'],
      steal: ['Earth drum'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Northern cave'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/christopher_pt0asc.png',
  },
  {
    id: 37,
    name: 'Chuse tank',
    level: 6,
    atributes: {
      HP: 36,
      MP: 0,
    },
    earned: {
      exp: 23,
      AP: 2,
      gil: 30,
    },
    items: {
      drop: ['Potion'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Winding Tunnel (In disc 1)', '4th Street', 'Lower sector 4 plate'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/chusetank_k9uc0v.png',
  },
  {
    id: 38,
    name: 'Cokatolis',
    level: 17,
    atributes: {
      HP: 420,
      MP: 0,
    },
    earned: {
      exp: 97,
      AP: 10,
      gil: 168,
    },
    items: {
      drop: ['Soft'],
      morph: ['Soft'],
      steal: ['Soft'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Corel area', 'Mt. Corel (West side)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/cokatolis_ontcas.png',
  },
  {
    id: 39,
    name: "Corneo's lackey",
    level: 8,
    atributes: {
      HP: 42,
      MP: 0,
    },
    earned: {
      exp: 8,
      AP: 0,
      gil: 10,
    },
    items: {
      drop: ['?'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ["Corneo's Hall 2nd floor"],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/corneos_k37kxd.png',
  },
  {
    id: 40,
    name: 'Corvette',
    level: 36,
    atributes: {
      HP: 2000,
      MP: 260,
    },
    earned: {
      exp: 1050,
      AP: 60,
      gil: 2200,
    },
    items: {
      drop: ['Loco weed'],
      morph: ['Light curtain'],
      steal: ['Hyper'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['Earth'],
      absorbs: ['Water'],
    },
    enemy_skill: ['None'],
    location: ['Underwater reactor (Glass passage)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/corvette_gl5gxf.png',
  },
  {
    id: 41,
    name: 'Crawler',
    level: 15,
    atributes: {
      HP: 140,
      MP: 48,
    },
    earned: {
      exp: 56,
      AP: 6,
      gil: 65,
    },
    items: {
      drop: ['Hi-Potion'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['Earth'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Mythril mine'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826136/ff7_enemies/crawler_sxvppx.png',
  },
  {
    id: 42,
    name: 'Crazysaw',
    level: 44,
    atributes: {
      HP: 3900,
      MP: 340,
    },
    earned: {
      exp: 800,
      AP: 80,
      gil: 1300,
    },
    items: {
      drop: ['Phoenix down', 'Ether'],
      morph: ['Turbo ether'],
      steal: ['Mute mask'],
    },
    strategy: {
      weakness: ['Lightning'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Sector 8 (Underground)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826135/ff7_enemies/crazysaw_upnm4x.png',
  },
  {
    id: 43,
    name: 'Cripshay',
    level: 8,
    atributes: {
      HP: 100,
      MP: 0,
    },
    earned: {
      exp: 26,
      AP: 3,
      gil: 53,
    },
    items: {
      drop: ['?'],
      morph: ['None'],
      steal: ['Potion'],
    },
    strategy: {
      weakness: ['None'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Train graveyard'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826136/ff7_enemies/cripshay_qvwxnz.png',
  },
  {
    id: 44,
    name: 'Cromwell',
    level: 42,
    atributes: {
      HP: 3500,
      MP: 120,
    },
    earned: {
      exp: 800,
      AP: 80,
      gil: 1500,
    },
    items: {
      drop: ['8inch cannon'],
      morph: ['None'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['Lightning'],
      immune: ['None'],
      absorbs: ['None'],
    },
    enemy_skill: ['None'],
    location: ['Sector 8 (Underground)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826136/ff7_enemies/cromwell_nv9bgq.png',
  },
  {
    id: 45,
    name: 'Crown lance',
    level: 20,
    atributes: {
      HP: 440,
      MP: 70,
    },
    earned: {
      exp: 225,
      AP: 23,
      gil: 400,
    },
    items: {
      drop: ['Hi-Potion'],
      morph: ['Dream powder'],
      steal: ['None'],
    },
    strategy: {
      weakness: ['Fire'],
      immune: ['Earth'],
      absorbs: ['Lightning'],
    },
    enemy_skill: ['None'],
    location: ['Cosmo area', 'Nibel area', 'Rocket launch pad area (Shore)'],
    img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826136/ff7_enemies/crownlance_r29e20.png',
  },
];
export default mock;
