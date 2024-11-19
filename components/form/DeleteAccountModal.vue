<template>
    <CVModal id_model="deleteAccountModal">
        <template #icon>
            <slot name="icon"></slot>
        </template>
        <template #title>
            <slot name="header">Xóa tài khoản</slot>
        </template>
        <template #body>
            <p>Bạn có chắc chắn muốn xóa tài khoản này?</p>
            <div class="modal-footer align-content-center justify-content-center">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Hủy bỏ
                </button>
                <button type="button" class="btn btn-danger" @click="deleteAccount">
                    <i class="fa-regular fa-trash-can mx-1"></i>
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
    accountId: {
        type: String,
        required: true,
    },
});

const api = new Api();
const emits = defineEmits(['account-deleted', 'hide-modal']);

const deleteAccount = () => {
    const id = props.accountId;
    api.deleteById('/Account', id)
        .then((res) => {
            emits('account-deleted', id); // Emit sự kiện khi xóa tài khoản thành công
            emits('hide-modal'); // Emit sự kiện để đóng modal
            $('.btn-close').click(); // Đóng modal
            toast.success("Xóa thành công")
        })
        .catch((error) => {
            console.error('Lỗi khi xóa tài khoản:', error);
        });
};
</script>

<style scoped>
/* Tùy chỉnh kiểu dáng của modal */
</style>
