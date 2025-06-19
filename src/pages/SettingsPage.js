import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function SettingsPage() {
  return (
    <Card>
      <Title level={4}>系统设置</Title>
      <Paragraph>这里是系统配置与偏好设置页面。你可以管理语言、主题、通知等选项。</Paragraph>
    </Card>
  );
}
