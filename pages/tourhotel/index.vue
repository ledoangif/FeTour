<template>
    <div class="row">
        <div class="p-4">
            <div class="search">
                <h4 class="search-text h5">Khách sạn trong Tour</h4>
            </div>
            <div class="data">
                <div class="btn-handle d-flex justify-content-end mb-3">
                    <div class="handle-excel" @click="excelExport">
                        <a class="text-success" href="#"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m13.2 12l2.8 4h-2.4L12 13.714L10.4 16H8l2.8-4L8 8h2.4l1.6 2.286L13.6 8H15V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"
                                /></svg></a>
                    </div>
                    <div class="handle-create">
                        <TheFormCreateUpdateTourHotel
                            :isEditMode="isEditMode"
                            :editTourHotel="editTourHotelData"
                            :tourId="Tourid"
                            @TourHotel-saved="getTourHotels"
                        />
                        <a
                            @click="onCreateMode"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#create-update-TourHotel-modal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5em"
                                height="1.5em"
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
                        <a class="text-info" href="#" @click="getTourHotels()">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5em"
                                height="1.5em"
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
                    class="table text-center table-hover table-success table-striped-columns"
                >
                    <thead class="table-primary table-active">
                        <tr>
                            <th scope="col">No.</th>
                            <th>Khách sạn</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Ghi chú</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(TourHotel, index) in TourHotels" :key="index">
                            <td>{{ ++index }}</td>

                            <td class="text-decoration-none">
                                <span v-for="item in Hotel">
                                    <span v-if="item.id === TourHotel.hotelId">
                                        {{ item.hotelName }}
                                    </span>
                                </span>
                            </td>
                            <td>
                                {{ formatDate(TourHotel.dateStart) }}
                            </td>
                            <td>
                                {{ formatDate(TourHotel.dateEnd) }}
                            </td>
                            <td>
                                {{ TourHotel.note }}
                            </td>
                            <td>
                                <div
                                    class="d-flex justify-content-center align-content-center align-items-center"
                                >
                                    <NuxtLink
                                        class="link link-primary text-decoration-none mx-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#create-update-TourHotel-modal"
                                        @click="TourHotelEdit(TourHotel)"
                                        style="cursor: pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
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
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <span class="me-5">Tổng số: {{ totalCount }} </span>
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
import Api from '~/service/Base/api.ts';
import { formatDate } from '~/assets/js/validate';
import { useRoute } from 'nuxt/app';

/**
 * init data
 */
const api = new Api();
const TourHotels = ref([]);
const Tour = ref([]);
const Hotel = ref([]);
const editTourHotelData = ref({});
const isEditMode = ref(false);
const searchString = ref('');
const pageNumber = ref(1);
const totalPage = ref(0);
const totalCount = ref(0);
const pageSize = ref(10);
const route = useRoute();
const Tourid = computed(() => route.query.id);

/**
 * auth
 */
 definePageMeta({
    middleware: ['auth','admin'],
});
/**
 * get all TourHotels
 */
const getTourHotels = async () => {
    try {
        var response = await api.get(
            `/TourHotel/Pagination?PageSize=${pageSize.value}&PageNumber=${pageNumber.value}&id=${Tourid.value}`,
        );
        console.log(response);
        TourHotels.value = response.data.responseData.data;
        totalCount.value = response.data.responseData.pagination.totalCount;
        totalPage.value = response.data.responseData.pagination.totalPage;
    } catch (err) {
        console.log(err);
    }
};


/**
 * send tourhotel to modal
 * @param {*} TourHotel
 */
const TourHotelEdit = async (TourHotels) => {
    try {
        editTourHotelData.value = {
            hotelId: TourHotels.hotelId,
            note: TourHotels.note,
            dateStart: TourHotels.dateStart,
            dateEnd: TourHotels.dateEnd,
            id: TourHotels.id,
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
    } catch (err) {
        console.log(err);
    }
};


/**
 * call api when component rendered
 */
onMounted(async () => {
    const resTour = await api.get(`/Tour`, null);
    Tour.value = resTour.data.responseData;
    console.log(Tour);
    const resHotel = await api.get(`/Hotel`, null);
    Hotel.value = resHotel.data.responseData;
    console.log(Hotel);
});

/**
 * call
 */
await getTourHotels();
/**
 * Pagination
 */
const nextPage = () => {
    pageNumber.value++;
    getTourHotels();
};
const previousPage = () => {
    pageNumber.value--;
    getTourHotels();
};
const setPage = (number) => {
    pageNumber.value = number;
    getTourHotels();
};

/**
 * Excel
 */
const excelExport = async () => {
    let options = {
        responseType: 'blob',
    };

    const apiUrl = `/TourHotel/ExcelExport`;
    var response = await api.get(apiUrl, options);
    var blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'TourHotel_CV.xlsx');
    document.body.appendChild(link);
    link.click();
};
</script>
