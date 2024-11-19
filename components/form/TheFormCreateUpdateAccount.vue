<template>
    <CVModal
    :id_model="id_modal"
    :data_bs_target_modal="data_bs_target_modal"
    @close-modal="resetForm" 
  >
        <template #icon>
            <slot name="icon"></slot>
        </template>
        <template #title>
            <span v-if="!isEditMode">
                <slot name="header">Thêm tài khoản</slot>
            </span>
            <span v-else>
                <slot name="header">Cập nhật tài khoản</slot>
            </span>
        </template>
        <template #body>
            <Form @submit="handleSubmit" ref="form">
                <div class="row mb-3 form-group required">
                    <label
                        for="email"
                        class="col-sm-2 col-form-label control-label text-end"
                        >Email</label
                    >
                    <div class="col-sm-9">
                        <Field
                            type="text"
                            v-model="account.email"
                            name="email"
                            class="form-control"
                            :rules="{email: true }"
                            @input="clearEmailError"
                        />
                        <ErrorMessage name="email" class="text-danger" />
                        <span v-if="emailError === 'Email này đã tồn tại.'" class="text-danger">{{ emailError }}</span>
    
                        <!-- Hiển thị lỗi nếu email trống hoặc không hợp lệ -->
                        <span v-if="emailError === 'Thông tin này không được để trống!'" class="text-danger">{{ emailError }}</span>
                    </div>
                </div>

                <div v-if="!isEditMode" class="row mb-3 form-group required">
                    <label
                        for="password"
                        class="col-sm-2 col-form-label control-label text-end"
                    >
                        Mật khẩu
                    </label>
                    <div class="col-sm-9">
                        <Field
                            name="password"
                            :rules="{ required: true, min: 5, password: true }"
                            v-model="account.password"
                            type="password"
                            class="form-control"
                        />
                        <ErrorMessage name="password" class="text-danger" />
                    </div>
                </div>
                <div class="row mb-3 form-group required">
                    <label
                        for="fullName"
                        class="col-sm-2 col-form-label control-label text-end"
                    >
                        Họ tên
                    </label>
                    <div class="col-sm-9">
                        <Field
                            name="fullName"
                            v-model="account.fullName"
                            type="text"
                            class="form-control"
                            :rules="{ required: true, onlyCharacters: true }"
                        />
                        <ErrorMessage name="fullName" class="text-danger" />
                    </div>
                </div>
                <div class="row mb-3 form-group required">
                    <label
                        for="phoneNumber"
                        class="col-sm-2 col-form-label control-label text-end"
                        >Điện thoại</label>
                    <div class="col-sm-9">
                        <Field
                            name="phoneNumber"
                            v-model="account.phone"
                            type="text"
                            class="form-control"
                            :rules="{ required: true, phone: true }"
                        />
                        <ErrorMessage name="phoneNumber" class="text-danger" />
                    </div>
                </div>

                <div class="row mb-3 form-group required">
                    <label
                        for="authority"
                        class="col-sm-2 col-form-label control-label text-end"
                        >Quyền</label
                    >
                    <div class="col-sm-9">
                        <Field
                            as="select"
                            name="roleId"
                            v-model="account.roleId"
                            class="form-select"
                        >
                            <option selected disabled>Select Role</option>
                            <option v-for="role in roles" :value="role.id">
                                {{ role.roleName }}
                            </option>
                        </Field>
                    </div>
                </div>
                <div class="modal-footer align-content-center justify-content-center">
                    <button type="submit" class="btn btn-primary" >
                        <i class="fa-solid fa-floppy-disk mx-1"></i>
                        Lưu
                    </button>
                </div>
            </Form>
        </template>
    </CVModal>
</template>

