import { Layout, Menu, Avatar } from 'antd';
import {
  DashboardOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  FormOutlined,
  LoginOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import logo from '../img/logo.png';

const { Header, Sider, Content, Footer } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/', icon: <DashboardOutlined />, label: '仪表盘' },
    { key: '/components', icon: <AppstoreOutlined />, label: '组件' },
    { key: '/charts', icon: <BarChartOutlined />, label: '图表' },
    { key: '/form', icon: <FormOutlined />, label: '表格' },
    { key: '/login', icon: <LoginOutlined />, label: '登录' },
    { key: '/settings', icon: <SettingOutlined />, label: '设置' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 顶部 Header */}
      <Header
        style={{
          background: '#fff',
          padding: '0 24px 0 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 75,
          boxShadow: '0 1px 4px rgba(0,21,41,.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center',width:220,justifyContent: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: 65,'object-fit': 'contain'}} />
     
        </div>
        <div>
          {/* 可以加语言切换/设置等 */}
          <Avatar icon={<UserOutlined />} />
        </div>
      </Header>

      <Layout>
        {/* 左侧菜单 */}
        <Sider width={220} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            onClick={({ key }) => navigate(key)}
            items={menuItems}
            style={{ height: '100%', borderRight: 0,background:'#242D53'}}
          />
        </Sider>

        {/* 主体内容 */}
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}
          >
            <Outlet />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Akila 商业管理平台 ©2025 Created by Patrick
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
