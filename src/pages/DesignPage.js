import React, { useState } from 'react';
import { useGradientButtonStyle } from '../styles/buttonStyles';
import {
  Button,
  Card,
  Skeleton,
  Slider,
  Typography,
  Space,
  Input,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  Rate,
  Tag,
  Progress,
  Pagination,
  Badge,
  Alert,
  message,
  Modal,
  Radio,
  Checkbox,
  Spin,
  Menu,
  Tabs,

} from 'antd';


const { Title, Paragraph } = Typography;
const { Option } = Select;


export default function DesignPage() {
   const { styles } = useGradientButtonStyle(); // 使用样式
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} className="title">Design System / 设计系统</Title>

      {/* Colors Section / 颜色 */}
      <Card title="Colors / 颜色" style={{ marginBottom: 24 }}>
        <Space wrap>
          <div className="color-box primary-color">Primary / 主要颜色 #037CB6</div>
          <div className="color-box secondary-color">Secondary / 次要颜色 #66C5EE</div>
          <div className="color-box success-color">Success / 成功 #DDE455</div>
          <div className="color-box warning-color">Warning / 警告 #FAA61A</div>
          <div className="color-box danger-color">Danger / 危险 #BF4123</div>
          <div className="color-box info-color">Info / 信息 #909399</div>
          <div className="color-box primary-text-color">Primary Text / 主要文字 #303133</div>
          <div className="color-box regular-text-color">Regular Text / 正常文字 #606266</div>
          <div className="color-box placeholder-color">Placeholder / 占位符 #C0C4CC</div>
          <div className="color-box border-base-color">Border Base / 边框基础 #DCDFE6</div>
        </Space>
        <Paragraph>
          颜色包括了主题颜色、文字颜色、边框颜色以及占位符等常用颜色。每种颜色都可以通过修改 HEX 值进行调整。
        </Paragraph>
      </Card>

      {/* Typography Section / 字体 */}
      <Card title="Typography / 字体" style={{ marginBottom: 24 }}>
         <Paragraph>
          [此展示页面的字体为"ClarityCity",具体字体根据实际客户要求。(宋体、黑体、楷体等常见的系统自带字体，通常被视为公共领域的资源，其版权已进入公有领域，可免费用于商业用途，其他大部分字体商用都需要付费)]
        </Paragraph>

        <Title>Heading 1 / 标题1</Title>
        <Paragraph>字体大小：38px</Paragraph>
        <Title level={2} className="heading">Heading 2 / 标题2</Title>
        <Paragraph>字体大小：30px</Paragraph>
        <Title level={3} className="heading">Heading 3 / 标题3</Title>
        <Paragraph>字体大小：24px</Paragraph>
        <Title level={4} className="heading">Heading 4 / 标题4</Title>
        <Paragraph>字体大小：20px</Paragraph>
        <Title level={5} className="heading">Heading 5 / 标题4</Title>
        <Paragraph>字体大小：16px</Paragraph>
        <Paragraph>段落文字 字体大小：14px</Paragraph>


      </Card>

      {/* Spacing Section / 间距 */}
<Card title="Spacing / 间距" style={{ marginBottom: 24 }}>
  <Paragraph>
    间距遵循统一的设计系统，提供了一系列常用的间距值（例如：`8px`, `16px`, `24px`, `32px` 等），确保界面布局的统一和一致性。以下是常见的间距配置：
  </Paragraph>
  <Title level={3}>常用间距示例</Title>
  <Space direction="vertical" size={16}>
    <div style={{ background: '#f0f2f5', padding: 16 }}>组件或元素 1 / Element 1</div>
    <div style={{ background: '#f0f2f5', padding: 16 }}>组件或元素 2 / Element 2</div>
    <div style={{ background: '#f0f2f5', padding: 16 }}>组件或元素 3 / Element 3</div>
  </Space>
  <Paragraph>
    上述示例展示了在元素间设置 `16px` 的垂直间距。你可以通过设置 `size` 属性来调整间距，支持常见的大小：`8px`，`16px`，`24px`，`32px` 等。确保在不同组件间的间距一致，提升界面整洁度和可读性。
  </Paragraph>

  <Title level={3}>容器内间距示例</Title>
  <div style={{ background: '#f0f2f5', padding: '24px' }}>
    <Paragraph style={{ marginBottom: 0 }}>这是一个具有 `24px` 内边距的容器。</Paragraph>
  </div>
  <Paragraph>
    使用统一的内边距（如 `24px`）可以确保容器内的内容与边界保持适当的距离，提升用户体验。
  </Paragraph>
