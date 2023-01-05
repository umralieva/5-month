import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersRegistrPage from "./pages/usersRegistrPage/UsersRegistrPage";
import UsersListPage from "./pages/usersListPage/UsersListPage";
import Menu from "./components/menu/Menu";

function App() {
  return (
  <BrowserRouter>
    <Menu/>
    <Routes>
      <Route index element={<UsersRegistrPage/>}/>
      <Route path="/users" element={<UsersListPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
