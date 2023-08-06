import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
<<<<<<< HEAD
import './index.css'

=======
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'

import Home from './pages/homepage.tsx';
import About from './pages/aboutpage.tsx';
import Gallery from './pages/gallerypage.tsx';
import Contact from './pages/contactpage.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "home",
    element: <Home />,
  },

  {
    path: "about",
    element: <About />,
  },

  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "contact",
    element: <Contact />,
  }

]);

>>>>>>> f42c4baf85187fd7f5d2d9ebed876ebcf6844093
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
