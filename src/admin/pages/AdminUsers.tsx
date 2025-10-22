import React, { useState } from 'react';
import { Shield, User, Lock, Unlock } from 'lucide-react';
import { toast } from 'sonner';
import './AdminUsers.css';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'blocked';
  joinDate: string;
}

const AdminUsers: React.FC = () => {
  const [users] = useState<UserData[]>([
    {
      id: 1,
      name: 'Admin',
      email: 'admin@phone.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-01-01',
    },
    {
      id: 2,
      name: 'Nguyễn Văn A',
      email: 'user1@example.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-02-15',
    },
    {
      id: 3,
      name: 'Trần Thị B',
      email: 'user2@example.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-03-20',
    },
    {
      id: 4,
      name: 'Lê Văn C',
      email: 'user3@example.com',
      role: 'user',
      status: 'blocked',
      joinDate: '2024-01-10',
    },
  ]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleToggleStatus = (userId: number) => {
    toast.info('Tính năng đang phát triển');
  };

  const handleChangeRole = (userId: number) => {
    toast.info('Tính năng đang phát triển');
  };

  return (
    <div className="admin-users">
      <div className="page-header">
        <h1 className="page-title">Quản lý người dùng</h1>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th>Ngày tham gia</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="user-id">#{user.id}</td>
                <td className="user-name">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.role === 'admin' ? 'admin' : 'user'}`}>
                    {user.role === 'admin' ? (
                      <>
                        <Shield size={14} /> Admin
                      </>
                    ) : (
                      <>
                        <User size={14} /> User
                      </>
                    )}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user.status}`}>
                    {user.status === 'active' ? 'Hoạt động' : 'Bị khóa'}
                  </span>
                </td>
                <td className="date-cell">{formatDate(user.joinDate)}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => handleToggleStatus(user.id)}
                      className={`btn-icon ${user.status === 'active' ? 'btn-lock' : 'btn-unlock'}`}
                      disabled={user.role === 'admin'}
                    >
                      {user.status === 'active' ? <Lock size={16} /> : <Unlock size={16} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
