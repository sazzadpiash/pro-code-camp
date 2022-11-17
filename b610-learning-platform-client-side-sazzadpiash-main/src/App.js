import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {mainRoutes} from './routes/PublicRoute/PublicRoute'

function App() {
  return (
    <RouterProvider router={mainRoutes}></RouterProvider>
  );
}

export default App;
