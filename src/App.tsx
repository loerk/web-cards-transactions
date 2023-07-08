import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/global';
import { theme } from './components/styles/theme';
import CardsDashboard from './pages/CardsDashboard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CardsDashboard />
    </ThemeProvider>
  );
}
