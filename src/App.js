import { ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import GlobalStyles from './styles/Global';
import theme from './styles/Theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Router />
         <GlobalStyles />
      </ThemeProvider>
   );
}

export default App;
