import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  FileAddOutlined,
  UserOutlined,
  SearchOutlined,
  DollarOutlined,
  HomeOutlined,
  SettingOutlined,
  BarChartOutlined,
  ContainerOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  CarOutlined,
  CalculatorOutlined,
  CreditCardOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import './Sidebar.css';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/enquiries',
      icon: <FileAddOutlined />,
      label: 'Enquiries',
    },
    {
      key: '/shipments',
      icon: <ContainerOutlined />,
      label: 'Shipments',
    },
    {
      key: '/clients',
      icon: <UserOutlined />,
      label: 'Clients',
    },
    {
      key: '/invoices',
      icon: <FileTextOutlined />,
      label: 'Invoices',
    },
    {
      key: '/payments',
      icon: <CreditCardOutlined />,
      label: 'Payments',
    },
    {
      key: '/duty-calculator',
      icon: <CalculatorOutlined />,
      label: 'Duty Calculator',
    },
    {
      key: '/tracking',
      icon: <SearchOutlined />,
      label: 'Tracking',
    },
    {
      key: '/delivery',
      icon: <CarOutlined />,
      label: 'Delivery',
    },
    {
      key: '/reports',
      icon: <BarChartOutlined />,
      label: 'Reports',
    },
    {
      key: '/admin',
      icon: <SettingOutlined />,
      label: 'Admin',
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sidebar"
      width={250}
    >
      <div className="sidebar-container">
        {/* Logo Section */}
        <div className="sidebar-logo">
          {collapsed ? (
            <img 
              src="/AppLogo.png" 
              alt="CN Terminal" 
              style={{ 
                width: '32px', 
                height: '32px',
                objectFit: 'cover',
                borderRadius: '4px'
              }} 
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src="/AppLogo.png" 
                alt="CN Terminal" 
                style={{ 
                  width: '40px', 
                  height: '40px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }} 
              />
              <span style={{ 
                color: 'white', 
                fontSize: '18px', 
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}>
                CN Terminal
              </span>
            </div>
          )}
        </div>

        {/* Menu */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          className="sidebar-menu"
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
