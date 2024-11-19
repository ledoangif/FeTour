<template>
    <HeaderHome />
    <section class="banner_inner" id="home">
        <div class="banner_inner_overlay"></div>
    </section>
    <section class="packages pb-5">
        <div class="container py-lg-4 py-sm-3">
            <form
                class="rounded-4 bg-white searchTour"
                name="search"
                @submit.prevent="submitSearch"
            >
                <div class="border-bottom border-warning pb-3">
                    <div class="d-flex flex-row col-12 mt-3">
                        <button
                            type="button"
                            :class="{
                                'bg-warning btn-default rounded-2 p-3 ': isLocal === true,
                                'form-control': true,
                            }"
                            @click="isLocal = true"
                        >
                            Du lịch trong nước
                        </button>
                        <button
                            type="button"
                            :class="{
                                'bg-warning btn-default rounded-2  p-3 ':
                                    isLocal === false,
                                'form-control ms-2': true,
                            }"
                            @click="isLocal = false"
                        >
                            Du lịch nước ngoài
                        </button>

                        <div class="col-sm-6 ps-2">
                            <Field
                                name="name"
                                v-model="nameTour"
                                type="text"
                                class="form-control p-3 "
                                placeholder="Nhập từ khóa tour"
                            />
                        </div>
                        <button
                            type="button"
                            class="bg-warning  rounded-2 form-control  "
                            style="width: 200px; height: 50px; padding: 0; font-size: 20px;"
                            @click="reloadTourList"
                        >
                            <i class="fa-solid fa-arrows-rotate"></i>
                        </button>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <div
                        class="col-3 ms-3 my-4 rounded-3"
                        style="border: 3px solid #ffc107"
                    >
                        <div class="ms-5">Điểm đi</div>
                        <div class="d-flex flex-row">
                            <i class="fa-solid fa-location-dot col-2 mt-2"></i>
                            <select v-model="placeStart" class="col-10 form-select mb-2">
                                <option disabled value="Nơi khởi hành">
                                    <i class="fa-solid fa-location-dot"></i> Nơi khởi hành
                                </option>
                                <option v-for="item in placeStartList" :value="item">
                                    <i class="fa-solid fa-location-dot"></i>
                                    {{ item }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class=" my-auto mx-2">
                        <i
                            class="fa-solid fa-arrow-right-arrow-left  "
                            style="font-size: 1.5em"
                        ></i>
                    </div>
                    <div
                        class="col-3 my-4 rounded-3"
                        style="border: 3px solid #ffc107"
                        v-if="isLocal"
                    >
                        <div class="ms-5">Điểm đến</div>
                        <div class="d-flex flex-row">
                            <i class="fa-solid fa-location-dot col-2 mt-2"></i>
                            <select v-model="placeEnd" class="col-10 form-select mb-2">
                                <option disabled value="Nơi kết thúc">
                                    Nơi kết thúc
                                </option>
                                <option v-for="item in placeEndList" :value="item">
                                    {{ item }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div
                        class="col-3 my-4 rounded-3"
                        style="border: 3px solid #ffc107"
                        v-else
                    >
                        <div class="ms-5">Điểm đến</div>
                        <div class="d-flex flex-row">
                            <i class="fa-solid fa-location-dot col-2 mt-2"></i>
                            <select v-model="placeEnd" class="col-10 form-select mb-2">
                                <option disabled value="Nơi kết thúc">
                                    Nơi kết thúc
                                </option>
                                <option v-for="item in filteredCountries" :value="item.id">
                                    {{ item.countryName }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div
                        class="col-3 my-4 rounded-3 ms-3"
                        style="border: 3px solid #ffc107"
                    >
                        <div class="ms-5">Ngày đi</div>
                        <div class="d-flex flex-row">
                            <i class="fa-solid fa-calendar mt-2 me-2"></i>
                            <input
                                v-model="dateStart"
                                type="date"
                                class="col-10 form-control mb-2"
                            />
                        </div>
                    </div>
                    <button
                        class="col-2 my-4 rounded-3 ms-3 bg-warning"
                        style="border: 3px solid #ffc107"
                        type="submit"
                    >
                        <div class="d-flex flex-row py-3 px-3">
                            <i class="fa-solid fa-magnifying-glass mt-2 me-2"></i>
                            <div class="h4">Tìm kiếm</div>
                        </div>
                    </button>
                </div>
            </form>
            <h3 class="heading text-capitalize text-center mt-5">
                Tour hot
                <i class="fa-solid fa-fire text-danger" style="font-size: 1em"></i>
            </h3>
            <p class="text mt-2 mb-5 text-center">
                Những trải nghiệm tuyệt vời trong tour sẽ không làm bạn thất vọng
            </p>
            <div class="d-flex flex-row col-6 my-3 ms-auto justify-content-end">
                <i
                    class="fa-solid fa-arrow-down-wide-short mt-1 me-2"
                    @click="sortToursByPriceDescending"
                    style="font-size: 1.3em"
                ></i>
                <i
                    class="fa-solid fa-arrow-up-wide-short mt-1 me-2"
                    @click="sortToursByPriceAescending"
                    style="font-size: 1.3em"
                ></i>
                <button
                    type="button"
                    :class="{
                        'bg-light btn-default rounded-2 py-2  ': isLocal2,
                        'form-control col-3': true,
                    }"
                    @click="TourIsLocal"
                >
                    <h6>Tour nội địa</h6>
                </button>
                <button
                    type="button"
                    :class="{
                        'bg-light btn-default rounded-2 ': !isLocal2,
                        'form-control ms-2 col-4': true,
                    }"
                    @click="TourIsNotLocal"
                >
                    <h6>Tour nước ngoài</h6>
                </button>
                <button
                    type="button"
                    class="bg-light btn-default rounded-2 form-control ms-2 col-1"
                    @click="reloadTourList"
                >
                    <i class="fa-solid fa-arrows-rotate"></i>
                </button>
            </div>
            <div class="row" id="displayTours">
                <div class="col-lg-4 col-sm-6 mb-5" v-for="item in Tour">
                    <div class="image-tour position-relative">
                        <img
                            :src="item.image"
                            class="img-fluid"
                            style="width: 100%; height: 100%; object-fit: cover"
                        />
                    </div>
                    <div class="package-info" style="height: 350px">
                        <span
                            >{{ formatDate(item.dateStart) }} - {{ item.numOfDay }} ngày
                        </span>

                        <h5 class="mt-2">
                            <a>{{ item.nameTour }}</a>
                        </h5>
                        <ul class="listing mt-3">
                            <li v-if="item.discount > 0">
                                Giá :<span class="text-decoration-line-through ms-2">
                                    {{
                                        formatCurrency(item.cost)
                                    }}</span
                                >
                            </li>
                            <li class="d-flex justify-content-between">
                                <span class="text-danger">
                                    {{
                                       formatCurrency(item.priceSale)
                                    }}</span
                                >
                                <button
                                    type="button"
                                    class="btn btn-warning"
                                    v-if="item.discount > 0"
                                >
                                    {{ item.discount }} % Giảm
                                </button>
                            </li>
                            <div class="d-flex justify-content-between mt-2">
                                <NuxtLink
                                    :to="{
                                        path: '/customerbooking',
                                        query: { id: item.id },
                                    }"
                                >
                                    <button
                                        type="button"
                                        class="btn btn-danger btn-small"
                                    >
                                        <i
                                            class="fa-solid fa-cart-shopping text-white"
                                        ></i>
                                        Đặt ngay
                                    </button>
                                </NuxtLink>
                                <NuxtLink
                                    class="link link-danger text-decoration-none mx-1"
                                    style="cursor: pointer"
                                    :to="{
                                        path: '/tourdetail',
                                        query: { id: item.id },
                                    }"
                                >
                                    <button type="button" class="btn btn-outline-success">
                                        Xem chi tiết
                                    </button>
                                </NuxtLink>
                            </div>
                            <div
                                class="d-flex flex-row justify-content-between mt-2 mt-2"
                            >
                                <!-- <button
                                    type="button"
                                    class="btn btn-outline-primary"
                                    @click="
                                        GetTourDifferent(item.nameTour, item.dateStart)
                                    "
                                >
                                    Ngày khác
                                </button> -->
                                <div class="pt-2">
                                    <span class="text-decoration-underline me-2">
                                        Số chỗ còn nhận :
                                    </span>
                                    {{ item.slot }}
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <span class="me-5">Tổng số: {{ totalCount }} Tour</span>
                    <span>
                        <Pagination
                            :current-page="pageNumber"
                            :total-pages="totalPage"
                            :next-page="nextPage"
                            :previous-page="previousPage"
                            :set-page="setPage"
                        />
                    </span>
                </div>
            </div>
        </div>
    </section>

    <Footer @select-country="handleCountrySelect" />
