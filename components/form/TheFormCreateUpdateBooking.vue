<template>
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
                            
                            <span>Cập nhật Booking du lịch</span>
                        </div>
                    </slot>
                </span>
            </template>
            <template #body>
                <Form ref="form" @submit="handleSubmit">
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
                                    <select v-model="Booking.gender" class="form-control">
                                        <option v-for="gender in Gender" :key="gender" :value="gender">
                                            {{ gender ? 'Nam' : 'Nữ' }}
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
                    </div>
                    </div>
                    <div class="row col-lg-6 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <!-- <label
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
                            </div> -->
                            
                            <!-- <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Tên tour
                            </label>
                            <div class="col-sm-8">
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="tourName"
                                    disabled
                                    style="height: 38px; padding: 0.375rem 0.75rem;"
                                />
                            </div> -->
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Tên tour
                            </label>
                            <div class="col-sm-8">
                                <Field as="select" id="tour" name="tour" v-model="Booking.tourId" class="form-control" :disabled="Booking.statusBill !== 'Chờ xử lý'">
                                    <option v-for="item in Tour" :key="item.id" class="text-dark" :value="item.id">
                                        {{ item.nameTour }}
                                    </option>
                                </Field>
                                <ErrorMessage name="tour" class="text-danger" />
                            </div>
                        </div>
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
                                        :disabled="Booking.statusBill !== 'Chờ xử lý'"
                                        :rules="{required:true,onlyCharacters :true}"
                                    />
                                    <ErrorMessage name="nameCustomer" class="text-danger" />
                                </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="adult" class="col-sm-4 col-form-label control-label text-end">
                                Vé người lớn
                            </label>
                            <div class="col-sm-8">
                                    <button type="button" class="btn btn-outline-secondary" @click="decrementAdult" :disabled="Booking.adult <= 1 || Booking.statusBill !== 'Chờ xử lý'" >-</button>
                                    <span class="mx-3">{{ Booking.adult }}</span>
                                    <button type="button" class="btn btn-outline-secondary" @click="incrementAdult" :disabled="Booking.statusBill !== 'Chờ xử lý'">+</button>
                            </div>
                            
                        </div>
                        <!-- <div class="row mb-3 form-group required">
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
                                    
                                />
                            </div>
                        </div> -->
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Tổng tiền
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    id="totalBill"
                                    name="totalBill"
                                    v-model="Booking.totalBill"
                                    class="form-control"
                                    type="text"
                                    :value="formatCurrency(totalBill)"
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
                            <label for="child" class="col-sm-4 col-form-label control-label text-end">
                                Vé trẻ em
                            </label>
                            <div class="col-sm-8">
                                <div class="col-sm-8">
                                    <button type="button" class="btn btn-outline-secondary" @click="decrementChild" :disabled="Booking.child <= 0||Booking.statusBill !== 'Chờ xử lý'">-</button>
                                    <span class="mx-3">{{ Booking.child }}</span>
                                    <button type="button" class="btn btn-outline-secondary" @click="incrementChild" :disabled="Booking.statusBill !== 'Chờ xử lý'" >+</button>
                                </div>
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
                                <span v-if="errorCustomerInTours" class="text-danger">
                                    {{ errorCustomerInTours }}
                                </span>
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
                    >
                        Thêm
                    </button>
                    <button 
                        id="closeModalButton" 
                        type="button" 
                        class="btn-close" 
                        data-bs-dismiss="modal" 
                        hidden>
                    </button>
                </div>
            </Form>
        </template>   
    </CVModal>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import Api from '~/service/Base/api.ts';
