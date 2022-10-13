// BÀI 1
// ĐẦU VÀO: Nhập vào Tiền lương 01 ngày và Số ngày làm việc của nhân viên
// XỬ LÝ: Tiền lương = Lương 01 ngày x Số ngày làm
// ĐẦU RA: Xuất ra tiền lương của nhân viên
document.getElementById("ex01SubmitBtn").onclick = function () {
  let oneDayWage = document.getElementById("oneDayWage").value
  let workDays = document.getElementById("workDays").value
  let result = oneDayWage * workDays
  document.getElementById("ex01SubmitBtn").classList += " mb-3"
  document.getElementById("ex01Result").classList = "alert alert-primary m-0"
  document.getElementById("ex01Result").innerHTML = "Kết quả: " + result.toLocaleString("en-US")
}

// BÀI 2
// ĐẦU VÀO: Nhập vào 5 số thực
// XỬ LÝ: Trung bình = Tổng 5 số thực / 5
// ĐẦU RA: Xuất ra trung bình cộng của 5 số thực
document.getElementById("ex02SubmitBtn").onclick = function () {
  let num01 = parseFloat(document.getElementById("num01").value)
  let num02 = parseFloat(document.getElementById("num02").value)
  let num03 = parseFloat(document.getElementById("num03").value)
  let num04 = parseFloat(document.getElementById("num04").value)
  let num05 = parseFloat(document.getElementById("num05").value)
  let result = (num01 + num02 + num03 + num04 + num05) / 5
  document.getElementById("ex02SubmitBtn").classList += " mb-3"
  document.getElementById("ex02Result").classList = "alert alert-primary m-0"
  document.getElementById("ex02Result").innerHTML = "Kết quả: " + result.toLocaleString("en-US")
}

//BÀI 3
//ĐẦU VÀO: Nhập vào số tiền USD
//XỬ LÝ: Số tiền VNĐ = Số tiền USD x Tỉ giá USD/VNĐ
//ĐẦU RA: Xuất ra số tiền VNĐ tương ứng
document.getElementById("ex03SubmitBtn").onclick = function () {
  let USD = parseInt(document.getElementById("USD").value)
  let rate = parseInt(document.getElementById("rate").value)
  let result = USD * rate
  document.getElementById("ex03SubmitBtn").classList += " mb-3"
  document.getElementById("ex03Result").classList = "alert alert-primary m-0"
  document.getElementById("ex03Result").innerHTML = "Kết quả: " + result.toLocaleString("en-US") + " VNĐ"
}

// BÀI 4
// ĐẦU VÀO: Nhập vào Chiều dài và Chiều rộng của hình chữ nhật
// XỬ LÝ:
// - Diện tích = Chiều dài x Chiều rộng
// - Chu vi = (Chiều dài + Chiều rộng) x 2
// ĐẦU RA: Xuất ra Diện tích và Chu vi
document.getElementById("ex04SubmitBtn").onclick = function () {
  let length = parseInt(document.getElementById("length").value)
  let width = parseInt(document.getElementById("width").value)
  let diameter = (length + width) * 2
  let area = length * width
  document.getElementById("ex04SubmitBtn").classList += " mb-3"
  document.getElementById("ex04Result").classList = "alert alert-primary m-0"
  document.getElementById("ex04Result").style.lineHeight = "1.5"
  document.getElementById("ex04Result").innerHTML = "Kết quả: "
  document.getElementById("ex04Result").innerHTML += "<br>"
  document.getElementById("ex04Result").innerHTML += "Chu vi: " + diameter.toLocaleString("en-us")
  document.getElementById("ex04Result").innerHTML += "<br>"
  document.getElementById("ex04Result").innerHTML += "Diện tích: " + area.toLocaleString("en-us")
}

// BÀI 5
// ĐẦU VÀO: Nhập vào Số có 2 chữ số
// XỬ LÝ:
// - Tổng 2 ký số = Số hàng chục + Số hàng đơn vị
// - Số hàng chục = Số / 10
// - Số hàng đơn vị = Số % 10
// ĐẦU RA: Xuất ra tổng 2 ký số
document.getElementById("ex05SubmitBtn").onclick = function () {
  let num = parseInt(document.getElementById("num").value)
  let tens = Math.floor(num / 10);
  let units = num % 10;
  let result = tens + units;
  document.getElementById("ex05SubmitBtn").classList += " mb-3"
  document.getElementById("ex05Result").classList = "alert alert-primary m-0"
  document.getElementById("ex05Result").innerHTML = "Kết quả: " + result
}