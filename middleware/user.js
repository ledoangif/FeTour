// middleware/user.js
export default defineNuxtRouteMiddleware((to, from, next) => {
    const allowedUserPages = to.path.includes('/booking')  // Chỉ cho phép người dùng truy cập các trang này
        || to.path.includes('/profile')  // Các trang khác người dùng có thể truy cập
        || to.path.includes('/tour');   // Ví dụ về trang tour

    const nuxtApp = useNuxtApp();
    nuxtApp.isUserPage = allowedUserPages;

    const role = localStorage.getItem('role');
    const isAuthenticated = !!localStorage.getItem('token');

    if (!isAuthenticated || (role !== 'User')) {
        return navigateTo('/abc');  // Nếu không phải nhân viên hoặc khách hàng, chuyển hướng về trang login
    }

    // Kiểm tra nếu trang yêu cầu quyền truy cập của người dùng
    if (allowedUserPages) {
        return next();
    } else {
        // Nếu không được phép truy cập trang này
        return navigateTo('/');  // Hoặc chuyển hướng đến một trang khác
    }
});
