// src/pages/DashboardPage.js
import { Card, Typography, Row, Col, Statistic, List, Timeline } from 'antd';
import { UserOutlined, LineChartOutlined, DollarOutlined } from '@ant-design/icons';
import { Line,Base } from '@ant-design/plots';
import localData from '../data/mixchart.json';

const { Title, Paragraph } = Typography;

export default function DashboardPage() {
  const chartData = [
    { month: '1月', value: 100 },
    { month: '2月', value: 220 },
    { month: '3月', value: 500 },
    { month: '4月', value: 350 },
  ];

  const config = {
    data: chartData,
    xField: 'month',
    yField: 'value',
    autoFit: true,
    height: 240,
    color: '#385aea'
  };
  const BaseConfig = {
    type: 'spaceLayer',
    data: {
      type: 'inline',
      value: localData,
    },
    children: [
      {
        type: 'interval',
        encode: { x: 'letter', y: 'frequency', color: 'letter' },
        transform: [{ type: 'sortX', reverse: true, by: 'y' }],
        scale: { color: { palette: 'cool', offset: (t) => t * 0.8 + 0.1 } },
      },
      {
        type: 'interval',
        x: 280,
        y: 50,
        width: 250,
        height: 250,
        encode: { y: 'frequency', color: 'letter' },
        transform: [{ type: 'stackY' }],
        scale: { color: { palette: 'cool', offset: (t) => t * 0.8 + 0.1 } },
        coordinate: { type: 'theta' },
        legend: false,
      },
    ],
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <Title level={3} className="dashboard-title" >仪表盘 Dashboard</Title>
      <Paragraph>欢迎来到后台管理系统！以下是一些关键指标概览：</Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic title="用户数" value={1128} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic title="月访问量" value={9328} prefix={<LineChartOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card>
            <Statistic title="总收入" value={189230} prefix={<DollarOutlined />} suffix="元" />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={16}>
          <Card title="月度访问趋势">
            <Line {...config} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="待处理任务">
            <List
              size="small"
              bordered
              dataSource={[
                '审核用户注册',
                '处理退款申请',
                '优化产品页面'
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={16}>
          <Card title="系统动态">
<Base {...BaseConfig} />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="系统动态">
            <Timeline
              items={[
                { children: '系统启动成功 - 10:00' },
                { children: '用户注册 - 10:45' },
                { children: '生成日报 - 12:00' }
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}