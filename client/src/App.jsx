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
import { AuthorizeAdmin, AuthorizeUser } from './middleware/auth';



const router = createBrowserRouter([

  //** User routes */
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/user/login',
    element: <Login />
  },
  {
    path: 'user/signup',
    element: <Signup />
  },
  {
    path: '/home',
    element: <AuthorizeUser><Home /></AuthorizeUser>
  },
  {
    path: '/add-job',
    element: <AuthorizeUser><AddJob /></AuthorizeUser>
  },
  {
    path: '/saved-jobs',
    element: <AuthorizeUser><SavedJobs /></AuthorizeUser>
  },
  {
    path: '/profile',
    element: <AuthorizeUser><Profile /></AuthorizeUser>
  },

  //** End of user routes */


  //** Admin routes */
  {
    path: 'admin/login',
    element: <LoginAdmin />
  },
  {
    path: 'admin/dashboard',
    element: <AuthorizeAdmin><Dashboard /></AuthorizeAdmin>
  },
  {
    path: 'admin/dashboard/users',
    element: <AuthorizeAdmin><Users /></AuthorizeAdmin>
  },
  {
    path: 'admin/dashboard/new-registers',
    element: <AuthorizeAdmin><NewRegisters /></AuthorizeAdmin>
  },
  {
    path: 'admin/dashboard/new-job',
    element: <AuthorizeAdmin><CreateJob /></AuthorizeAdmin>
  },
  {
    path: 'admin/dashboard/add-admin',
    element: <AuthorizeAdmin><CreateAdmin /></AuthorizeAdmin>
  },
  {
    path: 'admin/dashboard/view-jobs',
    element: <AuthorizeAdmin><ViewJobs /></AuthorizeAdmin>
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




