// src/pages/CarbonDashboard.jsx
import React from 'react';
import { Layout, Typography, Select, Statistic, Divider } from 'antd';
import { Pie, Column, DualAxes } from '@ant-design/plots';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const CarbonDashboard = () => {
  const pieData = [
    { type: 'Scope 1', value: 20 },
    { type: 'Scope 2', value: 30 },
    { type: 'Scope 3', value: 50 },
  ];

  const barData = [
    { year: '2019', value: 500000, scope: 'Scope 2' },
    { year: '2020', value: 400000, scope: 'Scope 2' },
    { year: '2021', value: 350000, scope: 'Scope 2' },
    { year: '2022', value: 300000, scope: 'Scope 2' },
    { year: '2023', value: 250000, scope: 'Scope 2' },
  ];

  const intensityData = [
    { year: '2019', carbon: 30000, intensity: 0.05 },
    { year: '2020', carbon: 45000, intensity: 0.045 },
    { year: '2021', carbon: 32000, intensity: 0.035 },
    { year: '2022', carbon: 36000, intensity: 0.04 },
    { year: '2023', carbon: 28000, intensity: 0.03 },
  ];

  const dualAxesConfig = {
    data: [intensityData, intensityData],
    xField: 'year',
    yField: ['carbon', 'intensity'],
    geometryOptions: [
      {
        geometry: 'column',
        color: '#13c2c2',
      },
      {
        geometry: 'line',
        color: '#faad14',
        lineStyle: {
          lineWidth: 2,
        },
        smooth: true,
      },
    ],
    height: 220,
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider width={380} style={{ background: '#0d0d0d', color: '#fff', padding: '24px' }}>
        <Title level={4} style={{ color: '#fff' }}>Annual Carbon Emissions</Title>
        <Statistic value={238.11} precision={2} suffix="K tCO2e" valueStyle={{ color: '#52c41a' }} />

        <div style={{ marginTop: 24 }}>
          <Title level={5} style={{ color: '#ccc' }}>Carbon Emissions by Scope</Title>
          <Pie
            data={pieData}
            angleField="value"
            colorField="type"
            radius={0.8}
            height={180}
            legend={{ position: 'bottom' }}
          />
        </div>

        <Divider style={{ backgroundColor: '#333' }} />

        <Title level={5} style={{ color: '#ccc' }}>Annual Carbon Emissions Trend</Title>
        <Column
          data={barData}
          xField="year"
          yField="value"
          seriesField="scope"
          height={200}
          color={['#1890ff']}
        />

        <Divider style={{ backgroundColor: '#333' }} />

        <Title level={5} style={{ color: '#ccc' }}>Carbon Emissions Trend</Title>
        <DualAxes {...dualAxesConfig} />
      </Sider>

      <Layout>
        <Header style={{
          background: '#141414',
          padding: '0 24px',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Title level={4} style={{ margin: 0, color: '#fff' }}>Training Demo – ASIA</Title>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Select defaultValue="Emissions" options={[{ value: 'Emissions', label: 'Emissions' }]} />
            <Select defaultValue="2023" options={[{ value: '2023', label: '2023' }]} />
            <Select defaultValue="All Countries" options={[{ value: 'All Countries', label: 'All Countries' }]} />
          </div>
        </Header>

        <Content style={{ background: '#000', position: 'relative' }}>
          <div style={{
            height: '100%',
            color: '#888',
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100vh - 64px)'
          }}>
            🌏 地图展示区域（建议使用 react-map-gl / react-simple-maps 插入地图）
          </div>

          <div style={{
            position: 'absolute',
            top: 16,
            right: 24,
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '12px',
            borderRadius: '6px',
            color: '#aaa'
          }}>
            <p style={{ marginBottom: 0 }}>Number of Sites: <strong>4</strong></p>
            <p>Site Area: <strong>825,742.62 ft²</strong></p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CarbonDashboard;
