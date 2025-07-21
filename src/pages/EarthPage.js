import { Card } from 'antd';
import '../styles/earth.css';
import { Line } from '@ant-design/plots';
import earthImage from '../img/earth.jpg';

export default function EarthPage() {
  const data = [
    { year: '2020', value: 30 },
    { year: '2021', value: 80 },
    { year: '2022', value: 45 },
    { year: '2023', value: 60 },
  ];


  const config = {
    data,
    xField: 'year',
    yField: 'value',
    height: 200,
    autoFit: true,
    color: '#58a6ff',
  };

  

  return (
    <div style={{
      position: 'relative',
      height: '100%',
      backgroundImage: `url(${earthImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
    }} className="earth-container">
      <div style={{
        position: 'fixed',
        left: 260,
        top: 100,
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}>
        <Card style={{ background: '#000', color: '#fff' }} bodyStyle={{ background: '#000' }}>
          <Line {...config} />
        </Card>
        <Card style={{ background: '#000', color: '#fff' }} bodyStyle={{ background: '#000' }}>
          <Line {...config} />
        </Card>

        
      </div>
    </div>
  );
}