import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import store from './core/redux/store/store'
import HomePage from './pages/HomePage/HomePage'
import { Provider } from 'react-redux'
import LoginPage from './pages/LoginPage/LoginPage'
import ListPlacesPage from './pages/ListPlacesPage/ListPlacesPage'
import ContactPage from './pages/ContactPage/ContactPage'
import MyProfilePage from './pages/MyProfile/MyProfilePage'
import DetailPlacesPage from './pages/DetailPlacesPage/DetailPlacesPage'
function App() {
 

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/list" element={<ListPlacesPage/>}/>
          <Route path='/detail' element={<DetailPlacesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/myProfile" element={<MyProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
