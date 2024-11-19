<template>
    <div class="row">
        <div class="p-4">
            <div class="search">
                <h4 class="search-text h5">Tour du lịch</h4>
                <form
                class="rounded-5 bg-light col-11 "
                name="search"
                @submit.prevent="submitSearch"
            >
                <div class="border-bottom border-success pb-3 ">
                    <div class="d-flex flex-row  mt-3 p-2">
                        <div class="col-2">
                            <button
                            type="button"
                            :class="{
                                'bg-infor btn-default rounded-2': isLocal === true,
                                'form-control': true,
                            }"
                            @click="isLocal = true"
                        >
                            Du lịch trong nước
                        </button>
                        </div>
                        <div class="col-2">
                            <button
                            type="button"
                            :class="{
                                'bg-infor btn-default rounded-2 ':
                                    isLocal === false,
                                'form-control ms-2': true,
                            }"
                            @click="isLocal = false"
                        >
                            Du lịch nước ngoài
                        </button>

                            </div>
                        <div class="col-sm-6 ms-2">
                            <Field
                                name="name"
                                v-model="nameTour"
                                type="text"
                                class="form-control ms-2  "
                                placeholder="Nhập từ khóa tour "
                            />
                        </div>
                        <button
                            type="button"
                            class="bg-infor btn-default rounded-2 form-control ms-3 "
                            style="padding: 0.25rem 0.5rem; font-size: 1rem; width: auto;"
                            @click="reloadTourList"
                        >
                            <i class="fa-solid fa-arrows-rotate"></i>
                        </button>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <div
                        class="col-3 ms-3 my-4 rounded-3"
                        style="border: 1px solid #ccc;"
                    >
                        <div class="ms-5">Điểm đi</div>
                        <div class="d-flex flex-row col-9">
                            <i class="fa-solid fa-location-dot col-3 ps-3 pt-2"></i>
                            <select v-model="placeStart" class="col-6 form-select mb-2">
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
                    <div class=" my-auto">
                        <i
                            class="fa-solid fa-arrow-right-arrow-left mx-3"
                            style="font-size: 1.5em"
                        ></i>
                    </div>
                    <div
                        class="col-3 my-4 rounded-3"
                        style="border: 1px solid #ccc;"
                        v-if="isLocal"
                    >
                        <div class="ms-5">Điểm đến</div>
                        <div class="d-flex flex-row col-9">
                            <i class="fa-solid fa-location-dot col-3 ps-3 mt-2"></i>
                            <select v-model="placeEnd" class="col-6 form-select mb-2">
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
                        style="border: 1px solid #ccc;"
                        v-else
                    >
                        <div class="ms-5">Điểm đến</div>
                        <div class="d-flex flex-row col-9">
                            <i class="fa-solid fa-location-dot col-3 mt-2 ps-3"></i>
                            <select v-model="placeEnd" class="col-6 form-select mb-2">
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
                        style="border: 1px solid #ccc;"
                    >
                        <div class="ms-5">Ngày đi</div>
                        <div class="d-flex flex-row col-9">
                            <i class="fa-solid fa-calendar mt-2 ms-2"></i>
                            <input
                                v-model="dateStart"
                                type="date"
                                class="col-6 form-control mb-2 ms-3"
                            />
                        </div>
                    </div>
                    <div class="col-2 mt-2">
                        <button
                        class=" my-4 rounded-3 ms-3 bg-infor"
                        style="border: 1px solid #ccc;"
                        type="submit"
                    >
                        <div class="d-flex flex-row s">
                            <i class="fa-solid fa-magnifying-glass mt-1  p-3"></i>
                            <div class="h6 mt-3">Tìm kiếm</div>
                        </div>
                    </button>
                    </div>
                </div>
            </form>
            </div>
            <div class="data">
                <div class="btn-handle d-flex justify-content-end mb-3">
                    
                    <div class="handle-create">
                        <TheFormCreateUpdateTour
                            :isEditMode="isEditMode"
                            :editTour="editTourData"
                            @Tour-saved="getTours"
                        />
                        <a
                            @click="onCreateMode"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#create-update-Tour-modal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 256 256"
                            >
                                <path
                                    fill="currentColor"
                                    d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104h-48v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1 0-16h48V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"
                                />
                            </svg>
                        </a>
                    </div>
                    <div class="reload">
                        <a class="text-info" href="#" @click="getTours()">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 190.77h-89l36.88-36.88l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25l5.37-15.13l30.17 10.67l-5.3 15.13a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5L376 149.81Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <table
                    class="table text-center table-hover table-success table-striped-columns table-responsive table-bordered"
                >
                    <thead class="table-primary table-active">
                        <tr>
                            <th>No.</th>
                            <th>Thông tin tour</th>
                            <th>Thời gian</th>
                            <!-- <th>Người tạo</th> -->
                            <th>Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(Tour, index) in Tours" :key="index">
                            <td class="p-4 booking-id-col">{{ ++index }}</td>
                            <td class="p-4">
                                <span class="text-danger">{{ Tour.nameTour }}</span>
                                <br />

                                <div class="row">
                                    <div class="col-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            width="15"
                                            height="15"
                                            class="me-1 mb-1"
                                            fill="green"
                                        >
                                            <path
                                                d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                                            />
                                        </svg>

                                        <span> {{ Tour.seat }}</span>
                                        <br />
                                        <i class="fa-solid fa-arrow-trend-down"></i>

                                        {{ Tour.discount || 0 }} %
                                        <br />

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            width="15"
                                            height="15"
                                            class="me-1 mb-1"
                                            fill="#8B7D6B"
                                        >
                                            <path
                                                d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 84c-11 0-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104c0-11-9-20-20-20zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z"
                                            />
                                        </svg>
                                        <span>{{
                                           formatCurrency(Tour.priceSale)
                                        }}</span>
                                    </div>
                                    <div class="col-6">
                                        <i class="fa-solid fa-earth-africa me-1"></i>
                                        <span v-for="item in Country">
                                            <span
                                                v-if="item.id == Tour.countryId"
                                                class="mt-2"
                                                >{{ item.countryName }}</span
                                            >
                                        </span>
                                        <br />
                                    </div>
                                </div>
                            </td>
                            <td class="w-20 p-2">
                                {{ formatDate(Tour.dateStart) }}<br />
                                {{ formatDate(Tour.dateEnd) }}
                            </td>
                            <!-- <td class="w-20">
                                <span v-for="item in User">
                                    <span v-if="item.id == Tour.appUserId">
                                        {{ item.fullName }}</span
                                    ></span
                                >
                            </td> -->
                            <td class="p-4">
                                <div
                                    class="d-flex justify-content-center align-content-center align-items-center"
                                >
                                    <NuxtLink
                                        class="link link-primary text-decoration-none mx-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#create-update-Tour-modal"
                                        @click="TourEdit(Tour)"
                                        style="cursor: pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1.2em"
                                            height="1.2em"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M5 18.08V19h.92l9.06-9.06l-.92-.92z"
                                                opacity="0.3"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92z"
                                            />
                                        </svg>
                                    </NuxtLink>
                                    <NuxtLink
                                        class="link link-danger text-decoration-none mx-1"
                                        style="cursor: pointer"
                                        @click="deleteTour(Tour.id)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteTourModal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1.2em"
                                            height="1.2em"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm4 9.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 1 0 2.5 0v-14.5c0-.69-.56-1.25-1.25-1.25"
                                            />
                                        </svg>
                                    </NuxtLink>
                                    
                                    
                                </div>
                               <div class = "d-flex flex-row mt-2 ps-5">
                                <NuxtLink
                                        class="link link-danger text-decoration-none mx-1"
                                        style="cursor: pointer"
                                        :to="{
                                            path: '/tourhotel',
                                            query: { id: Tour.id },
                                        }"
                                    >
                                        <i class="fa-solid fa-bed text-primary"></i>
                                    </NuxtLink>

                               <NuxtLink
                                        class="link link-danger text-decoration-none mx-1"
                                        style="cursor: pointer"
                                        :to="{
                                            path: '/customerInTour',
                                            query: { id: Tour.id },
                                        }"
                                    >
                                    <i class="fa-solid fa-users text-dark"></i>
                                    </NuxtLink>
                               </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <DeleteTourModal
                    :TourId="selectedTourId"
                    @Tour-deleted="getTours"
                    @hide-modal="getTours"
                />
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
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import DeleteTourModal from '~/components/form/DeleteTourModal.vue';
import Api from '~/service/Base/api.ts';
import {formatCurrency,formatDate} from '~/assets/js/validate'
const api = new Api();
const Tours = ref([]);
const selectedTourId = ref(null);
const editTourData = ref({});
const isEditMode = ref(false);
const User = ref([]);
const pageNumber = ref(1);
const totalPage = ref(0);
const totalCount = ref(0);
const pageSize = ref(10);
const placeStart = ref('Nơi khởi hành');
const dateStart = ref('');
const placeEnd = ref('Nơi kết thúc');
const nameTour = ref('');
const placeStartList = ref([]);
const placeEndList = ref([]);
const Country = ref([]);
const isLocal = ref(true);
const isLocal2 = ref(true);
/**
 * auth
 */
 definePageMeta({
    middleware: ['auth','admin'],
});

