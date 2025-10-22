import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">PhoneStore</h3>
            <p className="footer-text">
              Cửa hàng điện thoại uy tín hàng đầu Việt Nam. Chuyên cung cấp các dòng smartphone chính hãng với giá tốt nhất.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Liên kết</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Trang chủ</Link>
              <Link to="/products" className="footer-link">Sản phẩm</Link>
              <Link to="/cart" className="footer-link">Giỏ hàng</Link>
              <Link to="/user/orders" className="footer-link">Đơn hàng</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Chính sách</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Chính sách bảo hành</a>
              <a href="#" className="footer-link">Chính sách đổi trả</a>
              <a href="#" className="footer-link">Chính sách thanh toán</a>
              <a href="#" className="footer-link">Chính sách vận chuyển</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Liên hệ</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <Phone size={16} />
                <span>1800 1234</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>support@phonestore.vn</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Nguyễn Huệ, Q.1, TP.HCM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 PhoneStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
