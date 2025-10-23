import React, { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";
import productsData from "@/data/products.json";
import { toast } from "sonner";
import "./AdminProducts.css";

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  stock: number;
  image: string;
  featured: boolean;
}

// State ban đầu cho form
const initialProductState: Omit<Product, "id"> = {
  name: "",
  brand: "",
  price: 0,
  stock: 0,
  image: "",
  featured: false,
};

const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState(initialProductState);

  // Thêm state để theo dõi sản phẩm đang chỉnh sửa
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Mở modal và reset form (chế độ Thêm)
  const handleAdd = () => {
    setEditingProduct(null); // Đảm bảo không ở chế độ sửa
    setNewProduct(initialProductState); // Reset form
    setShowModal(true);
  };

  // Cập nhật hàm handleEdit
  const handleEdit = (id: number) => {
    const productToEdit = products.find((p) => p.id === id);
    if (productToEdit) {
      setEditingProduct(productToEdit); // Đặt sản phẩm đang sửa
      setNewProduct(productToEdit); // Điền thông tin vào form
      setShowModal(true); // Mở modal
    }
  };

  // Cập nhật hàm handleDelete
  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      setProducts(products.filter((p) => p.id !== id));
      toast.success("Xóa sản phẩm thành công!");
    }
  };

  // Hàm xử lý khi nhập liệu vào form (giữ nguyên)
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setNewProduct((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setNewProduct((prev) => ({
        ...prev,
        [name]: type === "number" ? Number(value) : value,
      }));
    }
  };

  // Cập nhật hàm handleSubmit (xử lý cả Thêm và Sửa)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.brand || newProduct.price <= 0) {
      toast.error("Vui lòng điền đầy đủ thông tin bắt buộc.");
      return;
    }

    if (editingProduct) {
      // Logic SỬA
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...newProduct, id: p.id } : p
        )
      );
      toast.success("Cập nhật sản phẩm thành công!");
    } else {
      // Logic THÊM
      const productToAdd: Product = {
        ...newProduct,
        id: Date.now(), // Dùng timestamp làm ID tạm thời
      };
      setProducts([productToAdd, ...products]);
      toast.success("Thêm sản phẩm thành công!");
    }

    // Đóng modal và reset
    setShowModal(false);
    setEditingProduct(null);
  };

  // Hàm xử lý khi đóng/hủy modal
  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProduct(null);
    // setNewProduct(initialProductState); // Không cần reset form ở đây
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
          {/* ... thead (giữ nguyên) ... */}
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
                  <img
                    src={product.image || "/placeholder.png"}
                    alt={product.name}
                    className="table-image"
                    onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                  />
                </td>
                <td className="product-name-cell">{product.name}</td>
                <td>{product.brand}</td>
                <td className="price-cell">{formatPrice(product.price)}</td>
                <td>
                  <span
                    className={`stock-badge ${product.stock < 10 ? "low" : ""}`}
                  >
                    {product.stock}
                  </span>
                </td>
                <td>
                  <span
                    className={`featured-badge ${
                      product.featured ? "active" : ""
                    }`}
                  >
                    {product.featured ? "Có" : "Không"}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    {/* Cập nhật onClick */}
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="btn-icon btn-edit"
                    >
                      <Edit size={16} />
                    </button>
                    {/* Cập nhật onClick */}
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

      {/* Modal Thêm & Sửa Sản Phẩm */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              {/* Cập nhật tiêu đề modal động */}
              <h2>
                {editingProduct ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}
              </h2>
              <button
                className="btn-icon btn-close-modal"
                onClick={handleCloseModal}
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              {/* Các input form (giữ nguyên) */}
              <div className="form-group">
                <label htmlFor="name">Tên sản phẩm</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="brand">Hãng</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={newProduct.brand}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Giá</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="stock">Tồn kho</label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    required
                    min="0"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="image">URL Hình ảnh</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.png"
                />
              </div>
              <div className="form-group form-group-checkbox">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={newProduct.featured}
                  onChange={handleInputChange}
                />
                <label htmlFor="featured">Sản phẩm nổi bật</label>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={handleCloseModal}
                >
                  Hủy
                </button>
                <button type="submit" className="btn-submit">
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
