import { ThemeProvider } from 'styled-components';

import CardsDashboard from './pages/CardsDashboard';
import { theme } from './components/styles/Theme';
import { GlobalStyle } from './components/styles/Global';
import { TransactionContextProvider } from './context/TransactionContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TransactionContextProvider>
        <CardsDashboard />
      </TransactionContextProvider>
    </ThemeProvider>
  );
}