import { Form, Field, ErrorMessage } from 'vee-validate';
import Tour_constants from '~/assets/js/constants/constants';
import { useToast } from 'vue-toast-notification';
const toast = useToast();
const api = new Api();
const form = ref(null);
const emits = defineEmits(['Booking-saved']);
const meetingPoint = ref({});
const showKH = ref(false);
const Customer = ref([]);
const Tour = ref([]);
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
const statusBill = [
    { id: 1, value: 'Đã thanh toán' },
    { id: 2, value: 'Đã đặt cọc' },
    { id: 3, value: 'Hủy' },
    { id: 4, value: 'Chờ xử lý' },
    { id: 5, value:'Khách hàng hủy'},
];

const getInfor =  async() =>
{
    const res = await api.get(`/Customer`, null);
    Customer.value = res.data.responseData;
    const resTour = await api.get(`/Tour/GetAllTour`, null);
    Tour.value = resTour.data.responseData;
    console.log(resTour)
}
onMounted(async () => {
    try {
        await getInfor();
    } catch (error) {
        console.error('Error fetching initial data:', error);
    }
});


// Phương thức tăng số lượng vé người lớn
const incrementAdult = () => {
    Booking.value.adult += 1;  // Tăng số lượng vé người lớn lên 1
    updateTotalBill();  // Cập nhật tổng tiền sau khi thay đổi
};

// Phương thức giảm số lượng vé người lớn
const decrementAdult = () => {
    if (Booking.value.adult > 0) {
        Booking.value.adult -= 1;  // Giảm số lượng vé người lớn xuống 1
        updateTotalBill();  // Cập nhật tổng tiền sau khi thay đổi
    }
};

// Phương thức tăng số lượng vé trẻ em
const incrementChild = () => {
    Booking.value.child += 1;  // Tăng số lượng vé trẻ em lên 1
    updateTotalBill();  // Cập nhật tổng tiền sau khi thay đổi
};

// Phương thức giảm số lượng vé trẻ em
const decrementChild = () => {
    if (Booking.value.child > 0) {
        Booking.value.child -= 1;  // Giảm số lượng vé trẻ em xuống 1
        updateTotalBill();  // Cập nhật tổng tiền sau khi thay đổi
        updatedatcoc();
    }
};

// Tính toán tổng tiền dựa trên số lượng vé và giá bán
const totalBill = computed(() => {
    const selectedTour = Tour.value.find(tour => tour.id === Booking.value.tourId);
    if (!selectedTour) return 0;
    const adultTotal = Booking.value.adult * selectedTour.priceSale;
    const childTotal = Booking.value.child * selectedTour.priceSale * 0.9;
    return adultTotal + childTotal;
});
const paymented = computed(() => {
    return 100000 * (Booking.value.adult + Booking.value.child);
});
const updateTotalBill = () => {
    Booking.value.totalBill = totalBill.value;
    Booking.value.paymented = paymented.value;  
};

// Phương thức định dạng tiền tệ
const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
};

const defaultBooking = {
    tourId: '',
    customerId: '',
    totalBill: 0,
    paymented: '',
    paymentBy: '',
    child: 0,
    adult: 0,
    statusBill: 'Lưu tạm',
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
    idCustomer: '',
};

const Booking = ref({ ...defaultBooking }); // Khởi tạo giá trị mặc định cho Booking

