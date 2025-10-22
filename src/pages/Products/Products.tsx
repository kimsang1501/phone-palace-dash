import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard/ProductCard';
import productsData from '@/data/products.json';
import './Products.css';

const Products: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');
  const [showFilters, setShowFilters] = useState(false);

  const brands = ['all', ...Array.from(new Set(productsData.map(p => p.brand)))];

  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];

    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(p => p.brand === selectedBrand);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const ranges: Record<string, [number, number]> = {
        'under-15': [0, 15000000],
        '15-25': [15000000, 25000000],
        '25-35': [25000000, 35000000],
        'above-35': [35000000, Infinity],
      };
      const [min, max] = ranges[priceRange];
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Sort
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [selectedBrand, priceRange, sortBy]);

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-header">
          <h1 className="page-title">Tất cả sản phẩm</h1>
          <button
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={20} />
            Bộ lọc
          </button>
        </div>

        <div className="products-layout">
          {/* Sidebar Filters */}
          <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
            <div className="filter-section">
              <div className="filter-header">
                <Filter size={18} />
                <h3>Bộ lọc</h3>
              </div>

              {/* Brand Filter */}
              <div className="filter-group">
                <h4 className="filter-title">Hãng</h4>
                <div className="filter-options">
                  {brands.map(brand => (
                    <label key={brand} className="filter-option">
                      <input
                        type="radio"
                        name="brand"
                        value={brand}
                        checked={selectedBrand === brand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                      />
                      <span>{brand === 'all' ? 'Tất cả' : brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="filter-group">
                <h4 className="filter-title">Mức giá</h4>
                <div className="filter-options">
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      value="all"
                      checked={priceRange === 'all'}
                      onChange={(e) => setPriceRange(e.target.value)}
                    />
                    <span>Tất cả</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      value="under-15"
                      checked={priceRange === 'under-15'}
                      onChange={(e) => setPriceRange(e.target.value)}
                    />
                    <span>Dưới 15 triệu</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      value="15-25"
                      checked={priceRange === '15-25'}
                      onChange={(e) => setPriceRange(e.target.value)}
                    />
                    <span>15 - 25 triệu</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      value="25-35"
                      checked={priceRange === '25-35'}
                      onChange={(e) => setPriceRange(e.target.value)}
                    />
                    <span>25 - 35 triệu</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      value="above-35"
                      checked={priceRange === 'above-35'}
                      onChange={(e) => setPriceRange(e.target.value)}
                    />
                    <span>Trên 35 triệu</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-content">
            <div className="products-toolbar">
              <span className="products-count">
                {filteredProducts.length} sản phẩm
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="default">Mặc định</option>
                <option value="price-asc">Giá: Thấp đến cao</option>
                <option value="price-desc">Giá: Cao đến thấp</option>
                <option value="name">Tên A-Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>Không tìm thấy sản phẩm phù hợp</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
