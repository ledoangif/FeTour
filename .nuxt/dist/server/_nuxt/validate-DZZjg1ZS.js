import { format } from "date-fns";
function formatDate(date) {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) {
    return "Invalid Date";
  }
  return format(parsedDate, "dd-MM-yyyy");
}
function formatDate2(isoString) {
  const dateObject = new Date(isoString);
  const weekdays = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy"
  ];
  const weekdayStr = weekdays[dateObject.getDay()];
  const formattedDate = `${weekdayStr}, ngày ${dateObject.getDate()} tháng ${dateObject.getMonth() + 1} năm ${dateObject.getFullYear()}`;
  return formattedDate;
}
function formatCurrency(value) {
  if (value == null) {
    return "Chưa xác định";
  }
  if (value === 0) {
    return "0";
  }
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(value);
}
export {
  formatDate as a,
  formatDate2 as b,
  formatCurrency as f
};
//# sourceMappingURL=validate-DZZjg1ZS.js.map
