# Material UI Theme Configuration

## Огляд

Це повна конфігурація Material UI теми з підтримкою світлої та темної схем. Тема автоматично зберігається в localStorage та синхронізується з системними параметрами користувача.

## Файли конфігурації

### 1. `src/styles/theme.js`
Основний файл з конфігурацією тем:
- **lightTheme** - конфігурація світлої теми
- **darkTheme** - конфігурація темної теми

Включає налаштування:
- Палітра кольорів
- Типографіка
- Стилі компонентів Material UI

### 2. `src/context/ThemeContext.jsx`
React контекст для управління темою:
- **ThemeContextProvider** - провайдер контексту
- **useThemeContext()** - хук для доступу до контексту

### 3. `src/components/ThemeToggle.jsx`
Компонент кнопки для переключення теми з іконками.

### 4. `src/main.jsx`
Оновлена точка входу з підтримкою контексту теми.

## Як користуватися

### Додавання кнопки переключення теми до Header

```jsx
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header>
      {/* інші елементи */}
      <ThemeToggle />
    </header>
  );
}
```

### Доступ до поточної теми у компоненті

```jsx
import { useThemeContext } from '../context/ThemeContext';

function MyComponent() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <div>
      <p>Поточна тема: {isDarkMode ? 'Темна' : 'Світла'}</p>
      <button onClick={toggleTheme}>Змінити тему</button>
    </div>
  );
}
```

### Використання кольорів теми у компонентах

```jsx
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

function StyledComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
      }}
    >
      Контент з кольорами теми
    </Box>
  );
}
```

## Налаштування теми

### Зміна основних кольорів

Відредагуйте `lightPalette` та `darkPalette` у файлі `src/styles/theme.js`:

```javascript
const lightPalette = {
  primary: {
    main: '#1976d2',  // змініть на потрібний колір
    light: '#42a5f5',
    dark: '#1565c0',
  },
  // ...інші параметри
};
```

### Налаштування типографіки

Змініть властивості `typography` у файлі `src/styles/theme.js`:

```javascript
const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
  },
  // ...інші розміри
};
```

### Налаштування компонентів

Додавайте або змінюйте стилі компонентів у функції `getComponentsOverrides()`:

```javascript
const getComponentsOverrides = (palette) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        // ваші стилі
      },
    },
  },
  // ...інші компоненти
});
```

## Автоматичне відбиття системної теми

Система автоматично:
1. Перевіряє, які параметри теми встановлені в операційній системі
2. Завантажує збережену тему з localStorage, якщо користувач уже щось вибрав
3. Зберігає вибір користувача для подальших відвідувань

## Включені компоненти Material UI

- MuiButton - кнопки з ефектами при наведенні
- MuiCard - карточки з тінями та анімаціями
- MuiTextField - поля введення з закругленими кутами
- MuiPaper - поверхні з затіненням
- MuiAppBar - верхня панель додатку
- MuiChip - чіпси (теги)
- MuiIconButton - кнопки з іконками

## Приклад: Додавання ThemeToggle до Header

```jsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Streaming Platform
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
```

## Посилання на документацію

- [Material UI Documentation](https://mui.com/material-ui/)
- [Theme Customization](https://mui.com/material-ui/customization/theming/)
- [Color System](https://mui.com/material-ui/customization/color/)
