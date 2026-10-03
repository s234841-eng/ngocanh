(function () {
  var form = document.getElementById("checkout-form");
  var message = document.getElementById("checkout-message");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "";

    if (!form.reportValidity()) return;

    var data = new FormData(form);
    var order = {
      id: "PK" + Date.now().toString().slice(-8),
      customer: {
        name: data.get("name").trim(),
        phone: data.get("phone").trim(),
        email: data.get("email").trim(),
        address: data.get("address").trim(),
        city: data.get("city").trim(),
        note: data.get("note").trim()
      },
      payment: data.get("payment"),
      total: 488000,
      createdAt: new Date().toISOString()
    };

    try {
      var orders = JSON.parse(localStorage.getItem("pinky-orders") || "[]");
      orders.push(order);
      localStorage.setItem("pinky-orders", JSON.stringify(orders));
    } catch (error) {
      message.textContent = "Không thể lưu đơn hàng trên trình duyệt này. Vui lòng thử lại.";
      return;
    }

    var layout = document.querySelector(".checkout-layout");
    layout.innerHTML =
      '<section class="success-card" role="status">' +
        '<i class="fa-solid fa-circle-check"></i>' +
        '<h2>Đặt hàng thành công!</h2>' +
        '<p>Cảm ơn ' + escapeHtml(order.customer.name) + '. Pinky Beauty đã nhận được đơn hàng của bạn.</p>' +
        '<p>Mã đơn hàng: <strong>' + order.id + '</strong></p>' +
        '<p>Tổng thanh toán: <strong>488.000₫</strong></p>' +
        '<a class="primary-button" href="index.html">Tiếp tục mua sắm</a>' +
      '</section>';
  });

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }
})();
