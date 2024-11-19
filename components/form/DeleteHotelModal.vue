<template>
    <CVModal id_model="deleteHotelModal">
        <template #icon>
            <slot name="icon"></slot>
        </template>
        <template #title>
            <slot name="header">Xóa khách sạn này</slot>
        </template>
        <template #body>
            <p>Bạn có chắc chắn muốn xóa khách sạn này?</p>
            <div class="modal-footer align-content-center justify-content-center">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Hủy bỏ
                </button>
                <button type="button" class="btn btn-danger" @click="deleteHotel">
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
    HotelId: {
        type: String,
        required: true,
    },
});

const api = new Api();
const emits = defineEmits(['Hotel-deleted', 'hide-modal']);
const deleteHotel = () => {
    const id = props.HotelId;
    api.deleteById('/Hotel', id)
        .then((res) => {
            emits('Hotel-deleted', id);
            emits('hide-modal');
            $('.btn-close').click();
            toast.success('Xóa thành công')
        })
        .catch((error) => {
            console.error('Lỗi khi xóa hkhách sạn:', error);
        });
};
</script>

<style scoped></style>
