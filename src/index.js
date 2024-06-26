import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider}from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './screens/About';
import Product from './screens/Product';
import HomeScreen from './screens/HomeScreen';
import Contact from './screens/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={HomeScreen} path="/" element={<HomeScreen/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
