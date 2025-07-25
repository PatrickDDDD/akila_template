import { Funnel } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DisplayFunnelChart = () => {
   const data = [
 
    { action: 'A园区', pv: 100 },
    { action: 'B园区', pv: 50 },
    { action: 'C园区', pv: 45 },
    { action: '公共区域', pv: 37 },
  ];

  const config = {
    data,
    xField: 'action',
    yField: 'pv',
    shapeField: 'pyramid',
    label: [
      {
        text: (d) => d.pv,
        position: 'inside',
        fontSize: 16,
      },
      {
        render: ($, _, i) => {
          if (i)
            return (
              <div
                style={{
                  height: 1,
                  width: 30,
                  background: '#aaa',
                  margin: '0 20',
                }}
              ></div>
            );
        },
        position: 'top-right',
      },
      {
        text: (d, i, data) => {
          if (i) return ((d.pv / data[i - 1].pv) * 100).toFixed(2) + '%';
        },
        position: 'top-right',
        textAlign: 'left',
        textBaseline: 'middle',
        dx: 40,
      },
    ],
  };

  return <Funnel {...config} />;
};

export default DisplayFunnelChart;

