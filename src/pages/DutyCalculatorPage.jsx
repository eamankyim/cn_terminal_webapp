import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { CalculatorOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const DutyCalculatorPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Title level={2}>Duty Calculator</Title>
          <Text type="secondary">Calculate duties, taxes, and fees for imported goods</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          New Calculation
        </Button>
      </div>
      
      <Card>
        <div style={{ textAlign: 'center', padding: '48px' }}>
          <CalculatorOutlined style={{ fontSize: '64px', color: '#d9d9d9', marginBottom: '16px' }} />
          <Title level={3} type="secondary">Duty Calculator</Title>
          <Text type="secondary">This page will be developed to calculate duties, taxes, and fees using HS codes, goods classification, and Ghana customs regulations.</Text>
        </div>
      </Card>
    </div>
  );
};

export default DutyCalculatorPage;
