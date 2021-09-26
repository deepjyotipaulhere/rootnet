import * as React from 'react';
import { Text } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux'
import store from './store';
import Home from './pages/Home';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'dodgerblue',
    accent: 'yellow',
  },
};



export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    </StoreProvider>
  );
}