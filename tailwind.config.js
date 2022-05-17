module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFEC6B',
        'white-100': '#FEFEFE',
        'white-200': '#F5F5F5',
        'gray': '#656565',
        'gray-100': '#ECEEF1',
        'dark': '#0C1315',
        'dark-100': '#0D1517',
        'dark-200': '#121212',
        'black-100': 'rgba(18, 18, 18, 1)',
        'blue': '#54FFD6',
        'black-opacity': 'rgba(0, 0, 0, .4)'
      },
      boxShadow: {
        '1': '0px 7.32422px 16.65px rgba(0, 0, 0, 0.1)'
      },
      fontSize: {
        'xxs': '0.625rem',
        '4xl-lg': '2.5rem',
        '7xl-sm': '92px',
        '6xl-sm': '54px',
        '8xl': '6rem',
        '21': '21px',
        '26': '26px',
        '29': '29px',
        '32': '32px',
        '37': '37px',
        '56': '56px',
        '82': '82px',
        '100': '100px'
      },
      backgroundImage: {
        'crossed': 'linear-gradient(to top left,rgba(0,0,0,0) 0%,rgba(0,0,0,0) calc(50% - 0.8px),#656565 50%,rgba(0,0,0,0) calc(50% + 0.8px),rgba(0,0,0,0) 100%),linear-gradient(to top right,rgba(0,0,0,0) 0%,rgba(0,0,0,0) calc(50% - 0.8px),#656565 50%,rgba(0,0,0,0) calc(50% + 0.8px),rgba(0,0,0,0) 100%);',
        'gradient': 'url("../../public/images/banner.png")',
        'gradient-top-50': 'linear-gradient(to top,#fff,#fff 50%, transparent 50%),url("../../public/images/banner.png")',
        'gradient-top-60': 'linear-gradient(to top,#fff,#fff 60%, transparent 60%),url("../../public/images/banner.png")',
        'gradient-blue': 'linear-gradient(212.5deg, #54FFD6 13.99%, #40A3FF 74.54%);'
      },
      transitionDuration: {
        '7000': '7000ms',
      },
      fontFamily: {
        'mediumexp': 'Surt-MediumExp',
        'extended': 'Surt-BlackExtended',
        'lightexp': 'Surt-LightExp',
        'main-bold': 'Surt-Bold',
        'montserrat': 'Montserrat',
        'atmospheric': 'a Atmospheric',
        'poppins': 'Poppins, sans-serif'
      },
      spacing: {
        '23': '8.25rem',
        '22': '184px',
        '21': '154px',
        '128': '37rem',
        'ratio-80': '80%',
        '738': '738px'
      }
    },
  },
  plugins: [],
}
