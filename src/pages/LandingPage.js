import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGradientButtonStyle } from '../styles/buttonStyles';
import logo from '../img/logo2.png';

const { Title, Paragraph } = Typography;

export default function LandingPage() {
  const navigate = useNavigate();
  const { styles } = useGradientButtonStyle();

  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <img src={logo} alt="Logo" style={{ width: 250, marginBottom: 40 }} />
      <Title level={2}>欢迎来到 数字化建设设计研究中心</Title>
      <Paragraph>我们提供全产业链全生命周期数智化服务</Paragraph>
      <Button
        type="primary"
        size="large"
        className={styles.gradientButton}
        onClick={() => navigate('/')}
      >
        进入控制台
      </Button>
    </div>
  );
}