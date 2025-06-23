import { Card, Form, Input, Button, Checkbox } from 'antd';
import '../styles/form.css';

export default function FormPage() {
  return (
    <Card title="用户表单">
      <Form layout="vertical" autoComplete="off">
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="custom-primary-btn">提交</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
