import { IconButton } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      title={isDarkMode ? 'Світла тема' : 'Темна тема'}
      sx={{
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'rotate(20deg)',
        },
      }}
    >
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
