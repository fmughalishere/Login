import './App.css'
import Login from './comp/Login'
import Profile from './comp/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {
  return (
    <UserContextProvider>
      <h1>Hi Fiza</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}
export default App