import React, { useEffect, useState } from 'react';
import { Package, ShoppingCart, Users, DollarSign } from 'lucide-react';
import productsData from '@/data/products.json';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const totalRevenue = orders.reduce((sum: number, order: any) => sum + order.total, 0);

    setStats({
      totalProducts: productsData.length,
      totalOrders: orders.length,
      totalRevenue,
      totalUsers: 12, // Mock data
    });
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const statCards = [
    {
      title: 'Tổng doanh thu',
      value: formatPrice(stats.totalRevenue),
      icon: DollarSign,
      color: 'primary',
    },
    {
      title: 'Đơn hàng',
      value: stats.totalOrders.toString(),
      icon: ShoppingCart,
      color: 'success',
    },
    {
      title: 'Sản phẩm',
      value: stats.totalProducts.toString(),
      icon: Package,
      color: 'warning',
    },
    {
      title: 'Người dùng',
      value: stats.totalUsers.toString(),
      icon: Users,
      color: 'accent',
    },
  ];

  const topProducts = productsData
    .sort((a, b) => b.price - a.price)
    .slice(0, 5);

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="stats-grid">
        {statCards.map((card) => (
          <div key={card.title} className={`stat-card stat-${card.color}`}>
            <div className="stat-icon">
              <card.icon size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">{card.title}</p>
              <p className="stat-value">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="content-card">
          <h2 className="card-title">Sản phẩm giá cao</h2>
          <div className="products-list">
            {topProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <p className="product-brand">{product.brand}</p>
                </div>
                <span className="product-price">{formatPrice(product.price)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card">
          <h2 className="card-title">Thống kê nhanh</h2>
          <div className="quick-stats">
            <div className="quick-stat-item">
              <span className="quick-stat-label">Tồn kho</span>
              <span className="quick-stat-value">
                {productsData.reduce((sum, p) => sum + p.stock, 0)}
              </span>
            </div>
            <div className="quick-stat-item">
              <span className="quick-stat-label">Sản phẩm nổi bật</span>
              <span className="quick-stat-value">
                {productsData.filter(p => p.featured).length}
              </span>
            </div>
            <div className="quick-stat-item">
              <span className="quick-stat-label">Hãng</span>
              <span className="quick-stat-value">
                {new Set(productsData.map(p => p.brand)).size}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
