import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { CreditCardOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const PaymentsPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Title level={2}>Payment Management</Title>
          <Text type="secondary">Track payments, manage outbound payments, and handle financial reconciliation</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Record Payment
        </Button>
      </div>
      
      <Card>
        <div style={{ textAlign: 'center', padding: '48px' }}>
          <CreditCardOutlined style={{ fontSize: '64px', color: '#d9d9d9', marginBottom: '16px' }} />
          <Title level={3} type="secondary">Payment Management</Title>
          <Text type="secondary">This page will be developed to track client payments, record outbound payments to shipping/customs, and handle financial reconciliation.</Text>
        </div>
      </Card>
    </div>
  );
};

export default PaymentsPage;