</template>
<script setup>
import Api from '~/service/Base/api.ts';
import { ref, onMounted } from 'vue';
import { formatDate,formatCurrency } from '~/assets/js/validate';
const api = new Api();
const Tour = ref([]);
const placeStart = ref('Nơi khởi hành');
const dateStart = ref('');
const placeEnd = ref('Nơi kết thúc');
const nameTour = ref('');
const placeStartList = ref([]);
const placeEndList = ref([]);
const Country = ref([]);
const isLocal = ref(true);
const isLocal2 = ref(true);
const pageNumber = ref(1);
const totalPage = ref(0);
const totalCount = ref(0);
const pageSize = ref(9);

const getTours = async () => {
    try {
        var response = await api.get(
            `/Tour/GetAllPaginationBeforeStartOneDay?PageSize=${pageSize.value}&PageNumber=${pageNumber.value}`,
        );
        Tour.value = response.data.responseData.data;
        totalCount.value = response.data.responseData.pagination.totalCount;
        totalPage.value = response.data.responseData.pagination.totalPage;
    } catch (err) {
        console.log(err);
    }
};

onMounted(async () => {
    try {
        // Gọi API để lấy danh sách tours
        await getTours();

        // Lấy danh sách điểm khởi hành và điểm đến trong nước
        Tour.value.forEach((tour) => {
            if (!placeStartList.value.includes(tour.placeStart)) {
                placeStartList.value.push(tour.placeStart);
            }
            if (!placeEndList.value.includes(tour.placeEnd) && tour.isLocal) {
                placeEndList.value.push(tour.placeEnd);
            }
        });

        // Gọi API để lấy danh sách các quốc gia
        const getCountryResponse = await api.get(`/Country`);
        Country.value = getCountryResponse.data.responseData;
    } catch (err) {
        console.log(err);
    }
});



