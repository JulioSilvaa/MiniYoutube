import { ThemeProvider } from 'styled-components';
import GlobalState from './contexts/State';
import Router from './routes/Router';
import GlobalStyles from './styles/Global';
import theme from './styles/Theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalState>
            <Router />
         </GlobalState>
         <GlobalStyles />
      </ThemeProvider>
   );
}

export default App;
