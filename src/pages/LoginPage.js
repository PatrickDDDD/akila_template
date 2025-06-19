import { Card, Form, Input, Button } from 'antd';

export default function LoginPage() {
  return (
    <Card title="登录">
      <Form layout="vertical">
        <Form.Item label="邮箱" name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary">登录</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
