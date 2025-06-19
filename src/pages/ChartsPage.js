import { Card } from 'antd';
import { Bar } from '@ant-design/plots';

export default function ChartsPage() {
  const config = {
    data: [
      { year: '2020', value: 30 },
      { year: '2021', value: 80 },
      { year: '2022', value: 45 },
      { year: '2023', value: 60 },
    ],
    xField: 'year',
    yField: 'value',
    color: '#005796',
    height: 300,
  };

  return (
    <Card title="销售柱状图">
      <Bar {...config} />
    </Card>
  );
}
