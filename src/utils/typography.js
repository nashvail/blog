import Typography from "typography"
// import fariyGateTheme from "typography-theme-fairy-gates";

const typography = new Typography({
  baseFontSize: '21px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Chivo', 'Roboto', 'serif'],
  bodyFontFamily: ['Spectral', 'sans-serif'],

  // The “scale ratio” for the theme. 
  // This value is the ratio between the h1 font size and the baseFontSize. 
  // So if the scale ratio is 2 and the baseFontSize is 16px then the h1 font size is 32px.
  scaleRatio: 2,

  googleFonts: [
    {
      name: 'Spectral',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
    {
      name: 'Chivo',
      styles: [
        '400',
        '700',
        '900',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '100',
        '300',
        '400',
        '700',
        '900',
      ],
    },
  ],
  
});

export const { scale, rhythm, options } = typography;

export default typography;

