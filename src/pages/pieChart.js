import React from 'react';
import { Pie,G2 } from '@ant-design/plots';
function customPalette() {
  return ['#037CB6', '#66C5EE', '#DDE455', '#FAA61A', '#BF4123'];
}

G2.register('palette.custom', customPalette);

const PieChart = ({ data }) => {
  const config = {
            scale: {
      color: {
        palette: "custom"
      }
    },
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
