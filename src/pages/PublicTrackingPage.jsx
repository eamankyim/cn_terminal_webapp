import React, { useState } from 'react';
import { 
  Input, 
  Button, 
  Card, 
  Typography, 
  Space, 
  Tag, 
  Row, 
  Col, 
  Descriptions, 
  Timeline,
  Spin,
  Empty,
  Result,
  Divider
} from 'antd';
import { 
  SearchOutlined, 
  UserOutlined, 
  EnvironmentOutlined, 
  CalendarOutlined,
  InboxOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Search } = Input;

const PublicTrackingPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // Mock tracking data
  const mockTrackingData = {
    'TRK001': {
      trackingId: 'TRK001',
      status: 'In Transit',
      customer: 'John Smith',
      service: 'Express',
      weight: '2.5 kg',
      value: '£150',
      origin: 'London, UK',
      destination: 'Accra, Ghana',
      collectionDate: '2024-01-20',
      estimatedDelivery: '2024-01-25',
      currentLocation: 'In Transit - Atlantic Ocean',
      timeline: [
        {
          time: '2024-01-20 09:00',
          event: 'Package collected from customer',
          location: 'London, UK',
          status: 'completed',
          icon: <InboxOutlined style={{ color: '#52c41a' }} />
        },
        {
          time: '2024-01-20 14:00',
          event: 'Package processed and packed',
          location: 'London Warehouse',
          status: 'completed',
          icon: <InboxOutlined style={{ color: '#52c41a' }} />
        },
        {
          time: '2024-01-22 08:00',
          event: 'Loaded onto vessel MS Sea Express',
          location: 'London Port',
          status: 'completed',
          icon: <InboxOutlined style={{ color: '#52c41a' }} />
        },
        {
          time: '2024-01-22 10:00',
          event: 'Vessel departed from London',
          location: 'London Port',
          status: 'completed',
          icon: <InboxOutlined style={{ color: '#52c41a' }} />
        },
        {
          time: '2024-01-25 08:00',
          event: 'Expected arrival at Accra Port',
          location: 'Accra, Ghana',
          status: 'pending',
          icon: <EnvironmentOutlined style={{ color: '#1890ff' }} />
        },
        {
          time: '2024-01-26 09:00',
          event: 'Out for delivery',
          location: 'Accra, Ghana',
          status: 'pending',
          icon: <EnvironmentOutlined style={{ color: '#1890ff' }} />
        },
        {
          time: '2024-01-26 14:00',
          event: 'Package delivered',
          location: 'Accra, Ghana',
          status: 'pending',
          icon: <EnvironmentOutlined style={{ color: '#1890ff' }} />
        }
      ]
    }
  };

  const handleSearch = () => {
    if (!trackingId.trim()) return;
    
    setLoading(true);
    setSearched(true);
    
    // Simulate API call
    setTimeout(() => {
      const result = mockTrackingData[trackingId.toUpperCase()];
      setTrackingResult(result);
      setLoading(false);
    }, 1500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'success';
      case 'In Transit':
        return 'processing';
      case 'Out for Delivery':
        return 'warning';
      case 'Pending':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <Row justify="center" style={{ width: '100%' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          {/* Header with Logo */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <img 
              src="/cn_logo.png" 
              alt="CN Terminal" 
              style={{ 
                width: '120px', 
                height: 'auto',
                objectFit: 'contain',
                marginBottom: '16px'
              }} 
            />
            <Title level={2} style={{ color: '#fff', margin: 0 }}>
              Track Your Package
            </Title>
            <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px' }}>
              Enter your tracking number to get real-time updates
            </Text>
          </div>

          {/* Search Section */}
          <Card style={{ marginBottom: '24px' }}>
            <Space.Compact style={{ width: '100%' }}>
              <Input
                size="large"
                placeholder="Enter tracking number (e.g., TRK001)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                onPressEnter={handleSearch}
                prefix={<SearchOutlined />}
              />
              <Button 
                type="primary" 
                size="large"
                onClick={handleSearch}
                loading={loading}
              >
                Track
              </Button>
            </Space.Compact>
          </Card>

          {/* Results Section */}
          {searched && (
            <Card>
              {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <Spin size="large" />
                  <div style={{ marginTop: '16px' }}>
                    <Text>Tracking your package...</Text>
                  </div>
                </div>
              ) : trackingResult ? (
                <div>
                  {/* Package Overview */}
                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                      <InboxOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                      <Title level={3} style={{ margin: '8px 0 0' }}>
                        {trackingResult.trackingId}
                      </Title>
                      <Tag
                        color={getStatusColor(trackingResult.status)}
                        style={{ fontSize: '16px', padding: '8px 16px' }}
                      >
                        {trackingResult.status}
                      </Tag>
                    </div>
                  </div>

                  {/* Package Details */}
                  <Card size="small" title="Package Details" style={{ marginBottom: '24px' }}>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        <Descriptions column={1} size="small">
                          <Descriptions.Item label="Customer">
                            <Space>
                              <UserOutlined />
                              {trackingResult.customer}
                            </Space>
                          </Descriptions.Item>
                          <Descriptions.Item label="Service">
                            <Tag color="blue">{trackingResult.service}</Tag>
                          </Descriptions.Item>
                          <Descriptions.Item label="Weight">
                            <Space>
                              <InboxOutlined />
                              {trackingResult.weight}
                            </Space>
                          </Descriptions.Item>
                          <Descriptions.Item label="Declared Value">
                            {trackingResult.value}
                          </Descriptions.Item>
                        </Descriptions>
                      </Col>
                      <Col xs={24} md={12}>
                        <Descriptions column={1} size="small">
                          <Descriptions.Item label="Origin">
                            <Space>
                              <EnvironmentOutlined />
                              {trackingResult.origin}
                            </Space>
                          </Descriptions.Item>
                          <Descriptions.Item label="Destination">
                            <Space>
                              <EnvironmentOutlined />
                              {trackingResult.destination}
                            </Space>
                          </Descriptions.Item>
                          <Descriptions.Item label="Collection Date">
                            <Space>
                              <CalendarOutlined />
                              {trackingResult.collectionDate}
                            </Space>
                          </Descriptions.Item>
                          <Descriptions.Item label="Estimated Delivery">
                            <Space>
                              <CalendarOutlined />
                              {trackingResult.estimatedDelivery}
                            </Space>
                          </Descriptions.Item>
                        </Descriptions>
                      </Col>
                    </Row>
                  </Card>

                  {/* Current Location */}
                  <Card size="small" title="Current Location" style={{ marginBottom: '24px' }}>
                    <Space>
                      <EnvironmentOutlined style={{ color: '#1890ff' }} />
                      <Text strong>{trackingResult.currentLocation}</Text>
                    </Space>
                  </Card>

                  {/* Tracking Timeline */}
                  <Card size="small" title="Tracking Timeline">
                    <Timeline
                      items={trackingResult.timeline.map((item, index) => ({
                        color: item.status === 'completed' ? 'green' : 'blue',
                        children: (
                          <div>
                            <Text strong>{item.event}</Text>
                            <br />
                            <Space>
                              <EnvironmentOutlined />
                              <Text type="secondary">{item.location}</Text>
                            </Space>
                            <br />
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                              {item.time}
                            </Text>
                          </div>
                        ),
                      }))}
                    />
                  </Card>
                </div>
              ) : (
                <Empty
                  description="No tracking information found"
                  style={{ padding: '40px' }}
                />
              )}
            </Card>
          )}

          {/* Footer */}
          <Card style={{ marginTop: '24px', textAlign: 'center' }}>
            <Text type="secondary">
              Need help? Contact us at support@shipease.com or call +44 20 1234 5678
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PublicTrackingPage;
