import { Area,G2 } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

function customPalette() {
  return ['#037CB6', '#66C5EE', '#DDE455', '#FAA61A', '#BF4123'];
}

G2.register('palette.custom', customPalette);

const DisplayInOutChart = () => {
  // 原始数据保持不变
  const data = [
    { time: '00:00', entry: 50, exit: 0 },
  
    { time: '02:00', entry: 70, exit: 40},

    { time: '04:00', entry: 90, exit: 0 },

    { time: '06:00', entry: 70, exit: 50 },

    { time: '08:00', entry: 50, exit: 60 },

    { time: '10:00', entry: 70, exit: 0 },

    { time: '12:00', entry: 90, exit: 30},

    { time: '14:00', entry: 90, exit: 29 },

    { time: '16:00', entry: 70, exit: 0 },
 
    { time: '18:00', entry: 50, exit: 100 },
  
    { time: '20:00', entry: 30, exit: 44 },
  
    { time: '22:00', entry: 10, exit: 41 },

  ];

  // 格式化数据为符合要求的结构
  const formattedData = [
    ...data.map(item => ({
      time: item.time,
      type: 'entry',
      name: '进场',
      value: item.entry,
      group: '进门' // 用于colorField分组
    })),
    ...data.map(item => ({
      time: item.time,
      type: 'exit',
      name: '出场',
      value: item.exit,
      group: '出门' // 用于colorField分组
    }))
  ];

  const config = {
        scale: {
      color: {
        palette: "custom"
      }
    },
    data: formattedData, // 使用本地格式化数据而非远程数据
    xField: 'time', // 时间字段
    yField: 'value', // 数值字段
    seriesField: 'type', // 系列区分字段
    colorField: 'group', // 颜色分组字段（借鉴当前代码）
    shape: 'smooth', // 平滑曲线（对应原shapeField）
    smooth: true, // 开启平滑效果
    
    // 堆叠配置（借鉴当前代码）
    stack: {
      orderBy: 'maxIndex',
      reverse: true,
    },
    
    // 区域样式
    areaStyle: ({ type }) => ({
      fill: type === 'entry' ? '#52c41a' : '#1890ff',
      opacity: 0.6,
    }),
    
 
    
    // 坐标轴配置（借鉴当前代码）
    axis: {
      y: { 
        labelFormatter: (value) => `${value} 人`, // 显示单位
        title: { text: '人数' }
      },
      x: {
        label: {
          rotate: 45,
          autoRotate: false
        }
      }
    },
    
    //  tooltip配置
    tooltip: { 
      channel: 'y', // 借鉴当前代码的channel配置
      valueFormatter: (value) => `${value} 人`, // 保留两位小数
      shared: true,
      showMarkers: false
    },
    
    // 图例配置
    legend: {
      position: 'top-right',
      itemName: {
        formatter: (name) => name === 'entry' ? '进场' : '出场'
      }
    },
    
    height: 213,
    interactions: [
      { type: 'tooltip' },
      { type: 'legend-filter' }
    ],
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000
      }
    }
  };

  return <Area {...config} />;
};


export default DisplayInOutChart;