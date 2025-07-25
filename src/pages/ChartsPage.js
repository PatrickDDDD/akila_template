
import { Card, Col, Row } from 'antd';
import { Bar, Line, Pie, Area, Histogram, Venn,Rose} from '@ant-design/plots';

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
          text: '',
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

  const DemoLineConfig = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
    },
    xField: (d) => new Date(d.year),
    yField: 'value',
    sizeField: 'value',
    shapeField: 'trail',
    legend: { size: false },
    colorField: 'category',
  };

  const HistogramConfig = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/athletes.json',
    },
    binField: 'weight',
    channel: 'count',
    colorField: 'sex',
    stack: {
      orderBy: 'series',
    },
    style: {
      inset: 0.5,
    },
  };

  const VennConfig = {
        data: [
      { sets: ['冷链'], size: 12, label: '冷链' },
      { sets: ['物流'], size: 12, label: '物流' },
      { sets: ['仓储'], size: 12, label: '仓储' },
      { sets: ['冷链', '物流'], size: 2, label: '冷链&物流' },
      { sets: ['冷链', '仓储'], size: 2, label: '冷链&仓储' },
      { sets: ['物流', '仓储'], size: 2, label: '物流&仓储' },
      { sets: ['冷链', '物流', '仓储'], size: 1 },
    ],
    setsField: 'sets',
    sizeField: 'size',
    style: { fillOpacity: 0.85 },
    label: {
      position: 'inside',
      text: (d) => d.label || '',
    },
    tooltip: {
      title: false,
      items: [
        (d) => {
          return { name: d.key, value: d.size };
        },
      ],
    },
    state: {
      active: {
        fillOpacity: 0.8,
        stroke: 'red',
        lineWidth: 1,
      },
      inactive: {
        fillOpacity: 0.2,
        lineWidth: 0,
      },
    },
    interaction: {
      elementHighlight: true,
    },
  };

   const RoseConfig = {
    width: 720,
    height: 720,
    autoFit: false,
    radius: 0.85,
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json',
    },
    xField: 'year',
    yField: 'people',
    colorField: 'year',
    transform: [{ type: 'groupX', y: 'sum' }],
    scale: { y: { type: 'sqrt' }, x: { padding: 0 } },
    axis: false,
    legend: { color: { length: 400, layout: { justifyContent: 'center' } } },
    labels: [
      {
        text: 'people',
        position: 'outside',
        formatter: '~s',
        transform: [{ type: 'overlapDodgeY' }],
      },
    ],
    tooltip: { items: [{ channel: 'y', valueFormatter: '~s' }] },
  }; 
 
  

  

return (
<div style={{ padding: 24 }}>
  <Row gutter={[16, 16]}>
    
    <Col xs={24} sm={24} md={12} lg={8}>
      <Card title="销售柱状图">
        <Bar {...barConfig} />
      </Card>
    </Col>
    <Col xs={24} sm={24} md={12} lg={8}>
      <Card title="销售折线图">
        <Line {...lineConfig} />
      </Card>
    </Col>

    <Col xs={24} sm={24} md={12} lg={8}>
      <Card title="销售面积图">
        <Area {...areaConfig} />
      </Card>
    </Col>

      <Col xs={24} sm={24} md={12} lg={8}>
      <Card title="销售饼图">
        <Pie {...pieConfig} />
      </Card>
    </Col>

      <Col xs={24} sm={24} md={12} lg={8}>
      <Card title="变宽折线图">
        <Line {...DemoLineConfig} />
      </Card>
    </Col>
    <Col xs={24} sm={24} md={12} lg={8}>
      <Card title="直方图">
        <Histogram {...HistogramConfig} />
      </Card>
    </Col>

    <Col xs={24} sm={24} md={12} lg={8}>
      <Card title="韦恩图">
       <Venn {...VennConfig} />
      </Card>
    </Col>

    <Col xs={24} sm={24} md={12} lg={12}>
      <Card title="玫瑰图">
       <Rose {...RoseConfig} />
      </Card>
    </Col>
  </Row>
</div>
  );
};

export default ChartsPage;
