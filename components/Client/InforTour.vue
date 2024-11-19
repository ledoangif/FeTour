<template>
    <div class="col-4 mt-5">
        <div
            class="mt-5"
            style="border: 2px solid rgba(211, 211, 211, 0.5); height: 580px"
        >
            <h5 class="fw-bold mt-4 ms-3">Tóm tắt chuyến đi</h5>
            <div class="d-flex flex-row m-3">
                <div class="col-2 p-0 m-0">
                    <div class="image-tour4 position-relative mt-3 ms-2">
                        <img
                            :src="props.tour.image"
                            class="img-fluid"
                            style="width: 100%; height: 100%; object-fit: cover"
                        />
                    </div>
                </div>
                <div class="col-10">
                    <h6 class="mt-3">{{ props.tour.nameTour }}</h6>
                </div>
            </div>
            <div class="d-flex flex-row m-3">
                <div class="col-1 p-0 m-0 text-end" style="color: #377df4">
                    <i class="fa-solid fa-calendar-week ms-4"></i><br />
                    <div class="">
                        |<br />
                        |<br />
                        |<br />
                    </div>
                    <i class="fa-solid fa-calendar-week ms-4"></i><br />
                </div>
                <div class="col-11">
                    <span>Bắt đầu chuyển đi</span> <br />
                    <span class="fw-bold">{{
                        props.formatDate2(props.tour.dateStart)
                    }}</span>
                    <div class="">
                        <br />
                    </div>
                    <span>Kết thúc chuyển đi</span> <br />
                    <span class="fw-bold">{{
                        props.formatDate2(props.tour.dateEnd)
                    }}</span>
                </div>
            </div>
            <div class="d-flex flex-row me-3 ms-3 mt-5">
                <div class="col-4 p-0 m-0 text-end d-flex flex-row">
                    <i class="fa-solid fa-users me-1"></i>
                    <h6>Hành khách</h6>
                </div>
                <div class="col-9 text-end text-danger">
                    <h6 class="me-4 text-danger">
                        {{

                          formatCurrency( props.toTalBill)
                        }}
                    </h6>
                </div>
            </div>
            <div
                class="d-flex flex-row me-3 ms-3 mt-3 justify-content-between border-bottom pb-3"
            >
                <div class="col-4 p-0 m-0 text-end d-flex flex-row">
                    <h6>Người lớn</h6>
                </div>
                <div class="col-9 text-danger d-flex flex-row justify-content-end">
                    <h6 class="me-1">{{ props.countAdult }} x</h6>
                    <h6 class="me-4">
                        {{
                          formatCurrency( props.tour.priceSale)
                        }}
                    </h6>
                </div>
            </div>
            <div
                class="d-flex flex-row me-4 ms-3 mt-3 justify-content-between border-bottom pb-3"
                v-if="props.countChild > 0"
            >
                <div class="col-4 p-0 m-0 text-end d-flex flex-row">
                    <h6>Trẻ em</h6>
                </div>
                <div class="col-9 text-danger d-flex flex-row justify-content-end">
                    <h6 class="me-1">{{ props.countChild }}x</h6>
                    <h6 class="me-4">
                        {{
                           formatCurrency(  props.toTalChild)
                        }}
                    </h6>
                </div>
            </div>
            <div class="d-flex flex-row me-3 ms-3 mt-3 justify-content-between">
                <div class="col-4 p-0 m-0 text-end d-flex flex-row">
                    <h4 class="text-danger">Tổng tiền</h4>
                </div>
                <div class="col-9 text-danger d-flex flex-row justify-content-end">
                    <h4 class="me-4 text-danger">
                        {{
                           formatCurrency( props.toTalBill)
                        }}
                    </h4>
                </div>
            </div>
            <div class="p-3">
                <button
                    type="button"
                    class="btn btn-danger btn-small mb-3 w-100 mt-3"
                    @click="handleSubmit"
                >
                    <i class="fa-solid fa-cart-shopping text-white"></i>
                    Đặt ngay
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import API from '../../service/Base/api';
import moment from 'moment-timezone';
import Tour_constants from '~/assets/js/constants/constants';
import { formatCurrency } from '~/assets/js/validate';
import { Base64 } from 'js-base64';
const api = new API();
const router = useRouter();
const props = defineProps({
    countAdult: Number,
    countChild: Number,
    toTalChild: Number,
    toTalBill: Number,
    formatDate2: Function,
    tour: Object,
    customer: Object,
    listCustomer: String,
    payment: String,
});
const handleSubmit = async () => {
    try {
        const { nameCustomer, phoneNumber, address, email } = props.customer;

        // Step 1: Validate Customer Information
        if (!nameCustomer || !phoneNumber || !address || !email) {
            alert('Vui lòng nhập đầy đủ thông tin khách hàng.');
            return;
        }

        const localTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DDTHH:mm:ss');

        // Step 2: Check if the customer already exists
        const searchResponse = await api.get(`/Customer/search`, {
            params: { email:email, phone: phoneNumber },
        });
        const existingCustomer = searchResponse.data.responseData;
        console.log(existingCustomer);

        let customerId;

        if (existingCustomer.length >0) {
            // Customer exists, update their information
            customerId = existingCustomer[0].id;
            console.log(customerId)
            const data = {
                nameCustomer,
                phoneNumber,
                address,
                email,
                id: customerId,
            };

            await api.putAPI(`/Customer/${customerId}`, data);
        } else {
            // Step 3: Add the new customer
            const formData = new FormData();
            formData.append('nameCustomer', nameCustomer);
            formData.append('phoneNumber', phoneNumber);
            formData.append('address', address);
            formData.append('email', email);

            const resp = await api.postAPI(`/Customer/Insert`, formData);

            // Fetch the newly added customer
            const res = await api.get(`/Customer`, {
                params: { email, phone: phoneNumber },
            });
            console.log(res.data.responseData);
            const newCustomer = res.data.responseData.find(
                (customer) => customer.phoneNumber === phoneNumber && customer.email === email,
            );

            if (newCustomer) {
                customerId = newCustomer.id;
            } else {
                throw new Error('New customer could not be retrieved.');
            }
        }
        // Step 4: Create the booking
        const { id: tourId } = props.tour;
        const {
            toTalBill,
            payment,
            countChild,
            countAdult,
            listCustomer,
            countResult,
            toTalChild,
        } = props;
        const formData2 = new FormData();
        formData2.append('customerId', customerId);
        formData2.append('tourId', tourId);
        formData2.append('totalBill', toTalBill);
        formData2.append('paymented', 0);
        formData2.append('paymentBy', payment);
        formData2.append('paymentTime', localTime);
        formData2.append('child', countChild);
        formData2.append('adult', countAdult);
        formData2.append('statusBill', 'Chờ xử lý');
        formData2.append('customerinTours', JSON.stringify(listCustomer));

        const response = await api.postAPI(`/Booking/InsertBooking`, formData2);

        if (response.data.message === Tour_constants.SoldOutTicket) {
            alert('Vé hiện không đủ để đặt');
            return;
        }
        // Fetch the booking to get its ID
        const resBooking = await api.get(`/Booking`, {
            params: { customerId, tourId },
        });
        const booking = resBooking.data.responseData.find(
            (booking) => booking.customerId === customerId && booking.tourId === tourId,
        );

        if (booking) {
    const bookingId = booking.id;
    const bookingData = {
        customerId,
        tourId,
        countAdult: countResult,
        countChild,
        listCustomer,
        toTalChild,
        toTalBill,
        BookingId: bookingId,
    };
    
    const encodedData = Base64.encode(JSON.stringify(bookingData));

    // Navigate to confirmation page with encoded data
    router.push({
        path: '/payment',
        query: { data: encodedData ,bookingId: bookingId},
    });
} else {
    throw new Error('Booking could not be retrieved.');
}
    } catch (error) {
        console.error('Lỗi khi xử lý submit:', error);
        alert('Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại sau.');
    }
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
</style>
