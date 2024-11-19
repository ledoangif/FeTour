<template>
        <div :class="customClass" class="item p-4 rounded-3 mb-4 mx-1">
            <div class="quantity h5 text-white">
                <slot name="quantity"></slot>
            </div>
            <div class="status text-white">
                <slot name="name"></slot>
            </div>
            <div class="icon text-end">
            <div class="icon text-end">
                <slot name="icon"></slot>
            </div>
        </div>
        </div>
</template>

<script setup>
const props = defineProps({
    customClass: {
        type: String,
        required: true,
    },
});
</script>
