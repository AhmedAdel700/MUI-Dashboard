import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import Logout from './pages/logout/Logout';

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/logout' element={<Logout />} />
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


