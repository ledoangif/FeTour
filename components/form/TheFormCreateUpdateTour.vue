<template>
    
        <CVModal id_model="create-update-Tour-modal" @close-modal="resetForm">
            <template #icon>
                <slot name="icon"></slot>
            </template>
            <template #title>
                <span v-if="!isEditMode">
                    <slot name="header">Thêm Tour du lịch </slot>
                </span>
                <span v-else>
                    <slot name="header">Cập nhật Tour du lịch</slot>
                </span>
            </template>
            <template #body>
                <Form ref="form" @submit="handleSubmit" :key="keyformtour">
                    <div class="row">
                    <div class="row col-lg-6 mb-3 form-group required">
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Ảnh
                            </label>
                            <div class="col-sm-8">
                                <Field name="image" v-model="Tour.image" type="file" class="form-control"
                                    :rules="{ required: true }" @change="handlefiles" />
                                <ErrorMessage name="image" class="text-danger" />
                            </div>
                        </div>
                        <div class="row form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Số lượng vé
                            </label>
                            <div class="col-sm-8">
                                <Field id="seat" name="seat" v-model="Tour.seat" class="form-control"
                                    :rules="{ required: true,naturalNumber: true }" />
                                <ErrorMessage name="seat" class="text-danger" />
                                <br />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Giá mua
                            </label>
                            <div class="col-sm-8">
                                <Field id="priceBuy" name="priceBuy" v-model="computedValue1" class="form-control"
                                    :rules="{ required: true,cost:true}" />
                                <ErrorMessage name="priceBuy" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Giá bán gốc
                            </label>
                            <div class="col-sm-8">
                                <Field id="cost" name="cost" v-model="computedValue" class="form-control"
                                    :rules="{ required: true ,cost:true}" />
                                <ErrorMessage name="cost" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Giảm giá
                            </label>
                            <div class="col-sm-8">
                                <Field name="discount" v-model="Tour.discount" type="text" class="form-control"
                                    :rules="{ required: true, discount:true }" />
                                <ErrorMessage name="discount" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Nội địa?
                            </label>
                            <div class="col-sm-8">
                                <Field as="select" id="isLocal" name="isLocal" v-model="Tour.isLocal"
                                    class="form-control" >
                                    <option v-for="item in isLocal" class="text-dark" :value="item.value" >
                                        {{ item.value ? 'Nội địa' : 'Nước ngoài' }}
                                    </option>
                                    <!-- <option v-for="gender in Gender" :key="gender" :value="gender">
                                        {{ gender ? 'Nam' : 'Nữ' }}
                                    </option> -->
                                </Field>
                                <ErrorMessage name="isLocal" class="text-danger"></ErrorMessage>
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Quốc Gia
                            </label>
                            <div class="col-sm-8">
                                <Field as="select" id="country" name="country" v-model="Tour.countryId"
                                    class="form-control" :rules="{ required: true}">
                                    <option v-for="item in filteredCountries" class="text-dark" :value="item.id">
                                        {{ item.countryName }}
                                    </option>
                                </Field>
                                <ErrorMessage name="country" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Địa điểm
                            </label>
                            <div class="col-sm-8">
                                <Field name="place" v-model="Tour.place" type="text" class="form-control"
                                    :rules="{ required: true }" />
                                <ErrorMessage name="place" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Nơi khởi hành
                            </label>
                            <div class="col-sm-8">
                                <Field name="placeStart" v-model="Tour.placeStart" type="text" class="form-control"
                                    :rules="{ required: true }" />
                                <ErrorMessage name="placeStart" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Nơi tập trung
                            </label>
                            <div class="col-sm-8">
                                <Field name="meetingPoint" v-model="Tour.meetingPoint" type="text" class="form-control"
                                    :rules="{ required: true }" />
                                <ErrorMessage name="meetingPoint" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Nơi kết thúc
                            </label>
                            <div class="col-sm-8">
                                <Field name="placeEnd" v-model="Tour.placeEnd" type="text" class="form-control"
                                    :rules="{ required: true }" />
                                <ErrorMessage name="placeEnd" class="text-danger" />
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Ngày bắt đầu
                            </label>
                            <div class="col-sm-8 d-flex flex-row">
                                <span class="col-4">
                                    <Field name="timeStart" v-model="Tour.timeStart" type="time"
                                        class="input-edit me-1 form-control" :rules="{ required: true }" />
                                    <ErrorMessage name="timeStart" class="text-danger" />
                                </span>
                                <span class="col-8 ms-2">
                                    <Field name="dateStart" v-model="Tour.dateStart" type="date" class="form-control"
                                        :rules="{ required: true }" />
                                    <ErrorMessage name="dateStart" class="text-danger" />
                                </span>
                            </div>
                        </div>
                        <div class="row mb-3 form-group required">
                            <label for="source-name" class="col-sm-4 col-form-label control-label text-end">
                                Ngày kết thúc
                            </label>
                            <div class="col-sm-8 d-flex flex-row">
                                <span class="col-4">
                                    <Field name="timeEnd" v-model="Tour.timeEnd" type="time"
                                        class="input-edit me-1 form-control" :rules="{ required: true }" />
                                    <ErrorMessage name="timeEnd" class="text-danger" />
                                </span>
                                <span class="col-8 ms-2">
                                    <Field name="dateEnd" v-model="Tour.dateEnd" type="date" class="form-control"
                                        :rules="{ required: true ,endDateGreaterThanStart: [Tour.dateStart]}" />
                                    <ErrorMessage name="dateEnd" class="text-danger" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row col-lg-6">
                        <div class="row form-group required mb-3">
                            <label for="source-name" class="col-sm-3 col-form-label control-label text-end">Tên Tour
                            </label>
                            <div class="col-9">
                                <Field as="textarea" name="nameTour" v-model="Tour.nameTour" type="text"
                                    class="form-control" style="height: 50px" :rules="{ required: true }" />
                                <ErrorMessage name="nameTour" class="text-danger" />
                            </div>
                        </div>
                        <div class="row form-group required mb-3">
                            <label for="source-name" class="col-sm-3 col-form-label control-label text-end">Mô tả
                            </label>
                            <div class="col-sm-9">
                                <Field as="textarea" name="descripttion" v-model="Tour.descripttion" type="text"
                                    class="form-control" style="height: 150px" :rules="{ required: true }" />
                                <ErrorMessage name="descripttion" class="text-danger" />
                            </div>
                        </div>
                        
                        <div class="row form-group required mb-3">
                            <label for="source-name" class="col-sm-3 col-form-label control-label text-end">Dịch vụ bao
                                gồm
                            </label>
                            <div class="col-sm-9">
                                <!-- <Field as="textarea" name="serviceInclude" v-model="Tour.serviceInclude" type="text"
                                    class="form-control" style="height: 150px" :rules="{ required: true }" />
                                <ErrorMessage name="serviceInclude" class="text-danger" /> -->
                                <TipTap v-model="Tour.serviceInclude"></TipTap>
                                <p v-if="errorMessage1.serviceInclude" class="text-danger">
                                    {{ errorMessage1.serviceInclude }}
                                </p>
                            </div>
                        </div>
                        <div class="row form-group required mb-3">
                            <label for="source-name" class="col-sm-3 col-form-label control-label text-end">Dịch vụ
                                không bao gồm
                            </label>
                            <div class="col-sm-9">
                                <!-- <Field as="textarea" name="serviceNotInclude" v-model="Tour.serviceNotInclude" type="text"
                                    class="form-control" style="height: 150px" :rules="{ required: true }" />
                                <ErrorMessage name="serviceNotInclude" class="text-danger" /> -->
                                <TipTap v-model="Tour.serviceNotInclude"></TipTap>
                                <p v-if="errorMessage1.serviceNotInclude" class="text-danger">
                                    {{ errorMessage1.serviceNotInclude }}
                                </p>
                            </div>
                        </div>
                        <div class="row form-group required mb-3">
                            <label for="source-name" class="col-sm-3 col-form-label control-label text-end">Lịch Trình
                            </label>
                            <div class="col-sm-9">
                                <!-- <Field as="textarea" name="plan" v-model="Tour.plan" type="text"
                                    class="form-control" style="height: 150px" :rules="{ required: true }" />
                                <ErrorMessage name="plan" class="text-danger" /> -->
                                <TipTap v-model="Tour.plan"></TipTap>
                                <p v-if="errorMessage1.plan" class="text-danger">
                                    {{ errorMessage1.plan }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer align-content-center justify-content-center">
                    <button v-if="isEditMode" type="submit" class="btn btn-sm btn-primary d-flex align-items-center" 
                        >
                        Lưu
                    </button>
                    <button v-else type="submit" class="btn btn-sm btn-primary d-flex align-items-center"
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
import { ref, watch } from 'vue';
import Api from '~/service/Base/api.ts';
import { Form, Field } from 'vee-validate';
import { useToast } from 'vue-toast-notification';
const keyformtour = ref(0); // Giá trị dùng để ép re-render
const toast = useToast();
const api = new Api();
const Country = ref([]);
const form = ref(null);
const emits = defineEmits(['Tour-saved']);
const accountId = ref('');

/** received data */
const props = defineProps({
    editTour: {
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
/** reset form */
const resetForm = () => {
    Tour.value.nameTour= '',
    Tour.value.descripttion= '',
    Tour.value.seat= '',
    Tour.value.cost= '',
    Tour.value.priceBuy='',
    Tour.value.discount= '',
    Tour.value.dateEnd= '',
    Tour.value.dateStart= '',
    Tour.value.placeEnd= '',
    Tour.value.placeStart= '',
    Tour.value.timeEnd= '',
    Tour.value.timeStart= '',
    Tour.value.place= '',
    Tour.value.plan= '',
    Tour.value.image= '',
    Tour.value.serviceInclude= '',
    Tour.value.serviceNotInclude= '',
    Tour.value.countryId= '',
    Tour.value.isLocal= '',
    Tour.value.meetingPoint= '',
    keyformtour.value +=1;
    errorMessage.value = '';
    errorMessage1.value = {};
};
const errorMessage = ref('');
const Tour = ref({
    nameTour: '',
    descripttion: '',
    seat: '',
    cost: '',
    priceBuy: '',
    discount: '',
    dateEnd: '',
    dateStart: '',
    placeEnd: '',
    placeStart: '',
    timeEnd: '',
    timeStart: '',
    place: '',
    plan: '',
    image: '',
    serviceInclude: '',
    serviceNotInclude: '',
    countryId: '',
    isLocal: '',
    meetingPoint: '',
});
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
        const response = await api.postAPI('/Tour/UploadFile', formData); // Đường dẫn upload ảnh của quốc gia
        if (response.data) {
            Tour.value.image = response.data; // Lưu URL ảnh từ server
            toast.success('Tải ảnh thành công!');
            console.log("Ảnh đã được tải lên thành công:", response.data);
        }
    } catch (error) {
        toast.error("Tải ảnh thất bại vui lòng tải lại")
    }
};
const isLocal = [
    { id: 1, value: true },
    { id: 2, value: false },
];
if (process.client) {
    accountId.value = localStorage.getItem('userId');
}
const fetchData = async () => {
    try {
        const resCountry = await api.get(`/Country`, null);
        Country.value = resCountry.data.responseData;
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
};
onMounted(async () => {
    await fetchData();
})
const createTour = () => {
        const formData2 = new FormData();
        formData2.append('nameTour', Tour.value.nameTour);
        formData2.append('descripttion', Tour.value.descripttion);
        formData2.append('seat', Tour.value.seat);
        const cleanCost = parseFloat(Tour.value.cost.replace(/[\D\s\._\-]+/g, ''));
        formData2.append('cost', isNaN(cleanCost) ? 0 : cleanCost);
        const cleanCost1 = parseFloat(Tour.value.priceBuy.replace(/[\D\s\._\-]+/g, ''));
        formData2.append('priceBuy',isNaN(cleanCost1) ? 0 : cleanCost1);
        formData2.append('discount', Tour.value.discount);
        formData2.append('islocal', Tour.value.isLocal);
        formData2.append('dateEnd', Tour.value.dateEnd);
        formData2.append('dateStart', Tour.value.dateStart);
        formData2.append('plan', Tour.value.plan);
        formData2.append('image', Tour.value.image);
        formData2.append('serviceInclude', Tour.value.serviceInclude);
        formData2.append('serviceNotInclude', Tour.value.serviceNotInclude);
        formData2.append('countryId', Tour.value.countryId);
        formData2.append('timeStart', Tour.value.timeStart);
        formData2.append('timeEnd', Tour.value.timeEnd);
        formData2.append('placeStart', Tour.value.placeStart);
        formData2.append('placeEnd', Tour.value.placeEnd);
        formData2.append('place', Tour.value.place);
        formData2.append('meetingPoint', Tour.value.meetingPoint);
        const tour= api.postAPI('/Tour/InsertTour', formData2)
        .then((res)=>{
            // if (tour.status === 200) {
            // if (tour.data && tour.data.message) {
            //     // Hiển thị thông báo thành công
            //     toast.success(tour.data.message);  // Hiển thị thông báo với toast (thành công)
            //     }
            // }
            emits('Tour-saved');
            toast.success('Thêm thành công!');
            document.getElementById('closeModalButton').click();
        })
        .catch ((error)=> {
        console.error('Error creating Tour:', error);
    })
};

// /** update Tour */
// const updateTour =  () => {
//     // Ensure cost is treated as a string
//     const costStr = Tour.value.cost ? String(Tour.value.cost) : '';
//     const cleanCost = parseFloat(costStr.replace(/[^0-9.-]+/g, ''));
//     const data1 = {
//         nameTour: Tour.value.nameTour || '',
//         descripttion: Tour.value.descripttion || '',
//         seat: Tour.value.seat || '',
//         email: Tour.value.email || '',
//         cost: isNaN(cleanCost) ? 0 : cleanCost,
//         isLocal: JSON.parse(Tour.value.isLocal) || false,
//         dateEnd: Tour.value.dateEnd || '',
//         discount: Tour.value.discount || 0,
//         dateStart: Tour.value.dateStart || '',
//         plan: Tour.value.plan || '',
//         image: Tour.value.image || '',
//         serviceInclude: Tour.value.serviceInclude || '',
//         serviceNotInclude: Tour.value.serviceNotInclude || '',
//         countryId: Tour.value.countryId || '',
//         timeEnd: Tour.value.timeEnd || '',
//         timeStart: Tour.value.timeStart || '',
//         placeEnd: Tour.value.placeEnd || '',
//         placeStart: Tour.value.placeStart || '',
//         place: Tour.value.place || '',
//         meetingPoint: Tour.value.meetingPoint || '',
//         appUserId: props.editTour.appUserId,
//         id: props.editTour.id,
//     };
//     api.putAPI(`/Tour/${props.editTour.id}`, data1)
//             .then((res) => {
//                 emits('Tour-saved');
//                 toast.success('Cập nhật thành công')
//             })
//             .catch((error) => {
//                 console.error('Error updating Tour:', error);
//             });
//     };
const updateTour = () => {
     const costStr = Tour.value.cost ? String(Tour.value.cost) : '';
     const cleanCost = parseFloat(costStr.replace(/[^0-9.-]+/g, ''));
     const costStr1 = Tour.value.cost ? String(Tour.value.priceBuy) : '';
     const cleanCost1 = parseFloat(costStr1.replace(/[^0-9.-]+/g, ''));
    const data = {
        nameTour: Tour.value.nameTour || '', // Đảm bảo chuỗi không null
        descripttion: Tour.value.descripttion || '',
        seat: Number(Tour.value.seat) || 0, // Đảm bảo số nguyên
        cost: isNaN(cleanCost) ? 0 : cleanCost,
        priceBuy: isNaN(cleanCost1) ? 0 : cleanCost1,
        // isLocal: !!Tour.value.isLocal, // Đảm bảo boolean
        isLocal: JSON.parse(Tour.value.isLocal) || false,
        dateEnd: Tour.value.dateEnd || null, // Hoặc định dạng chuẩn ISO nếu backend yêu cầu
        discount: parseFloat(Tour.value.discount) || 0,
        dateStart: Tour.value.dateStart || null,
        plan: Tour.value.plan || '',
        image: Tour.value.image || '',
        serviceInclude: Tour.value.serviceInclude || '',
        serviceNotInclude: Tour.value.serviceNotInclude || '',
        countryId: Number(Tour.value.countryId) || null,
        timeEnd: Tour.value.timeEnd || '',
        timeStart: Tour.value.timeStart || '',
        placeEnd: Tour.value.placeEnd || '',
        placeStart: Tour.value.placeStart || '',
        place: Tour.value.place || '',
        meetingPoint: Tour.value.meetingPoint || '',
        id: props.editTour.id || null,
    };
    
    console.log(data);  // Debugging: Check if `id` is properly passed

    api.putAPI(`/Tour/${props.editTour.id}`, data)
        .then((res) => {
            emits('Tour-saved');
            console.log(res.data); // Kiểm tra dữ liệu trả về
            toast.success('Cập nhật thành công');
            document.getElementById('closeModalButton').click();
        })
        .catch((error) => {
            console.error('Error updating Tour:', error);
        });
};

const errorMessage1 = ref({});


const validateTipTap = (content, fieldName) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    const text = div.textContent.trim();

    if (!text) {
        errorMessage1.value[fieldName] = 'Thông tin này không được để trống!';
        return false;
    }

    // Xóa lỗi nếu nội dung hợp lệ
    errorMessage1.value[fieldName] = '';
    return true;
};
const handleSubmit = () => {
    const isServiceIncludeValid = validateTipTap(Tour.value.serviceInclude, 'serviceInclude');
    const isServiceNotIncludeValid = validateTipTap(Tour.value.serviceNotInclude, 'serviceNotInclude');
    const isPlanValid = validateTipTap(Tour.value.plan, 'plan');

    if (isServiceIncludeValid && isServiceNotIncludeValid && isPlanValid) {
        if (props.isEditMode) {
            updateTour();
        } else {
            createTour();
        }
    }
};

// const handleSubmit = () => {
//     const isValid = [
//         validateTipTap(Tour.value.serviceInclude, 'Dịch vụ bao gồm'),
//         validateTipTap(Tour.value.serviceNotInclude, 'Dịch vụ không bao gồm'),
//         validateTipTap(Tour.value.plan, 'Lịch trình'),
//     ].every(Boolean);

//     if (!isValid) {
//         toast.error('Vui lòng kiểm tra lại các trường bắt buộc.');
//         return;
//     }

//     if (props.isEditMode) {
//         updateTour();
//     } else {
//         createTour();
//     }
// };




// const handleSubmit =  () => {
//     if (props.isEditMode) {
//          updateTour();
//     } else {
//          createTour();
//     }
// };

watch(
    () => props.editTour,
    (newVal) => {
        if (newVal) {
            Tour.value = { ...newVal };
            Tour.value.dateStart = props.editTour.dateStart
                ? props.editTour.dateStart.split('T')[0]
                : '';
            Tour.value.dateEnd = props.editTour.dateEnd
                ? props.editTour.dateEnd.split('T')[0]
                : '';
        }
    },
    { immediate: true },
);
// Watch for changes in isLocal value to adjust CountryId
watch(() => Tour.value.isLocal, (newValue) => {
    if (newValue) {
        // Khi là tour nội địa, gán CountryId là Việt Nam (ID = 1)
        const vietnam = Country.value.find(country => country.id === 1); // Tìm Việt Nam theo ID
        if (vietnam) {
            Tour.value.countryId = vietnam.id;
        }
    } else {
        // Khi là tour ngoài nước, không cho phép chọn Việt Nam và gán countryId về null
        //Tour.value.countryId = null;
    }
});
// Lọc quốc gia dựa trên giá trị của isLocal
const filteredCountries = computed(() => {
    if (Tour.value.isLocal) {
        // Khi là tour nội địa, chỉ hiển thị Việt Nam (ID = 1)
        return Country.value.filter(country => country.id === 1); // Lọc theo ID Việt Nam
    } else {
        // Khi không phải tour nội địa, hiển thị tất cả quốc gia ngoại trừ Việt Nam (ID = 1)
        return Country.value.filter(country => country.id !== 1); // Lọc tất cả ngoại trừ Việt Nam
    }
});
const computedValue = computed({
    get: () => {
        var input = String(Tour.value.cost || '').replace(/[\D\s\._\-]+/g, '');
        input = input ? parseFloat(input, 10) : 0;
        return input.toLocaleString('en-US');
    },
    set: (newValue) => {
        newValue = String(newValue).replace(/[^\d.-]+/g, '');
        newValue = newValue ? parseFloat(newValue, 10) : 0;
        let isNumber = !isNaN(parseFloat(newValue)) && isFinite(newValue);

        if (newValue == '') {
            Tour.value.cost = '';
        }

        if (isNumber && parseFloat(newValue) > 0) {
            Tour.value.cost = newValue.toLocaleString('en-US');
        }
    },
});
const computedValue1 = computed({
    get: () => {
        var input = String(Tour.value.priceBuy || '').replace(/[\D\s\._\-]+/g, '');
        input = input ? parseFloat(input, 10) : 0;
        return input.toLocaleString('en-US');
    },
    set: (newValue) => {
        newValue = String(newValue).replace(/[^\d.-]+/g, '');
        newValue = newValue ? parseFloat(newValue, 10) : 0;
        let isNumber = !isNaN(parseFloat(newValue)) && isFinite(newValue);

        if (newValue == '') {
            Tour.value.priceBuy = '';
        }

        if (isNumber && parseFloat(newValue) > 0) {
            Tour.value.priceBuy = newValue.toLocaleString('en-US');
        }
    },
});


</script>
