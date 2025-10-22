import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import './Auth.css';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const success = await login(formData.email, formData.password);
        if (success) {
          toast.success('Đăng nhập thành công!');
          navigate(from, { replace: true });
        } else {
          toast.error('Đăng nhập thất bại');
        }
      } else {
        if (!formData.name) {
          toast.error('Vui lòng nhập tên');
          return;
        }
        const success = await register(formData.email, formData.password, formData.name);
        if (success) {
          toast.success('Đăng ký thành công!');
          navigate(from, { replace: true });
        } else {
          toast.error('Đăng ký thất bại');
        }
      }
    } catch (error) {
      toast.error('Có lỗi xảy ra');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h1>
            <p className="auth-subtitle">
              {isLogin
                ? 'Chào mừng bạn quay lại'
                : 'Tạo tài khoản mới để bắt đầu mua sắm'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="auth-submit">
              {isLogin ? 'Đăng nhập' : 'Đăng ký'}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="auth-toggle"
              >
                {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
              </button>
            </p>
          </div>

          {isLogin && (
            <div className="auth-demo">
              <p className="demo-title">Tài khoản demo:</p>
              <p className="demo-info">Admin: admin@phone.com / admin123</p>
              <p className="demo-info">User: bất kỳ email/password</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
