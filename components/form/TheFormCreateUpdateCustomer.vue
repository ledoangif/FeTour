<template>
    <CVModal id_model="create-update-Customer-modal" @close-modal="resetForm" >
            <template #icon>
                <slot name="icon"></slot>
            </template>
            <template #title>
                <span v-if="isEditMode">
                    <slot name="header">Cập nhật khách hàng</slot>
                </span>
            </template>
            <template #body>
                <Form ref="formcus"  @submit="handleSubmit"  >
                    <div class="row">
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
                                        v-model="Customer.nameCustomer"
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
                                        v-model="Customer.phoneNumber"
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
                                        v-model="Customer.address"
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
                                    <select v-model="Customer.gender" class="form-control">
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
                                        v-model="Customer.identityCard"
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
                                        v-model="Customer.email"
                                        type="text"
                                        class="form-control"
                                        :rules="{required:true,email: true}"
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
                                        v-model="Customer.accountBank"
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
                                        v-model="Customer.bankName"
                                        type="text"
                                        class="form-control"
                                        :rules="{required : true}"
                                    />
                                    <ErrorMessage name="bankName" class="text-danger" />
                                </div>
                            </div>
                        </div>
                        <!-- <TipTap v-model="Customer.nameCustomer"></TipTap> -->
                    </div>

                    <div class="modal-footer align-content-center justify-content-center">
                        <button
                            v-if="isEditMode"
                            type="submit"
                            class="btn btn-sm btn-primary d-flex align-items-center"
                            
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="0.88em"
                                height="1em"
                                viewBox="0 -70 700 700"
                            >
                                <path
                                    fill="#f7f7f7"
                                    d="m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48"
                                />
                            </svg>
                            Lưu
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
import { ref, watch } from 'vue';
import Api from '~/service/Base/api.ts';
import {Form, Field,ErrorMessage } from 'vee-validate';
import { useToast } from 'vue-toast-notification';

const toast = useToast();
const api = new Api();
const emits = defineEmits(['Customer-saved']);
const formcus = ref(null);

/** received data */
const props = defineProps({
    editCustomer: {
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
const Gender = [true, false];  // Thay đổi thành các giá trị boolean

const resetForm = () => {
    // Reset giá trị Customer
    Customer.value = { ...defaultCustomer };

    // Đảm bảo form được reset hoàn toàn
    if (formcus.value) {
        formcus.value.resetForm({
            values: { ...Customer.value },
            errors: {},
        });
    }
};

const defaultCustomer = {
    nameCustomer: '',
    phoneNumber: '',
    identityCard: '',
    address: '',
    email: '',
    accountBank: '',
    gender: true,
    bankName: '',
};

const Customer = ref({ ...defaultCustomer });

// const errorMessage = ref('');
// const Customer = ref({
//     nameCustomer: '',
//     phoneNumber: '',
//     identityCard: '',
//     address: '',
//     email: '',
//     accountBank: '',
//     gender: true,
//     bankName: '',
// });
/** update Customer */
const updateCustomer = () => {
    const data = {
        nameCustomer: Customer.value.nameCustomer,
        phoneNumber: Customer.value.phoneNumber,
        address: Customer.value.address,
        email: Customer.value.email,
        identityCard: Customer.value.identityCard,
        accountBank: Customer.value.accountBank,
        gender: JSON.parse( Customer.value.gender),
        bankName: Customer.value.bankName,
        id: props.editCustomer.id,
    };
    api.putAPI(`/Customer/${props.editCustomer.id}`, data)
        .then((res) => {
            emits('Customer-saved');
            toast.success('Cập nhật thành công');
            document.getElementById('closeModalButton').click();
        })
        .catch((error) => {
            console.error('Error updating Customer:', error);
        });
    resetForm();
};

/**
 * handle submit
 */
const handleSubmit = () => {
    if (props.isEditMode) {
        updateCustomer();
    } else {
        createCustomer();
    }
};

/**
 * update data of edit Customer
 */
watch(
    () => props.editCustomer,
    (newVal) => {
        if (newVal) {
            Customer.value = { ...newVal };
            if (formcus.value) {
                formcus.value.resetForm({
                    values: { ...Customer.value }, // Gán giá trị từ editCustomer
                    errors: {}, // Đảm bảo không có lỗi nào
                });
            }
        }
    },
    { immediate: true },
);
</script>
