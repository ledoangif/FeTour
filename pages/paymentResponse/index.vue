<template>
    <HeaderHome />
    <section class="banner_inner" id="home">
        <div class="banner_inner_overlay"></div>
    </section>
  <div class="fs-5 border-bottom py-4">
    <div class="container d-flex flex-row">
      <div class="me-2 text-primary">1. Nhập thông tin ></div>
      <div class="me-2 text-primary">2. Đặt cọc ></div>
      <div class="text-primary">3. Kết quả</div>
    </div>
  </div>
  
  <div class="container payment-response mt-4">
    <h1 class="text-center">Kết quả đặt tour</h1>
    <div v-if="isSuccess">
      <h2 class="text-success text-center">Đặt tour thành công!</h2>
      <table class="table table-bordered mt-3">
        <thead class="table-light">
          <tr>
            <th>Thông tin</th>
            <th>Giá trị</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mã đặt tour</td>
            <td>{{ orderDescription }}</td>
          </tr>
          <tr>
            <td>Mã giao dịch</td>
            <td>{{ transactionId }}</td>
          </tr>
          <tr>
            <td>ID đơn hàng</td>
            <td>{{ orderId }}</td>
          </tr>
          <tr>
            <td>Số tiền đặt cọc</td>
            <td>100.000 vnd</td>
          </tr>
          <!-- <tr>
            <td>Phương thức thanh toán</td>
            <td>{{ paymentMethod }}</td>
          </tr> -->
          <tr>
            <td>ID thanh toán</td>
            <td>{{ paymentId }}</td>
          </tr>
          <!-- <tr>
            <td>Mã phản hồi VnPay</td>
            <td>{{ vnPayResponseCode }}</td>
          </tr> -->
          <tr>
            <td>Trạng thái thanh toán</td>
            <td>Thành công</td>
          </tr>
        </tbody>
      </table>
      <h6>Thông tin đặt tour của bạn sẽ được gửi qua email bạn đã cung cấp .</h6>
    </div>
    <div v-else>
      <h2 class="text-center text-danger">Đặt tour thất bại!</h2>
      <p class="text-center ">Vui lòng kiểm tra lại thông tin và thử lại.</p>
      <!-- <p class="text-center">Mã phản hồi VnPay: {{ vnPayResponseCode }}</p> -->
    </div>
  </div>

  <br />
  <Footer />
</template>

<script setup>
definePageMeta({
  layout: false,
});
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Api from '~/service/Base/api.ts'; // Đảm bảo đã có import Api

const api = new Api();
const route = useRoute()
const isSuccess = ref(false)
const orderDescription = ref('')
const transactionId = ref('')
const orderId = ref('')
const paymentMethod = ref('')
const paymentId = ref('')
const vnPayResponseCode = ref('')

onMounted(async () => {
  const params = route.query

  isSuccess.value = params.success === 'true'
  orderDescription.value = params.orderDescription || ''
  transactionId.value = params.transactionId || ''
  orderId.value = params.orderId || ''
  paymentMethod.value = params.paymentMethod || ''
  paymentId.value = params.paymentId || ''
  vnPayResponseCode.value = params.vnPayResponseCode || ''

  // Nếu thanh toán thành công, gọi hàm để cập nhật trạng thái booking
  if (isSuccess.value && orderDescription.value) {
    const bookingId = parseInt(orderDescription.value, 10); // Chuyển đổi thành số nguyên
    await updateBookingStatus(bookingId); // Gọi API để cập nhật trạng thái
  }
})

const updateBookingStatus = async (bookingId) => {
  try {
    const response = await api.putAPI(`/Booking/UpdateStatusToUnpaid?bookingId=${bookingId}`);
    console.log('Cập nhật trạng thái thành công:', response.data);
  } catch (error) {
    console.error('Lỗi cập nhật trạng thái booking:', error);
  }
}
</script>
<style scoped>
@import '../../assets/css/bootstrap.css';
@import '../../assets/css/style.css';
@import '../../assets/css/font-awesome.min.css';
@import '../../assets/css/css_slider.css';
@import '../../assets/vendor/mdi-font/css/material-design-iconic-font.min.css';
@import '../../assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
@import '../../assets/vendor/select2/select2.min.css';
.payment-response {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}
</style>
