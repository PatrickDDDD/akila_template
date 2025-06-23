// import { Card } from 'antd';
// import { Bar } from '@ant-design/plots';

// export default function ChartsPage() {
//   const config = {
//     data: [
//       { year: '2020', value: 30 },
//       { year: '2021', value: 80 },
//       { year: '2022', value: 45 },
//       { year: '2023', value: 60 },
//     ],
//     xField: 'year',
//     yField: 'value',
//     color: ['#1890FF', '#4CAF50', '#FFC107', '#FF5722'], 
//     height: 300
//   };

//   return (
//     <Card title="销售柱状图">
//       <Bar {...config} />
//     </Card>
//   );
// }

import { Card } from 'antd';
import { Bar } from '@ant-design/plots';

export default function ChartsPage() {
  // 修改数据结构，添加颜色字段
  const data = [
    { year: '2020', value: 30, color: '#1890FF' },
    { year: '2021', value: 80, color: '#4CAF50' },
    { year: '2022', value: 45, color: '#FFC107' },
    { year: '2023', value: 60, color: '#FF5722' },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    // seriesField: 'year', // 关键：按年份分组
    colorField: 'year',  // 关键：指定颜色映射字段
    
    // 使用回调函数设置颜色
    color: ({ year }) => {
      const item = data.find(d => d.year === year);
      return item ? item.color : '#999';
    },
    
    height: 240,
    legend: {
      position: 'top-right',
    },
  };

  return (
    <Card title="销售柱状图">
      <Bar {...config} />
    </Card>
  );

  
}
