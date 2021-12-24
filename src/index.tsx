import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AuthProvider } from './contexts/AuthProvider';
import '@fontsource/noto-sans';
import { QueryClient, QueryClientProvider } from 'react-query';

const fonts = {
  body: 'Noto Sans',
};

const theme = extendTheme({ fonts });

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
