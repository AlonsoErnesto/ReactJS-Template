import { createRoot } from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.css';
import 'tailwindcss/tailwind.css';

import App from './layouts/App';
import { NextUIProvider } from '@nextui-org/react';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    // <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
    // </StrictMode>
  );
}
