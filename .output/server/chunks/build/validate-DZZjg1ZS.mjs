import { format } from 'date-fns';

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
    "Ch\u1EE7 Nh\u1EADt",
    "Th\u1EE9 Hai",
    "Th\u1EE9 Ba",
    "Th\u1EE9 T\u01B0",
    "Th\u1EE9 N\u0103m",
    "Th\u1EE9 S\xE1u",
    "Th\u1EE9 B\u1EA3y"
  ];
  const weekdayStr = weekdays[dateObject.getDay()];
  const formattedDate = `${weekdayStr}, ng\xE0y ${dateObject.getDate()} th\xE1ng ${dateObject.getMonth() + 1} n\u0103m ${dateObject.getFullYear()}`;
  return formattedDate;
}
function formatCurrency(value) {
  if (value == null) {
    return "Ch\u01B0a x\xE1c \u0111\u1ECBnh";
  }
  if (value === 0) {
    return "0";
  }
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(value);
}

export { formatDate as a, formatDate2 as b, formatCurrency as f };
//# sourceMappingURL=validate-DZZjg1ZS.mjs.map
