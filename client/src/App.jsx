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
import Users from './pages/Admin/Users/Users';
import NewRegisters from './pages/Admin/NewRegisters/NewRegisters'
import CreateJob from './pages/Admin/CreateJob/CreateJob'
import CreateAdmin from './pages/Admin/CreateAdmin/CreateAdmin'
import ViewJobs from './pages/Admin/ViewJobs/ViewJobs'
import PageNotFound from './pages/PageNotFound';


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
  },
  {
    path: 'admin/dashboard/users',
    element: <Users />
  },
  {
    path: 'admin/dashboard/new-registers',
    element: <NewRegisters />
  },
  {
    path: 'admin/dashboard/new-job',
    element: <CreateJob />
  },
  {
    path: 'admin/dashboard/add-admin',
    element: <CreateAdmin />
  },
  {
    path: 'admin/dashboard/view-jobs',
    element: <ViewJobs />
  },

  //** End of admin routes */

  {
    path: '*',
    element: <PageNotFound />
  }
])


const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App;
