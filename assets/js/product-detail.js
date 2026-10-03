var detailProducts = [
  { name: "Son Romand Juicy Lasting Tint", price: 189000, brand: "Romand", category: "Son bóng", image: "sp1.png", code: "RMT-001", shade: "06 Figfig" },
  { name: "Son 3CE Velvet Lip Tint", price: 299000, brand: "3CE", category: "Son lì", image: "sp2.png", code: "3CE-002", shade: "Taupe" },
  { name: "Son Merzy The First Velvet Tint", price: 159000, brand: "Merzy", category: "Son kem", image: "sp3.png", code: "MRZ-003", shade: "V6 Firenze Negroni" },
  { name: "Son Black Rouge Air Fit Velvet", price: 179000, brand: "Black Rouge", category: "Son kem", image: "sp4.png", code: "BR-004", shade: "A12 Dashed Brown" },
  { name: "Son 3CE Velvet Lip Tint", price: 299000, brand: "3CE", category: "Son lì", image: "sp5.png", code: "3CE-005", shade: "Daffodil" },
  { name: "Son Merzy The First Velvet Tint", price: 159000, brand: "Merzy", category: "Son kem", image: "sp6.png", code: "MRZ-006", shade: "V7 Jane Chili" },
  { name: "Son môi mềm mịn Pinky", price: 199000, brand: "Pinky", category: "Son môi", image: "sp7.png", code: "PNK-007", shade: "Rose Nude" },
  { name: "Son tint bóng căng mọng", price: 219000, brand: "Romand", category: "Son bóng", image: "sp8.png", code: "RMT-008", shade: "Coral Mist" },
  { name: "Son lì lâu trôi Velvet", price: 185000, brand: "Black Rouge", category: "Son lì", image: "sp9.png", code: "BR-009", shade: "Vintage Red" },
  { name: "Son kem mịn nhẹ môi", price: 169000, brand: "Merzy", category: "Son kem", image: "sp10.png", code: "MRZ-010", shade: "Soft Brick" },
  { name: "Son dưỡng có màu tự nhiên", price: 145000, brand: "Pinky", category: "Son môi", image: "sp11.png", code: "PNK-011", shade: "Peach" },
  { name: "Son bóng Juicy Gloss", price: 205000, brand: "Romand", category: "Son bóng", image: "sp12.png", code: "RMT-012", shade: "Bare Grape" },
  { name: "Son môi Velvet màu thời thượng", price: 189000, brand: "Pinky", category: "Son môi", image: "sp13.png", code: "PNK-013", shade: "Mauve Pink" }
];
var params = new URLSearchParams(window.location.search);
var productIndex = Number(params.get("id"));
if (!Number.isInteger(productIndex) || productIndex < 0 || productIndex >= detailProducts.length) productIndex = 0;
var product = detailProducts[productIndex];
var detail = document.getElementById("product-detail");
document.title = product.name + " | Pinky Beauty";
document.getElementById("breadcrumb-name").textContent = product.name;
detail.innerHTML = '<div class="detail-gallery"><div class="detail-image"><span class="detail-badge">BÁN CHẠY</span><img src="assets/images/sanpham/' + product.image + '" alt="' + product.name + '"></div><div class="gallery-caption"><i class="fa-solid fa-truck-fast"></i> Đóng gói kỹ càng, giao hàng toàn quốc</div></div>' +
  '<div class="detail-info"><p class="detail-brand">' + product.brand + ' <span>•</span> ' + product.category + '</p><h1>' + product.name + '</h1><div class="detail-rating"><span>★★★★★</span> 4.9 <a href="#reviews">(12 đánh giá)</a></div><p class="detail-price">' + product.price.toLocaleString("vi-VN") + 'đ</p><p class="detail-summary">Sắc son thời thượng với chất son mềm mịn, lên màu đẹp và dễ sử dụng hằng ngày. Lựa chọn hoàn hảo để hoàn thiện phong cách của bạn.</p><div class="detail-meta"><p><span>Mã sản phẩm</span><strong>' + product.code + '</strong></p><p><span>Tình trạng</span><strong class="in-stock"><i class="fa-solid fa-circle-check"></i> Còn hàng</strong></p></div><div class="shade-picker"><strong>Màu gợi ý</strong><button type="button" class="shade-chip selected" aria-pressed="true"><span></span>' + product.shade + '</button></div><div class="purchase-row"><div class="quantity-control"><button type="button" data-quantity="minus" aria-label="Giảm số lượng">−</button><input id="quantity" type="number" min="1" value="1" aria-label="Số lượng"><button type="button" data-quantity="plus" aria-label="Tăng số lượng">+</button></div><button type="button" class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i> Thêm vào giỏ hàng</button></div><p class="cart-message" role="status" aria-live="polite"></p><div class="detail-perks"><span><i class="fa-solid fa-shield-heart"></i> Cam kết chính hãng</span><span><i class="fa-solid fa-rotate-left"></i> Hỗ trợ đổi trả</span></div></div>';
var quantity = document.getElementById("quantity");
detail.querySelectorAll("[data-quantity]").forEach(function (button) { button.addEventListener("click", function () { quantity.value = Math.max(1, Number(quantity.value || 1) + (button.dataset.quantity === "plus" ? 1 : -1)); }); });

