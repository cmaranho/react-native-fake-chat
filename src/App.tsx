import React from 'react';

import './config/reactotronConfig';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import Chat from '~/Chat';

import reduxConfig from '~/shared/store';
import light from '~/theme/light';
const { store, persistor } = reduxConfig;

function App(): JSX.Element {
  const theme: DefaultTheme = light;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Chat />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
