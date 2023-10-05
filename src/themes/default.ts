import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'scroll',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
          sx: {
            fontSize: 14,
          },
        },
        inputProps: {
          color: '#1C1B1F',
        },
      },
      styleOverrides: {
        root: {
          legend: {
            span: {
              display: 'none',
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& > .MuiInputLabel-root': {
            position: 'unset',
            transform: 'unset',
          },
          '& fieldset': {
            top: 0,
          },
          '& label + div fieldset': {
            top: -5,
          },
          '& .MuiOutlinedInput-input': {
            padding: 7.5,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 'unset',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6', // Redefine
    },
    secondary: {
      main: '#BAA182', // Redefine
    },
    error: {
      main: '#BA1A1A', // Redefine
    },
    background: {
      default: '#F9F9FA', // Redefine
    },
    text: {
      primary: '#2A2118',
      secondary: '#1C1B1F',
    },
    action: {
      active: '#4D4D4D',
      hover: '#846E54',
    },
  },
});

export default theme;
