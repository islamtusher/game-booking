import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";

// Pages
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import App from './App';
import GameSlotBooking from './pages/GameSlotBooking';
import GamesList from './pages/GamesList';

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/sign-up",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/slot-booking",
    element: <GameSlotBooking/>,
  },
  {
    path: "/games-list",
    element: <GamesList/>,
  },
]);

// Application Root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
