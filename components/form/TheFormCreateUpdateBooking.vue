<template>
    <Form @submit="handleSubmit">
        <CVModal id_model="create-update-Booking-modal"
        @close-modal="resetForm"  <!-- Lắng nghe sự kiện đóng modal và gọi resetForm -->
        >
            <template #icon>
                <slot name="icon"></slot>
            </template>
            <template #title>
                <span v-if="!isEditMode">
                    <slot name="header">Thêm Booking du lịch </slot>
                </span>
                <span v-else>
                    <slot name="header">
                        <div>
                            <span>Cập nhật Booking du lịch</span> <button type="button" class="btn btn-success ms-5" @click="showCustmomer">Cập nhật khách hàng</button>
                        </div>
                    </slot>
                    
                </span>
            </template>
            <template #body>
                <div class="row">
                    <div class="bg-light row m-0 p-2 mb-3" v-if ="showKH" >
                        <div class="row col-lg-6 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Tên khách hàng
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="nameCustomer"
                                    v-model="Booking.nameCustomer"
                                    type="text"
                                    class="form-control"
                                    :rules="{required:true,onlyCharacters :true}"
                                />

                                <ErrorMessage name="nameCustomer" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Số điện thoại
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="phoneNumber"
                                    v-model="Booking.phoneNumber"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true, phone:true}"
                                />
                                <ErrorMessage name="phoneNumber" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Địa chỉ
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="address"
                                    v-model="Booking.address"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true}"
                                />
                                <ErrorMessage name="address" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Giới tính
                            </label>
                            <div class="col-sm-8">
                                <select
                                    v-model="Booking.gender"
                                    class="form-control"
                                >
                                    <option
                                        v-for="gender in Gender"
                                        :key="gender"
                                        :value="gender"
                                    >
                                        {{ gender }}
                                    </option>
                             </select>
                            </div>
                        </div>
                    </div>

                    <div class="row col-lg-6 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                CCCD
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="identityCard"
                                    v-model="Booking.identityCard"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true}"
                                />
                                <ErrorMessage name="identityCard" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Email
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="email"
                                    v-model="Booking.email"
                                    type="text"
                                    class="form-control"
                                    :rules="{email: true}"
                                />
                                <ErrorMessage name="email" class="text-danger" />
                            </div>
                            
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Số tài khoản
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="accountBank"
                                    v-model="Booking.accountBank"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true}"
                                />
                                <ErrorMessage name="accountBank" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Ngân hàng
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="bankName"
                                    v-model="Booking.bankName"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true}"
                                />
                                <ErrorMessage name="bankName" class="text-danger" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="row col-lg-6 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Mã tour
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="tourId"
                                    v-model="Booking.tourId"
                                    type="text"
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="row form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Mã khách hàng
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    id="customerId"
                                    name="customerId"
                                    v-model="Booking.customerId"
                                    class="form-control"
                                    type="text"
                                    disabled
                                />
                                <br />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Vé người lớn
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="adult"
                                    v-model="Booking.adult"
                                    type="text"
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                                >Tổng tiền
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    id="totalBill"
                                    name="totalBill"
                                    v-model="Booking.totalBill"
                                    class="form-control"
                                    type="text"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Đã thanh toán
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="paymented"
                                    v-model="Booking.paymented"
                                    type="text"
                                    class="form-control"
                                    :disabled="isDisabled(Booking.statusBill)"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="row col-lg-6">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Phương thức thanh toán
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="paymentBy"
                                    v-model="Booking.paymentBy"
                                    type="text"
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>

                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Vé trẻ em
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="child"
                                    v-model="Booking.child"
                                    type="text"
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>

                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Trạng thái đơn
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    as="select"
                                    id="statusBill"
                                    name="statusBill"
                                    v-model="Booking.statusBill"
                                    class="form-control"
                                >
                                    <option
                                        v-for="item in statusBill"
                                        class="text-dark"
                                        :value="item.value"
                                    >
                                        {{ item.value }}
                                    </option>
                                </Field>
                            </div>
                        </div>
                        <div class="row form-group required mb-3">
                            <label
                                for="source-name"
                                class="col-sm-3 col-form-label control-label text-end"
                                >Danh sách khách hàng
                            </label>
                            <div class="col-sm-9">
                                <TipTap v-model="Booking.customerInTours"></TipTap>
                            </div>
                        </div>
                    </div>
                  
                </div>

                <div class="modal-footer align-content-center justify-content-center">
                    <button
                        v-if="isEditMode"
                        type="submit"
                        class="btn btn-sm btn-primary d-flex align-items-center"
                    >
                        Lưu
                    </button>
                    <button
                        v-else
                        type="submit"
                        class="btn btn-sm btn-primary d-flex align-items-center"
                        data-bs-dismiss="modal"
                    >
                        Thêm
                    </button>
                </div>
            </template>
        </CVModal>
    </Form>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Api from '~/service/Base/api.ts';
