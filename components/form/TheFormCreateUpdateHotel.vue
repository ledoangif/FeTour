<template>
        <CVModal id_model="create-update-Hotel-modal" @close-modal="resetForm">
            <template #icon>
                <slot name="icon"></slot>
            </template>
            <template #title>
                <span v-if="!isEditMode">
                    <slot name="header">Thêm khách sạn</slot>
                </span>
                <span v-else>
                    <slot name="header">Cập nhật khách sạn</slot>
                </span>
            </template>
            <template #body>
                <Form ref="formRef" @submit="handleSubmit" :key="formKey">
                    <div class="row">
                    <div class="row col-lg-8 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Tên khách sạn
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="hotelName"
                                    v-model="Hotel.hotelName"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true,onlyCharacters:true}"
                                />
                                <ErrorMessage name="hotelName" class="text-danger" />
                            </div>
                        </div>
                    </div>
                    <div class="row col-lg-4 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Số sao
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="rate"
                                    v-model="Hotel.rate"
                                    class="form-control"
                                    type="number"
                                :rules="{required : true, point : true}"
                                />
                                <ErrorMessage name="rate" class="text-danger" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row col-lg-8 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Link Page
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="linkHotel"
                                    v-model="Hotel.linkHotel"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true}"
                                />
                                <ErrorMessage name="linkHotel" class="text-danger" />
                            </div>
                        </div>
                    </div>
                    <div class="row col-lg-4 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Chủ sở hữu
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="ceo"
                                    v-model="Hotel.ceo"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true}"
                                />
                                <ErrorMessage name="ceo" class="text-danger" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row col-lg-8 mb-3 form-group required">
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
                                    v-model="Hotel.address"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true}"
                                />
                                <ErrorMessage name="address" class="text-danger" />
                            </div>
                        </div>
                    </div>
                    <div class="row col-lg-4 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Hotline
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="hotline"
                                    v-model="Hotel.hotline"
                                    type="text"
                                    class="form-control"
                                    :rules="{required : true}"
                                />
                                <ErrorMessage name="hotline" class="text-danger" />
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
                        v-else
                        type="submit"
                        class="btn btn-sm btn-primary d-flex align-items-center"
                        
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10px"
                            height="10px"
                            viewBox="0 -70 700 700"
                        >
                            <path
                                fill="#f7f7f7"
                                d="m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48"
                            />
                        </svg>
                        Thêm
                    </button>
                </div>
                </Form>
            </template>
        </CVModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import Api from '~/service/Base/api.ts';
import { Form, Field,ErrorMessage } from 'vee-validate';
import { useToast } from 'vue-toast-notification';
const toast = useToast();
const api = new Api();
const emits = defineEmits(['Hotel-saved']);
const formKey=ref(0);
const formRef = ref(null);
/** received data */
const props = defineProps({
    editHotel: {
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

const Hotel = ref({
    hotelName: '',
    linkHotel: '',
    rate: '',
    address: '',
    ceo: '',
    hotline: '',
});
const resetForm = () => {
  // Reset the form fields
  Hotel.value = {
    hotelName: '',
    linkHotel: '',
    rate: '',
    address: '',
    ceo: '',
    hotline: '',
  };
  formKey.value+=1;
};
const createHotel = () => {
    const formData = new FormData();
    formData.append('hotelName', Hotel.value.hotelName);
    formData.append('linkHotel', Hotel.value.linkHotel);
    formData.append('address', Hotel.value.address);
    formData.append('rate', Hotel.value.rate);
    formData.append('ceo', Hotel.value.ceo);
    formData.append('hotline', Hotel.value.hotline);
    const hotel= api.postAPI('/Hotel', formData)
        .then((res) => {
            if (hotel.status === 200) {
            if (hotel.data && hotel.data.message) {
                // Hiển thị thông báo thành công
                toast.success(hotel.data.message);  // Hiển thị thông báo với toast (thành công)
                }
            }
            emits('Hotel-saved');
           // $('#create-update-Hotel-modal').modal('hide');
        })
        .catch((error) => {
            console.error('Error creating Hotel:', error);
        });
};

const updateHotel = () => {
    const data = {
        hotelName: Hotel.value.hotelName,
        linkHotel: Hotel.value.linkHotel,
        rate: Hotel.value.rate,
        address: Hotel.value.address,
        ceo: Hotel.value.ceo,
        hotline: Hotel.value.hotline,
        id: props.editHotel.id,
    };
    api.putAPI(`/Hotel/${props.editHotel.id}`, data)
        .then((res) => {
            emits('Hotel-saved');
            toast.success('Cập nhật thành công')
            //$('#create-update-Hotel-modal').modal('hide');
        })
        .catch((error) => {
            console.error('Error updating Hotel:', error);
        });
};

const handleSubmit = () => {
    try{
        if (props.isEditMode) {
         updateHotel();
    } else {
         createHotel();
    }
    //$('#create-update-Hotel-modal').modal('hide'); // Chỉ đóng modal khi không có lỗi
  } catch (error) {
    console.error('Submit failed:', error);
  }
};

watch(
    () => props.editHotel,
    (newVal) => {
        if (newVal) {
            Hotel.value = { ...newVal };
        }
    },
    { immediate: true },
);
</script>
