<template>
    <NuxtLayout name="Admin">
        
        <LineChart :totalBill="totalBill" :totalTour="totalTour" :totalHotel="totalHotel" :account="account" />
    </NuxtLayout>
</template>

<script setup>
import { ref, onMounted,computed } from 'vue';
import API from '../service/Base/api';
import Tour_constants from '../assets/js/constants/constants.js';
import LineChart from '../components/Client/LineChart.vue';


/**
 * auth
 */
 definePageMeta({
    middleware: ['auth','admin','auth-admin'],
});
/**
 * init data
 */
const api = new API();
const account = ref(0);
const totalTour = ref(0);
const totalHotel = ref(0);
const Bill = ref([]);
const ListToTalBill = ref([]);

/**
 * Get data
 */
onMounted(async () => {
    const accountAPI = await api.get('/Account/All');
    account.value = accountAPI.data.responseData.length;
    const resTour = await api.get(`/Tour`, null);
    totalTour.value = resTour.data.responseData.length;
    const resHotel = await api.get(`/Hotel`, null);
    totalHotel.value = resHotel.data.responseData.length;
    const resBooking = await api.get(`/Booking`, null);
    Bill.value = resBooking.data.responseData;
    
    // get list bill in this year
    const currentYear = new Date().getFullYear();
    Bill.value.forEach((bill) => {
        const billDate = new Date(bill.updateDate);
        const billYear = billDate.getFullYear();
        if (bill.statusBill == Tour_constants.Paid && billYear == currentYear) {
            ListToTalBill.value.push(bill.paymented);
        }
    });
});

/**
 * total bill
 */
const totalBill = computed(() => {
    let sum = 0;
    ListToTalBill.value.forEach((item) => {
        sum += item;
    });
    return sum;
});
</script>

<style lang="scss" scoped></style>
