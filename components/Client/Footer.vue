<template>
    <footer>
        <section class="footer footer_w3layouts_section_1its bg-dark">
            <div class="container py-lg-4 py-3">
                <div class="row footer-top">
                    <div class="col-lg-3 col-sm-6 footer-grid_section_1its_w3">
                        <div class="footer-title">
                            <h3>Địa chỉ</h3>
                        </div>
                        <div class="footer-text">
                            <p>Địa điểm : 66 ngách 6/46 Miêu Nha, Tây Mỗ, Nam Từ Liêm, Hà Nội</p>
                            <p>Phone : +84962383838</p>
                            <p>
                                Email :<a href="mailto:hachutraveltour@gmail.com">hachutravel@gmail.com</a>
                            </p>
                            <p>Fax : +84962383838</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 footer-grid_section mt-sm-0 mt-4">
                        <div class="footer-title">
                            <h3>Về chúng tôi</h3>
                        </div>
                        <div class="footer-text">
                            <p>
                                Chúng tôi là đối tác cho những ai muốn khám phá thế giới
                                với các trải nghiệm du lịch độc đáo và dịch vụ chuyên
                                nghiệp.
                            </p>
                        </div>
                        <ul class="social_section_1info">
                            <li class="mb-2 facebook">
                                <a href="#"><span class="fa fa-facebook"></span></a>
                            </li>
                            <li class="mb-2 twitter">
                                <a href="#"><span class="fa fa-twitter"></span></a>
                            </li>
                            <li class="google">
                                <a href="#"><span class="fa fa-google-plus"></span></a>
                            </li>
                            <li class="linkedin">
                                <a href="#"><span class="fa fa-linkedin"></span></a>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3"
                    >
                        <div class="footer-title">
                            <h3>Địa điểm du lịch</h3>
                        </div>
                        <div class="row">
                            <ul class="col-6 links" v-for="item in Top4Country">
                                <li>
                                    <a
                                        href="#choose"
                                        class="scroll"
                                        @click.prevent="selectCountry(item.id)"
                                        >{{ item.countryName }}
                                    </a>
                                </li>
                            </ul>
                            <ul class="col-6 links" v-for="item in Top6Country">
                                <li>
                                    <a href="#" @click.prevent="selectCountry(item.id)"
                                        >{{ item.countryName }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        class="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3"
                    >
                        <div class="footer-title">
                            <h3>Ý kiến của bạn</h3>
                        </div>
                        <div class="footer-text">
                            <p>
                                Hãy chia sẻ ý kiến của bạn với chúng tôi để chúng ta có
                                thể mang lại trải nghiệm tốt nhất cho mọi người. Xin cảm
                                ơn!
                            </p>

                            <form @submit.prevent="sendEmail">
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="text-white opacity-25 pt-2 ps-4">
                                        Gửi mail tại đây !!
                                    </div>
                                    <button class="btn1">
                                        <i
                                            class="fa fa-paper-plane"
                                            aria-hidden="true"
                                        ></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="copyright py-3 text-center">
        <p>
            © 2024 Hachu Travel. All Rights Reserved | Design by
            <a href="http://w3layouts.com/" target="=_blank"> Doan </a>
        </p>
    </div>
    <div class="move-top text-right">
        <a href="#home" class="move-top">
            <span class="fa fa-angle-up mb-3" aria-hidden="true"></span>
        </a>
    </div>
    </footer>

</template>
<script setup>
import API from '../../service/Base/api';
import { ref, onMounted } from 'vue';
const api = new API();
const Top6Country = ref([]);
const Top4Country = ref([]);

const emit = defineEmits(['select-country']);

onMounted(async () => {
    const res = await api.get(`/Country/Top4Country`, null);
    Top4Country.value = res.data.responseData;
    const re = await api.get(`/Country/Top6Country`, null);
    Top6Country.value = re.data.responseData;
});
const selectCountry = (id) => {
    emit('select-country', id);
};

const sendEmail = async () => {
    const subject = 'Ý kiến người dùng ';
    window.location.href = `mailto:hachutraveltour@gmail.com?subject=${subject}`;
};
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
    .footer {
        background-color: #333; /* Nền đen */
        color: #fff;
        padding-top: 20px;
        padding-bottom: 850px; /* Tăng padding để kéo dài nền */
    }

    .footer-text, .footer-title h3 {
        font-size: 1em; /* Điều chỉnh kích thước chữ để phù hợp với màn hình nhỏ */
    }

    /* Căn giữa và sắp xếp lại các phần trong footer cho dễ nhìn */
    .footer-top {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer-grid_section_1its_w3, .footer-grid_section {
        text-align: center;
        margin-bottom: 15px; /* Tạo khoảng cách giữa các phần */
    }

    .social_section_1info {
        display: flex;
        justify-content: center;
    }

    .social_section_1info li {
        margin: 0 5px;
    }
}


</style>
