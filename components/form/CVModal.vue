<template>
    <div data-bs-toggle="modal" :data-bs-target="data_bs_target_modal" data-bs-whatever="@mdo">
        <slot name="icon"></slot>
    </div>
    <div
    class="modal fade"
    :id="id_model"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    @hidden.bs.modal="handleModalClose"
  >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" class="me-1">
                        <g fill="none">
                            <defs>
                                <mask id="pepiconsPencilPlusCircleFilled0">
                                    <path fill="#fff" d="M0 0h26v26H0z"></path>
                                    <g fill="#000">
                                        <path d="M8 13.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></path>
                                        <path d="M12.5 8a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z"></path>
                                    </g>
                                </mask>
                            </defs>
                            <circle cx="13" cy="13" r="13" fill="#006eff" mask="url(#pepiconsPencilPlusCircleFilled0)">
                            </circle>
                        </g>
                    </svg>
                    <h5 class="modal-title text-primary" id="exampleModalLabel">
                        <slot name="title"></slot>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, defineProps, defineEmits } from 'vue';
const props = defineProps({
    data_bs_target_modal: {
        type: String,
        default: '',
    },
    id_model: {
        type: String,
        default: '',
        required: true,
    },
});

const emit = defineEmits(['close-modal']);

const handleModalClose = () => {
    console.log("handleModalClose được gọi");
    emit('close-modal');  // Phát sự kiện để thông báo modal đã đóng
};

onMounted(() => {
    const modalElement = document.getElementById(props.id_model);
    if (modalElement) {
        const modalInstance = new bootstrap.Modal(modalElement);
        modalElement.addEventListener('hidden.bs.modal', handleModalClose);  // Đảm bảo sự kiện được lắng nghe
    }
});


</script>
