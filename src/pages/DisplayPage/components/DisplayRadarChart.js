import { Radar } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const data = [
  { item: '游客', type: 'a', score: 70 },
  { item: '游客', type: 'b', score: 30 },
  { item: '员工', type: 'a', score: 60 },
  { item: '员工', type: 'b', score: 70 },
  { item: '巡检', type: 'a', score: 50 },
  { item: '巡检', type: 'b', score: 60 },
  { item: '商务', type: 'a', score: 40 },
  { item: '商务', type: 'b', score: 50 },

];

const DisplayRadarChart = () => {
  const config = {
    data,
    xField: 'item',
    yField: 'score',
    colorField: 'type',
    shapeField: 'smooth',
    area: {
      style: {
        fillOpacity: 0.5,
      },
    },
    scale: { x: { padding: 0.2, align: 0 }, y: { tickCount: 4, domainMax: 86 } },
    axis: { x: { grid: true }, y: { zIndex: 1, title: false } },
    style: {
      lineWidth: 2,
    },
  };
  return <Radar {...config} />;
};

export default DisplayRadarChart;