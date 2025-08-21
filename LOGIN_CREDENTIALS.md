# CN Terminal Web App - Login Credentials

## Demo User Accounts

### Admin User
- **Email**: `admin@cnterminal.com`
- **Password**: `admin123`
- **Role**: Admin
- **Permissions**: Full access to all features
- **Department**: Management

### Staff 1 (Client Engagement)
- **Email**: `staff1@cnterminal.com`
- **Password**: `staff123`
- **Role**: Staff 1
- **Permissions**: 
  - Enquiry management
  - Document upload
  - Client communication
- **Department**: Client Engagement

### Staff 2 (Operations & Finance)
- **Email**: `staff2@cnterminal.com`
- **Password**: `staff123`
- **Role**: Staff 2
- **Permissions**:
  - Validation
  - Duty calculation
  - Invoicing
  - Payment tracking
- **Department**: Operations & Finance

### Delivery Agent
- **Email**: `delivery@cnterminal.com`
- **Password**: `delivery123`
- **Role**: Delivery
- **Permissions**:
  - Delivery scheduling
  - PoD upload
  - Delivery tracking
- **Department**: Operations

### Finance User
- **Email**: `finance@cnterminal.com`
- **Password**: `finance123`
- **Role**: Finance
- **Permissions**:
  - Financial reports
  - Payment reconciliation
  - Cost analysis
- **Department**: Finance

## Role-Based Access

### Staff 1 (Client Engagement)
- Create and manage client enquiries
- Upload and manage documents
- Communicate with clients
- Track enquiry status

### Staff 2 (Operations & Finance)
- Validate client submissions
- Calculate duties and fees
- Generate invoices
- Track payment status
- Manage shipment progress

### Admin
- Manage users and roles
- Configure system settings
- View all reports and analytics
- Manage integrations
- Configure clearing agent settings

### Delivery
- Schedule deliveries
- Track delivery status
- Upload proof of delivery (PoD)
- Manage driver assignments

### Finance
- Generate financial reports
- Reconcile payments
- Analyze costs and margins
- Manage financial records

## Testing Scenarios

1. **Login as Staff 1** to test enquiry creation and management
2. **Login as Staff 2** to test validation and invoicing
3. **Login as Admin** to test user management and system configuration
4. **Login as Delivery** to test delivery management features
5. **Login as Finance** to test financial reporting features

## Notes

- All passwords are simple for demo purposes
- In production, implement proper password policies
- User roles determine access to different features
- Each role has specific permissions and limitations
- The system supports role-based access control (RBAC)
