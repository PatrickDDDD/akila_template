import {
  Button,
  Typography,
  Card,
  Space,
  Input,
  InputNumber,
  Select,
  Alert,
  message,
  Modal,
  Tag,
  Badge,
  Avatar,
  Spin,
  Progress,
  Skeleton,
  Switch,
  Radio,
  Checkbox,
  Slider
} from 'antd';
import { useState } from 'react';
import { useGradientButtonStyle } from '../styles/buttonStyles';

const { Title } = Typography;
const { Option } = Select;

export default function ComponentsPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const { styles } = useGradientButtonStyle(); // 使用样式

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>

      <Card title="按钮 Button">
        <Space wrap>
          {/* ✅ 自定义渐变按钮 */}
          <Button className={styles.gradientButton} color="default" variant="solid" size="large">
            申请演示
          </Button>
          <Button type="primary">Primary</Button>

          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <Button type="link">Link</Button>

        </Space>
      </Card>

      <Card title="输入组件 Input">
        <Space wrap>
          <Input placeholder="输入框" style={{ width: 200 }} />
          <Input.Password placeholder="密码框" style={{ width: 200 }} />
          <InputNumber min={0} max={100} defaultValue={10} />
          <Select defaultValue="option1" style={{ width: 120 }}>
            <Option value="option1">选项一</Option>
            <Option value="option2">选项二</Option>
          </Select>
        </Space>
      </Card>

      <Card title="消息反馈组件 Alert / Message / Modal">
        <Space wrap>
          <Alert message="成功提示" type="success" showIcon />
          <Button onClick={() => message.success('操作成功！')}>弹出消息</Button>
          <Button onClick={() => setModalVisible(true)}>打开模态框</Button>
          <Modal
            title="信息提示"
            open={modalVisible}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            这里是模态框内容。
          </Modal>
        </Space>
      </Card>

      <Card title="数据展示组件 Tag / Badge / Avatar">
        <Space wrap>
          <Tag color="blue">标签一</Tag>
          <Tag color="green">标签二</Tag>
          <Badge count={5}><Avatar shape="square" size="large">U</Avatar></Badge>
        </Space>
      </Card>

      <Card title="加载与进度组件 Spin / Progress / Skeleton">
        <Space wrap>
          <Spin tip="加载中..." />
          <Progress percent={70} />
          <Skeleton active paragraph={{ rows: 2 }} />
        </Space>
      </Card>

      <Card title="选择器组件 Switch / Radio / Checkbox / Slider">
        <Space direction="vertical">
          <Switch defaultChecked />
          <Radio.Group defaultValue="a">
            <Radio.Button value="a">选项 A</Radio.Button>
            <Radio.Button value="b">选项 B</Radio.Button>
          </Radio.Group>
          <Checkbox>选中我</Checkbox>
          <Slider defaultValue={30} style={{ width: 200 }} />
        </Space>
      </Card>

    </Space>
  );
}
