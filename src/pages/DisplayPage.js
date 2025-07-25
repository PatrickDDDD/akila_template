import React, { useState, useEffect } from 'react';
import { Card, Statistic, Row, Col, Typography, Space, Table, Tag, Flex, Progress } from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  ScanOutlined,
  QrcodeOutlined,
  IdcardOutlined,
  HomeOutlined,
  DatabaseOutlined,
  GlobalOutlined,
  InsertRowLeftOutlined,
  InsertRowRightOutlined,
  AlertOutlined,
  ExclamationCircleOutlined,
  AlipayCircleOutlined,
  WechatOutlined,
  AlipayOutlined,
  MoneyCollectOutlined,
  CreditCardOutlined,
  MacCommandOutlined,

} from '@ant-design/icons';
import PieChart from './pieChart'; // 引入复用的 PieChart 组件
import DisplayInOutChart from './DisplayPage/components/DisplayInOutChart';
import DisplayLiquidChart from './DisplayPage/components/DisplayLiquidChart';
import DisplayFunnelChart from './DisplayPage/components/DisplayFunnelChart';
import DisplayGaugeChart from './DisplayPage/components/DisplayGaugeChart';
import DisplayRadarChart from './DisplayPage/components/DisplayRadarChart';
import CountUp from 'react-countup';

// 统一颜色变量
const COLORS = {
  success: '#3f8600',
  danger: '#cf1322',
  primary: '#037CB6',
  secondary: '#66C5EE',
  warning: '#FAA61A',
  orange: '#BF4123',
  yellow: '#DDE455'
};

const formatter = value => <CountUp end={value} separator="," />;
const { Title } = Typography;

// 带竖杠的标题组件
const StyledTitle = ({ level, children }) => (
  <Title
    level={level}
    style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: 16
    }}
  >
    <span style={{
      width: 3,
      height: 18,
      backgroundColor: COLORS.primary,
      marginRight: 8
    }} />
    {children}
  </Title>
);

