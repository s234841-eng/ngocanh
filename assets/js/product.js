
var products = [
  { name: "Son Romand Juicy Lasting Tint", price: 189000, brand: "Romand", category: "son-bong", image: "sp1.png" },
  { name: "Son 3CE Velvet Lip Tint", price: 299000, brand: "3CE", category: "son-li", image: "sp2.png" },
  { name: "Son Merzy The First Velvet Tint", price: 159000, brand: "Merzy", category: "son-kem", image: "sp3.png" },
  { name: "Son Black Rouge Air Fit Velvet", price: 179000, brand: "Black Rouge", category: "son-kem", image: "sp4.png" },
  { name: "Son 3CE Velvet Lip Tint", price: 299000, brand: "3CE", category: "son-li", image: "sp5.png" },
  { name: "Son Merzy The First Velvet Tint", price: 159000, brand: "Merzy", category: "son-kem", image: "sp6.png" },
  { name: "Son môi mềm mịn Pinky", price: 199000, brand: "Pinky", category: "son-moi", image: "sp7.png" },
  { name: "Son tint bóng căng mọng", price: 219000, brand: "Romand", category: "son-bong", image: "sp8.png" },
  { name: "Son lì lâu trôi Velvet", price: 185000, brand: "Black Rouge", category: "son-li", image: "sp9.png" },
  { name: "Son kem mịn nhẹ môi", price: 169000, brand: "Merzy", category: "son-kem", image: "sp10.png" },
  { name: "Son dưỡng có màu tự nhiên", price: 145000, brand: "Pinky", category: "son-moi", image: "sp11.png" },
  { name: "Son bóng Juicy Gloss", price: 205000, brand: "Romand", category: "son-bong", image: "sp12.png" },
  { name: "Son môi Velvet màu thời thượng", price: 189000, brand: "Pinky", category: "son-moi", image: "sp13.png" }
];

var productGrid = document.getElementById("product-grid");
var searchInput = document.getElementById("search-input");
var sortSelect = document.getElementById("sort-select");
var resultCount = document.getElementById("result-count");
var emptyState = document.getElementById("empty-state");
var selectedCategory = "all";

// Đọc danh mục trên đường dẫn, ví dụ: product.html?category=son-li
if (window.location.search.indexOf("category=son-li") !== -1) {
  selectedCategory = "son-li";
} else if (window.location.search.indexOf("category=son-kem") !== -1) {
  selectedCategory = "son-kem";
} else if (window.location.search.indexOf("category=son-bong") !== -1) {
  selectedCategory = "son-bong";
} else if (window.location.search.indexOf("category=son-moi") !== -1) {
  selectedCategory = "son-moi";
}


function showProducts() {
  var searchText = searchInput.value.toLowerCase();
  var shownProducts = [];


  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    var productText = (product.name + " " + product.brand).toLowerCase();
    var matchesSearch = productText.indexOf(searchText) !== -1;

    if (matchesCategory && matchesSearch) {
      shownProducts.push(product);
    }
  }


  if (sortSelect.value === "name") {
    shownProducts.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  } else if (sortSelect.value === "price-asc") {
    shownProducts.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortSelect.value === "price-desc") {
    shownProducts.sort(function (a, b) {
      return b.price - a.price;
    });
  }


  productGrid.innerHTML = "";
  resultCount.textContent = shownProducts.length + " sản phẩm dành cho bạn";
  emptyState.hidden = shownProducts.length > 0;

  for (var j = 0; j < shownProducts.length; j++) {
    var item = shownProducts[j];
    var priceText = item.price.toLocaleString("vi-VN") + "đ";

    productGrid.innerHTML +=
      '<article class="catalogue-card">' +
        '<div class="catalogue-image">' +
          '<span class="catalogue-tag">NỔI BẬT</span>' +
          '<a href="product-detail.html?id=' + products.indexOf(item) + '" aria-label="Xem chi tiết ' + item.name + '"><img src="assets/images/sanpham/' + item.image + '" alt="' + item.name + '" loading="lazy"></a>' +
        '</div>' +
        '<div class="catalogue-info">' +
          '<p class="catalogue-brand">' + item.brand + '</p>' +
          '<h3><a class="catalogue-title-link" href="product-detail.html?id=' + products.indexOf(item) + '">' + item.name + '</a></h3>' +
          '<div class="catalogue-stars">★★★★★ <span>(12)</span></div>' +
          '<div class="catalogue-bottom">' +
            '<span class="catalogue-price">' + priceText + '</span>' +
            '<button class="catalogue-add" type="button" aria-label="Thêm vào giỏ"><i class="fa-solid fa-bag-shopping"></i></button>' +
          '</div>' +
        '</div>' +
      '</article>';
  }
}

// Nút lọc danh mục ở cột bên trái.
var categoryButtons = document.getElementsByClassName("category-filter");
for (var k = 0; k < categoryButtons.length; k++) {
  categoryButtons[k].addEventListener("click", function () {
    selectedCategory = this.getAttribute("data-category");

    for (var n = 0; n < categoryButtons.length; n++) {
      categoryButtons[n].classList.remove("active");
    }
    this.classList.add("active");

    showProducts();
  });
}

// Các liên kết danh mục trong menu phía trên.
var menuCategories = document.querySelectorAll(".dropdown-menu [data-category]");
for (var m = 0; m < menuCategories.length; m++) {
  menuCategories[m].addEventListener("click", function () {
    selectedCategory = this.getAttribute("data-category");

    for (var p = 0; p < categoryButtons.length; p++) {
      categoryButtons[p].classList.remove("active");
      if (categoryButtons[p].getAttribute("data-category") === selectedCategory) {
        categoryButtons[p].classList.add("active");
      }
    }
    showProducts();
  });
}

// Cập nhật danh sách khi người dùng nhập từ khóa hoặc đổi cách sắp xếp.
searchInput.addEventListener("input", showProducts);
sortSelect.addEventListener("change", showProducts);
document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault();
  showProducts();
});

// Hiển thị toàn bộ sản phẩm khi mở trang.
for (var q = 0; q < categoryButtons.length; q++) {
  if (categoryButtons[q].getAttribute("data-category") === selectedCategory) {
    categoryButtons[q].classList.add("active");
  } else {
    categoryButtons[q].classList.remove("active");
  }
}
showProducts();
