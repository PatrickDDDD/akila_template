import { Liquid } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DisplayLiquidChart = () => {
  const config = {
    percent: 0.62,
    height:200,
    style: {
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
      waveCount:2,
      contentFill:`#FFFFFF`,
      fill:`#DDE455`,
      stroke:`#DDE455`
      
    },
  };
  return <Liquid {...config} />;
};

export default DisplayLiquidChart;