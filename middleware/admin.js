// middleware/admin.js
export default defineNuxtRouteMiddleware((to, from, next) => {
    const isAdminPage = to.path.includes('/tour')
        || to.path.includes('/account')
        || to.path.includes('/booking')
        || to.path.includes('/dashboard')
        || to.path.includes('/country')
        || to.path.includes('/customer')
        || to.path.includes('/hotel')
        || to.path.includes('/profile')
        || to.path.includes('/tourhotel');
    const nuxtApp = useNuxtApp();
    nuxtApp.isAdminPage = isAdminPage;
});

