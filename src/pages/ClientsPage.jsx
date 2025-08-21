import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ClientsPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Title level={2}>Clients Management</Title>
          <Text type="secondary">Manage client information and profiles</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          New Client
        </Button>
      </div>
      
      <Card>
        <div style={{ textAlign: 'center', padding: '48px' }}>
          <UserOutlined style={{ fontSize: '64px', color: '#d9d9d9', marginBottom: '16px' }} />
          <Title level={3} type="secondary">Clients Management</Title>
          <Text type="secondary">This page will be developed to manage client information, profiles, and communication history.</Text>
        </div>
      </Card>
    </div>
  );
};

export default ClientsPage;
