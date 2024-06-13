import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages.jsx/Home';
import About from './pages.jsx/About';
import Contact from './pages.jsx/Contact';
import Posts from './pages.jsx/Posts';
import NotFound from './pages.jsx/NotFound';
import { PostDetail } from './pages.jsx/PostDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/posts/:id',
        element: <PostDetail />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
]);
