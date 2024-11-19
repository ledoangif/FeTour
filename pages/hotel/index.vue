<template>
    <div class="row">
        <div class="p-4">
            <div class="search">
                <h4 class="search-text h5">Khách sạn</h4>
                <form name="search" @submit.prevent="search">
                    <div class="mt-3">Tìm kiếm:</div>
                    <div class="search-text d-flex align-content-center">
                        <div class="col-md-3">
                            <input
                                class="form-control col-md-2"
                                v-model="searchString"
                                type="text"
                                placeholder=" Tên khách sạn... "
                            />
                        </div>
                        <span class="button d-flex">
                            <button
                                class="ms-2 btn-sm me-1 btn btn-primary"
                                type="submit"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                                    />
                                </svg>
                                Tìm kiếm
                            </button>
                            <button
                                class="btn btn-sm btn-outline-primary"
                                type="reset"
                                @click="resetSearchForm()"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 256 256"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M225 80.4L183.6 39a24 24 0 0 0-33.94 0L31 157.66a24 24 0 0 0 0 33.94l30.06 30.06a8 8 0 0 0 5.68 2.34H216a8 8 0 0 0 0-16h-84.7l93.7-93.66a24 24 0 0 0 0-33.94M213.67 103L160 156.69L107.31 104L161 50.34a8 8 0 0 1 11.32 0l41.38 41.38a8 8 0 0 1 0 11.31Z"
                                    />
                                </svg>
                                Xóa Form
                            </button>
                        </span>
                    </div>
                </form>
            </div>
            <div class="data">
                <div class="btn-handle d-flex justify-content-end mb-3">
                    <div class="handle-create">
                        <TheFormCreateUpdateHotel
                            :isEditMode="isEditMode"
                            :editHotel="editHotelData"
                            @Hotel-saved="getHotels"
                        />
                        <a
                            @click="onCreateMode"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#create-update-Hotel-modal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
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
                        <a class="text-info" href="#" @click="getHotels()">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
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
                            <th>Địa chỉ</th>
                            <th>Hotline</th>
                            <th>Chủ sở hữu</th>
                            <th>Số sao</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(Hotel, index) in Hotels" :key="index">
                            <td>{{ ++index }}</td>

                            <td class="text-decoration-none">
                                <a :href="Hotel.linkHotel">{{ Hotel.hotelName }}</a>
                            </td>
                            <td>
                                {{ Hotel.address }}
                            </td>
                            <td>
                                {{ Hotel.hotline }}
                            </td>
                            <td>
                                {{ Hotel.ceo }}
                            </td>
                            <td>
                                <div class="d-flex flex-row justify-content-center">
                                    <div class="pb-2">{{ Hotel.rate }}</div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        width="18"
                                        height="18"
                                        fill="yellow"
                                        class="ms-1"
                                    >
                                        <path
                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                        />
                                    </svg>
                                </div>
                            </td>
                            <td>
                                <div
                                    class="d-flex justify-content-center align-content-center align-items-center"
                                >
                                    <NuxtLink
                                        class="link link-primary text-decoration-none mx-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#create-update-Hotel-modal"
                                        @click="HotelEdit(Hotel)"
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
                                    <NuxtLink
                                        v-if="role == 'Admin'"
                                        class="link link-danger text-decoration-none mx-1"
                                        style="cursor: pointer"
                                        @click="deleteHotel(Hotel.id)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteHotelModal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm4 9.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 1 0 2.5 0v-14.5c0-.69-.56-1.25-1.25-1.25"
                                            />
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <DeleteHotelModal
                    :HotelId="selectedHotelId"
                    @Hotel-deleted="getHotels"
                    @hide-modal="getHotels()"
                />
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <span class="me-5">Tổng số: {{ totalCount }} khách sạn</span>
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
import DeleteHotelModal from '~/components/form/DeleteHotelModal.vue';
import Api from '~/service/Base/api.ts';
const api = new Api();
const Hotels = ref([]);
const selectedHotelId = ref(null);
const editHotelData = ref({});
const isEditMode = ref(false);
const searchString = ref('');
const pageNumber = ref(1);
const totalPage = ref(0);
const totalCount = ref(0);
const pageSize = ref(10);
const role = ref('');
/**
 * auth
 */
 definePageMeta({
    middleware: ['auth','admin'],
});
if (process.client) {
    role.value = localStorage.getItem('role');
}
/**
 * get all Hotels
 */
const getHotels = async () => {
    try {
        var response = await api.get(
            `/Hotel/GetAllPagination?PageSize=${pageSize.value}&PageNumber=${pageNumber.value}`,
        );
        console.log(response);
        Hotels.value = response.data.responseData.data;
        totalCount.value = response.data.responseData.pagination.totalCount;
        totalPage.value = response.data.responseData.pagination.totalPage;
    } catch (err) {
        console.log(err);
    }
};



/**
 * delete Hotel
 * @param {*} id
 */
const deleteHotel = async (id) => {
    try {
        selectedHotelId.value = id;
    } catch (err) {
        console.log(err);
    }
};

/**
 * edit Hotel
 * @param {*} Hotel
 */
const HotelEdit = async (Hotels) => {
    try {
        editHotelData.value = {
            hotelName: Hotels.hotelName,
            linkHotel: Hotels.linkHotel,
            rate: Hotels.rate,
            address: Hotels.address,
            ceo: Hotels.ceo,
            hotline: Hotels.hotline,
            id: Hotels.id,
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
 * reset form search
 */
const resetSearchForm = async () => {
    try {
        searchString.value = '';
        getHotels();
    } catch (err) {
        console.log(err);
    }
};

/**
 * search
 */
const search = async () => {
    try {
        if (!searchString.value) {
            getHotels();
            return;
        } else {
            const res = await api.get(`/Hotel/search/${searchString.value}`, null);
            Hotels.value = res.data.responseData;
        }
    } catch (err) {
        console.log(err);
    }
};

/**
 * call
 */
onMounted(async () => {
    await getHotels();
})
/**
 * Pagination
 */
const nextPage = () => {
    pageNumber.value++;
    getHotels();
};
const previousPage = () => {
    pageNumber.value--;
    getHotels();
};
const setPage = (number) => {
    pageNumber.value = number;
    getHotels();
};
</script>
