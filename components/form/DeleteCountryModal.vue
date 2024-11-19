<template>
    <CVModal id_model="deleteCountryModal">
        <template #icon>
            <slot name="icon"></slot>
        </template>
        <template #title>
            <slot name="header">Xóa quốc gia này</slot>
        </template>
        <template #body>
            <p>Bạn có chắc chắn muốn xóa quốc gia này?</p>
            <div class="modal-footer align-content-center justify-content-center">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Hủy bỏ
                </button>
                <button type="button" class="btn btn-danger" @click="deleteCountry">
                    Xóa
                </button>
            </div>
        </template>
    </CVModal>
</template>
<script setup>
import Api from '~/service/Base/api.ts';
import { useToast } from 'vue-toast-notification';
const toast = useToast();
const props = defineProps({
    CountryId: {
        type: String,
        required: true,
    },
});

const api = new Api();
const emits = defineEmits(['Country-deleted', 'hide-modal']);
const deleteCountry = () => {
    const id = props.CountryId;
    api.deleteById('/Country', id)
        .then((res) => {
            emits('Country-deleted', id);
            emits('hide-modal');
            $('.btn-close').click();
            toast.success('Xóa thành công')
        })
        .catch((error) => {
            console.error('Lỗi khi xóa quốc gia:', error);
        });
};
</script>

<style scoped></style>