const submitSearch = async () => {
    const queryParams = [];

    if (placeStart.value && placeStart.value !== 'Nơi khởi hành') {
        queryParams.push(`placeStart=${placeStart.value}`);
    }

    if (placeEnd.value && placeEnd.value !== 'Nơi kết thúc') {
        if (isNaN(placeEnd.value)) {
            // If placeEnd is not a number, treat it as a string
            queryParams.push(`placeEnd=${placeEnd.value}`);
        } else {
            // If placeEnd is a number, treat it as CountryId
            queryParams.push(`CountryId=${placeEnd.value}`);
        }
    }

    if (dateStart.value) {
        queryParams.push(`dateStart=${dateStart.value}`);
    }
    if (nameTour.value) {
        queryParams.push(`name=${nameTour.value}`);
    }

    const queryString = queryParams.join('&');
    
    // If no search criteria is provided, reload the full tour list
    if (!queryString) {
        reloadTourList();
    } else {
        try {
            const res = await api.get(`/Tour/SearchTour?${queryString}`, null);
            if (res.data.responseData.length === 0) {
                alert('Không có tour nào phù hợp với tìm kiếm của bạn!');
            } else {
                Tour.value = res.data.responseData;
            }
        } catch (error) {
            console.error('Error fetching tours:', error);
            alert('Có lỗi xảy ra khi tìm kiếm tour. Vui lòng thử lại sau.');
        }
    }
};

/**
 * Reload search
 */
const reloadTourList = async () => {
    const getTour = await api.get(`/Tour/GetTourNotFinish`, null);
    Tour.value = getTour.data.responseData;
    placeStart.value = 'Nơi khởi hành';
    placeEnd.value = 'Nơi kết thúc';
    dateStart.value = '';
    nameTour.value = '';
};


/**
 * Get Tour by Country
 * @param {} id
 */
const handleCountrySelect = async (id) => {
    const res = await api.get(`Tour/GetToursByCountry?countryId=${id}`);
    if(res.data.responseData.length === 0)
    {
        alert('Không có tour nào phù hợp với tìm kiếm của bạn!');
        return;
    }
    Tour.value = res.data.responseData;
};

/**
 * Tour is Local
 */
const TourIsLocal = async () => {
    const res = await api.get(`Tour/GetTourIsLocal`, null);
    if(res.data.responseData.length === 0)
    {
        alert("Không có Tour phù hợp với tìm kiếm của bạn!");
        return;
    }
    Tour.value = res.data.responseData;
    isLocal2.value = true;
};

/**
 * Tour is not Local
 */

const TourIsNotLocal = async () => {
    const res = await api.get(`Tour/GetTourNotIsLocal`, null);
    if(res.data.responseData.length === 0)
    {
        alert("Không có Tour phù hợp với tìm kiếm của bạn!");
        return;
    }
    Tour.value = res.data.responseData;
    isLocal2.value = false;
};

/**
 * Tour has different date
 */

// const GetTourDifferent = async (name, date) => {
//     try {
//         const res = await api.get(`Tour/GetTourDifferent?name=${name}&date=${date}`, null);
//         if (res.data.responseData.length === 0) {
//             alert("Tour này không còn ngày khác!");
//         }
//         else
//         {
//             Tour.value = res.data.responseData;

//         }
//     } catch (error) {
//         console.error("Error fetching tours:", error);
//     }
// };
const nextPage = () => {
    pageNumber.value++;
    getTours();
};
const previousPage = () => {
    pageNumber.value--;
    getTours();
};
const setPage = (number) => {
    pageNumber.value = number;
    getTours();
};

/**
 * Function Sort List Tour by Price Des
 */
const sortToursByPriceDescending = () => {
    Tour.value.sort((a, b) => {
        const priceA = a.priceSale ?? a.cost ?? 0;
        const priceB = b.priceSale ?? b.cost ?? 0;
        return priceB - priceA;
    });
};

/**
 * Function Sort List Tour by Price Aes
 */
const sortToursByPriceAescending = () => {
    Tour.value.sort((a, b) => {
        const priceA = a.priceSale ?? a.cost ?? 0;
        const priceB = b.priceSale ?? b.cost ?? 0;
        return priceA - priceB;
    });
};
// Lọc quốc gia tùy thuộc vào loại tour
const filteredCountries = computed(() => {
      if (!isLocal.value) {
        // Nếu là tour nước ngoài, loại bỏ Việt Nam khỏi danh sách
        return Country.value.filter(country => country.id !== 1);
      }
      return Country.value;
    });

/**
 * Permission
 */
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
</style>
