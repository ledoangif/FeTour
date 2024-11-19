<template>
    <div class="row">
        <div class="p-4">
            <div class="search">
                <h4 class="search-text h5">Đơn đặt tour</h4>
                <form name="search" @submit.prevent="search">
                    <div class="mt-3">Tìm kiếm:</div>
                    <div class="search-text d-flex align-content-center">
                        <div class="col-md-3">
                            <input
                                class="form-control col-md-2"
                                v-model="searchString"
                                type="text"
                                placeholder=" Mã đơn đặt... "
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
                    <TheFormCreateUpdateBooking
                        :isEditMode="isEditMode"
                        :editBooking="editBookingData"
                        @Booking-saved="getInfor"
                    />
                   
                    <div class="reload">
                        <a class="text-info" href="#" @click="getBookings()">
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
                    :key="Bookings.length" class="table text-center table-hover table-success table-striped-columns"
                >
                    <thead class="table-primary table-active">
                        <tr>
                            <th scope="col">No.</th>
                            <th colspan="2">Thông tin khách hàng </th>
                            <th colspan="2">Thông tin tour</th>
                            <th colspan="2">Thông tin thanh toán</th>
                            <th colspan="2">Trạng thái đơn đặt</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(Booking, index) in Bookings" :key="index">
                            <td class="p-4">{{ ++index }}</td>
                            <td colspan="2" class="p-4">
                                    <span v-for="item in Customer">
                                        <span v-if="item.id == Booking.customerId">
                                        {{ item.nameCustomer }}<br />
                                        <a
                                            class="phone-link"
                                            :href="`tel://${item.phoneNumber}`"
                                        >
                                            {{ item.phoneNumber }}</a
                                        ><br />
                                        {{ item.email }}
                                    </span>
                                    </span>
                            </td>
                            <td colspan="2" class="p-4 w-25">
                                <span v-for="item in Tour">
                                    <span v-if="item.id == Booking.tourId">
                                        {{ item.nameTour }}<br />
                                        <span class="text-danger">
                                            {{
                                                formatCurrency(item.priceSale)
                                            }}</span
                                        >
                                    </span>
                                </span>
                            </td>
                            <td colspan="2" class="p-4 w-25">
                                <span>Vé người lớn : {{ Booking.adult }}</span> <br />
                                <span v-if="Booking.child > 0">
                                    Vé trẻ em : {{ Booking.child }}</span
                                ><br />
                                <span>
                                    Thành tiền :
                                    {{
                                        formatCurrency(Booking.totalBill)
                                    }}</span
                                >
                                <br />
                                <span v-if="Booking.paymentBy == Tour_constants.Banking">
                                    Hình thức :
                                    <i class="fa-solid fa-money-check-dollar"></i
                                ></span>
                                <span v-if="Booking.paymentBy == Tour_constants.Cash">
                                    Hình thức : <i class="fa-solid fa-money-bills"></i>
                                </span>
                            </td>
                            <td colspan="2" class="p-4 w-25">
                                <span>
                                    Đã thanh toán :
                                    {{
                                        formatCurrency(Booking.paymented)
                                    }}
                                </span>
                                <br />
                                <span> Trạng thái : {{ Booking.statusBill }}</span>
                                <br />
                                <button
                                    v-if="Booking.statusBill === Tour_constants.Paid"
                                    class="btn btn-success btn-sm mt-2"
                                >
                                    Success
                                </button>
                                <button
                                    v-else-if="
                                        Booking.statusBill === Tour_constants.Customercancel
                                    "
                                    class="btn btn-danger btn-sm mt-2"
                                >
                                    Customercancel
                                </button>
                                <button
                                    v-else-if="
                                        Booking.statusBill === Tour_constants.Deposited
                                    "
                                    class="btn btn-warning btn-sm mt-2"
                                >
                                    Deposited
                                </button>
                                <button
                                    v-else-if="
                                        Booking.statusBill === Tour_constants.Cancel
                                    "
                                    class="btn btn-danger btn-sm mt-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    v-else-if="
                                        Booking.statusBill === Tour_constants.Pending
                                    "
                                    class="btn btn-secondary btn-sm mt-2"
                                >
                                    Pending
                                </button>
                            </td>

                            <td class="p-4">
                                <div
                                    class="d-flex justify-content-center align-content-center align-items-center"
                                >
                                    <NuxtLink
                                        class="link link-primary text-decoration-none mx-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#create-update-Booking-modal"
                                        @click="BookingEdit(Booking)"
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
                                        class="link link-danger text-decoration-none mx-1"
                                        style="cursor: pointer"
                                        @click="deleteBooking(Booking.id)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteBookingModal"
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
                <DeleteBookingModal
                    :BookingId="selectedBookingId"
                    @Booking-deleted="getBookings"
                    @hide-modal="getBookings"
                />
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <span class="me-5">Tổng số: {{ totalCount }} đơn đặt</span>
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
import DeleteBookingModal from '~/components/form/DeleteBookingModal.vue';
import Api from '~/service/Base/api.ts';
import Tour_constants from '~/assets/js/constants/constants';
import { formatCurrency } from '~/assets/js/validate';
const api = new Api();
const Bookings = ref([]);
const selectedBookingId = ref(null);
const editBookingData = ref({});
const isEditMode = ref(false);
const searchString = ref('');
const pageNumber = ref(1);
const totalPage = ref(0);
const totalCount = ref(0);
const pageSize = ref(10);
const Customer = ref([]);
const Tour = ref([]);
const customer= ref({});

