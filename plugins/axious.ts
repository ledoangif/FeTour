import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import https from '~/service/Base/axiousInstance';
import { ErrorMessage } from '../.nuxt/components';
import {
    formatTime,
    formatDate,
    getKeyByValue,
    splitArrayByStatusCV,
    capitalize,
    getVietNameseText,
    getAllowedUpdateStatus,
    checkIfAllowedUpdateStatus,
} from '~/assets/js/helper.js';
export default defineNuxtPlugin((nuxtApp) => {
    const toast = useToast();


    // //     Request interceptor
    // https.interceptors.request.use(
    //     (config) => {
    //         //Do something before request is sent
    //         config.headers.Authorization = `Bearer ${typeof localStorage !== 'undefined' ? localStorage.getItem('token') : ''}`;
    //         return config;
    //     },
    //     (error) => {
    //         const isAdminPage = nuxtApp.isAdminPage;
    //         //Handle request error
    //         if (isAdminPage) {
    //             toast.error(error.message);
    //         }
    //         const status = error.response ? error.response.status : null;

    //         if (status === 401 || status === 400) {
    //             return axios(error.config);
    //         } else if (status === 404) {
    //         } else {
    //         }
    //         return Promise.reject(error);
    //     },
    // );

    // //  Response interceptor
    // https.interceptors.response.use(
    //     (response) => {
    //         const isAdminPage = nuxtApp.isAdminPage;
    //         if (isAdminPage && response.config.method != 'get' && response.data.message) {
    //             toast.success(response.data.message);
    //         }
    //         return response;
    //     },
    //     (error) => {
    //         const isAdminPage = nuxtApp.isAdminPage;
    //         var messageError = '';

    //         //{field: 'Trường', message: 'Trường phải là bắt buộc!'} hoặc {message: 'Trường phải là bắt buộc!'} hoặc {status: 400,message: 'Trường phải là một số hợp lệ!'}
    //         if (Array.isArray(error.response.data)) {
    //             const errorMessageCombine = error.response.data.reduce(
    //                 (accumulator: any, currentValue: any) => {
    //                     return accumulator + currentValue.message;
    //                 },
    //                 messageError,
    //             );
    //             if (isAdminPage) {
    //                 toast.error('Response error: <br/>' + errorMessageCombine);
    //             }
    //         } else if (error.response || error.response.data || error.response.data.message) {
    //             if (isAdminPage) {
    //                 toast.error(error.response.data);
    //             }
    //         }

    //         return error.response;
    //     },
    // );

    //Provide the toast instance to your Vue components
    nuxtApp.provide('toast', toast);
});


