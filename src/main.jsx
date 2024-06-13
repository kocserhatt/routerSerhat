import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';
import MyDataProvider from './store/MyDataProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyDataProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </MyDataProvider>
);
