import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { FileTextOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const InvoicesPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Title level={2}>Invoice Management</Title>
          <Text type="secondary">Generate invoices, track payments, and manage financial records</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          New Invoice
        </Button>
      </div>
      
      <Card>
        <div style={{ textAlign: 'center', padding: '48px' }}>
          <FileTextOutlined style={{ fontSize: '64px', color: '#d9d9d9', marginBottom: '16px' }} />
          <Title level={3} type="secondary">Invoice Management</Title>
          <Text type="secondary">This page will be developed to generate invoices, track payment status, and manage financial records for clearing services.</Text>
        </div>
      </Card>
    </div>
  );
};

export default InvoicesPage;
