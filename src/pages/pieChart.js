import React from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = ({ data }) => {
  const config = {
    data,
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
      position: 'right',
      rowPadding: 5,
    },
},
  };

  return <Pie {...config} />;
};

export default PieChart;
