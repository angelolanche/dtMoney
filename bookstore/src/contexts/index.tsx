import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
}
