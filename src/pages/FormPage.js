import { Card, Form, Input, Button, Checkbox, Row, Col } from 'antd';
import '../styles/form.css';

export default function FormPage() {
  return (
    <div className="form-container">
      <Row gutter={24}>
        {/* 左侧表单区域 */}
        <Col xs={24} sm={24} md={10} lg={8}>
          <Card title="用户表单" className="form-card">
            <Form layout="vertical" autoComplete="off">
              <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password placeholder="请输入密码" />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked" className="form-remember">
                <Checkbox>记住我</Checkbox>
              </Form.Item>
              <Form.Item className="form-button">
                <Button type="primary" htmlType="submit" className="custom-primary-btn">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        
        {/* 右侧iframe区域 */}
        <Col xs={24} sm={24} md={14} lg={16}>
          <div className="iframe-container">
            <iframe
              src="http://127.0.0.1/chatbot/aozOdYxHj4DByQAp"
              style={{ 
                width: '100%', 
                height: '100%',
                minHeight: '500px',
                border: 'none', 
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              frameBorder="0"
              allow="microphone"
              title="聊天机器人"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
}