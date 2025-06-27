import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Layout from './pages/Layout';
import Shopcontext from './context/Shopcontext';
import DetailPage from './pages/DetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Shop /> },
      { path: '/product/:id', element: <DetailPage /> },
      { path: '/cart', element: <Cart /> }
    ]
  }
]);

function App() {
  return (
    <Shopcontext>
      <RouterProvider router={router} />
    </Shopcontext>
  );
}

export default App;

