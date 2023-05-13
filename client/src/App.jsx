import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//** User Pages Import */
import Landing from './pages/Users/LandingPage/Landing';
import Login from './pages/Users/LoginPage/Login';
import Signup from './pages/Users/SignupPage/Signup';
import Home from './pages/Users/HomePage/Home';
import AddJob from './pages/Users/AddJobPage/AddJob';
import SavedJobs from './pages/Users/SavedJobPage/SavedJobs';
import Profile from './pages/Users/ProfilePage/Profile';

import PageNotFound from './pages/PageNotFound';

//** Admin Pages import */
import LoginAdmin from './pages/Admin/AdminLogin/LoginAdmin';
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import Users from './pages/Admin/Users/Users';
import NewRegisters from './pages/Admin/NewRegisters/NewRegisters'
import CreateJob from './pages/Admin/CreateJob/CreateJob'
import CreateAdmin from './pages/Admin/CreateAdmin/CreateAdmin'
import ViewJobs from './pages/Admin/ViewJobs/ViewJobs'

//** Middlewares */
import { AuthorizeUser } from './middleware/auth';



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
  {
    path: '/add-job',
    element: <AddJob />
  },
  {
    path: '/saved-jobs',
    element: <SavedJobs />
  },
  {
    path: '/profile',
    element: <Profile />
  },

  //** End of user routes */


  //** Admin routes */
  {
    path: 'admin/login',
    element: <LoginAdmin />
  },
  {
    path: 'admin/dashboard',
    element: <AuthorizeUser><Dashboard /></AuthorizeUser>
  },
  {
    path: 'admin/dashboard/users',
    element: <AuthorizeUser><Users /></AuthorizeUser>
  },
  {
    path: 'admin/dashboard/new-registers',
    element: <AuthorizeUser><NewRegisters /></AuthorizeUser>
  },
  {
    path: 'admin/dashboard/new-job',
    element: <AuthorizeUser><CreateJob /></AuthorizeUser>
  },
  {
    path: 'admin/dashboard/add-admin',
    element: <AuthorizeUser><CreateAdmin /></AuthorizeUser>
  },
  {
    path: 'admin/dashboard/view-jobs',
    element: <AuthorizeUser><ViewJobs /></AuthorizeUser>
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




