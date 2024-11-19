<template>
    <CVModal id_model="deleteBookingModal">
        <template #icon>
            <slot name="icon"></slot>
        </template>
        <template #title>
            <slot name="header">Xóa đơn đặtnày</slot>
        </template>
        <template #body>
            <p>Bạn có chắc chắn muốn xóa đơn đặtnày?</p>
            <div class="modal-footer align-content-center justify-content-center">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Hủy bỏ
                </button>
                <button type="button" class="btn btn-danger" @click="deleteBooking">
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
    BookingId: {
        type: String,
        required: true,
    },
});
const api = new Api();
const emits = defineEmits(['Booking-deleted', 'hide-modal']);
const deleteBooking = () => {
    const id = props.BookingId;
    api.deleteById('/Booking', id)
        .then((res) => {
            emits('Booking-deleted', id);
            emits('hide-modal');
            $('.btn-close').click();
            toast.success('Xóa thành công')
        })
        .catch((error) => {
            console.error('Lỗi khi xóa đơn đặt:', error);
        });
};
</script>

<style scoped></style>
