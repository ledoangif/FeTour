<template>
    <HeaderHome />
    <section class="banner_inner" id="home">
        <div class="banner_inner_overlay"></div>
    </section>
    <div class="fs-5 border-bottom py-4">
        <div class="container d-flex flex-row">
            <div style="color: #377df4" class="me-2" >1.Nhập thông tin </div>
        </div>
    </div>
    <section class="packages">
        <div class="container py-lg-4">
            <div class="row bg-light rounded-5" id="displayTours" style="height: 250px">
                <div class="col-4 p-0 m-0">
                    <div class="image-tour3 position-relative">
                        <img
                            :src="Tour.image"
                            class="img-fluid"
                            style="width: 100%; height: 100%; object-fit: cover"
                        />
                    </div>
                </div>
                <div class="col-8">
                    <h5 class="mt-3">{{ Tour.nameTour }}</h5>
                    <h6 class="mt-3">
                        Ngày khởi hành : {{ formatDate(Tour.dateStart) }}
                    </h6>
                    <h6 class="mt-3">Thời gian : {{ Tour.numOfDay }} ngày</h6>
                    <h6 class="mt-3">Nơi khởi hành : {{ Tour.placeStart }}</h6>
                    <h6 class="mt-3">Số chỗ còn nhận : {{ Tour.slot }}</h6>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-8">
                    <h4 class="heading fw-bold">Tổng quan về chuyến đi</h4>
                    <h5 class="heading mt-5">Thông tin liên lạc</h5>
                    <Form class="rounded-4 bg-light mt-2" style="height: 250px">
                        <div class="row">
                            <div class="col-6">
                                <div class="my-3 form-group required">
                                    <label
                                        for="source-name"
                                        class="col-form-label control-label ms-4"
                                    >
                                        Họ và tên
                                    </label>
                                    <div class="col-sm-12">
                                        <Field
                                            name="nameCustomer"
                                            v-model="CustomerInfo.nameCustomer"
                                            type="text"
                                            class="form-control"
                                            :rules="{required: true,onlyCharacters:true}"
                                        />
                                        <ErrorMessage name="nameCustomer" class ="text-danger"  />
                                    </div>
                                    
                                </div>
                                <div class="my-3 form-group required">
                                    <label
                                        for="source-name"
                                        class="col-form-label control-label ms-4"
                                    >
                                        Số điện thoại
                                    </label>
                                    <div class="col-sm-12">
                                        <Field
                                            name="phoneNumber"
                                            v-model="CustomerInfo.phoneNumber"
                                            type="text"
                                            class="form-control"
                                            :rules="{required : true,phone: true}"
                                             />
                                       <ErrorMessage name="phoneNumber" class="text-danger" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="my-3 form-group required">
                                    <label
                                        for="source-name"
                                        class="col-form-label control-label ms-4"
                                    >
                                        Email
                                    </label>
                                    <div class="col-sm-12">
                                        <Field
                                            name="email"
                                            v-model="CustomerInfo.email"
                                            type="text"
                                            class="form-control"
                                            :rules="{required: true,email: true}"
                                        />
                                        <ErrorMessage name="email" class="text-danger" />
                                    </div>
                                
                                </div>
                                <div class="my-3 form-group required">
                                    <label
                                        for="source-name"
                                        class="col-form-label control-label ms-4"
                                    >
                                        Địa chỉ
                                    </label>
                                    <div class="col-sm-12">
                                        <Field
                                        name="address"
                                            v-model="CustomerInfo.address"
                                            type="text"
                                            class="form-control"
                                            :rules="{required: true}"
                                       />
                                       <ErrorMessage name="address" class="text-danger" /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <h4 class="heading mt-5">Hành khách</h4>
                    <div class="row mt-3 ms-1 d-flex justify-content-between">
                        <div
                            class="col-5 rounded-3"
                            style="
                                border: 2px solid rgba(211, 211, 211, 0.5);
                                height: 50px;
                            "
                        >
                            <div class="d-flex flex-row justify-content-between">
                                <div>
                                    <span class="fw-bold">Người lớn</span> <br />
                                    <span>Từ 12 tuổi trở lên</span>
                                </div>
                                <div class="d-flex flex-row py-2">
                                    <i
                                        class="fa-solid fa-minus me-2 mt-2"
                                        @click="subResult()"
                                    ></i>
                                    <h5>{{countAdult }}</h5>
                                    <i
                                        class="fa-solid fa-plus ms-2 mt-2"
                                        @click="addResult()"
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-5 rounded-3"
                            style="
                                border: 2px solid rgba(211, 211, 211, 0.5);
                                height: 50px;
                            "
                        >
                            <div class="d-flex flex-row justify-content-between">
                                <div>
                                    <span class="fw-bold">Trẻ em </span> <br />
                                    <span>Từ 2 tuổi đến dưới 12 tuổi</span>
                                </div>
                                <div class="d-flex flex-row py-2">
                                    <i
                                        class="fa-solid fa-minus me-2 mt-2"
                                        @click="subChild()"
                                    ></i>
                                    <h5>{{ countChild }}</h5>
                                    <i
                                        class="fa-solid fa-plus ms-2 mt-2"
                                        @click="addChild()"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="heading mt-5">Thông tin hành khách</h5>
                    <div class="rounded-4 bg-light mt-2" style="height: 400px">
                        <div class="my-3 form-group ">
                            <label
                                for="source-name"
                                class="col-form-label control-label ms-4"
                            >
                                Họ và tên
                            </label>
                            <div class="col-sm-12">
                                <TipTap v-model="ListCustomer"></TipTap>
                            </div>
                            <div class="text-danger ms-4 mt-2">
                                <div class="required mb-3">Hướng dẫn điền thông tin:</div>
                                <div>
                                    Qúy khách chọn
                                    <i class="fa-solid fa-clipboard-list"></i> trên thanh
                                    công cụ của ô trống<br />
                                    Sau khi đã hiển thị dạng 1. trong ô trống. Quý khách
                                    hãy nhập thông tin hành khách trong vé đặt tour này
                                    dưới dạng như sau: <br />
                                    1. Nguyễn Văn A, 23/09/1991 <br />
                                    2. Trần Long Anh, 23/09/1970<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             <InforTour  :countAdult="countAdult" 
        :countChild="countChild"
        :toTalChild="ToTalChild"
        :toTalBill="ToTalBill"
        :formatDate2="formatDate2"
        :tour="Tour"
        :customer="CustomerInfo"
        :listCustomer ="ListCustomer"
        :payment="payment"/>
            </div>
        </div>
    </section>

    <Footer />
