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
];
export default mock;
