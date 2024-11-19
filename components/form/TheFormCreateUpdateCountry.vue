<template>
    <CVModal id_model="create-update-Country-modal" @close-modal="resetForm">
        <template #icon>
            <slot name="icon"></slot>
        </template>
        <template #title>
            <span v-if="!isEditMode">
                <slot name="header">Thêm quốc gia</slot>
            </span>
            <span v-else>
                <slot name="header">Cập nhật quốc gia</slot>
            </span>
        </template>
        <template #body>
            <Form @submit="handleSubmit" ref="formRef" :key="formKey">
                <div class="row">
                    <div class="row col-lg-4 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-5 col-form-label control-label text-end"
                            >
                                Tên quốc gia
                            </label>
                            <div class="col-sm-7">
                                <Field
                                    name="countryName"
                                    :rules="{ required: true}"
                                    v-model="Country.countryName"
                                    type="text"
                                    class="form-control"
                                    
                                />
                                <ErrorMessage name="countryName" class="text-danger" />
                            </div>
                        </div>
                    </div>
                    <div class="row col-lg-4 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-5 col-form-label control-label text-end"
                            >
                                Ảnh quốc gia
                            </label>
                            <div class="col-sm-7">
                                <Field
                                    name="countryImage"
                                    type="file"
                                    :rules="{ required: true}"
                                    class="form-control"
                                    @change="handlefiles"
                                    accept="image/jpeg, image/png, image/jpg"
                                    
                                />
                                <ErrorMessage name="countryImage" class="text-danger" />
                            </div>
                        </div>
                    </div>
                    <div class="row col-lg-4 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label
                                for="source-name"
                                class="col-sm-5 col-form-label control-label text-end"
                            >
                                Tên châu lục
                            </label>
                            <div class="col-sm-7">
                                <Field
                                        name="continentName"
                                        :rules="{ required: true}"
                                        v-model="Country.continentName"
                                        as="select"
                                        class="form-control"

                                    >
                                        <option
                                            v-for="item in Continent"
                                            class="text-dark"
                                            :value="item.value"
                                        >
                                            {{ item.value }}
                                        </option>
                                    </Field>
                                <ErrorMessage name="continentName" class="text-danger" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer align-content-center justify-content-center">
                    <button
                        v-if="isEditMode"
                        type="submit"
                        class="btn btn-sm btn-primary d-flex align-items-center"
                        data-bs-dismiss="modal"
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
            </Form>
        </template>
    </CVModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import Api from '~/service/Base/api.ts';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useToast } from 'vue-toast-notification';
const formKey = ref(0); // Giá trị dùng để ép re-render
const toast = useToast();
const formRef = ref(null);
const api = new Api();
const emits = defineEmits(['Country-saved']);

const props = defineProps({
    editCountry: {
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

const resetForm = () => {
    Country.value.countryName = '';
    Country.value.countryImage = '';
    Country.value.continentName = '';
    formKey.value += 1;
    errorMessage.value = '';
};



const errorMessage = ref('');
const Country = ref({
    countryName: '',
    countryImage: '',
    continentName: '',
});

const Continent = [
    { id: 1, value: 'Châu Á' },
    { id: 2, value: 'Châu Âu' },
    { id: 3, value: 'Châu Mỹ' },
    { id: 4, value: 'Châu Phi' },
];

const handlefiles = async (event) => {
    const files = event.target.files;
    const file = files[0];

    // Kiểm tra xem có file nào được chọn không
    if (!file) {
        alert("Vui lòng chọn một file.");
        return;
    }

    // Kiểm tra định dạng file (chỉ cho phép jpg hoặc png)
    const validExtensions = ['image/jpeg', 'image/png']; // Định dạng file hợp lệ
    if (!validExtensions.includes(file.type)) {
        alert("Chỉ chấp nhận ảnh có định dạng JPG hoặc PNG.");
        // Reset input file (Xóa file đã chọn)
        event.target.value = '';
        return;
    }
    // Kiểm tra kích thước file (không vượt quá 2MB)
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
        alert("Kích thước file không được vượt quá 2MB.");
        // Reset input file (Xóa file đã chọn)
        event.target.value = '';
        return;
    }

    // Nếu file hợp lệ, gửi file lên server
    const formData = new FormData();
    formData.append('ImageFile', file);

    try {
        const response = await api.postAPI('/Country/UploadFile', formData); // Đường dẫn upload ảnh của quốc gia
        if (response.data) {
            Country.value.countryImage = response.data; // Lưu URL ảnh từ server
            toast.success('Tải ảnh thành công!');
            console.log("Ảnh đã được tải lên thành công:", response.data);
        }
    } catch (error) {
        toast.error("Tải ảnh thất bại vui lòng tải lại")
        //console.error("Có lỗi khi tải ảnh lên:", error);
        //alert("Đã có lỗi xảy ra khi tải ảnh lên!");
    }
};
const createCountry = async () => {
   // const startTime = performance.now(); // Lưu thời gian bắt đầu
    try {
        const formData = new FormData();
        formData.append('countryName', Country.value.countryName);
        formData.append('countryImage', Country.value.countryImage);
        formData.append('continentName', Country.value.continentName);
        // Gửi yêu cầu tạo quốc gia
        await api.postAPI('/Country/InsertCountry', formData);
        // Thông báo đã lưu thành công, đóng modal và reset form
        emits('Country-saved');
        $('#create-update-Country-modal').modal('hide');
        toast.success('Thêm thành công!');
    } catch (error) {
        console.error('Error creating Country:', error);
    }
    resetForm();
};

const updateCountry = async () => {
    const data = {
        countryName: Country.value.countryName,
        countryImage: Country.value.countryImage,
        continentName: Country.value.continentName,
        id: props.editCountry.id,
    };
    try {
        await api.putAPI(`/Country/${props.editCountry.id}`, data);
        emits('Country-saved');
        $('#create-update-Country-modal').modal('hide');
        toast.success('Cập nhật thành công!');
    } catch (error) {
        console.error('Error updating Country:', error);
        errorMessage.value = "Đã xảy ra lỗi khi cập nhật quốc gia. Vui lòng thử lại.";
    }
    resetForm();
};
const handleSubmit = async () => {
    if (props.isEditMode) {
        // Chế độ cập nhật
        await updateCountry();
    } else {
        // Chế độ tạo mới
        await createCountry();
    }
};
watch(
    () => props.editCountry,
    (newVal) => {
        if (newVal) {
            Country.value = { ...newVal };
        }
    },
    { immediate: true },
);
</script>