import { Form, Field, ErrorMessage } from 'vee-validate';
import Tour_constants from '~/assets/js/constants/constants';
import { useToast } from 'vue-toast-notification';
const toast = useToast();
const api = new Api();
const formRef = ref(null);
const emits = defineEmits(['Booking-saved']);
const meetingPoint = ref({});
const showKH = ref(false);
/** received data */
const props = defineProps({
    editBooking: {
        type: Object,
        default: null,
        required: false,
    },
    isEditMode: {
        type: Boolean,
        default: false,
        required: true,
    },
});

/**
 * init statusBill
 */
const statusBill = [
    { id: 1, value: 'Đã thanh toán' },
    { id: 2, value: 'Đã đặt cọc' },
    { id: 3, value: 'Hủy' },
    { id: 4, value: 'Chờ xử lý' },
    { id: 5, value:'Khách hàng hủy'},
];

/**
 * init Booking
 */
const Booking = ref({
    tourId: '',
    customerId: '',
    totalBill: '',
    paymented: '',
    paymentBy: '',
    child: '',
    adult: '',
    statusBill: 'Chờ xử lý',
    customerInTours: '',
    id: '',
    nameCustomer: '',
    phoneNumber: '',
    identityCard: '',
    address: '',
    email: '',
    accountBank: '',
    gender: true,
    bankName: '',
    idCustomer:'',
});

/**
 * init Gender
 */
const Gender = ['true', 'false'];

/**
 * toggles the value of the 'showKH' varrible
 */
const showCustmomer = () => {
    showKH.value = !showKH.value;
};

/** reset form */
const resetForm = () => {
    if (formRef.value) {
        formRef.value.resetForm();
    }
};
/** update Booking */
const updateBooking = async () => {
    const data = {
        tourId: Booking.value.tourId,
        customerId: Booking.value.customerId,
        totalBill: Booking.value.totalBill,
        paymented: Booking.value.paymented,
        paymentBy: Booking.value.paymentBy,
        paymentTime: props.editBooking.paymentTime,
        isLocal: Booking.value.isLocal,
        adult: Booking.value.adult,
        statusBill: Booking.value.statusBill,
        customerInTours: Booking.value.customerInTours,
        createDate: props.editBooking.createDate,
        updateDate: new Date(),
        id: props.editBooking.id,
    };
    const dataCustomer = {
        nameCustomer: Booking.value.nameCustomer,
        phoneNumber: Booking.value.phoneNumber,
        identityCard: Booking.value.identityCard,
        address: Booking.value.address,
        email: Booking.value.email,
        accountBank:Booking.value.accountBank,
        gender: Booking.value.gender,
        bankName: Booking.value.bankName,
        id : props.editBooking.customerId,
    }
    try {
        if(showKH.value == true)
        {
           await api.putAPI(`/Customer/${props.editBooking.customerId}`,dataCustomer);
        }
        const booking=await api.putAPI(`/Booking/${props.editBooking.id}`, data);
        if (booking.status === 200) {
            if (booking.data && booking.data.message) {
                // Hiển thị thông báo thành công
                toast.success(booking.data.message);  // Hiển thị thông báo với toast (thành công)
            }
        }
        emits('Booking-saved');
        const formData = new FormData();
        formData.append('to', Booking.value.email);
        formData.append('status', data.statusBill);

        const mail=await api.postAPI(`/Booking/TestSendMailByStatus?id=${props.editBooking.id}`,formData,);
        if (mail.status === 200) {
            if (mail.data && mail.data.message) {
                // Hiển thị thông báo thành công
                        toast.success(mail.data.message);  // Hiển thị thông báo với toast (thành công)
            }
        }
    } catch (error) {
        console.error('Error updating Booking:', error);
    }
    resetForm();
};
/**
 * handle submit
 */
const handleSubmit = () => {
    if (props.isEditMode) {
        updateBooking();
    } else {
        createBooking();
    }
};
  /**
   * Checks if the given status is disabled.
   *
   * @param {string} status - The status to check.
   * @return {boolean} True if the status is cancelled, unpaid, or pending, false otherwise.
   */
const isDisabled=(status) => {
            return status === Tour_constants.Cancel ||
                   //status === Tour_constants.UnPaid ||
                   status===Tour_constants.Deposited||
                   status===Tour_constants.Customercancel||
                   status === Tour_constants.Pending;
        }
/**
 * update data of edit Booking
 */
watch(
    () => props.editBooking,
    (newVal) => {
        if (newVal) {
            Booking.value = { ...newVal };
        }
    },
    { immediate: true },
);
</script>
