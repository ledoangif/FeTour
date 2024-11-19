<template>
    <div class="row">
        <div class="p-4">
            <div class="search">
                <h4 class="search-text h5">Danh sách trong Tour</h4>
               
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
                            <th>Mã đơn đặt</th>
                            <th colspan="2">Thông tin khách đặt </th>
                            <th colspan="2">Khách hàng trong đơn đặt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(Tour, index) in Tours" :key="index">
                            <td class="py-auto  booking-id-col">{{ ++index }}</td>
                            <td class="py-auto  booking-id-col">
                                {{Tour.bookingId }}
                            </td>
                            <td class="p-auto w-25" colspan="2">
                                {{ Tour.nameCustomer }} <br>
                                  <a class="phone-link" :href="`tel://${Tour.phoneNumber}`"> {{ Tour.phoneNumber }}</a>
                            </td>
                            <td class="p-2 w-25" colspan="2">
                               <span v-html="Tour.customerinTour"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
              
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Api from '~/service/Base/api.ts';
import { useRoute } from 'vue-router';

const api = new Api();
const Tours = ref([]);
const searchString = ref('');
const pageSize = ref(2);
const route = useRoute();
const Tourid = computed(() => route.query.id);
/**
 * auth
 */
definePageMeta({
    middleware: ['auth', 'admin'],
});

/**
 * get all Tours
 */
const getTours = async (id) => {
    try {
        var response = await api.get( `/Tour/GetCustomerByTour?id=${id}`);
        Tours.value = response.data. responseData;
       
    } catch (err) {
        console.log(err);
    }
};
/**
 * search
 */

onMounted(async () => {
    await getTours(Tourid.value);
});
</script>
<style scoped>

</style>
