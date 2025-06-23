import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainLayout from './layout/MainLayout';
import DashboardPage from './pages/DashboardPage';
import ComponentsPage from './pages/ComponentsPage';
import ChartsPage from './pages/ChartsPage';
import FormPage from './pages/FormPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#385aea',
          borderRadius: 5,
          fontFamily:
            'ClarityCity, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }

      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<LandingPage />} />
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
    </ConfigProvider>
  );
}