const resetForm = () => {
    // Reset giá trị của Booking bằng cách gán lại giá trị mặc định
    Booking.value = { ...defaultBooking };
    errorCustomerInTours.value = "";
};
const Gender = [true, false];  // Thay đổi thành các giá trị boolean
// const Gender = ['true', 'false'];
const showCustmomer = () => {
    showKH.value = !showKH.value;
};
const updateBooking = async () => {
    if (Booking.value.paymented > Booking.value.totalBill) {
    // Nếu số tiền thanh toán vượt quá tổng tiền, hiển thị cảnh báo
    alert('Số tiền thanh toán không được vượt quá tổng tiền.');
    //Booking.value.paymented = Booking.value.totalBill;  // Đặt lại giá trị của paymented về totalBill
    return;
    }
    const selectedTour = Tour.value.find(tour => tour.id === Booking.value.tourId);
        // Tính tổng số vé đã đặt (người lớn + trẻ em)
        const totalTickets = Booking.value.adult + Booking.value.child;

        // Kiểm tra xem số vé đã đặt có vượt quá số vé còn lại không
        if (totalTickets > selectedTour.slot) {
            // Hiển thị thông báo lỗi nếu số vé đặt vượt quá số lượng vé còn lại
            alert('Số lượng vé bạn đặt vượt quá số lượng vé còn lại trong tour!');
            return; // Dừng lại không thực hiện các bước tiếp theo nếu không hợp lệ
        }
    

    const data = {
        tourId: Booking.value.tourId,
        customerId: Booking.value.customerId,
        totalBill: Booking.value.totalBill,
        paymented: Booking.value.paymented,
        paymentBy: Booking.value.paymentBy,
        paymentTime: props.editBooking.paymentTime,
        isLocal: Booking.value.isLocal,
        adult: Booking.value.adult,
        child: Booking.value.child,
        statusBill: Booking.value.statusBill,
        customerInTours: Booking.value.customerInTours,
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
        await api.putAPI(`/Customer/${props.editBooking.customerId}`,dataCustomer);
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
        const mail=await api.postAPI(`/Booking/TestSendMailByStatus?id=${props.editBooking.id}`,formData);
        if (mail.status === 200) {
            if (mail.data && mail.data.message) {
                // Hiển thị thông báo thành công
                        toast.success(mail.data.message);  // Hiển thị thông báo với toast (thành công)
            }
        }
        document.getElementById('closeModalButton').click();
    } catch (error) {
        console.error('Error updating Booking:', error);
    }
};
const errorCustomerInTours = ref(''); // Biến để lưu lỗi của TipTap
const handleSubmit = () => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = Booking.value.customerInTours; // Gán nội dung TipTap vào div tạm
    const textContent = tempDiv.textContent.trim(); // Lấy nội dung text

    if (!textContent) {
        errorCustomerInTours.value = "Thông tin này không được để trống!";
        return;
    } else {
        errorCustomerInTours.value = ""; // Xóa lỗi nếu hợp lệ
    }
    if (props.isEditMode) {
        updateBooking();
    } else {
        createBooking();
    }
};

const isDisabled=(status) => {
            return status === Tour_constants.Cancel ||
                   status === Tour_constants.Paid ||
                   status===Tour_constants.Deposited||
                   status===Tour_constants.success||
                //    status===Tour_constants.Customercancel||
                   status === Tour_constants.Pending;
        }

watch(
    () => props.editBooking,
    (newVal) => {
        if (newVal) {
            Booking.value = { ...newVal };
            const selectedTour = Tour.value.find(tour => tour.id === newVal.tourId);
            if (!selectedTour) {
                Booking.value.tourId = ''; // Nếu không tìm thấy tour, đặt lại giá trị
            }
            if (form.value) {
                form.value.resetForm({
                    values: { ...Booking.value }, // Cập nhật giá trị mới cho form
                    errors: {},                    // Đặt lại tất cả lỗi
                });
            }
        }
    },
    { immediate: true },
);

watch(
    () => Booking.value.statusBill,
    (newStatus) => {
        if (newStatus === 'Đã thanh toán') {  // Khi chọn "Đã thanh toán"
            Booking.value.paymented = Booking.value.totalBill;  // Gán paymented = totalBill
        } else if (newStatus === 'Đã đặt cọc' || newStatus === 'Hủy') {  // Khi chọn "Đặt cọc" hoặc "Hủy"
            Booking.value.paymented = 100000 * (Booking.value.adult + Booking.value.child);
         } else if (newStatus === 'Chờ xử lý') {  // Khi chọn "Chờ xử lý"
             Booking.value.paymented = 100000 * (Booking.value.adult + Booking.value.child);  // Gán paymented = 0
        }
    },
    { immediate: true }
);



</script>