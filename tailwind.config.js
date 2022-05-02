module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'base': '1rem',
      'xxs': '0.625rem',
      'sm': '0.875rem',
      'xl': '1.25rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl-sm': '92px',
      '6xl-sm': '54px',
      '21': '21px',
      '26': '26px',
      '29': '29px',
      '32': '32px',
      '37': '37px'
    },
    extend: {
      colors: {
        'yellow': '#FFEC6B',
        'white-100': '#FEFEFE',
        'gray': '#656565',
        'gray-100': '#ECEEF1',
        'dark': '#0C1315',
        'dark-100': '#0D1517'
      },
      backgroundImage: {
        'crossed': 'linear-gradient(to top left,rgba(0,0,0,0) 0%,rgba(0,0,0,0) calc(50% - 0.8px),#656565 50%,rgba(0,0,0,0) calc(50% + 0.8px),rgba(0,0,0,0) 100%),linear-gradient(to top right,rgba(0,0,0,0) 0%,rgba(0,0,0,0) calc(50% - 0.8px),#656565 50%,rgba(0,0,0,0) calc(50% + 0.8px),rgba(0,0,0,0) 100%);',
        'gradient': 'url("../../public/images/banner.png")'
      },
      transitionDuration: {
        '7000': '7000ms',
      },
      fontFamily: {
        'medium': 'Surt-MediumExp',
        'extended': 'Surt-BlackExtended',
        'lightexp': 'Surt-LightExp',
        'main-bold': 'Surt-Bold'
      },
      spacing: {
        '22': '184px',
        '128': '37rem',
        'ratio-80': '80%'
      }
    },
  },
  plugins: [],
}
