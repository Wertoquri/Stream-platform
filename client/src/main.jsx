import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {ThemeProvider} from '@mui/material'
import {darkTheme, lightTheme} from './styles/theme.js'
import { ThemeContextProvider, useThemeContext } from './context/ThemeContext.jsx'
import { useSelector } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </BrowserRouter>
  </ThemeContextProvider>
);

function Wrapper() {
  let themeName = useSelector((state) => state.theme.theme)
  const { isDarkMode } = useThemeContext();
  return (
    <ThemeProvider theme={themeName == 'dark' ? darkTheme : lightTheme}>
      <App />
    </ThemeProvider>
  )
}
