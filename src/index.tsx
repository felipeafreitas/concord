import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AuthProvider } from './contexts/AuthProvider';
import '@fontsource/noto-sans';

const fonts = {
  body: 'Noto Sans',
};

const theme = extendTheme({ fonts });

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
