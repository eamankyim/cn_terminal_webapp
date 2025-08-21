import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { CarOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const DeliveryPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Title level={2}>Delivery Management</Title>
          <Text type="secondary">Schedule deliveries, track drivers, and manage proof of delivery</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Schedule Delivery
        </Button>
      </div>
      
      <Card>
        <div style={{ textAlign: 'center', padding: '48px' }}>
          <CarOutlined style={{ fontSize: '64px', color: '#d9d9d9', marginBottom: '16px' }} />
          <Title level={3} type="secondary">Delivery Management</Title>
          <Text type="secondary">This page will be developed to schedule deliveries, track driver assignments, and manage proof of delivery (PoD) uploads.</Text>
        </div>
      </Card>
    </div>
  );
};

export default DeliveryPage;