</Card>

      {/* Button Section / 按钮 */}
      <Card title="Buttons / 按钮" style={{ marginBottom: 24 }}>
        <Space wrap>
          <Button className={styles.gradientButton} color="default" variant="solid" size="large">
            Akila按钮
          </Button>
          <Button type="primary" size="large" >Primary Button / 主按钮</Button>
          <Button type="default" size="middle">Default Button / 默认按钮</Button>
          <Button type="dashed" size="small">Dashed Button / 虚线按钮</Button>
          <Button type="link" size="mini">Link Button / 链接按钮</Button>
          <Button type="primary" shape="round" size="middle">Round Button / 圆形按钮</Button>
        </Space>
        <Paragraph>
          Button 组件包括多种类型：Primary, Default, Dashed, Link, Round。按钮的尺寸包括：Large, Middle, Small, Mini。
        </Paragraph>
      </Card>

      {/* Radio Section / 单选框 */}
      <Card title="Radio / 单选框" style={{ marginBottom: 24 }}>
        <Radio.Group defaultValue="a">
          <Radio.Button value="a">Option A / 选项 A</Radio.Button>
          <Radio.Button value="b">Option B / 选项 B</Radio.Button>
        </Radio.Group>
        <Paragraph>
          Radio 组件允许用户从多个选项中选择一个，使用 `Radio.Group` 来包装选项。
        </Paragraph>
      </Card>

      {/* Input Section / 输入框 */}


      <Card title="输入组件 Input" style={{ marginBottom: 24 }}>
        <Space wrap>
          <Input placeholder="输入框" style={{ width: 200 }} />
          <Input.Password placeholder="密码框" style={{ width: 200 }} />
          <InputNumber min={0} max={100} defaultValue={10} />
          <Select defaultValue="option1" style={{ width: 120 }}>
            <Option value="option1">选项一</Option>
            <Option value="option2">选项二</Option>
          </Select>
        </Space>
          <Paragraph>Input 组件包括基础输入框、数字输入框、选择器等。</Paragraph>
      </Card>

      {/* Switch Section / 开关 */}
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
           <Paragraph>
          Switch 组件用于切换开关状态，`defaultChecked` 设置默认状态。可以用来表示启用/禁用。
        </Paragraph>
      </Card>

            <Card title="加载与进度组件 Spin / Progress / Skeleton">
        <Space wrap>
          <Spin tip="加载中..." />
          <Progress percent={70} />
          <Skeleton active paragraph={{ rows: 2 }} />
        </Space>
      </Card>

      {/* DatePicker Section / 日期选择器 */}
      <Card title="DatePicker / 日期选择器" style={{ marginBottom: 24 }}>
        <DatePicker />
        <Paragraph>用于选择日期。</Paragraph>
      </Card>

      {/* Rate Section / 评分 */}
      <Card title="Rate / 评分" style={{ marginBottom: 24 }}>
        <Rate />
        <Paragraph>用于给定的内容进行评分。</Paragraph>
      </Card>

      {/* Tag Section / 标签 */}
      <Card title="Tag / 标签" style={{ marginBottom: 24 }}>
        <Tag color="blue">Tag 1 / 标签 1</Tag>
        <Tag color="green">Tag 2 / 标签 2</Tag>
        <Paragraph>Tag 组件用于标记内容，`color` 属性可以设置标签的颜色。</Paragraph>
      </Card>

      {/* Progress Section / 进度条 */}
      <Card title="Progress / 进度条" style={{ marginBottom: 24 }}>
        <Progress percent={50} />
        <Paragraph>进度条组件用于显示进度，`percent` 控制进度。</Paragraph>
      </Card>

      {/* Pagination Section / 分页 */}
      <Card title="Pagination / 分页" style={{ marginBottom: 24 }}>
        <Pagination defaultCurrent={1} total={50} />
        <Paragraph>分页组件用于分割内容，`current` 和 `total` 控制当前页和总页数。</Paragraph>
      </Card>

      {/* Badge Section / 徽章 */}
      <Card title="Badge / 徽章" style={{ marginBottom: 24 }}>
        <Badge count={5}>
          <Button>Button with Badge / 带徽章的按钮</Button>
        </Badge>
        <Paragraph>Badge 组件可用于为其他组件添加徽章，`count` 属性控制徽章的数量。</Paragraph>
      </Card>

      {/* Alert Section / 提示 */}
      <Card title="Alert / 提示" style={{ marginBottom: 24 }}>
       <Alert message="成功消息" type="success" showIcon />
    <br />
    <Alert message="信息性说明" type="info" showIcon />
    <br />
    <Alert message="警告消息" type="warning" showIcon closable />
    <br />
    <Alert message="错误消息" type="error" showIcon />
    <br />
    <Alert
      message="成功消息"
      description="关于成功文案创作的详细说明与建议"
      type="success"
      showIcon
    />
    <br />
    <Alert
      message="信息性说明"
      description="关于文案创作的补充说明及相关信息"
      type="info"
      showIcon
    />
    <br />
    <Alert
      message="警告消息"
      description="这是一份关于文案创作的警告通知"
      type="warning"
      showIcon
      closable
    />
    <br />
    <Alert
      message="错误消息"
      description="这是一条关于文案创作的错误提示"
      type="error"
      showIcon
    />
        <Paragraph>Alert 组件用于显示提示信息，`type` 属性控制消息类型。</Paragraph>
      </Card>

      {/* Message Section / 消息 */}
      <Card title="Message / 消息" style={{ marginBottom: 24 }}>
        <Button onClick={() => message.success('This is a success message / 这是一个成功消息')}>
          Show Success Message / 显示成功消息
        </Button>
        <Paragraph>Message 组件用于显示全局消息，`message.success` 用于成功消息。</Paragraph>
      </Card>

      {/* Modal Section / 模态框 */}
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
          <Paragraph>Modal 组件用于展示模态框，`visible` 控制是否显示。</Paragraph>
      </Card>
      {/* Menu Section / 菜单 */}
      <Card title="Menu / 菜单" style={{ marginBottom: 24 }}>
        <Menu mode="horizontal">
          <Menu.Item>Item 1 / 项目 1</Menu.Item>
          <Menu.Item>Item 2 / 项目 2</Menu.Item>
          <Menu.Item>Item 3 / 项目 3</Menu.Item>
        </Menu>
        <Paragraph>Menu 组件用于展示菜单项，`mode` 设置菜单模式。</Paragraph>
      </Card>

      {/* Tabs Section / 标签页 */}
      <Card title="Tabs / 标签页" style={{ marginBottom: 24 }}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Tab 1 / 标签 1" key="1">
            Content of Tab 1 / 标签 1 的内容
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2 / 标签 2" key="2">
            Content of Tab 2 / 标签 2 的内容
          </Tabs.TabPane>
        </Tabs>
        <Paragraph>Tabs 组件用于展示标签页，`defaultActiveKey` 控制默认激活的标签。</Paragraph>
      </Card>
    </div>
  );
}
