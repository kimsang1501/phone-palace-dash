import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Smartphone } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Smartphone className="logo-icon" />
          <span>PhoneStore</span>
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Trang chủ</Link>
          <Link to="/products" className="navbar-link">Sản phẩm</Link>
          {user && <Link to="/user/orders" className="navbar-link">Đơn hàng</Link>}
          {isAdmin && <Link to="/admin" className="navbar-link navbar-link-admin">Admin</Link>}
        </div>

        <div className="navbar-actions">
          <Link to="/cart" className="navbar-icon-btn">
            <ShoppingCart size={20} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>

          {user ? (
            <div className="navbar-user">
              <span className="user-name">{user.name}</span>
              <button onClick={handleLogout} className="navbar-icon-btn">
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="navbar-icon-btn">
              <User size={20} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
