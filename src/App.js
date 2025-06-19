import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import DashboardPage from './pages/DashboardPage';
import ComponentsPage from './pages/ComponentsPage';
import ChartsPage from './pages/ChartsPage';
import FormPage from './pages/FormPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path='components' element={<ComponentsPage />} />
          <Route path='charts' element={<ChartsPage />} />
          <Route path='form' element={<FormPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='settings' element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
