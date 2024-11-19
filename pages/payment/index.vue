<!-- <template>
    <HeaderDetail />
      <div class="fs-5 border-bottom py-4">
        <div class="container d-flex flex-row">
            <div style="color: #377df4" class="me-2" >1.Nhập thông tin ></div>
            <div style="color: #377df4" class="me-2">2.Đặt cọc</div>
        </div>
    </div>
    <br/>
    <section class="packages">
        <div class="payment-form">
          <form @submit.prevent="submitPayment">
            <div class="form-group">
              <label for="orderType">Loại thanh toán</label>
              <select v-model="orderType" id="orderType" class="form-control">
                <option value="payment">Đặt cọc</option>
                <option value="other">Khác</option>
              </select>
            </div>

            <div class="form-group">
              <label for="name">Mã booking</label>
              <input v-model="name" id="name" class="form-control" type="text" />
            </div>
            <div class="form-group">
              <label for="description">Nội dung thanh toán</label>
              <textarea v-model="description" id="description" class="form-control"></textarea>
            </div>
            <div class="form-group">
              <label for="amount">Số tiền</label>
              <input v-model="amount" id="amount" class="form-control" type="number" />
              <p style="color: #dc3545; font-weight: normal;">Số tiền đặt cọc mặc định là 100,000 VND. </p>
              <p style="color: #dc3545; font-weight: normal;"> Lưu ý : Không hoàn lại tiền đặt cọc </p>
            </div>
            <button type="submit" class="btn btn-primary">Thanh toán</button>
          </form>
          <br/>
        </div>
  </section>
  <Footer /> 
</template>

<script setup>
import Api from '../../service/Base/api'

const orderType = ref('payment')
const bookingId = ref('')
const amount = ref(100000)
const description = ref('Thanh toán đặt cọc')

const api = new Api()


const submitPayment = async () => {
  try {
    const paymentData = {
      OrderType: orderType.value,
      BookingId: bookingId.value,
      Amount: amount.value,
      OrderDescription: description.value,
    }
    const response = await api.postAPI('/payment/create', paymentData)
    if (response && response.data) {
      window.location.href = response.data.paymentUrl // Điều hướng đến URL thanh toán trả về từ API
    }
  } catch (error) {
    console.error('Lỗi thanh toán:', error)
  }
}

definePageMeta({
    layout: false,
});
</script>

<style scoped>
.payment-form {
  max-width: 500px;
  margin: auto;
}
</style> -->
<template>
      <HeaderHome />
    <section class="banner_inner" id="home">
        <div class="banner_inner_overlay"></div>
    </section>
  <div class="fs-5 border-bottom py-4">
    <div class="container d-flex flex-row">
      <div style="color: #377df4" class="me-2">1.Nhập thông tin ></div>
      <div style="color: #377df4" class="me-2">2.Đặt cọc</div>
    </div>
  </div>
  <br/>
  <section class="packages">
    <div class="payment-form">
      <form @submit.prevent="submitPayment">
        <div class="form-group">
          <label for="orderType">Loại thanh toán</label>
          <select v-model="orderType" id="orderType" class="form-control" disabled>
            <option value="payment">Đặt cọc</option>
            <option value="other">Khác</option>
          </select>
        </div>

        <div class="form-group">
          <label for="bookingId">Mã booking</label>
          <input v-model="bookingId" id="bookingId" class="form-control" type="text" readonly />
        </div>

        <div class="form-group">
          <label for="description">Nội dung thanh toán</label>
          <textarea v-model="description" id="description" class="form-control" readonly></textarea>
          <!-- Đặt thuộc tính readonly để không cho phép người dùng thay đổi -->
        </div>
        
        <div class="form-group">
          <label for="amount">Số tiền</label>
          <input v-model="amount" id="amount" class="form-control" type="number" readonly />
          <!-- Đặt thuộc tính readonly để không cho phép người dùng thay đổi -->
          <p style="color: #dc3545; font-weight: normal;">Số tiền đặt cọc mặc định là 100,000 VND. </p>
          <p style="color: #dc3545; font-weight: normal;">Lưu ý : Không hoàn lại tiền đặt cọc</p>
        </div>
        <button type="submit" class="btn btn-primary">Thanh toán</button>
      </form>
      <br/>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Api from '../../service/Base/api';

const orderType = ref('payment');
const bookingId = ref(''); // Khởi tạo bookingId
const amount = ref(100000); // Khởi tạo số tiền
const description = ref(''); // Khởi tạo description

const api = new Api();
const route = useRoute();

onMounted(() => {
  const id = route.query.bookingId || ''; // Lấy giá trị BookingId từ query
  bookingId.value = id; // Gán BookingId
  description.value = `Thanh toán đặt cọc cho mã booking: ${id}`; // Gán mô tả với BookingId
});

const submitPayment = async () => {
  try {
    const paymentData = {
      OrderType: orderType.value, // Gửi loại thanh toán
      BookingId: bookingId.value, // Gửi BookingId cố định
      Amount: amount.value, // Gửi số tiền
      OrderDescription: description.value, // Gửi mô tả
    };
    const response = await api.postAPI('/payment/create', paymentData);
    if (response && response.data) {
      window.location.href = response.data.paymentUrl; // Điều hướng đến URL thanh toán trả về từ API
    }
  } catch (error) {
    console.error('Lỗi thanh toán:', error);
  }
}

definePageMeta({
    layout: false,
});
</script>

<style scoped>
@import '../../assets/css/bootstrap.css';
@import '../../assets/css/style.css';
@import '../../assets/css/font-awesome.min.css';
@import '../../assets/css/css_slider.css';
@import '../../assets/vendor/mdi-font/css/material-design-iconic-font.min.css';
@import '../../assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
@import '../../assets/vendor/select2/select2.min.css';
.payment-form {
  max-width: 500px;
  margin: auto;
}
</style>
