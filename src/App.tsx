import { ThemeProvider } from 'styled-components';

import CardsDashboard from './pages/CardsDashboard';
import { theme } from './components/common/Theme';
import { GlobalStyle } from './components/common/Global';
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
