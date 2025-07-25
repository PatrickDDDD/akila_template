import { Gauge } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DisplayGaugeChart = () => {
  const config = {
    data: {
      target: 159,
      total: 400,
      name: 'score',
    },
    scale: {
      color: {
        range: ['l(0):0:#D7EDFB 1:#21A8DB', 'l(0):0:#21A8DB 1:#037CB6'],
      },
      y: {
        range: [1, -0.5],
      },
    },
    style: {
      // 配置仪表盘指示文本样式
      textContent: (target, total) => `占比：${(target / total) * 100}%`,
      textFill: '#000',
      textFontSize: 12,
      textfontWeight: 300,
      textX: '35%',
      textY: '75%',
      // 配置仪表盘指针样式
      pointerStroke: '#c5c5c5',
      pointershadowColor: 'none',
      pointershadowBlur: 10,
      pointershadowOffsetX: 5,
      pointershadowOffsetY: 5,
      // 配置仪表盘指针轴心样式
      pinStroke: '#d5d5d5',
      pinFill: '#d5d5d5',
      pinlinewidth: 6,
      pinshadowColor: 'none',
      pinshadowBlur: 30,
      pinshadowOffsetX: 5,
      pinshadowOffsetY: 5,
      // 配置仪表盘圆弧样式
      arcLineWidth: 1,
      arcStroke: '#fff',
      arcshadowColor: 'none',
      arcshadowBlur: 30,
      arcshadowOffsetX: 5,
      arcshadowOffsetY: 5,
    },
  };
  return <Gauge {...config} />;
};

export default DisplayGaugeChart;