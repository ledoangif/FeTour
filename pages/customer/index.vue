<template>
    <div class="row">
        <div class="p-4">
            <div class="search">
                <h4 class="search-text h5">Khách hàng</h4>
                <form name="search" @submit.prevent="search">
                    <div class="mt-3">Tìm kiếm:</div>
                    <div class="search-text d-flex align-content-center">
                        <div class="col-md-3">
                            <input
                                class="form-control col-md-2"
                                v-model="searchString"
                                type="text"
                                placeholder=" Số điện thoại... "
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
                    <TheFormCreateUpdateCustomer
                        :isEditMode="isEditMode"
                        :editCustomer="editCustomerData"
                        @Customer-saved="getCustomers"
                    />
                    

                    <div class="reload">
                        <a class="text-info" href="#" @click="getCustomers()">
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
                    class="table text-center table-hover table-success table-striped-columns"
                >
                    <thead class="table-primary table-active">
                        <tr>
                            <th scope="col">No.</th>
                            <th colspan="2">Thông tin khách hàng</th>
                            <th colspan="2">Thông tin liên lạc</th>
                            <th scope="col">Địa chỉ</th>
                            <th colspan="2">Thông tin thanh toán</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(Customer, index) in Customers" :key="index">
                            <td class="p-4 booking-id-col">{{ ++index }}</td>
                            <td colspan="2" class="p-4">
                                {{ Customer.nameCustomer }} -
                                <span v-if="Customer.gender == true">Nam</span>
                                <span v-else="Customer.gender == false">Nữ</span>
                                <br />
                                <span>CCCD : {{ Customer.identityCard }}</span>
                            </td>
                            <td colspan="2" class="p-4">
                                <a
                                    class="phone-link"
                                    :href="`tel://${Customer.phoneNumber}`"
                                    >{{ Customer.phoneNumber }}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-telephone-forward-fill ms-2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"
                                        /></svg></a>
                                <br />
                                <span> {{ Customer.email }}</span>
                            </td>

                            <td class="p-4">
                                {{ Customer.address }}
                            </td>
                            <td colspan="2" class="p-4">
                                {{ Customer.accountBank }} <br />
                                {{ Customer.bankName }}
                            </td>

                            <td class="p-4">
                                <div
                                    class="d-flex justify-content-center align-content-center align-items-center"
                                >
                                    <NuxtLink
                                        class="link link-primary text-decoration-none mx-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#create-update-Customer-modal"
                                        @click="CustomerEdit(Customer)"
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
                                        @click="deleteCustomer(Customer.id)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteCustomerModal"
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
                <DeleteCustomerModal
                    :CustomerId="selectedCustomerId"
                    @Customer-deleted="getCustomers"
                    @hide-modal="getCustomers"
                />
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <span class="me-5">Tổng số: {{ totalCount }} Khách hàng</span>
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
import { ref, onMounted} from 'vue';
import DeleteCustomerModal from '~/components/form/DeleteCustomerModal.vue';
import Api from '~/service/Base/api.ts';
const api = new Api();
const Customers = ref([]);
const selectedCustomerId = ref(null);
const editCustomerData = ref({});
const isEditMode = ref(false);
const searchString = ref('');
const pageNumber = ref(1);
const totalPage = ref(0);
const totalCount = ref(0);
const pageSize = ref(10);
/**
 * auth
 */
 definePageMeta({
    middleware: ['auth','admin'],
});

/**
 * get all Customers
 */
const getCustomers = async () => {
    try {
        var response = await api.get(
            `/Customer/GetAllPagination?PageSize=${pageSize.value}&PageNumber=${pageNumber.value}`,
        );
        Customers.value = response.data.responseData.data;
        totalCount.value = response.data.responseData.pagination.totalCount;
        totalPage.value = response.data.responseData.pagination.totalPage;
    } catch (err) {
        console.log(err);
    }
};


/**
 * delete Customer
 * @param {*} id
 */
const deleteCustomer = async (id) => {
    try {
        selectedCustomerId.value = id;
    } catch (err) {
        console.log(err);
    }
};

/**
 * edit Customer
 * @param {*} Customer
 */
const CustomerEdit = async (Customer) => {
    try {
        editCustomerData.value = {
            nameCustomer: Customer.nameCustomer,
            phoneNumber: Customer.phoneNumber,
            identityCard: Customer.identityCard,
            address: Customer.address,
            email: Customer.email,
            accountBank: Customer.accountBank,
            gender: Customer.gender,
            bankName: Customer.bankName,
            id: Customer.id,
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
        getCustomers();
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
            await getCustomers();
            return;
        } else {
            const res = await api.get(`/Customer/searchByPhone?phone=${searchString.value}`, null);
            Customers.value = res.data.responseData;
        }
    } catch (err) {
        console.log(err);
    }
};

/**
 * call
 */
onMounted (async () => {
    await getCustomers();
})
/**
 * Pagination
 */
const nextPage = () => {
    pageNumber.value++;
    getCustomers();
};
const previousPage = () => {
    pageNumber.value--;
    getCustomers();
};
const setPage = (number) => {
    pageNumber.value = number;
    getCustomers();
};

/**
 * Excel
 */
const excelExport = async () => {
    let options = {
        responseType: 'blob',
    };

    const apiUrl = `/Customer/ExcelExportCustomer`;
    var response = await api.get(apiUrl, options);
    var blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Customer_CV.xlsx');
    document.body.appendChild(link);
    link.click();
};
</script>
