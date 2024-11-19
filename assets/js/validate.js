import { format } from 'date-fns';
import Tour_constants from '~/assets/js/constants/constants';
function isArrayEmpty(arr) {
    var errors = []
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        errors.push('Input is not an array.');
    }
    // Check if the array length is zero
    return arr.length === 0;
}

/**
 * Handle yyyy-MM-dd format dates
 * @param {*} date
 */
function formatDateYYYYmmdd(date) {
    if (typeof date !== 'string') {
        return 'Invalid Date';
    }
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
        return 'Invalid Date';
    }
    return format(dateObj, 'yyyy-MM-dd');
};
function formatDate (date)  {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
        return 'Invalid Date'; // Or any other fallback message
    }
    return format(parsedDate, 'dd-MM-yyyy');
};
function formatDate2 (isoString) {
    const dateObject = new Date(isoString);
    const weekdays = [
        'Chủ Nhật',
        'Thứ Hai',
        'Thứ Ba',
        'Thứ Tư',
        'Thứ Năm',
        'Thứ Sáu',
        'Thứ Bảy',
    ];
    const weekdayStr = weekdays[dateObject.getDay()];

    const formattedDate = `${weekdayStr}, ngày ${dateObject.getDate()} tháng ${dateObject.getMonth() + 1} năm ${dateObject.getFullYear()}`;

    return formattedDate;
};
// Tạo một hàm để định dạng số tiền
function formatCurrency(value) {
    if (value == null) {
        return 'Chưa xác định';
    }
    if (value === 0) {
        return '0';
    }
    return Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value);
}
function addTwoHoursAndFormat (datePay) {
    var date = new Date(datePay);
    date.setHours(date.getHours() + 2); // Thêm 2 giờ

    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear();
    var formattedDateTime = `${hours}:${minutes} ${day}/${month}/${year}`;
    return formattedDateTime;
};
function addOneDay (datePay)
{
    var date = new Date(datePay);
    date.setDate(date.getDate() + 1);
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear();
    var formattedDateTime = `${hours}:${minutes} ${day}/${month}/${year}`;
    return formattedDateTime;
}
function paymentDeadline (paymentBy,paymentTime) 
    {
        return paymentBy === Tour_constants.Cash ? addOneDay(paymentTime) : addTwoHoursAndFormat(paymentTime);
    }
function formatDatePayment (datePay) {
        var date = new Date(datePay);
    
        var hours = date.getHours().toString().padStart(2, '0');
        var minutes = date.getMinutes().toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
    
        var year = date.getFullYear();
        var formattedDateTime = `${hours}:${minutes} ${day}/${month}/${year}`;
        return formattedDateTime;
    };
function maskPhoneNumber (phoneNumber) {
        if (!phoneNumber || phoneNumber.length < 6) {
            return phoneNumber;
        }
        var start = phoneNumber.slice(0, 3);
        var end = phoneNumber.slice(-3);
        var masked = start + '***' + end;
        return masked;
    };
export { isArrayEmpty, formatDateYYYYmmdd, formatCurrency,formatDate,formatDate2,addTwoHoursAndFormat,addOneDay,paymentDeadline ,formatDatePayment,maskPhoneNumber}