</template>
<script setup>
import Api from '~/service/Base/api.ts';
import { ref,onMounted} from 'vue';
import { useRoute } from 'nuxt/app';
import Tour_constants from '~/assets/js/constants/constants';
import { formatDate,formatDate2 } from '~/assets/js/validate';
import {Form, Field, ErrorMessage} from 'vee-validate'
const api = new Api();
const route = useRoute();
const Tour = ref([]);
const countAdult = ref(1);
const countChild = ref(0);
const ListCustomer = ref(null);
const CustomerInfo = ref({
    nameCustomer:'',
    phoneNumber:'',
    address:'',
    email:'',
})
const Tourid = computed(() => route.query.id);

const payment = ref(null);

let isPaymentSelected = false;

const customerItemPayment = async () => {
    return {
        border: '2px solid gray',
    };
};
const togglePaymentInfo = async (index) => {
    if (payment.value === index) {
        payment.value = null;
        isPaymentSelected = false;
    } else {
        const cssStyle = await customerItemPayment();
        const elements = document.querySelectorAll('.payment');
        elements.forEach((element) => {
            Object.assign(element.style, cssStyle);
        });
        payment.value = index;
        isPaymentSelected = true;
    }
};

/**
 * handle ticket
 */
const addResult = async () => {
   countAdult.value += 1;
};
const subResult = async () => {
    if (countAdult.value > 1) {
       countAdult.value -= 1;
    } else {
       alert("Tối thiểu 1 khách hàng!");
    }
};
const addChild = async () => {
    countChild.value += 1;
};
const subChild = async () => {
    if (countChild.value > 0) {
        countChild.value -= 1;
    } else {
       alert("Không thể giảm , đã bằng 0.");
    }
};
const ToTalChild = computed(() => {
    return Tour.value.priceSale * 0.9;
});
const ToTalBill = computed(() => {
    const totalAdult =countAdult.value * Tour.value.priceSale;
    const totalChild = countChild.value * (Tour.value.priceSale * 0.9);
    return totalAdult + totalChild;
});