<script >
import Api from '~/service/Base/api.ts';
import { configure, defineRule, Field, Form, ErrorMessage } from 'vee-validate';
import CVModal from '~/components/form/CVModal.vue';
import { useToast } from 'vue-toast-notification';
import { ref } from 'vue';
const toast = useToast();
const api = new Api();
export default {
    name: 'CreateUpdateAccountModal',
    props: {
        editAccount: {
            type: Object,
            default: null,
            required: false,
        },
        isEditMode: {
            type: Boolean,
            default: false,
            required: true,
        },
        data_bs_target_modal: {
            type: String,
            default: '',
        },
        id_modal: {
            type: String,
            default: '',
        },
        roles: {
            type: Array,
            default: null,
            required: false,
        },
    },
    data() {
        return {
            account: {
                id: '',
                email: '',
                password: '',
                fullName: '',
                phone: '',
                roleId: 2,
            },
            emailError: "", // Thông báo lỗi email trùng
        };
    },
    watch: {
        editAccount: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.account = { ...newVal };
                }
            },
        },
    },
    methods: {
        async createAccount() {
            if (this.account.email === "") {
                this.emailError = "Thông tin này không được để trống!";  // Cảnh báo nếu email trống
                return;
            }
            try {
                const response = await api.get(`/Account/email`, {
                    params: { email: this.account.email }
                });
                if (response.data && response.data.responseData && Object.keys(response.data.responseData).length > 0) {
                    // Nếu email đã tồn tại
                    this.emailError = "Email này đã tồn tại.";
                } else {
                    // Reset lỗi nếu không có lỗi
                    this.emailError = "";
                }
                // Nếu email không trùng, tiến hành gọi API đăng ký
                const res= await api.postAPI('/Account/register', this.account);
                if (res.status === 200) {
                    if (res.data && res.data.message) {
                        // Hiển thị thông báo thành công
                        toast.success(res.data.message);  // Hiển thị thông báo với toast (thành công)
                    }
                }
                this.$emit('account-saved'); // Phát sự kiện lưu thành công
            } catch (err) {
                console.error(err);
            }
        },
        async updateAccount() {
            if (this.account.email === "") {
                this.emailError = "Thông tin này không được để trống!";  // Cảnh báo nếu email trống
                return;
            }
            try {
                const response = await api.get(`/Account/email`, {
                    params: { email: this.account.email }
                });
                if (response.data && response.data.responseData && Object.keys(response.data.responseData).length > 0) {
                    // Nếu email đã tồn tại
                    this.emailError = "Email này đã tồn tại.";
                } else {
                    // Reset lỗi nếu không có lỗi
                    this.emailError = "";
                }             
                const edit=await api.putAPI(`/Account/${this.editAccount.id}`, this.account);
                if (edit.status === 200) {
                    if (edit.data && edit.data.message) {
                        // Hiển thị thông báo thành công
                        toast.success(edit.data.message);  // Hiển thị thông báo với toast (thành công)
                    }
                }
                this.$emit('account-saved');
                
                } catch (err) {
                    console.error(err);
                }
            },
        async getAccountByEmail() {
            try {
                const response = await api.get(`/Account/email`, {
                    params: { email: this.account.email }
                });
                if (response.data.responseData) {
                    this.emailError = "Email đã được sử dụng.";
                } else {
                    this.emailError = "";
                }
            } catch (err) {
                console.error(err);
            }
        },
        handleSubmit() {
            if (!this.isEditMode) {
                this.createAccount();
            } else {
                this.updateAccount();
            }
        },
        getRoles() {
            api.get(`/Role`, null)
                .then((res) => {
                    this.roles = res.data.responseData;
                })
                .catch((err) => console.log(err));
        },
        resetForm() {
            console.log('resetForm đã được gọi'); // Log để kiểm tra xem có gọi được hàm không
            this.account = {
                id: '',
                email: '',
                password: '',
                fullName: '',
                phoneNumber: '',
                roleId: 2,
            };
            // Reset lỗi email
                this.emailError = '';
                // Reset form vee-validate
                this.$refs.form.resetForm();  // Reset form đã lưu tham chiếu trong ref
                this.$refs.form.setErrors({}); // Reset tất cả các lỗi validation (nếu có)
            },
            clearEmailError() {
            // Reset email error khi người dùng bắt đầu sửa
            this.emailError = "";
            },
            
    },
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: {
        'account-saved': null,
    },
};
</script>
