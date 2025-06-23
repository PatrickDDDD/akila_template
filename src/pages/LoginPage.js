import { Card, Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGradientButtonStyle } from '../styles/buttonStyles';


export default function LoginPage() {
  const navigate = useNavigate();
  const { styles } = useGradientButtonStyle();

  const handleLogin = (values) => {
    console.log('Login values:', values);
    // Redirect to dashboard after successful login
    navigate('/');
  };

  return (
    <Card title="登录">
      <Form layout="vertical" onFinish={handleLogin}>
        <Form.Item name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
         <Input placeholder="账号/手机号码"  className='ant-input-lg'/>
        </Form.Item>
        <Form.Item  name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="登录密码" className='ant-input-lg'/>
        </Form.Item>
        <Form.Item>
                <Button
        type="primary"
        size="large"
        className={styles.gradientButton}
        htmlType="submit"
         style={{ marginTop: 20 }}
      >
        登录控制台
      </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
