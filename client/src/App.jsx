import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//** User Pages Import */
import Landing from './pages/Users/LandingPage/Landing';
import Login from './pages/Users/LoginPage/Login';
import Signup from './pages/Users/SignupPage/Signup';
import Home from './pages/Users/HomePage/Home';

//** Admin Pages import */
import LoginAdmin from './pages/Admin/AdminLogin/LoginAdmin';
import Dashboard from './pages/Admin/Dashboard/Dashboard'


const router = createBrowserRouter([

  //** User routes */
  {
    path: '/',
    element: <Landing />
  },
  {
    path: 'user/login',
    element: <Login />
  },
  {
    path: 'user/signup',
    element: <Signup />
  },
  {
    path: '/home',
    element: <Home />
  },
  //** End of user routes */


  //** Admin routes */
  {
    path: 'admin/login',
    element: <LoginAdmin />
  },
  {
    path: 'admin/dashboard',
    element: <Dashboard />
  }

  //** End of admin routes */
])


const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App;
