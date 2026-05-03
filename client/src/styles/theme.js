import { createTheme } from '@mui/material/styles';

// Палітра кольорів для светлої теми
const lightPalette = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
  },
  secondary: {
    main: '#dc004e',
    light: '#ff5983',
    dark: '#9a0036',
    contrastText: '#fff',
  },
  error: {
    main: '#f44336',
    light: '#ef5350',
    dark: '#d32f2f',
  },
  warning: {
    main: '#ff9800',
    light: '#ffb74d',
    dark: '#f57c00',
  },
  info: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2',
  },
  success: {
    main: '#4caf50',
    light: '#81c784',
    dark: '#388e3c',
  },
  background: {
    default: '#fafafa',
    paper: '#fff',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};

// Палітра кольорів для темної теми
const darkPalette = {
  primary: {
    main: '#90caf9',
    light: '#bbdefb',
    dark: '#42a5f5',
    contrastText: '#000',
  },
  secondary: {
    main: '#f48fb1',
    light: '#f8bbd0',
    dark: '#ec407a',
    contrastText: '#000',
  },
  error: {
    main: '#ef5350',
    light: '#e57373',
    dark: '#c62828',
  },
  warning: {
    main: '#ffb74d',
    light: '#ffe0b2',
    dark: '#f57f17',
  },
  info: {
    main: '#64b5f6',
    light: '#bbdefb',
    dark: '#1976d2',
  },
  success: {
    main: '#81c784',
    light: '#c8e6c9',
    dark: '#2e7d32',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
};

// Спільні налаштування типографіки
const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.0078em',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 700,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1.6,
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.009375em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: '0.0071em',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.03125em',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.0179em',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.0892em',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.0333em',
  },
};

// Спільні налаштування компонентів
const shapeRadius = 8;

const getComponentsOverrides = (palette) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: palette.background.default,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: shapeRadius,
        textTransform: 'none',
        fontWeight: 600,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        },
      },
      contained: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: shapeRadius,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: shapeRadius,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: shapeRadius,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: shapeRadius / 2,
        fontWeight: 500,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
    },
  },
});

// Світла тема
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...lightPalette,
  },
  typography: {
    fontFamily: "Rubik Dirt, sans-serif",
    title: "EB Garamond, sans-serif",
  },
  shape: {
    borderRadius: shapeRadius,
  },
  components: getComponentsOverrides(lightPalette),
});

// Темна тема
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkPalette,
  },
  typography: {
    fontFamily: "Rubik Dirt, sans-serif",
    title: "EB Garamond, sans-serif",
  },
  shape: {
    borderRadius: shapeRadius,
  },
  components: getComponentsOverrides(darkPalette),


});