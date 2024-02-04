import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import GameSlotBooking from './pages/GameSlotBooking'
import GamesList from './pages/GamesList'

function App() {
  
  return (
    <Routes>
      <Route path="/"  element={<Home/>}/> 
      <Route path="/login"  element={<Login/>}/> 
      <Route path="/sign-up"  element={<SignUp/>}/> 
      <Route path="/slot-booking"  element={<GameSlotBooking/>}/> 
      <Route path="/games-list"  element={ <GamesList/>}/> 
    </Routes>
  )
}

export default App
