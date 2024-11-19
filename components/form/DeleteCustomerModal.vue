<template>
    <CVModal id_model="deleteCustomerModal">
        <template #icon>
            <slot name="icon"></slot>
        </template>
        <template #title>
            <slot name="header">Xóa khách hàng này</slot>
        </template>
        <template #body>
            <p>Bạn có chắc chắn muốn xóa khách hàng này?</p>
            <div class="modal-footer align-content-center justify-content-center">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Hủy bỏ
                </button>
                <button type="button" class="btn btn-danger" @click="deleteCustomer">
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
    CustomerId: {
        type: String,
        required: true,
    },
});

const api = new Api();
const emits = defineEmits(['Customer-deleted', 'hide-modal']);
const deleteCustomer = () => {
    const id = props.CustomerId;
    api.deleteById('/Customer', id)
        .then((res) => {
            emits('Customer-deleted', id);
            emits('hide-modal');
            $('.btn-close').click();
            toast.success('Xóa thành công')
        })
        .catch((error) => {
            console.error('Lỗi khi xóa khách hàng:', error);
        });
};
</script>

<style scoped></style>
