import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage.jsx';
import GamePage from './pages/GamePage.jsx';
import GameGalleryPage from './pages/GameGalleryPage.jsx';


import { AppContext } from './context/AppContext.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    children: [
      {
        path: "games",
        element: <GameGalleryPage/>,
      },
      {
        path:'game/:id',
        element:<GamePage/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
]);

const appState={
  isLoggedIn: false,
  username:'nowie',
  logIn:()=>{appState.isLoggedIn=true},
  logOut:()=>{appState.isLoggedIn=false},
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={{...appState}}>
     <RouterProvider router={router} />
    </AppContext.Provider>
  </React.StrictMode>,
)
