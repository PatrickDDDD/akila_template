import { Layout, Menu, Avatar, Typography } from 'antd';
import {
  DashboardOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  PieChartOutlined,
  ThunderboltOutlined,
  LikeOutlined,
  FormOutlined,
  LoginOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import logo from '../img/logo.png';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/', icon: <DashboardOutlined />, label: '仪表盘' },
    // { key: '/components', icon: <AppstoreOutlined />, label: '组件' },
    { key: '/charts', icon: <PieChartOutlined />, label: '图表' },
    // { key: '/form', icon: <FormOutlined />, label: '表格' },
    // { key: '/login', icon: <LoginOutlined />, label: '登录' },
    // { key: '/settings', icon: <SettingOutlined />, label: '设置' },
    { key: '/design', icon: <ThunderboltOutlined />, label: '设计' },
    { key: '/display', icon: <LikeOutlined />, label: '展示案例' },
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
          height: 60,
          boxShadow: '0 1px 4px rgba(0,21,41,.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: 45, objectFit: 'contain',marginLeft:'10px' }} />
          <Title level={3} style={{ marginLeft: 12, marginBottom:0, color: '#333', lineHeight: '55px' }}>
            供应链一体化平台
          </Title>
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
            style={{
              height: '100%',
              borderRight: 0,
              background: '#242D53',
            }}
            selectedIcon={<BarChartOutlined />}
            // 自定义选中项颜色
            className="custom-menu"
          />
        </Sider>

        {/* 主体内容 */}
        <Layout style={{ padding: '12px' }}>
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
            中粮供应链一体化平台 ©2025 Created by Patrick
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
