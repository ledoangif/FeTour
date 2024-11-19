 <template>
    <div class="login min-vh-100 min-vw-100">
        <div class="main pt-5">
            <div class="text-center p-5">
                <img
                    src="../assets/images/logo4.png"
                    style="width: 15%; border-radius: 5%"
                    alt="logo"
                />
            </div>
            <div class="bg-light p-4 rounded shadow mx-auto" style="width: 25%;">
                <div class="fs-3 text-center mb-4 text-dark">ĐĂNG NHẬP TÀI KHOẢN</div>

                <form @submit.prevent="login">
                    <div class="mt-10">
                        <div class="col-lg-12 mx-auto">
                            <div class="mb-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="User.email"
                                    name="email"
                                    placeholder="Email"
                                    @blur="validateEmail"
                                />
                                <div v-if="emailError" class="text-danger">{{ emailError }}</div>
                            </div>

                            <div class="mb-4">
                                <input
                                    type="password"
                                    class="form-control"
                                    placeholder="Mật khẩu"
                                    v-model="User.password"
                                    @blur="validatePassword"
                                />
                                <div v-if="passwordError" class="text-danger">{{ passwordError }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center m-4">
                        <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                    </div>
                </form>
                <div v-if="errorMessage" class="text-danger text-center">{{ errorMessage }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import Api from '~/service/Base/api.ts';
const toast = useToast();
/** auth */
definePageMeta({
    layout: false,
});

/**init data */
const User = ref({
    email: '',
    password: '',
});
const errorMessage = ref('');
const emailError = ref(null);
const passwordError = ref(null);
const api = new Api();

/**
 * Validation logic
 */
const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!User.value.email) {
        emailError.value = 'Email không được để trống';
    } else if (!emailPattern.test(User.value.email)) {
        emailError.value = 'Vui lòng nhập email hợp lệ';
    } else {
        emailError.value = null;
    }
};

const validatePassword = () => {
    if (!User.value.password) {
        passwordError.value = 'Mật khẩu không được để trống';
    } else if (User.value.password.length < 5) {
        passwordError.value = 'Mật khẩu phải có ít nhất 5 ký tự!';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(User.value.password)) {
        passwordError.value = 'Mật khẩu phải có ít nhất 5 ký tự gồm chữ hoa, chữ thường và số.';
    } else {
        passwordError.value = null;
    }
};

/**
 * Handle login
 */
const login = async () => {
    // Validate before submitting
    validateEmail();
    validatePassword();
    if (emailError.value || passwordError.value) {
        return;
    }
    
    try {
        const loginData = {
            email: User.value.email,
            password: User.value.password
        };
        const response = await api.postAPI('/Account/login', loginData);
        if (response.status === 200) {
            if (response.data && response.data.message) {
                // Hiển thị thông báo thành công
                toast.success(response.data.message);  // Hiển thị thông báo với toast (thành công)
            }
        }
        // Save login info to localStorage
        localStorage.setItem('token', response.data.responseData.accessToken);
        localStorage.setItem('userId', response.data.responseData.userId);
        localStorage.setItem('userFullName', response.data.responseData.userFullName);
        localStorage.setItem('email', response.data.responseData.email);
        localStorage.setItem('role', response.data.responseData.role);

        navigateTo('/booking');
        //toast.success('Đăng nhập thành công!');
    } catch (error) {
        console.log(error);
        // Kiểm tra lỗi từ server và hiển thị thông báo tương ứng
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage.value = error.response.data.message;
        } else {
            errorMessage.value = 'Tên đăng nhập hoặc mật khẩu không đúng';
        }
    }
};
</script>

<style scoped>
.bg-light {
    background-color: rgba(255, 255, 255, 0.9);
}

.shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-danger {
    color: #dc3545 !important; /* Màu đỏ đậm cho thông báo lỗi */
    font-size: 1rem;
}

</style>
