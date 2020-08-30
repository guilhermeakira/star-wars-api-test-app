import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2A2A2A',
      contrastText: '#FBFE63',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#2B2B2B',
    },
    text: {
      primary: '#2C97D1',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF'
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
    h1: {
      'fontSize': '4.5rem',
      'fontWeight': 'normal',
      '@media (max-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    subtitle1: {
      'textAlign': 'center',
      'fontSize': '2.25em',
      'lineHeight': '1.25em',
    },
    subtitle2: {
      'fontWeight': 'normal',
      'letterSpacing': '0.35em',
      'lineHeight': '1.25em',
    },
    button: {
      'fontSize': '1.125rem',
      'lineHeight': '1.25em',
      'fontWeight': 'bold',
    },
  }
});

export default theme;
