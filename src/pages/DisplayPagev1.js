import React, { useState, useEffect } from 'react';
import { Card, Statistic, Row, Col, Typography, Space, Table, Tag, Flex, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined,ScanOutlined,QrcodeOutlined,IdcardOutlined,HomeOutlined } from '@ant-design/icons';
import PieChart from './pieChart'; // 引入复用的 PieChart 组件
import DisplayInOutChart from './DisplayPage/components/DisplayInOutChart';
import DisplayLiquidChart from './DisplayPage/components/DisplayLiquidChart';
import CountUp from 'react-countup';
const formatter = value => <CountUp end={value} separator="," />;


const { Title } = Typography;

const DisplayPage = () => {

  const { Column, ColumnGroup } = Table;
  
  const columns = [
  {
    title: '排名',
    dataIndex: 'rank',
  },
  {
    title: '被访问单位',
    dataIndex: 'company',
  },
  {
    title: '次数',
    dataIndex: 'number',
  },
    {
    title: '占比',
    dataIndex: 'percentage',
  },
];
  const TableData = [
    {
      key: '1',
      rank: '1',
      company: '物联科技有限公司',
      number: '44',
      percentage: '15%',
    },
    {
      key: '2',
      rank: '2',
      company: '物联科技有限公司',
      number: '44',
      percentage: '15%',
    },
    {
      key: '3',
      rank: '3',
      company: '物联科技有限公司',
      number: '44',
      percentage: '15%',
    },
    {
      key: '4',
      rank: '4',
      company: '物联科技有限公司',
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
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <Title level={4}>客流量统计</Title>
   <Row gutter={16} direction="column">
    <Col span={24} style={{ marginBottom: 5 }}>
      <Card variant="borderless">
        <Statistic
          title="进场总人数(人)"
          value={1121}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          formatter={formatter} 
          // suffix="%"
        />
      </Card>
    </Col>
    <Col span={24}>
      <Card variant="borderless">
        <Statistic
          title="出场总人数(人)"
          value={800}
          formatter={formatter} 
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />} 
          // suffix="%"
        />
      </Card>
    </Col>
  </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <Title level={4}>人员通行方式统计</Title>
            {/* 第一行两个统计项 */}
            <Flex gap="small" style={{ marginBottom: 16 }}>
              <Flex align="center" gap="small" flex={1}>
                <Progress 
                  type="circle" 
                  percent={75} 
                  size={68} 
                  strokeColor={`#037CB6`} 
                  format={(percent) => <ScanOutlined />} 
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>291</span><span>次</span>
                  <div style={{ fontSize: '14px' }}>人脸开门</div>
                </div>
              </Flex>
              
              <Flex align="center" gap="small" flex={1}>
                <Progress 
                  type="circle" 
                  percent={10} 
                  size={68} 
                  strokeColor={`#66C5EE`} 
                  format={(percent)=><IdcardOutlined/>}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>205</span><span>次</span>
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
                  strokeColor={`#DDE455`} 
                  format={(percent)=><HomeOutlined/>}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>201</span><span>次</span>
                  <div style={{ fontSize: '14px' }}>远程开门</div>
                </div>
              </Flex>
              
              <Flex align="center" gap="small" flex={1}>
                <Progress 
                  type="circle" 
                  percent={44} 
                  size={68} 
                  strokeColor={`#FAA61A`} 
                  format={(percent)=><QrcodeOutlined/>}
                />
                <div>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>50</span> <span>次</span>
                  <div style={{ fontSize: '14px' }}>二维码开门</div>
                </div>
              </Flex>
            </Flex>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card style={{ minHeight: cardMinHeight }}>
            <Title level={4}>24小时平均人员进出数量分布</Title>
            <DisplayInOutChart />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <Title level={4}>访客统计</Title>
            <div style={{ height: 200, width: '100%' }}>
              <DisplayLiquidChart/>
            </div>
     <Flex justify="space-around" style={{ marginTop: 0 }}>
          {/* 在访状态 */}
          <Flex direction="column" alignItems="center">
            <div style={{ color: ' #037CB6', fontSize: 16, fontWeight: 'bold' }}>2人</div>
            <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }}>在访</div>
          </Flex>
          
          {/* 离访状态 */}
          <Flex direction="column" alignItems="center">
            <div style={{ color: '#66C5EE', fontSize: 16, fontWeight: 'bold' }}>18人</div>
            <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }}>离访</div>
          </Flex>
          
          {/* 待访状态 */}
          <Flex direction="column" alignItems="center">
            <div style={{ color: '#FAA61A', fontSize: 16, fontWeight: 'bold' }}>52人</div>
            <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }}>待访</div>
          </Flex>
          
          {/* 已取消状态 */}
          <Flex direction="column" alignItems="center">
            <div style={{ color: '#BF4123', fontSize: 16, fontWeight: 'bold' }}>2人</div>
            <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }}>已取消</div>
          </Flex>
        </Flex>
 
          </Card>
        </Col>



        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <Title level={4}>来访事由统计</Title>
            <div style={{ height: 220, width: '100%' }}>
              <PieChart data={pieData1} />
            </div>
          </Card>
        </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <Title level={4}>登记车辆类型统计</Title>
            <div style={{ height: 220, width: '100%' }}>
              {/* <Table dataSource={TableData}>
                <Column title="排名" dataIndex="rank" key="rank" />
                <Column title="被访问单位" dataIndex="company" key="company" />
                <Column title="次数" dataIndex="number" key="number" />
                <Column title="占比" dataIndex="percentage" key="percentage" />
              </Table> */}
                <Table columns={columns} dataSource={TableData} size="small" />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <Title level={4}>通行告警类型统计</Title>
            <div style={{ height: 220, width: '100%' }}>
              <PieChart data={pieData2} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ minHeight: cardMinHeight }}>
            <Title level={4}>登记车辆类型统计</Title>
            <div style={{ height: 220, width: '100%' }}>
              <PieChart data={pieData3} />
            </div>
          </Card>
        </Col>

      </Row>
    </div>
  );
};

export default DisplayPage;