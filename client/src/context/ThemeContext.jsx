import { createContext, useState, useContext, useEffect } from 'react';

// Створюємо контекст для теми
const ThemeContext = createContext();

// Провайдер контексту теми
export const ThemeContextProvider = ({ children }) => {
  // Отримуємо збережену тему з localStorage або використовуємо 'dark' за замовчуванням
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved) {
      return saved === 'dark';
    }
    // Перевіряємо темну тему операційної системи
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Зберігаємо тему в localStorage при зміні
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme-mode', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для використання контексту теми
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeContextProvider');
  }
  return context;
};
