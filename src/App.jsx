import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import store from './core/redux/store/store'
import HomePage from './pages/HomePage/HomePage'
import { Provider } from 'react-redux'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
 

  return (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
  )
}

export default App
