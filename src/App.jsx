import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import store from "./core/redux/store/store";
import HomePage from "./pages/HomePage/HomePage";
import { Provider, useDispatch } from "react-redux";
import LoginPage from "./pages/LoginPage/LoginPage";
import ListPlacesPage from "./pages/ListPlacesPage/ListPlacesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import MyProfilePage from "./pages/MyProfile/MyProfilePage";
import DetailPlacesPage from "./pages/DetailPlacesPage/DetailPlacesPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import CreatePlacesPage from "./pages/CreatePlacesPage/CreatePlacesPage";
import { useEffect } from "react";
import { getUserFromToken } from "./core/services/userFetch";
import { doLoginActions } from "./pages/LoginPage/LoginPageActions";

const LoadSession = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserFromToken(token).then((user) => {
        if (user) dispatch(doLoginActions({ user }));
      });
    }
  }, [dispatch]);
  return null;
};
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoadSession />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list" element={<ListPlacesPage />} />
          <Route path="/detail" element={<DetailPlacesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/myProfile" element={<MyProfilePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/create" element={<CreatePlacesPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