const DisplayPage = () => {
  const { Column } = Table;

  const columns = [
    {
      title: '排名',
      dataIndex: 'rank',
      width: '20%'
    },
    {
      title: '被访问单位',
      dataIndex: 'company',
      width: '40%'
    },
    {
      title: '次数',
      dataIndex: 'number',
      width: '20%'
    },
    {
      title: '占比',
      dataIndex: 'percentage',
      width: '20%',
      render: (text) => <Tag color={COLORS.primary}>{text}</Tag>
    },
  ];

  const TableData = [
    {
      key: '1',
      rank: '1',
      company: '物联科技公司',
      number: '54',
      percentage: '15%',
    },
    {
      key: '2',
      rank: '2',
      company: '智慧科技公司',
      number: '50',
      percentage: '15%',
    },
    {
      key: '3',
      rank: '3',
      company: '海瑞科技公司',
      number: '42',
      percentage: '15%',
    },
    {
      key: '4',
      rank: '4',
      company: '科技物联公司',
      number: '44',
      percentage: '15%',
    },
  ];

  // 示例数据
  const pieData1 = [
    { type: '参观', value: 16 },
    { type: '会议', value: 37 },
    { type: '培训学习', value: 16 },
    { type: '商务洽谈', value: 26 },
    { type: '其他', value: 5 },
  ];

  const pieData2 = [
    { type: '门禁告警', value: 23 },
    { type: '停车场告警', value: 64 },
    { type: '电梯告警', value: 23 },
    { type: '天台告警', value: 44 },
  ];

  const pieData3 = [
    { type: '大型汽车', value: 19 },
    { type: '小型汽车', value: 44 },
    { type: '新能源车', value: 19 },
    { type: '未识别', value: 19 },
  ];

  // 统一设置卡片最小高度（可根据需求调整数值）
  const cardMinHeight = '320px';

  return (
    <div style={{ padding: '12px' }}>
      <Row gutter={[16, 16]}>
        {/* 客流量统计卡片 */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>客流量统计</StyledTitle>
            <Row gutter={16} direction="column">
              <Col span={24} style={{ marginBottom: 5 }}>
                <Card variant="borderless">
                  <Statistic
                    title="进场总人数(人)"
                    value={1121}
                    valueStyle={{ color: COLORS.success }}
                    prefix={<ArrowUpOutlined />}
                    formatter={formatter}
                  />
                </Card>
              </Col>
              <Col span={24}>
                <Card variant="borderless">
                  <Statistic
                    title="出场总人数(人)"
                    value={800}
                    formatter={formatter}
                    valueStyle={{ color: COLORS.danger }}
                    prefix={<ArrowDownOutlined />}
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* 人员通行方式统计卡片 */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>人员通行方式统计</StyledTitle>
            {/* 第一行两个统计项 */}
            <Flex gap="small" style={{ marginBottom: 16 }}>
              <Flex align="center" gap="small" flex={1}>
                <Progress
                  type="circle"
                  percent={75}
                  size={68}
                  strokeColor={COLORS.primary}
                  format={(percent) => <ScanOutlined />}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>291</span>
                  <span>次</span>
                  <div style={{ fontSize: '14px' }}>人脸开门</div>
                </div>
              </Flex>

              <Flex align="center" gap="small" flex={1}>
                <Progress
                  type="circle"
                  percent={10}
                  size={68}
                  strokeColor={COLORS.secondary}
                  format={(percent) => <IdcardOutlined />}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>205</span>
                  <span>次</span>
                  <div style={{ fontSize: '14px' }}>刷卡开门</div>
                </div>
              </Flex>
            </Flex>

            {/* 第二行两个统计项 */}
            <Flex gap="small">
              <Flex align="center" gap="small" flex={1}>
                <Progress
                  type="circle"
                  percent={22}
                  size={68}
                  strokeColor={COLORS.yellow}
                  format={(percent) => <HomeOutlined />}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>201</span>
                  <span>次</span>
                  <div style={{ fontSize: '14px' }}>远程开门</div>
                </div>
              </Flex>

              <Flex align="center" gap="small" flex={1}>
                <Progress
                  type="circle"
                  percent={44}
                  size={68}
                  strokeColor={COLORS.warning}
                  format={(percent) => <QrcodeOutlined />}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>50</span>
                  <span>次</span>
                  <div style={{ fontSize: '14px' }}>二维码开门</div>
                </div>
              </Flex>
            </Flex>
          </Card>
        </Col>

        {/* 24小时平均人员进出数量分布 */}
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>24小时平均人员进出数量分布</StyledTitle>
            <DisplayInOutChart />
          </Card>
        </Col>

        {/* 访客统计 */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>访客统计</StyledTitle>
            <div style={{ height: 200, width: '100%' }}>
              <DisplayLiquidChart />
            </div>
            <Flex justify="space-around" style={{ marginTop: 0 }}>
              {/* 在访状态 */}
              <Flex direction="column" alignItems="center">
                <div style={{ color: COLORS.primary, fontSize: 16, fontWeight: 'bold' }}>2人</div>
                <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }}>在访</div>
              </Flex>

              {/* 离访状态 */}
              <Flex direction="column" alignItems="center">
                <div style={{ color: COLORS.secondary, fontSize: 16, fontWeight: 'bold' }}>18人</div>
                <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }}>离访</div>
              </Flex>

              {/* 待访状态 */}
              <Flex direction="column" alignItems="center">
                <div style={{ color: COLORS.warning, fontSize: 16, fontWeight: 'bold' }}>52人</div>
                <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }}>待访</div>
              </Flex>

              {/* 已取消状态 */}
              <Flex direction="column" alignItems="center">
                <div style={{ color: COLORS.orange, fontSize: 16, fontWeight: 'bold' }}>2人</div>
                <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }}>已取消</div>
              </Flex>
            </Flex>
          </Card>
        </Col>

        {/* 来访事由统计 */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>来访事由统计</StyledTitle>
            <div style={{ height: 220, width: '100%' }}>
              <PieChart data={pieData1} />
            </div>
          </Card>
        </Col>

        {/* 被访问单位排名统计 */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>被访问单位排名</StyledTitle>
            <div style={{
              height: 220,
              width: '100%',
              overflow: 'auto' // 添加滚动条避免内容溢出
            }}>
              <Table
                columns={columns}
                dataSource={TableData}
                size="small"
                pagination={false} // 隐藏分页
              />
            </div>
          </Card>
        </Col>
        {/* 门禁实时开关状态统计 */}
        <Col xs={24} sm={12} md={12} lg={6}>

          <Card style={{ marginBottom: 5 }}>
            <StyledTitle level={4}>门禁实时开关状态统计</StyledTitle>
            <Row gutter={16} >
              <Col span={6}>
                <Statistic
                  title="总数"
                  value={9}
                  valueStyle={{ color: COLORS.primary }}
                  prefix={<DatabaseOutlined />}
                />
              </Col>
              <Col span={6}>
                <Statistic
                  title="在线"
                  value={5}
                  valueStyle={{ color: COLORS.success }}
                  prefix={<GlobalOutlined />}
                />
              </Col>
              <Col span={6}>
                <Statistic
                  title="故障"
                  value={2}
                  valueStyle={{ color: COLORS.danger }}
                  prefix={<ExclamationCircleOutlined />}
                />
              </Col>
              <Col span={6}>
                <Statistic
                  title="告警"
                  value={2}
                  valueStyle={{ color: COLORS.warning }}
                  prefix={<AlertOutlined />}
                />
              </Col>

            </Row>
          </Card>
          <Card>
            <StyledTitle level={4}>门禁实时状态</StyledTitle>
            <Row gutter={16} >
              <Col span={12} >
                <Statistic
                  title="开门数"
                  value={1}
                  valueStyle={{ color: COLORS.primary }}
                  prefix={<InsertRowLeftOutlined style={{ fontSize: '30px' }} />}



                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="关门数"
                  value={1}
                  valueStyle={{ color: COLORS.success }}
                  prefix={<InsertRowRightOutlined style={{ fontSize: '30px' }} />}
                />
              </Col>


            </Row>
          </Card>

        </Col>


        {/* 能源统计 */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>能源统计</StyledTitle>
            <div style={{ height: 220, width: '100%' }}>
              <DisplayGaugeChart />
            </div>
          </Card>
        </Col>
        {/* 通行告警类型统计 */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>通行告警类型统计</StyledTitle>
            <div style={{ height: 220, width: '100%' }}>
              <PieChart data={pieData2} />
            </div>
          </Card>
        </Col>

        {/* 登记车辆类型统计 */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>登记车辆类型统计</StyledTitle>
            <div style={{ height: 220, width: '100%' }}>
              <PieChart data={pieData3} />
            </div>
          </Card>
        </Col>

        {/* 停车收费方式占比卡片 */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>停车收费方式占比</StyledTitle>
            {/* 第一行两个统计项 */}
            <Flex gap="small" style={{ marginBottom: 16 }}>
              <Flex align="center" gap="small" flex={1}>
                <Statistic
                  value={` `}
                  valueStyle={{ color: COLORS.primary }}
                  prefix={<WechatOutlined />}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>688</span>
                  <span>元</span>
                  <div style={{ fontSize: '14px' }}>微信</div>
                </div>
              </Flex>

              <Flex align="center" gap="small" flex={1}>
                <Statistic
                  value={` `}
                  valueStyle={{ color: COLORS.primary }}
                  prefix={<AlipayOutlined />}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>688</span>
                  <span>元</span>
                  <div style={{ fontSize: '14px' }}>支付宝</div>
                </div>
              </Flex>
              <Flex align="center" gap="small" flex={1}>
                <Statistic
                  value={` `}
                  valueStyle={{ color: COLORS.primary }}
                  prefix={<MoneyCollectOutlined />}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>688</span>
                  <span>元</span>
                  <div style={{ fontSize: '14px' }}>现金</div>
                </div>
              </Flex>
            </Flex>

            {/* 第二行两个统计项 */}
            <Flex gap="small">
              <Flex align="center" gap="small" flex={1}>
                <Statistic
                  value={` `}
                  valueStyle={{ color: COLORS.primary }}
                  prefix={<CreditCardOutlined />}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>688</span>
                  <span>元</span>
                  <div style={{ fontSize: '14px' }}>银联</div>
                </div>
              </Flex>

              <Flex align="center" gap="small" flex={1}>
                <Statistic
                  value={` `}
                  valueStyle={{ color: COLORS.primary }}
                  prefix={<MacCommandOutlined />}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>688</span>
                  <span>元</span>
                  <div style={{ fontSize: '14px' }}>其他</div>
                </div>
              </Flex>
              <Flex gap="small" flex={1}> </Flex>
            </Flex>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>人员分布统计</StyledTitle>
            <div style={{ height: 200, width: '100%' }}>
              <DisplayFunnelChart />
            </div>

          </Card>
        </Col>
        {/* <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <StyledTitle level={4}>访问统计</StyledTitle>
            <div style={{ width: '100%' }}>
              <DisplayRadarChart />
            </div>

          </Card>
        </Col> */}


      </Row>
    </div>
  );
};

export default DisplayPage;