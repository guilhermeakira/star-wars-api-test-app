import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2C97D1',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
    h1: {
      "fontSize": "4.5rem",
      "fontWeight": "normal",
      '@media (max-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    subtitle2: {
      "fontWeight": "normal",
      "letterSpacing": "0.35em",
      "lineHeight": "1.25em",
    },
    button: {
      "fontWeight": 'bold',
    },
  }
});

export default theme;
