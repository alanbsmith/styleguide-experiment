import Typography from "typography";

import theme from './theme';

const { dimensions, fonts } = theme;

const typography = new Typography({
  baseFontSize: dimensions.baseFontSize,
  headerFontFamily: fonts.primary.concat(fonts.primaryFallback),
  bodyFontFamily: fonts.primary.concat(fonts.primaryFallback),
});

export default typography;
