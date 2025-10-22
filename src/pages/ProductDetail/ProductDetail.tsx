import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard/ProductCard';
import productsData from '@/data/products.json';
import { toast } from 'sonner';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productsData.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Sản phẩm không tồn tại</h2>
        <button onClick={() => navigate('/products')} className="btn-back">
          Quay lại
        </button>
      </div>
    );
  }

  const relatedProducts = productsData
    .filter(p => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Đã thêm vào giỏ hàng!');
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-detail-page">
      <div className="detail-container">
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeft size={20} />
          Quay lại
        </button>

        <div className="detail-grid">
          {/* Images */}
          <div className="detail-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            {product.images.length > 1 && (
              <div className="thumbnail-images">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="detail-info">
            <span className="detail-brand">{product.brand}</span>
            <h1 className="detail-title">{product.name}</h1>

            <div className="detail-pricing">
              <span className="detail-price">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="detail-original-price">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="detail-discount">-{discount}%</span>
                </>
              )}
            </div>

            <p className="detail-description">{product.description}</p>

            <div className="detail-stock">
              <Check size={16} />
              <span>Còn {product.stock} sản phẩm</span>
            </div>

            <div className="detail-actions">
              <button onClick={handleAddToCart} className="btn-add-cart">
                <ShoppingCart size={20} />
                Thêm vào giỏ
              </button>
              <button onClick={handleBuyNow} className="btn-buy-now">
                Mua ngay
              </button>
            </div>

            {/* Specs */}
            <div className="detail-specs">
              <h3 className="specs-title">Thông số kỹ thuật</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Màn hình</span>
                  <span className="spec-value">{product.specs.screen}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Chip</span>
                  <span className="spec-value">{product.specs.chip}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">RAM</span>
                  <span className="spec-value">{product.specs.ram}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Bộ nhớ</span>
                  <span className="spec-value">{product.specs.storage}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Camera</span>
                  <span className="spec-value">{product.specs.camera}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Pin</span>
                  <span className="spec-value">{product.specs.battery}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-section">
            <h2 className="section-title">Sản phẩm tương tự</h2>
            <div className="related-grid">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
