import { jwtDecode } from 'jwt-decode';
import Tour_constants from '../assets/js/constants/constants.js'
export default defineNuxtRouteMiddleware((to, from) => {
    const router = useRouter();
    if (process.client) {
        if (to.path === '/account' || to.path === '/Dashboard') {
            const role = localStorage.getItem('role');
            const jwtToken = localStorage.getItem('token');
            if (typeof jwtToken !== 'string' || jwtToken.trim() === '') {
                router.push('/login').then();
                return;
            }
            if (role !== 'Admin') {

                return;
            }
        }
    }
});