/**
 * auth
 */
definePageMeta({
    middleware: ['auth','admin'],
});

/**
 * get all Bookings
 */
const getBookings = async () => {
    try {
        var response = await api.get(
            `/Booking/GetAllPagination?PageSize=${pageSize.value}&PageNumber=${pageNumber.value}`,
        );
        Bookings.value = response.data.responseData.data;
        console.log(  Bookings.value)
        totalCount.value = response.data.responseData.pagination.totalCount;
        totalPage.value = response.data.responseData.pagination.totalPage;
    } catch (err) {
        console.log(err);
    }
};

const getInfor =  async() =>
{
    const res = await api.get(`/Customer`, null);
    Customer.value = res.data.responseData;
    const resTour = await api.get(`/Tour/GetAllTour`, null);
    Tour.value = resTour.data.responseData;
    await getBookings();
  
}

onMounted(async () => {
    try {
        await getInfor();
    } catch (error) {
        console.error('Error fetching initial data:', error);
    }
});

/**
 * delete Booking
 * @param {*} id
 */
const deleteBooking = async (id) => {
    try {
        selectedBookingId.value = id;
    } catch (err) {
        console.log(err);
    }
};
/**
 * edit Booking
 * @param {*} Booking
 */
const BookingEdit = async (Booking) => {
    try {
        const res = await api.get(`/Customer/${Booking.customerId}`,null);
        customer.value = res.data.responseData;
        editBookingData.value = {
            ...Booking,
            nameCustomer: customer.value.nameCustomer,
            phoneNumber: customer.value.phoneNumber,
            address: customer.value.address,
            gender: customer.value.gender,
            identityCard: customer.value.identityCard,
            email: customer.value.email,
            accountBank: customer.value.accountBank,
            bankName: customer.bankName,
        };
        isEditMode.value = true;
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
       await getInfor();
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
            await getInfor(); 
            return;
        } else {
            const res = await api.get(`/Booking/SearchBooking?id=${searchString.value}`, null);
            Bookings.value = [res.data.responseData];
            console.log(Bookings.value);
     
        }
    } catch (err) {
        console.log(err);
    }
};

/**
 * Pagination
 */
const nextPage = () => {
    pageNumber.value++;
    getInfor();
};
const previousPage = () => {
    pageNumber.value--;
    getInfor();
};
const setPage = (number) => {
    pageNumber.value = number;
    getInfor();
};

/**
 * Excel
 */
const excelExport = async () => {
    let options = {
        responseType: 'blob',
    };
    const apiUrl = `/Booking/ExcelExportBooking`;
    var response = await api.get(apiUrl, options);
    var blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Booking_CV.xlsx');
    document.body.appendChild(link);
    link.click();
};
</script>
