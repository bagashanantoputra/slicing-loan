import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import UserManagementPage from './pages/UserManagementPage/UserManagementPage';
import NewsPage from './pages/NewsPage/NewsPage';
import AddNewsPage from './pages/AddNewsPage/AddNewsPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage/>}/>
          <Route path="/user-management" element={<UserManagementPage/>}/>
          <Route path="/news" element={<NewsPage/>}/>
          <Route path="/add-news" element={<AddNewsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
