export const theme = {
  colors: {
    accent: '#5f6441',
    hover: '#E09132',
    hoverText: '#5f6441',
    backgroundBtn: '',
    //
    backgroundMain: '#A58E74',
    backgroundSecond: '#E09132',
    backgroundThird: '#424530',
    //
    backgroundGradient: 'linear-gradient(to right, #80872E, #545E23)',
    //
    mainText: 'rgb(0, 0, 0, 1)',
    secondText: '#424530',
    thirdText: '#5f6441',
    whiteText: 'rgba(255, 255, 255, 1)',
    shadow:
      '0px 1px 1px rgba(0,0,0,.12), 0px 4px 4px rgba(0,0,0,.06), 1px 4px 6px rgba(0,0,0,.16);',
  },

  // background-color:#A58E74
  // background-color:#E09132
  // background - color:#424530
  // #5f6441

  media: {
    mobileMin: '(min-width: 320px)',
    mobileMax: '(max-width: 767px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fontSizes: {
    title_h1: '',
    title_h1Mob: '',
    title_h2: '',
    title_h2Mob: '',
    title_h3: '',
    title_h3Mob: '',
    text: '',
    textMob: '',
    xxs: '12px',
    xs: '14px',
    s: '16px',
    xxm: '18px',
    xm: '20px',
    m: '24px',
    l: '28px',
    xl: '32px',
    xxl: '36px',
    xxxl: '48px',
    bodyPositiveSize: '68px',
  },

  fontWeights: {
    normal: 400,
    semiBold: 500,
    bold: 700,
  },

  lineHeights: {
    body: 1.36,
    title: 1.36,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    bold: '2px solid',
  },

  radii: {
    none: '0',
    normal: '20px',
    large: '40px',
    round: '50%',
  },

  fonts: {
    logo: 'Poppins',
    main: 'Lora',
    searchNewsText: 'Inter',
  },

  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};