/**
 * fetch data
 */
const getTourById = async () => {
    const getTour = await api.get(`/Tour/${Tourid.value}`);
    Tour.value = getTour.data.responseData;
};

/**
 * submit booking -> paying 
 */

definePageMeta({
    layout: false,
});
onMounted(async () => {
   await  getTourById();
})
</script>
<style scoped>
@import '../../assets/css/bootstrap.css';
@import '../../assets/css/style.css';
@import '../../assets/css/font-awesome.min.css';
@import '../../assets/css/css_slider.css';
@import '../../assets/vendor/mdi-font/css/material-design-iconic-font.min.css';
@import '../../assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
@import '../../assets/vendor/select2/select2.min.css';
@media (max-width: 768px) {
  /* Chỉnh sửa ảnh nhỏ */
  .image-tour3 img {
    height: 150px; /* Giảm chiều cao ảnh */
    object-fit: cover;
    width: 100%; /* Đảm bảo ảnh chiếm đầy màn hình */
  }

  /* Các trường nhập liệu thành hàng dọc */
  .form-group {
    display: block;
    width: 100%;
  }

  .col-6 {
    width: 100%; /* Mỗi cột chiếm 100% chiều rộng */
    padding-left: 0;
    padding-right: 0;
  }

  .form-control {
    font-size: 14px; /* Giảm font size */
    padding: 10px; /* Giảm padding */
  }

  .form-group label {
    font-size: 14px;
    padding-left: 0;
    margin-bottom: 5px;
  }

  /* Cải thiện layout của các trường nhập liệu */
  .my-3 {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  /* Thông tin liên lạc kéo dài ra */
  .info-contact .form-group {
    width: 100%;
  }

  .info-contact .col-sm-12 {
    width: 100%;
  }

  /* Hành khách: mỗi loại 1 dòng */
  .passenger-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .passenger-info .col-5 {
    width: 100%;
    margin-bottom: 15px;
  }

  /* Giảm kích thước các phần tử hành khách */
  .d-flex.flex-row {
    flex-direction: column; /* Chuyển flex-row thành flex-column trên di động */
    gap: 15px;
  }

  /* Thu gọn thông tin hành khách */
  .rounded-4.bg-light {
    height: auto;
    padding: 10px;
  }

  /* Sửa phần tiêu đề */
  .heading {
    font-size: 16px;
    font-weight: bold;
  }

  /* Tóm tắt chuyến đi xuống dưới thông tin khách hàng */
  .summary-tour {
    margin-top: 20px;
    font-size: 14px;
  }

  .row.bg-light {
    margin-bottom: 15px; /* Tạo khoảng cách giữa các phần tử */
  }
  
  /* Điều chỉnh các ô thông tin hành khách */
  .my-3.form-group {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  /* Điều chỉnh thẻ label */
  .col-form-label {
    font-size: 14px;
    padding-left: 0;
  }
  
  /* Bảng thông tin khách hàng */
  .rounded-4 {
    padding: 10px;
  }

  /* Tạo một container dài hơn nếu cần thiết */
  .container {
    min-height: 100vh; /* Đảm bảo chiều cao của trang chiếm toàn bộ màn hình */
  }

  /* Thông tin hành khách ngắn gọn hơn */
  .col-4, .col-8 {
    width: 100%;
    padding: 5px;
  }
}
</style>
