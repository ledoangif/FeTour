<template>
    <HeaderHome />
    <section class="banner_inner" id="home">
        <div class="banner_inner_overlay"></div>
    </section>
    <section class="packages">
        <div class="container py-lg-4">
            <div class="row" id="displayTours">
                <h4 class="heading text-capitalize col-7">{{ Tour.nameTour }}</h4>
                <div class="col-5 row m-0">
                    <div class="col-7">
                        <span
                            class="text-decoration-line-through d-flex justify-content-end w-100 " v-if="Tour.discount>0"
                        >
                            Giá :
                            {{
                               formatCurrency(Tour.cost)
                            }}/khách</span
                        >
                        <div class="d-flex flex-row fs-5">
                            <button type="button" class="btn btn-danger btn-sm mb-3"  v-if="Tour.discount>0">
                                Giảm {{ Tour.discount }}%
                            </button>
                            <span class="text-danger fw-bold fs-5">
                                {{
                                formatCurrency(Tour.priceSale)
                                }}</span
                            >/khách
                        </div>
                    </div>
                    <div class="col-5 p-0 text-end">
                        <NuxtLink
                            :to="{
                                path: '/customerbooking',
                                query: { id: Tour.id },
                            }"
                        >
                            <button
                                type="button"
                                class="btn btn-danger btn-small mb-3 w-100 p-3"
                            >
                                <i class="fa-solid fa-cart-shopping text-white"></i>
                                Đặt ngay
                            </button>
                        </NuxtLink>
                        <NuxtLink
                            :to="{
                                path: '/contact',
                            }">
                        <button type="button" class="btn btn-outline-secondary btn-small w-100 p-3">
                            Liên hệ tư vấn
                        </button>
                    </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="row mt-5" id="displayTours">
                <div class="col-7">
                    <div class="image-tourdetail position-relative">
                        <img
                            :src="Tour.image"
                            class="img-fluid"
                            style="width: 100%; height: 100%; object-fit: cover"
                        />
                    </div>
                </div>
                <div class="col-5">
                    <div class="bg-light rounded ps-3 pt-3" style="height: 150px">
                        {{ Tour.descripttion }}
                    </div>
                    <div class="mt-3 bg-light rounded ps-3 pt-3" style="height: 230px">
                        <span class="mt-2">
                            Khởi hành :
                            <span class="fw-bold"> {{ formatDate(Tour.dateStart) }}</span>
                            - Giờ đi : {{ Tour.timeStart }}
                        </span>
                        <div class="mt-2">
                            Tập trung : {{ Tour.meetingPoint }} ngày
                            <span class="fw-bold"> {{ formatDate(Tour.dateStart) }}</span>
                        </div>
                        <div class="mt-2">
                            Thời gian :
                            <span class="fw-bold">{{ Tour.numOfDay }} ngày</span>
                        </div>
                        <div class="mt-2">
                            Nơi khởi hành :
                            <span class="fw-bold">{{ Tour.placeStart }}</span>
                        </div>
                        <div class="mt-2">
                            Số chỗ còn nhận : <span class="fw-bold">{{ Tour.slot }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5 bg-light rounded">
                <div class="col-10">
                    <div class="row mt-4">
                        <div class="col-3 text-center">
                            <i
                                class="fa-regular fa-flag"
                                style="color: #377df4; font-size: 1.5em"
                            ></i
                            ><br />
                            <span class="fw-bold ms-2"> Thời gian </span> <br />
                            {{ Tour.numOfDay }} ngày {{ reducedNumOfDay }} đêm
                        </div>
                        <div class="col-3 text-center">
                            <i
                                class="fa-regular fa-map"
                                style="color: #377df4; font-size: 1.5em"
                            ></i
                            ><br />
                            <span class="ms-2">
                                <span class="fw-bold">Điểm tham quan</span> <br />
                                <span> {{ Tour.place }}<br /> </span>
                            </span>
                            <br />
                        </div>
                        <div class="col-3 text-center">
                            <i
                                class="fa-solid fa-utensils"
                                style="color: #377df4; font-size: 1.5em"
                            ></i
                            ><br />
                            <span class="ms-2">
                                <span class="fw-bold">Ẩm thực</span> <br />
                                Theo thực đơn
                            </span>
                            <br />
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-3 text-center">
                            <i
                                class="fa-solid fa-hotel"
                                style="color: #377df4; font-size: 1.5em"
                            ></i
                            ><br />
                            <span class="fw-bold ms-2"> Khách sạn </span> <br />
                            Dịch vụ tiện ích
                        </div>
                        <div class="col-3 text-center">
                            <i
                                class="fa-regular fa-clock"
                                style="color: #377df4; font-size: 1.5em"
                            ></i
                            ><br />
                            <span class="ms-2">
                                <span class="fw-bold">Thời gian lý tưởng</span> <br />
                                Bốn mùa quanh năm
                            </span>
                            <br />
                        </div>
                        <div class="col-3 text-center">
                            <i
                                class="fa-solid fa-users"
                                style="color: #377df4; font-size: 1.5em"
                            ></i
                            ><br />
                            <span class="ms-2">
                                <span class="fw-bold">Đối tượng thích hợp</span> <br />
                                Phù hợp với hành khách trên 12tuổi
                            </span>
                            <br />
                        </div>
                        <div class="col-3 text-center">
                            <i
                                class="fa-solid fa-tag"
                                style="color: #377df4; font-size: 1.5em"
                            ></i
                            ><br />
                            <span class="ms-2">
                                <span class="fw-bold">Ưu đãi</span> <br />
                                Ưu đãi đã bảo gồm giá tour
                            </span>
                            <br />
                        </div>
                    </div>
                </div>
                <div class="col-2 py-5">
                    <div class="row ps-3 fw-bold">Quý khách cần hỗ trợ?</div>
                    <div
                        class="d-flex flex-row rounded-4 pt-2 ps-2 mt-3"
                        style="color: #377df4; height: 3em; border: 2px solid #377df4"
                        @click="showHotLinePhone"
                    >
                        <i class="fa-solid fa-phone mt-1 me-2"></i>
                        <span>Gọi điện thoại? </span>
                    </div>
                    <span class="text-danger ps-4" v-if="showHotline">
                        Bạn liên hệ hoteline
                        <span class="px-4"> +84962383838</span></span
                    >
                    <form @submit.prevent="sendEmail">
                        <button
                            class="rounded-4 d-flex flex-row pt-2 ps-2 mt-3"
                            style="color: #377df4; height: 3em; border: 2px solid #377df4"
                        >
                            <i class="fa-regular fa-envelope mt-1 me-1"></i>
                            <span>Gửi yêu cầu hỗ trợ</span>
                        </button>
                    </form>
                </div>
            </div>
            <div class="row mt-5">
                <h4 class="heading text-capitalize text-center mt-2">Lịch trình</h4>
                <div
                    v-html="Tour.plan"
                    class="bg-light rounded mt-5 ps-4 py-4"
                    style="border: 2px solid rgba(211, 211, 211, 0.5)"
                ></div>
            </div>
            <div class="row mt-5">
                <h4 class="heading text-capitalize text-center mt-2">
                    Những thông tin cần lưu ý
                </h4>
                <div class="row">
                    <div class="col-6">
                        <div class="bg-light rounded mt-5">
                            <span
                                class="ps-4 py-3 d-flex flex-row justify-content-between"
                            >
                                <h5>Giá Tour bao gồm</h5>
                                <i
                                    class="fa-solid fa-chevron-down mt-1 me-3"
                                    @click="showServiceInclude"
                                ></i>
                            </span>
                            <div class="ms-4 pb-3" v-if="showInclude">
                                <span v-html="Tour.serviceInclude"></span><br />
                                <span>- Phòng khách, tiêu chuẩn 2 khách/phòng</span><br />
                                <span>- Bảo hiểm du lịch</span><br />

                                <span>
                                    Đặc biệt Hachu Travel tặng thêm cho tất cả các du khách
                                    (đến 80 tuổi) phí Bảo Hiểm Du Lịch với mức bồi thường
                                    tối đa là 460.000.000 VNĐ cho nhân mạng và 30.000.000
                                    VNĐ cho hành lý.
                                </span>
                            </div>
                        </div>
                        <div class="bg-light rounded mt-2">
                            <span
                                class="ps-4 py-3 d-flex flex-row justify-content-between"
                            >
                                <h5>Giá Tour không bao gồm</h5>
                                <i
                                    class="fa-solid fa-chevron-down mt-1 me-3"
                                    @click="showServiceNotInclude"
                                ></i>
                            </span>
                            <div class="ms-4 pb-3" v-if="showNotInclude">
                                <span>
                                    <span v-html="Tour.serviceNotInclude"></span><br />
                                    - Hộ chiếu <br />
                                    - Chi phí ăn uống cá nhân <br />
                                    - Các chi phí khác không bao gồm trong giá: Nước uống
                                    bia rượu trong bữa ăn, điện thoại, giặt ủi, chi phí
                                    quá cước theo quy định của hàng không. Thuốc men, bệnh
                                    viện...và chi phí cá nhân khác ngoài chương trình.<br />
                                    - Chi phí dời ngày, đổi chặng, nâng hạng vé máy bay.
                                    Trường hợp Quý khách không sử dụng chặng đi của vé
                                    đoàn theo tour, các chặng nội địa và quốc tế còn lại
                                    sẽ bị hủy do điều kiện của hãng Hàng Không.<br />
                                    - Bảo hiểm du lịch đối với khách chỉ mua land tour
                                    (không có vé máy bay xuất phát từ Việt Nam)<br />
                                    - Tour áp dụng cho khách quốc tịch Việt Nam. Theo quy
                                    định của đối tác Thái Lan, khách quốc tịch nước ngoài
                                    (trừ khách Việt Kiều) sẽ phụ thu 1.000.000
                                    vnd/khách.<br />

                                    <br
                                /></span>
                                <br />
                                <span class="text-danger"
                                    >* Lưu ý: Nếu Quý Khách có nhu cầu tách đoàn, vui lòng
                                    thông báo cho nhân viên bán tour ngay tại thời điểm
                                    đăng ký tour, Quý khách sẽ thanh toán thêm chi phí là
                                    1.500.000vnđ/khách/ngày</span
                                >
                            </div>
                        </div>
                        <div class="bg-light rounded mt-2">
                            <span
                                class="ps-4 py-3 d-flex flex-row justify-content-between"
                            >
                                <h5>Giá vé trẻ em</h5>
                                <i
                                    class="fa-solid fa-chevron-down mt-1 me-3"
                                    @click="showChild"
                                ></i>
                            </span>
                            <div class="ms-4 pb-3" v-if="showChildTicket">
                                <span> Trẻ em dưới 2 tuổi: 30% giá tour người lớn </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="bg-light rounded mt-5">
                            <span
                                class="ps-4 py-3 d-flex flex-row justify-content-between"
                            >
                                <h5>Lưu ý khi hủy chuyến</h5>
                                <i
                                    class="fa-solid fa-chevron-down mt-1 me-3"
                                    @click="cancelTour"
                                ></i>
                            </span>
                            <div class="ms-4 pb-3" v-if="cancel">
                                Sau khi hoàn tất thanh toán, nếu Quý khách muốn hủy hoặc chuyển tour, vui lòng liên hệ trực tiếp qua điện thoại 
                                hoặc email để yêu cầu hủy tour.
                                Hachutravel sẽ hỗ trợ Quý khách xử lý thủ tục hủy tour và áp dụng phí hủy theo quy định.
                                <ul>
                                    <li>- Hủy tour sau khi đặt cọc: mất 100% tiền cọc</li>
                                    <li>- Hủy tour khi đã thanh toán 100% tổng giá trị tour sẽ tính phí theo thời điểm thông báo hủy (Không tính ngày lễ và chủ nhật) như sau:
                                        <ul>
                                            <li>+ Sau khi đặt tour, hủy tour mất 10% tổng giá trị tour</li>
                                            <li>+ Từ 11 đến 15 ngày trước ngày khởi hành: chịu phí 30% tổng giá trị tour</li>
                                            <li>+ Từ 6 đến 10 ngày trước ngày khởi hành: chịu phí 50% tổng giá trị tour</li>
                                            <li>+ Từ 2 đến 5 ngày trước ngày khởi hành: chịu phí 70% tổng giá trị tour</li>
                                            <li>+ Từ 1 ngày trước ngày khởi hành: chịu phí 100% tổng giá trị tour</li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div class="bg-light rounded mt-2">
                            <span
                                class="ps-4 py-3 d-flex flex-row justify-content-between"
                            >
                                <h5>Điều kiện thanh toán</h5>
                                <i
                                    class="fa-solid fa-chevron-down mt-1 me-3"
                                    @click="showPay"
                                ></i>
                            </span>
                            <div class="ms-4 pb-3" v-if="showPayment">
                                <span>
                                    Quý khách vui lòng thanh toán đầy đủ trong 2 giờ để
                                    đặt tour thành công.</span
                                >
                            </div>
                        </div>
                        <div class="bg-light rounded mt-2">
                            <span
                                class="ps-4 py-3 d-flex flex-row justify-content-between"
                            >
                                <h5>Liên hệ</h5>
                                <i
                                    class="fa-solid fa-chevron-down mt-1 me-3"
                                    @click="callPhone"
                                ></i>
                            </span>
                            <div class="ms-4 pb-3 text-center fw-bold" v-if="Call">
                                <span class="text-danger"
                                    >Chương trình có thể thay đổi tùy vào tình hình thực
                                    tế</span
                                ><br />
                                Mọi chi tiết xin liên hệ : +84962383838 <br />
                                66 ngách 6/46 Miêu Nha, Tây Mỗ, Nam Từ Liêm, Hà Nội<br />
                                KÍNH CHÚC QUÝ KHÁCH MỘT CHUYẾN DU LỊCH VUI VẺ & THÚ VỊ!<br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>
<script setup>
import Api from '~/service/Base/api.ts';
import { ref,onMounted} from 'vue';
import { useRoute } from 'nuxt/app';
import { formatDate,formatCurrency } from '~/assets/js/validate';
const api = new Api();
const route = useRoute();
const Tourid = computed(() => route.query.id);
const Tour = ref({});
const VehicleTour = ref({});
const Vehicle = ref({});
const VehicleByTour = ref([]);
const showHotline = ref(false);
const showInclude = ref(false);
const showNotInclude = ref(false);
const showChildTicket = ref(false);
const showPayment = ref(false);
const cancel = ref(false);
const Call = ref(false);

const showHotLinePhone = async () => {
    showHotline.value = !showHotline.value;
};
const showServiceInclude = async () => {
    showInclude.value = !showInclude.value;
};
const showServiceNotInclude = async () => {
    showNotInclude.value = !showNotInclude.value;
};
const showPay = async () => {
    showPayment.value = !showPayment.value;
};
const showChild = async () => {
    showChildTicket.value = !showChildTicket.value;
};
const cancelTour = async () => {
    cancel.value = !cancel.value;
};
const callPhone = async () => {
    Call.value = !Call.value;
};

const sendEmail = async () => {
    const subject = 'Hỗ trợ đặt tour';
    window.location.href = `mailto:hachutraveltour@gmail.com?subject=${subject}`;
};

const fetchData = async () => {
    const getTour = await api.get(`/Tour/${Tourid.value}`);
    Tour.value = getTour.data.responseData;

    // Fetch VehicleTour data
    const getVehicleTour = await api.get(`/TourVehicle/SearchVehicle?id=${Tourid.value}`);
    VehicleTour.value = getVehicleTour.data.responseData;
    // Fetch Vehicle data
    const getVehicle = await api.get(`/Vehicle`);
    Vehicle.value = getVehicle.data.responseData;

    // Populate VehicleByTour based on matching IDs
    VehicleByTour.value = Vehicle.value.filter((vehicle) =>
        VehicleTour.value.some((vehicleTour) => vehicleTour.vehicleId === vehicle.id),
    );
};


const reducedNumOfDay = computed(() => {
    return Tour.value.numOfDay - 1;
});

definePageMeta({
    layout: false,
});
onMounted(async () => {
    
    await fetchData();
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
ul{
    margin-left: 10px; /* Điều chỉnh khoảng cách thụt vào */
}
ul ul {
        margin-left: 20px; /* Điều chỉnh khoảng cách thụt vào */
    }
</style>
