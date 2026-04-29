import { createRoot } from 'react-dom/client';
import App from './app/app'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './services/store';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
