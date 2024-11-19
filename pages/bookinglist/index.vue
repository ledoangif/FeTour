<template>
    <div>
      <h1>Danh sách Đặt Tour</h1>
      <div v-if="loading">Đang tải...</div>
      <div v-if="error" class="error">{{ error }}</div>
  
      <table v-if="bookings.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tour ID</th>
            <th>Customer ID</th>
            <th>Total Bill</th>
            <th>Paymented</th>
            <th>Payment Time</th>
            <th>Status Bill</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" :key="booking.id">
            <td>{{ booking.id }}</td>
            <td>{{ booking.tourId }}</td>
            <td>{{ booking.customerId }}</td>
            <td>{{ booking.totalBill }}</td>
            <td>{{ booking.paymented }}</td>
            <td>{{ booking.paymentTime }}</td>
            <td>{{ booking.statusBill }}</td>
          </tr>
        </tbody>
      </table>
  
      <div v-else>Không có dữ liệu</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import Api from '~/service/Base/api.ts';
  import { useRoute } from 'vue-router';
  
  const api = new Api();
  const bookings = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const route = useRoute();
  
  // Get ID from query params
  const Tourid = computed(() => route.query.id);
  
  const getBookings = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Gửi yêu cầu API để lấy dữ liệu bookings
      const response = await api.get(`/Booking/GetTourBookingsByDate`);
      
      // Nếu có dữ liệu, gán vào bookings
      if (response.data && response.data.data) {
        bookings.value = response.data.data;
      }
    } catch (err) {
      // Hiển thị lỗi nếu có sự cố
      error.value = 'Lỗi khi tải danh sách bookings';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    // Gọi hàm lấy dữ liệu khi component được mounted
    getBookings();
  });
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  