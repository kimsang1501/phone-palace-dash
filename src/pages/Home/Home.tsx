import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import ProductCard from '@/components/ProductCard/ProductCard';
import productsData from '@/data/products.json';
import './Home.css';

const Home: React.FC = () => {
  const featuredProducts = productsData.filter(p => p.featured).slice(0, 6);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Smartphone
              <span className="hero-highlight"> Cao Cấp</span>
              <br />
              Giá Tốt Nhất
            </h1>
            <p className="hero-description">
              Khám phá bộ sưu tập điện thoại thông minh hàng đầu từ Apple, Samsung, Xiaomi, OPPO với giá ưu đãi nhất thị trường.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn-primary">
                Mua ngay
                <ArrowRight size={20} />
              </Link>
              <Link to="/products" className="btn-secondary">
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-gradient-blob"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <Zap />
            </div>
            <h3>Giao hàng nhanh</h3>
            <p>Freeship toàn quốc cho đơn từ 500k</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Shield />
            </div>
            <h3>Bảo hành chính hãng</h3>
            <p>Bảo hành 12 tháng, đổi mới trong 30 ngày</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Truck />
            </div>
            <h3>Giao hàng COD</h3>
            <p>Thanh toán khi nhận hàng</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Sản phẩm nổi bật</h2>
            <Link to="/products" className="section-link">
              Xem tất cả
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Đăng ký nhận thông tin khuyến mãi</h2>
          <p className="cta-description">
            Nhận ngay mã giảm giá 10% cho đơn hàng đầu tiên
          </p>
          <div className="cta-form">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="cta-input"
            />
            <button className="cta-button">Đăng ký</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