/**
 * get all Tours
 */
const getTours = async () => {
    try {
        var response = await api.get(
            `/Tour/GetAllPagination?PageSize=${pageSize.value}&PageNumber=${pageNumber.value}`,
        );
        Tours.value = response.data.responseData.data;
        totalCount.value = response.data.responseData.pagination.totalCount;
        totalPage.value = response.data.responseData.pagination.totalPage;
    } catch (err) {
        console.log(err);
    }
};

;

/**
 * delete Tour
 * @param {*} id
 */
const deleteTour = async (id) => {
    try {
        selectedTourId.value = id;
    } catch (err) {
        console.log(err);
    }
};

onMounted(async () => {
    try {
        // Gọi API để lấy danh sách tours
        await getTours();

        // Lấy danh sách điểm khởi hành và điểm đến trong nước
        Tours.value.forEach((tour) => {
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

/**
 * Search
 * @param {} date
 */

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
    if (!queryString) {
        reloadTourList();
    } else {
        const res = await api.get(`/Tour/SearchTour?${queryString}`, null);
        if (res.data.responseData && res.data.responseData.length > 0) {
            Tours.value = res.data.responseData;
        } else {
            alert('Không có tour nào phù hợp với tìm kiếm của bạn!');
        }
    }
};

/**
 * edit Tour
 * @param {*} Tour
 */
const TourEdit = async (Tour) => {
    try {
        editTourData.value = {
            nameTour: Tour.nameTour,
            descripttion: Tour.descripttion,
            seat: Tour.seat,
            cost: Tour.cost,
            discount: Tour.discount,
            isLocal: Tour.isLocal,
            dateEnd: Tour.dateEnd,
            dateStart: Tour.dateStart,
            timeEnd: Tour.timeEnd,
            timeStart: Tour.timeStart,
            placeStart: Tour.placeStart,
            placeEnd: Tour.placeEnd,
            place: Tour.place,
            plan: Tour.plan,
            isFinish: Tour.isFinish,
            image: Tour.image,
            numOfDay: Tour.numOfDay,
            priceSale: Tour.priceSale,
            serviceInclude: Tour.serviceInclude,
            serviceNotInclude: Tour.serviceNotInclude,
            countryId: Tour.countryId,
            meetingPoint: Tour.meetingPoint,
            id: Tour.id,
        };
        isEditMode.value = true;
    } catch (err) {
        console.log(err);
    }
};

/**
 * send value to modal in create mode
 */
const onCreateMode = async () => {
    try {
        isEditMode.value = false;
        editTourData.value = {
            Name: '',
        };
    } catch (err) {
        console.log(err);
    }
};

/**
 * reset form search
 */
const fetchData = async () => {
    const resCountry = await api.get(`/Country`, null);
    Country.value = resCountry.data.responseData;
    const res = await api.get(`/Account/All`, null);
    User.value = res.data.responseData;
};
/**
 * call
 */
onMounted(async () => {
    await getTours();
    await fetchData();
})
const reloadTourList = async () => {
    const getTour = await api.get(`/Tour/GetAllTour`, null);
    Tours.value = getTour.data.responseData;
    placeStart.value = 'Nơi khởi hành';
    placeEnd.value = 'Nơi kết thúc';
    dateStart.value = '';
    nameTour.value = '';
};

/**
 * Pagination
 */
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
// const filteredCountries = computed(() => {
//     // Nếu tour là nước ngoài, loại bỏ Việt Nam khỏi danh sách
//     if (!Tour.value.isLocal) {
//         return Country.value.filter(country => country.id !== 1);
//     }
//     return Country.value;
// });
// Lọc quốc gia tùy thuộc vào loại tour
const filteredCountries = computed(() => {
      if (!isLocal.value) {
        // Nếu là tour nước ngoài, loại bỏ Việt Nam khỏi danh sách
        return Country.value.filter(country => country.id !== 1);
      }
      return Country.value;
    });

</script>
