export const constants = {
  MENU: {
    CONTENT: [
      {
        id: 1,
        path: '/shop',
        value: 'Store',
        body: [
          // {
          //   id: 1,
          //   title: 'Play-Based Learning',
          //   subTitle: 'jlasgdklujsagdkasljgdaskljgdaskjgdkjdagskhbj',
          //   img: 'https://www.playosmo.com/images/app/images/navbar/store-submenu/play-based-background-7e9e57d71ee133596d60.jpg',
          //   subImg: require('../assets/img/play-based-image.png').default,
          // },
        ],
      },
      {
        id: 2,
        path: '/schools',
        value: 'Schools',
      },
      {
        id: 3,
        path: '/referral',
        value: 'Refer & Get $20',
      },
      {
        id: 4,
        path: '/faq',
        value: 'FAQ',
      },
    ],

    LANGUAGE: [
      {
        id: 1,
        language: 'Deustsch',
        isSelect: false,
      },
      {
        id: 2,
        language: 'English (British)',
        isSelect: false,
      },
      {
        id: 3,
        language: 'English (Canadian)',
        isSelect: false,
      },
      {
        id: 4,
        language: 'English (US)',
        isSelect: true,
      },
      {
        id: 5,
        language: 'Français (Canada)',
        isSelect: false,
      },
      {
        id: 6,
        language: 'Français (France)',
        isSelect: false,
      },
      {
        id: 7,
        language: '한국어',
        isSelect: false,
      },
      {
        id: 8,
        language: '日本語',
        isSelect: false,
      },
    ],

    COUNTRY: [
      {
        id: 1,
        name: 'United States',
        keys: 'us',
        isSelect: true,
      },
      {
        id: 2,
        name: 'Australia',
        keys: 'au',
        isSelect: false,
      },
      {
        id: 3,
        name: 'Canada',
        keys: 'ca',
        isSelect: false,
      },
      {
        id: 4,
        name: 'Denmark',
        keys: 'dk',
        isSelect: false,
      },
      {
        id: 5,
        name: 'Finland',
        keys: 'fi',
        isSelect: false,
      },
      {
        id: 6,
        name: 'France',
        keys: 'fr',
        isSelect: false,
      },
      {
        id: 7,
        name: 'Hong Kong',
        keys: 'hk',
        isSelect: false,
      },
    ],
  },
  SHOP: [
    {
      id: 1,
      title: 'Play-Based Learning',
      subTitle:
        ' Fuel your child’s interest in reading, math, creativity, and more with play-based games!',
      content: [
        {
          id: 1,
          imageLink:
            'https://images.playosmo.com/shopping/home/kits.jpg?auto=format&dpr=1&ixlib=react-9.3.0&w=555&h=407&q=75',
          cardName: 'Begin With a Starter Kit',
          cardContent:
            'Each Starter Kit includes an Osmo Base, Osmo Reflector, and all of the hands-on pieces required to play the games.',
          waveColor: 'rgb(0, 150, 236)',
          xs: 6,
          imageMode: false,
          contentAlign: false,
          textColor: 'white',
        },
        {
          id: 2,
          imageLink:
            'https://images.playosmo.com/shopping/home/games.jpg?auto=format&dpr=1&ixlib=react-9.3.0&w=555&h=407&q=75',
          cardName: 'Add Some Games',
          cardContent: 'Expand your home Osmo learning system with add-on games and bundles!',
          waveColor: 'rgb(247, 114, 25)',
          xs: 6,
          imageMode: false,
          contentAlign: false,
          textColor: 'white',
        },
        {
          id: 3,
          imageLink:
            'https://images.playosmo.com/shopping/home/featured-bg.jpg?auto=format&dpr=2&ixlib=react-9.3.0&w=1140&h=350&q=50',
          cardName: 'Featured Products',
          cardContent: 'See what’s popular right now and get our latest offers.',
          waveColor: '',
          xs: 12,
          imageMode: true,
          contentAlign: false,
          textColor: 'white',
        },
        {
          id: 4,
          imageLink:
            'https://images.playosmo.com/shopping/home/accessories.jpg?auto=format&dpr=2&ixlib=react-9.3.0&w=1140&h=350&q=50',
          cardName: 'Accessories',
          cardContent: 'Shop storage solutions, protective hardware and more.',
          waveColor: '',
          xs: 12,
          imageMode: true,
          contentAlign: true,
          textColor: '#373737',
        },
        {
          id: 5,
          imageLink:
            'https://images.playosmo.com/shopping/home/EGift-card-DT.jpg?auto=format&dpr=2&ixlib=react-9.3.0&w=1140&h=350&q=50',
          cardName: 'Gift Card',
          cardContent: 'PlayOsmo eGift Cards — For Those Special Moments',
          waveColor: '',
          xs: 12,
          imageMode: true,
          contentAlign: true,
          textColor: 'white',
        },
      ],
    },
    {
      id: 1,
      title: 'Curriculum-Based Learning',
      subTitle:
        'Encourage your child to practice grade level skills with standards-aligned learning games.',
      content: [
        {
          id: 1,
          imageLink:
            'https://images.playosmo.com/shopping/home/mw.jpg?auto=format&dpr=1&ixlib=react-9.3.0&w=555&h=407&q=75',
          cardName: 'Math Wizard Series',
          cardContent:
            'Math Wizard series helps first & second graders build math confidence through hands-on learning & digital adventure.',
          waveColor: 'rgb(234, 55, 41)',
          xs: 6,
          imageMode: false,
          contentAlign: false,
          textColor: 'white',
        },
      ],
    },
  ],
};
