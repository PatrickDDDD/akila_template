
import { Card, Col, Row } from 'antd';
import { Bar, Line, Pie, Area } from '@ant-design/plots';

const ChartsPage = () => {
  const barData = [
    { year: '2020', value: 30, color: '#1890FF' },
    { year: '2021', value: 80, color: '#4CAF50' },
    { year: '2022', value: 45, color: '#FFC107' },
    { year: '2023', value: 60, color: '#FF5722' },
  ];

  const barConfig = {
    data: barData,
    xField: 'year',
    yField: 'value',
    colorField: 'year',
    color: ({ year }) => {
      const item = barData.find(d => d.year === year);
      return item ? item.color : '#999';
    },
    height: 240,
    legend: { position: 'top-right' },

  };

  const lineConfig = {
    data: barData,
    xField: 'year',
    yField: 'value',
    height: 240,
    smooth: true,
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  const pieConfig = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: 'text',
        data: [],
        style: {
          text: '油脂分布表',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 40,
          fontStyle: 'bold',
        },
      },
    ],
  };

  const areaConfig = {
    data: barData,
    xField: 'year',
    yField: 'value',
    height: 240,
    smooth: true,
    areaStyle: () => ({
      fill: 'l(270) 0:#ffffff 1:#1890FF',
    }),
  };

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="销售柱状图">
            <Bar {...barConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="销售折线图">
            <Line {...lineConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="销售饼图">
            <Pie {...pieConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="销售面积图">
            <Area {...areaConfig} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ChartsPage;
