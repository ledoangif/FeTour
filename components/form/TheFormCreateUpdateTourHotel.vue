<template>
        <CVModal id_model="create-update-TourHotel-modal"
        @close-modal="resetForm">
            <template #icon>
                <slot name="icon"></slot>
            </template>
            <template #title>
                <span v-if="!isEditMode">
                    <slot name="header">Thêm khách sạn trong tour </slot>
                </span>
                <span v-else>
                    <slot name="header">Cập nhật khách sạn trong tour </slot>
                </span>
            </template>
            <template #body>
                <Form @submit="handleSubmit" :key="formKey">
                <div class="row">
                    <div class="row col-lg-6 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Tên khách sạn
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    as="select"
                                    id="hotel"
                                    name="hotel"
                                    v-model="TourHotel.hotelId"
                                    class="form-control"
                                    :rules="{ required: true}">
                                    
                                    <option
                                        v-for="item in Hotel"
                                        class="text-dark"
                                        :value="item.id"
                                    >
                                        {{ item.hotelName }}
                                    </option>
                                </Field>
                                <ErrorMessage name="hotel" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Ghi chú
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="note"
                                    v-model="TourHotel.note"
                                    type="text"
                                    class="form-control"
                                    :rules="{ required: true}" />
                                <ErrorMessage name="note" class="text-danger" />
                            </div>
                        </div>
                    </div>
                    <div class="row col-lg-6 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Ngày bắt đầu
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="dateStart"
                                    v-model="TourHotel.dateStart"
                                    type="date"
                                    class="form-control"
                                    :rules="{ required: true}" />
                                <ErrorMessage name="dateStart" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-4 col-form-label control-label text-end"
                            >
                                Ngày kết thúc
                            </label>
                            <div class="col-sm-8">
                                <Field
                                    name="dateEnd"
                                    v-model="TourHotel.dateEnd"
                                    type="date"
                                    class="form-control"
                                    :rules="{ required: true ,endDateGreaterThanStart: [TourHotel.dateStart]}" />
                                    <ErrorMessage name="dateEnd" class="text-danger" />
                            </div>
                        </div>
                    </div>
                    <!-- <TipTap v-model="TourHotel.nameTourHotel"></TipTap> -->
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
import { Form, Field } from 'vee-validate';
import { format } from 'date-fns';
const api = new Api();
const emits = defineEmits(['TourHotel-saved']);
const formKey=ref(0);
/** received data */
const props = defineProps({
    editTourHotel: {
        type: Object,
        default: null,
        required: false,
    },
    isEditMode: {
        type: Boolean,
        default: false,
        required: true,
    },
    tourId: {
        type: Number,
        default: null,
        required: true,
    },
});

const formRef = ref(null);
const Hotel = ref([]);
const Tour = ref([]);

/** reset form */
const resetForm = () => {
    TourHotel.value={
        hotelId: '',
        tourId: '',
        note: '',
        dateStart: '',
        dateEnd: '',
    };
    formKey.value+=1;
};
onMounted(async () => {
    const resTour = await api.get(`/Tour`, null);
    Tour.value = resTour.data.responseData;
    const resHotel = await api.get(`/Hotel`, null);
    Hotel.value = resHotel.data.responseData;
});
/**
 * define TourHotel
 */
const TourHotel = ref({
    hotelId: '',
    tourId: '',
    note: '',
    dateStart: '',
    dateEnd: '',
});

const formatDate = (date) => {
    return format(new Date(date), 'yyyy-MM-dd');
};
/** validate */

/**
 * insert TourHotel
 */
const createTourHotel = () => {
    const formData = new FormData();
    formData.append('hotelId', TourHotel.value.hotelId);
    formData.append('note', TourHotel.value.note);
    formData.append('dateStart', TourHotel.value.dateStart);
    formData.append('dateEnd', TourHotel.value.dateEnd);
    formData.append('tourId', props.tourId);
    api.postAPI('/TourHotel', formData)
        .then((res) => {
            emits('TourHotel-saved');
            document.getElementById('closeModalButton').click();
        })
        .catch((error) => {
            console.error('Error creating TourHotel:', error);
        });
    resetForm();
};

/** update TourHotel */
const updateTourHotel = () => {
    const data = {
        hotelId: TourHotel.value.hotelId,
        note: TourHotel.value.note,
        dateStart: TourHotel.value.dateStart,
        dateEnd: TourHotel.value.dateEnd,
        tourId: props.tourId,
        id: props.editTourHotel.id,
    };

    api.putAPI(`/TourHotel/${props.editTourHotel.id}`, data)
        .then((res) => {
            emits('TourHotel-saved');
            document.getElementById('closeModalButton').click();
        })
        .catch((error) => {
            console.error('Error updating TourHotel:', error);
        });
    resetForm();
};

/**
 * handle submit
 */
const handleSubmit = () => {
    if (props.isEditMode) {
        updateTourHotel();
    } else {
        createTourHotel();
    }
};

/**
 * update data of edit TourHotel
 */
watch(
    () => props.editTourHotel,
    (newVal) => {
        if (newVal) {
            TourHotel.value = { ...newVal };
            TourHotel.value.dateEnd = props.editTourHotel.dateEnd
                ? props.editTourHotel.dateEnd.split('T')[0]
                : '';
            TourHotel.value.dateStart = props.editTourHotel.dateStart
                ? props.editTourHotel.dateStart.split('T')[0]
                : '';
        }
    },
    { immediate: true },
);
</script>
