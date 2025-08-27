import React, { useState } from 'react';
import { 
  Card, 
  Typography, 
  Button, 
  Space, 
  Table, 
  Input, 
  Tag, 
  Modal, 
  Descriptions, 
  Row, 
  Col,
  Statistic,
  Select,
  Form,
  message,
  Switch,
  Divider,
  Tabs,
  Avatar,
  Upload,
  InputNumber,
  Alert
} from 'antd';
import { 
  SettingOutlined, 
  UserOutlined, 
  SecurityScanOutlined, 
  BellOutlined,
  GlobalOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  UploadOutlined,
  SaveOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;
const { TabPane } = Tabs;

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isUserModalVisible, setIsUserModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  // Mock users data
  const mockUsers = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@cnterminal.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-01-20 14:30',
      permissions: ['all'],
      avatar: null
    },
    {
      id: 2,
      name: 'Staff Member 1',
      email: 'staff1@cnterminal.com',
      role: 'staff1',
      status: 'active',
      lastLogin: '2024-01-20 12:15',
      permissions: ['jobs', 'shipments', 'clients', 'invoices'],
      avatar: null
    },
    {
      id: 3,
      name: 'Staff Member 2',
      email: 'staff2@cnterminal.com',
      role: 'staff2',
      status: 'active',
      lastLogin: '2024-01-20 10:45',
      permissions: ['jobs', 'shipments', 'clients'],
      avatar: null
    },

    {
      id: 5,
      name: 'Finance Officer',
      email: 'finance@cnterminal.com',
      role: 'finance',
      status: 'inactive',
      lastLogin: '2024-01-15 16:00',
      permissions: ['invoices', 'payments', 'reports'],
      avatar: null
    }
  ];

  const [users, setUsers] = useState(mockUsers);

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin': return 'red';
      case 'staff1': return 'blue';
      case 'staff2': return 'green';

      case 'finance': return 'purple';
      default: return 'default';
    }
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'admin': return 'Administrator';
      case 'staff1': return 'Staff Level 1';
      case 'staff2': return 'Staff Level 2';

      case 'finance': return 'Finance Officer';
      default: return role;
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'green' : 'red';
  };

  const handleCreateUser = (values) => {
    if (editingUser) {
      // Update existing user
      const updatedUsers = users.map(u => 
        u.id === editingUser.id ? { ...u, ...values } : u
      );
      setUsers(updatedUsers);
      message.success('User updated successfully');
    } else {
      // Create new user
      const newUser = {
        id: Date.now(),
        ...values,
        status: 'active',
        lastLogin: 'Never',
        avatar: null
      };
      setUsers([...users, newUser]);
      message.success('User created successfully');
    }
    setIsUserModalVisible(false);
    setEditingUser(null);
    form.resetFields();
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    form.setFieldsValue(user);
    setIsUserModalVisible(true);
  };

  const handleDeleteUser = (userId) => {
    Modal.confirm({
      title: 'Delete User',
      content: 'Are you sure you want to delete this user? This action cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: () => {
        setUsers(users.filter(u => u.id !== userId));
        message.success('User deleted successfully');
      }
    });
  };

  const userColumns = [
    {
      title: 'User',
      key: 'user',
      render: (_, record) => (
        <Space>
          <Avatar size="large" icon={<UserOutlined />} style={{ backgroundColor: '#2FA2EE' }} />
          <div>
            <div style={{ fontWeight: 'bold' }}>{record.name}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{record.email}</div>
          </div>
        </Space>
      ),
    },
    {
      title: 'Role',
      key: 'role',
      render: (_, record) => (
        <Tag color={getRoleColor(record.role)}>
          {getRoleLabel(record.role)}
        </Tag>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => (
        <Tag color={getStatusColor(record.status)}>
          {record.status}
        </Tag>
      ),
    },
    {
      title: 'Last Login',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button 
            type="text" 
            icon={<EditOutlined />} 
            onClick={() => handleEditUser(record)}
            size="small"
          >
            Edit
          </Button>
          <Button 
            type="text" 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => handleDeleteUser(record.id)}
            size="small"
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const tabItems = [
    {
      key: 'profile',
      label: 'Profile Settings',
      children: (
        <div>
          <Row gutter={24}>
            <Col xs={24} lg={12}>
              <Card title="Personal Information" extra={<UserOutlined />}>
                <Form layout="vertical">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="First Name">
                        <Input placeholder="Enter first name" defaultValue="Admin" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Last Name">
                        <Input placeholder="Enter last name" defaultValue="User" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item label="Email">
                    <Input placeholder="Enter email" defaultValue="admin@cnterminal.com" />
                  </Form.Item>
                  <Form.Item label="Phone">
                    <Input placeholder="Enter phone number" defaultValue="+233 24 123 4567" />
                  </Form.Item>
                  <Form.Item label="Profile Picture">
                    <Upload>
                      <Button icon={<UploadOutlined />}>Upload Photo</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" icon={<SaveOutlined />}>
                      Save Changes
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="Change Password" extra={<SecurityScanOutlined />}>
                <Form layout="vertical">
                  <Form.Item label="Current Password">
                    <Input.Password placeholder="Enter current password" />
                  </Form.Item>
                  <Form.Item label="New Password">
                    <Input.Password placeholder="Enter new password" />
                  </Form.Item>
                  <Form.Item label="Confirm New Password">
                    <Input.Password placeholder="Confirm new password" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" icon={<SaveOutlined />}>
                      Update Password
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: 'users',
      label: 'User Management',
      children: (
        <div>
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Title level={4}>System Users</Title>
              <Text type="secondary">Manage user accounts, roles, and permissions</Text>
            </div>
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              onClick={() => {
                setEditingUser(null);
                form.resetFields();
                setIsUserModalVisible(true);
              }}
            >
              Add User
            </Button>
          </div>
          
          <Row gutter={16} style={{ marginBottom: '24px' }}>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Total Users"
                  value={users.length}
                  valueStyle={{ color: '#2FA2EE' }}
                  prefix={<UserOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Active Users"
                  value={users.filter(u => u.status === 'active').length}
                  valueStyle={{ color: '#52c41a' }}
                  prefix={<UserOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Admin Users"
                  value={users.filter(u => u.role === 'admin').length}
                  valueStyle={{ color: '#f5222d' }}
                  prefix={<UserOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Staff Users"
                  value={users.filter(u => u.role.startsWith('staff')).length}
                  valueStyle={{ color: '#722ed1' }}
                  prefix={<UserOutlined />}
                />
              </Card>
            </Col>
          </Row>

          <Table
            columns={userColumns}
            dataSource={users}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </div>
      ),
    },
    {
      key: 'preferences',
      label: 'System Preferences',
      children: (
        <div>
          <Row gutter={24}>
            <Col xs={24} lg={12}>
              <Card title="General Settings" extra={<SettingOutlined />}>
                <Form layout="vertical">
                  <Form.Item label="Company Name">
                    <Input defaultValue="CN Terminal" />
                  </Form.Item>
                  <Form.Item label="Default Currency">
                    <Select defaultValue="GHS">
                      <Option value="GHS">Ghana Cedi (GHS)</Option>
                      <Option value="USD">US Dollar (USD)</Option>
                      <Option value="EUR">Euro (EUR)</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Time Zone">
                    <Select defaultValue="GMT+0">
                      <Option value="GMT+0">GMT+0 (Accra)</Option>
                      <Option value="GMT+1">GMT+1</Option>
                      <Option value="GMT-1">GMT-1</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Date Format">
                    <Select defaultValue="DD/MM/YYYY">
                      <Option value="DD/MM/YYYY">DD/MM/YYYY</Option>
                      <Option value="MM/DD/YYYY">MM/DD/YYYY</Option>
                      <Option value="YYYY-MM-DD">YYYY-MM-DD</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" icon={<SaveOutlined />}>
                      Save Preferences
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="Notification Settings" extra={<BellOutlined />}>
                <Form layout="vertical">
                  <Form.Item label="Email Notifications">
                    <Switch defaultChecked />
                  </Form.Item>
                  <Form.Item label="SMS Notifications">
                    <Switch />
                  </Form.Item>
                  <Form.Item label="Push Notifications">
                    <Switch defaultChecked />
                  </Form.Item>
                  <Form.Item label="Job Status Updates">
                    <Switch defaultChecked />
                  </Form.Item>
                  <Form.Item label="Payment Reminders">
                    <Switch defaultChecked />
                  </Form.Item>
                  <Form.Item label="System Alerts">
                    <Switch defaultChecked />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" icon={<SaveOutlined />}>
                      Save Notifications
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: 'security',
      label: 'Security Settings',
      children: (
        <div>
          <Alert
            message="Security Recommendations"
            description="Enable two-factor authentication and use strong passwords to enhance your account security."
            type="info"
            showIcon
            style={{ marginBottom: '24px' }}
          />
          
          <Row gutter={24}>
            <Col xs={24} lg={12}>
              <Card title="Authentication" extra={<SecurityScanOutlined />}>
                <Form layout="vertical">
                  <Form.Item label="Two-Factor Authentication">
                    <Switch />
                  </Form.Item>
                  <Form.Item label="Session Timeout (minutes)">
                    <InputNumber min={15} max={480} defaultValue={30} />
                  </Form.Item>
                  <Form.Item label="Maximum Login Attempts">
                    <InputNumber min={3} max={10} defaultValue={5} />
                  </Form.Item>
                  <Form.Item label="Password Expiry (days)">
                    <InputNumber min={30} max={365} defaultValue={90} />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" icon={<SaveOutlined />}>
                      Save Security Settings
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="Access Control" extra={<GlobalOutlined />}>
                <Form layout="vertical">
                  <Form.Item label="IP Whitelist">
                    <TextArea 
                      placeholder="Enter allowed IP addresses (one per line)"
                      rows={4}
                      defaultValue="192.168.1.0/24&#10;10.0.0.0/8"
                    />
                  </Form.Item>
                  <Form.Item label="Allowed Countries">
                    <Select mode="multiple" defaultValue={['GH', 'NG', 'KE']}>
                      <Option value="GH">Ghana</Option>
                      <Option value="NG">Nigeria</Option>
                      <Option value="KE">Kenya</Option>
                      <Option value="ZA">South Africa</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Audit Logging">
                    <Switch defaultChecked />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" icon={<SaveOutlined />}>
                      Save Access Control
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px' }}>
        Settings & Configuration
      </Title>

      {/* Main Content Tabs */}
      <Card>
        <Tabs 
          activeKey={activeTab}
          items={tabItems}
          onChange={setActiveTab}
          size="large"
        />
      </Card>

      {/* Create/Edit User Modal */}
      <Modal
        title={editingUser ? 'Edit User' : 'Add New User'}
        open={isUserModalVisible}
        onCancel={() => {
          setIsUserModalVisible(false);
          setEditingUser(null);
          form.resetFields();
        }}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateUser}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: 'Please enter full name' }]}
              >
                <Input placeholder="Enter full name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter email' },
                  { type: 'email', message: 'Please enter valid email' }
                ]}
              >
                <Input placeholder="Enter email address" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="role"
                label="Role"
                rules={[{ required: true, message: 'Please select role' }]}
              >
                <Select placeholder="Select role">
                  <Option value="admin">Administrator</Option>
                  <Option value="staff1">Staff Level 1</Option>
                  <Option value="staff2">Staff Level 2</Option>

                  <Option value="finance">Finance Officer</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: 'Please select status' }]}
              >
                <Select placeholder="Select status">
                  <Option value="active">Active</Option>
                  <Option value="inactive">Inactive</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {!editingUser && (
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter password' }]}
            >
              <Input.Password placeholder="Enter password" />
            </Form.Item>
          )}

          <Form.Item style={{ marginTop: '24px', textAlign: 'right' }}>
            <Space>
              <Button onClick={() => {
                setIsUserModalVisible(false);
                setEditingUser(null);
                form.resetFields();
              }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                {editingUser ? 'Update User' : 'Create User'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SettingsPage;

