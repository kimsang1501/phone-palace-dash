import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import productsData from '@/data/products.json';
import { toast } from 'sonner';
import './AdminProducts.css';

const AdminProducts: React.FC = () => {
  const [products] = useState(productsData);
  const [showModal, setShowModal] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const handleAdd = () => {
    toast.info('Tính năng đang phát triển');
    setShowModal(true);
  };

  const handleEdit = (id: number) => {
    toast.info('Tính năng đang phát triển');
  };

  const handleDelete = (id: number) => {
    toast.info('Tính năng đang phát triển');
  };

  return (
    <div className="admin-products">
      <div className="page-header">
        <h1 className="page-title">Quản lý sản phẩm</h1>
        <button onClick={handleAdd} className="btn-add">
          <Plus size={20} />
          Thêm sản phẩm
        </button>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Hãng</th>
              <th>Giá</th>
              <th>Tồn kho</th>
              <th>Nổi bật</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} className="table-image" />
                </td>
                <td className="product-name-cell">{product.name}</td>
                <td>{product.brand}</td>
                <td className="price-cell">{formatPrice(product.price)}</td>
                <td>
                  <span className={`stock-badge ${product.stock < 10 ? 'low' : ''}`}>
                    {product.stock}
                  </span>
                </td>
                <td>
                  <span className={`featured-badge ${product.featured ? 'active' : ''}`}>
                    {product.featured ? 'Có' : 'Không'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="btn-icon btn-edit"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn-icon btn-delete"
                    >
                      <Trash2 size={16} />
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

export default AdminProducts;
