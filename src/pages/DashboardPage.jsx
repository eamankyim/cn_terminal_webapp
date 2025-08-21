import React, { useState } from 'react';
import { 
  Card, 
  Row, 
  Col, 
  Statistic, 
  Button, 
  Table, 
  Tag, 
  Space, 
  Typography,
  Timeline,
  Avatar,
  Progress,
  Badge
} from 'antd';
import { 
  FileAddOutlined, 
  UserOutlined, 
  DollarOutlined, 
  ClockCircleOutlined,
  CheckCircleOutlined,
  CarOutlined,
  ContainerOutlined,
  CalculatorOutlined,
  CreditCardOutlined,
  PlusOutlined,
  EyeOutlined,
  GlobalOutlined,
  CheckCircleFilled,
  ClockCircleFilled,
  ExclamationCircleFilled,
  SyncOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const DashboardPage = () => {
  const navigate = useNavigate();

  // Mock data for clearing agent statistics
  const stats = [
    {
      title: 'Total Enquiries',
      value: 156,
      prefix: <FileAddOutlined />,
      color: '#1890ff',
      suffix: ''
    },
    {
      title: 'Active Shipments',
      value: 89,
      prefix: <ContainerOutlined />,
      color: '#faad14',
      suffix: ''
    },
    {
      title: 'Total Clients',
      value: 234,
      prefix: <UserOutlined />,
      color: '#52c41a',
      suffix: ''
    },
    {
      title: 'Revenue This Month',
      value: 124500,
      prefix: <DollarOutlined />,
      suffix: 'GHS'
    }
  ];

  // Mock data for recent shipments with clearing agent statuses
  const recentShipments = [
    {
      key: '1',
      trackingId: 'CN001',
      client: 'John Smith',
      goods: 'Electronics',
      status: 'Under Review',
      eta: '2024-01-25',
      port: 'Tema Port'
    },
    {
      key: '2',
      trackingId: 'CN002',
      client: 'Sarah Johnson',
      goods: 'Textiles',
      status: 'Quoted',
      eta: '2024-01-28',
      port: 'Kotoka Airport'
    },
    {
      key: '3',
      trackingId: 'CN003',
      client: 'Mike Wilson',
      goods: 'Machinery',
      status: 'Awaiting Payment',
      eta: '2024-01-30',
      port: 'Tema Port'
    },
    {
      key: '4',
      trackingId: 'CN004',
      client: 'Lisa Brown',
      goods: 'Pharmaceuticals',
      status: 'Clearing',
      eta: '2024-02-02',
      port: 'Kotoka Airport'
    }
  ];

  // Mock data for workflow status counts
  const workflowStatuses = [
    { status: 'Submitted', count: 25, color: '#1890ff', icon: <FileAddOutlined /> },
    { status: 'Under Review', count: 18, color: '#faad14', icon: <ClockCircleOutlined /> },
    { status: 'Quoted', count: 32, color: '#722ed1', icon: <CalculatorOutlined /> },
    { status: 'Awaiting Payment', count: 15, color: '#eb2f96', icon: <CreditCardOutlined /> },
    { status: 'Clearing', count: 12, color: '#52c41a', icon: <SyncOutlined /> },
    { status: 'Delivered', count: 54, color: '#52c41a', icon: <CheckCircleOutlined /> }
  ];

  // Mock data for recent activities
  const recentActivities = [
    {
      time: '2 hours ago',
      action: 'Invoice generated for CN003',
      user: 'Staff 2',
      type: 'invoice'
    },
    {
      time: '4 hours ago',
      action: 'ETA updated for CN002',
      user: 'Staff 2',
      type: 'eta'
    },
    {
      time: '6 hours ago',
      action: 'New enquiry submitted by Lisa Brown',
      user: 'Staff 1',
      type: 'enquiry'
    },
    {
      time: '8 hours ago',
      action: 'Payment received for CN001',
      user: 'System',
      type: 'payment'
    }
  ];

  const getStatusColor = (status) => {
    const statusColors = {
      'Submitted': 'blue',
      'Under Review': 'orange',
      'Quoted': 'purple',
      'Awaiting Payment': 'magenta',
      'Paid': 'green',
      'Clearing': 'green',
      'Cleared': 'green',
      'Out for Delivery': 'cyan',
      'Delivered': 'green',
      'Closed': 'default'
    };
    return statusColors[status] || 'default';
  };

  const getStatusIcon = (status) => {
    const statusIcons = {
      'Submitted': <FileAddOutlined />,
      'Under Review': <ClockCircleOutlined />,
      'Quoted': <CalculatorOutlined />,
      'Awaiting Payment': <CreditCardOutlined />,
      'Paid': <CheckCircleOutlined />,
      'Clearing': <SyncOutlined />,
      'Cleared': <CheckCircleOutlined />,
      'Out for Delivery': <CarOutlined />,
      'Delivered': <CheckCircleFilled />,
      'Closed': <CheckCircleFilled />
    };
    return statusIcons[status] || <FileAddOutlined />;
  };

  const shipmentColumns = [
    {
      title: 'Tracking ID',
      dataIndex: 'trackingId',
      key: 'trackingId',
      render: (text) => <Text strong>{text}</Text>
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client'
    },
    {
      title: 'Goods',
      dataIndex: 'goods',
      key: 'goods'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={getStatusColor(status)} icon={getStatusIcon(status)}>
          {status}
        </Tag>
      )
    },
    {
      title: 'ETA',
      dataIndex: 'eta',
      key: 'eta'
    },
    {
      title: 'Port',
      dataIndex: 'port',
      key: 'port'
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="small">
          <Button 
            type="text" 
            icon={<EyeOutlined />} 
            size="small"
            onClick={() => navigate(`/shipments/${record.trackingId}`)}
          >
            View
          </Button>
        </Space>
      )
    }
  ];

  const getActivityIcon = (type) => {
    const icons = {
      'invoice': <FileTextOutlined style={{ color: '#1890ff' }} />,
      'eta': <GlobalOutlined style={{ color: '#52c41a' }} />,
      'enquiry': <FileAddOutlined style={{ color: '#faad14' }} />,
      'payment': <CreditCardOutlined style={{ color: '#52c41a' }} />
    };
    return icons[type] || <FileAddOutlined />;
  };

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>Clearing Agent Dashboard</Title>
        <Text type="secondary">Monitor shipments, track status, and manage operations</Text>
      </div>

      {/* Statistics Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                valueStyle={{ color: stat.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        {/* Recent Shipments */}
        <Col xs={24} lg={16}>
          <Card 
            title="Recent Shipments" 
            extra={
              <Button 
                type="primary" 
                icon={<PlusOutlined />}
                onClick={() => navigate('/enquiries')}
              >
                New Enquiry
              </Button>
            }
            style={{ marginBottom: '16px' }}
          >
            <Table 
              dataSource={recentShipments} 
              columns={shipmentColumns} 
              pagination={false}
              size="small"
            />
          </Card>
        </Col>

        {/* Workflow Status Overview */}
        <Col xs={24} lg={8}>
          <Card title="Workflow Status" style={{ marginBottom: '16px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              {workflowStatuses.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '8px 0'
                }}>
                  <Space>
                    <span style={{ color: item.color }}>{item.icon}</span>
                    <Text>{item.status}</Text>
                  </Space>
                  <Badge count={item.count} style={{ backgroundColor: item.color }} />
                </div>
              ))}
            </Space>
          </Card>

          {/* Recent Activities */}
          <Card title="Recent Activities">
            <Timeline size="small">
              {recentActivities.map((activity, index) => (
                <Timeline.Item 
                  key={index} 
                  dot={getActivityIcon(activity.type)}
                  color="blue"
                >
                  <div>
                    <Text strong>{activity.action}</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {activity.time} • {activity.user}
                    </Text>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
