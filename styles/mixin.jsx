// Base style guide
const guide = {
  size: {
    xs: 360,
    sm: 500,
    md: 768,
    lg: 1024,
    xl: 1240,
  },
};

// extends base style
const device = {
  mobile_sm: `(max-width: ${guide.size.xs}px)`,
  mobile_md: `(max-width: ${guide.size.sm}px)`,
  tablet_md: `(max-width: ${guide.size.md}px)`,
  tablet_lg: `(max-width: ${guide.size.lg}px)`,
  laptop_md: `(max-width: ${guide.size.xl}px)`,
  starter_kit: `1440px`,
};

// const mainColor = {
// 	primary: '#745AF6',
// 	primary_hover: '#9985FF',
// 	primary_pressed: '#4B3D8F',
// 	primary_ghost: '#EFECFE',
// 	primary_lightGray: '#999999',
// 	primary_light: '#DBE7F0',
// 	secondary: '#0F588A',
// 	secondary_white: '#FFFFFF',
// 	green_success: 'rgba(22, 137, 34, 1)',
// 	red_danger: 'rgba(234, 26, 26, 1)',
// };

// const textColor = {
// 	primary_800: '#1C1C1E',
// 	primary_700: '#2C2C2E',
// 	primary_600: '#3A3A3C',
// 	primary_500: '#48484A',
// 	primary_400: '#636366',
// 	primary_300: '#8E8E93',
// 	primary_200: 'rgba(28, 28, 30, 0.6)',
// 	primary_100: 'rgba(28, 28, 30, 0.2)',
// 	primary_white: '#FFFFFF',
// 	primary_red: '#FF0000',
// };

// const fonts = {
// 	montserrat: 'Montserrat, sans-serif',
// 	openSans: 'Open Sans, sans-serif',
// };

// export { guide, mainColor, textColor, device, fonts };
export { guide, device };