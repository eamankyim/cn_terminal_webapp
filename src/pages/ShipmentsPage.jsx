import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { ContainerOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ShipmentsPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Title level={2}>Shipments Management</Title>
          <Text type="secondary">Track and manage shipment details, status, and progress</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          New Shipment
        </Button>
      </div>
      
      <Card>
        <div style={{ textAlign: 'center', padding: '48px' }}>
          <ContainerOutlined style={{ fontSize: '64px', color: '#d9d9d9', marginBottom: '16px' }} />
          <Title level={3} type="secondary">Shipments Management</Title>
          <Text type="secondary">This page will be developed to manage shipment details, track status changes, and monitor progress through the clearing workflow.</Text>
        </div>
      </Card>
    </div>
  );
};

export default ShipmentsPage;
