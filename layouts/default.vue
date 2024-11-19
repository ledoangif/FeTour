<template>
    <div class="container-fluid">
        <div class="row py-3">
            <div class="col-lg-3 ms-3 d-flex flex-row">
                <div class="text-primary fs-4 fw-bold me-4">Hachu Travel</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-list ms-5"
                    @click="ShowSb"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </div>
            <div class="col-lg d-flex justify-content-end">
                <div class="text-black fs-5 me-0 align-content-center">
                <i class="fa-solid fa-bell text-primary fs-5 mt-2 me-3 position-relative"></i>
               <span class="position-absolute  customCountPending">{{ CountPendingBooking }}</span>
                    Hello, <span class="fw-bold">{{ userFullName }}</span>
                </div>
                <div class="dropdown btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                    </svg>
                    <div class="dropdown-content zindex-tooltip">
                        <div class="d-flex flex-row">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="bi bi-person-circle my-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path
                                    fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                />
                            </svg>
                            <div class="pt-0">
                                <NuxtLink :to="`/profile/${accountId}`">Profile</NuxtLink>
                            </div>
                        </div>
                        <div class="d-flex flex-row">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    fill="currentColor"
                                    class="bi bi-box-arrow-right pt-2 my-2"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                                    />
                                </svg>
                            </div>
                            <div class="">
                                <a @click=" signOut "> Logout </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

               
        <div class="row border-top">
            <div class="col-lg-2 bg-white p-0" v-if="showSideBar">
                <div class="position-relative sidebar" tabindex="-1">
                    <NuxtLink
                        to="/Dashboard"
                        class="py-3 d-flex flex-row ps-4 text-decoration-none nav-link"
                        v-if="role === 'Admin'"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-house-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                        </svg>
                        <div class="my-0 ms-2">Dashboard</div>
                    </NuxtLink>
                    <div class="sidebar">
                        <ul class="navbar-nav justify-content-end flex-grow-1">
                            <li class="nav-item ps-4">
                                <a class="nav-link" aria-current="page" href="#"></a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="text-primary text-decoration-none fw-bold ps-4"
                                    aria-current="page"
                                    href="#"
                                    >Module</a
                                >
                            </li>
                            <NuxtLink
                                to="/tour"
                                class="nav-link d-flex flex-row active ps-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    class="bi bi-balloon-heart-fill mt-2 text-info"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"
                                    />
                                </svg>
                                <div class="my-0 ms-2 mt-2">Quản lý tour</div>
                            </NuxtLink>

                            <NuxtLink
                                to="/country"
                                class="nav-link d-flex flex-row active ps-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    width="20"
                                    height="20"
                                    fill="brown"
                                >
                                    <path
                                        d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1v36.1l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-20.3-9-41.8-14.7-63.6-16.9v32.2c17.4 2.1 34.4 6.7 50.6 13.9l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 136.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 203.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 232.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 299.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 328.3v33.5c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 400v80c0 17.7-14.3 32-32 32s-32-14.3-32-32V416 345.5 312.8 249.5 216.8 153.5 120.8 64 32C0 14.3 14.3 0 32 0zm80 96A16 16 0 1 0 80 96a16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-32 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
                                    />
                                </svg>
                                <div class="my-0 ms-2">Quản lý quốc gia</div>
                            </NuxtLink>
                            <NuxtLink
                                to="/hotel"
                                class="nav-link d-flex flex-row active ps-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    width="20"
                                    height="20"
                                    fill="	#0000ee"
                                >
                                    <path
                                        d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"
                                    />
                                </svg>
                                <div class="my-0 ms-2">Quản lý khách sạn</div>
                            </NuxtLink>
     
                            <NuxtLink
                                to="/customer"
                                class="nav-link d-flex flex-row active ps-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                    width="20"
                                    height="20"
                                    fill="#9ACD32"
                                >
                                    <path
                                        d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
                                    />
                                </svg>
                                <div class="my-0 ms-2">Quản lý khách hàng</div>
                            </NuxtLink>
                            <NuxtLink
                                to="/booking"
                                class="nav-link d-flex flex-row active ps-4"
                            >
                                <i class="fa-solid fa-file-invoice-dollar mt-1 "></i>
                                <div class="my-0 ms-3">Đơn đặt tour</div>
                            </NuxtLink>

                            <li
                                v-if="role === 'Admin'"
                                class="quanlitaikhoan position-fixed bottom m-0 w-100"
                            >
                                <div class="pt-3 text d-flex flex-row ps-4 col-lg-2">
                                    <div class="sidebar ms-2 text-primary fw-bold">
                                    <div class="sidebar ms-2 text-primary fw-bold">
                                        Admin
                                    </div>
                                    </div>
                                </div>
                                <NuxtLink to="/account" class="nav-link d-flex flex-row ps-4 col-lg-2">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-key-fill mt-2"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                        </svg>
                                    </div>
                                    <div class="my-0 ms-2 mt-2">Quản lý tài khoản</div>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div :class="(showSideBar ? 'col-lg-10' : 'col-lg-12') +
                ' p-0 bg-body position-relative content-body'
                ">
                <div class="p-2 mb-5">
                    <slot />
                </div>
                <div
                    class="d-flex flex-row bottom-0 footerAdmin p-0 border-top m-0 position-fixed"
                >
                    <div
                        :class="
                            (showSideBar ? 'col-lg-4' : 'col-lg-6') + '  mt-3 ps-2  ms-2'
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-c-circle"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
                        </svg>
                        2024
                        <span class="text-primary"> Doan Administrator </span>
                    </div>
                    <div
                        :class="
                            (showSideBar ? 'col-lg-6' : 'col-lg-6') +
                            '  d-flex justify-content-end mt-3  Powered'
                        "
                    >
                        Powered by
                        <span class="text-primary ms-1"> Doan </span>
                    </div>
                </div>
            </div>
        </div>
       </div>
</template>
<script setup>
import Api from '~/service/Base/api.ts';
import { ref, onMounted } from 'vue';
import Tour_constants from '~/assets/js/constants/constants';
import { useRouter } from 'vue-router';
let api = new Api();
let showSideBar = ref(true);
const userFullName = ref('');
const role = ref('');
const accountId = ref('');
const CountPendingBooking = ref(0);

// Kiểm tra nếu chạy trên client-side
if (process.client) {
    userFullName.value = localStorage.getItem('userFullName');
    role.value = localStorage.getItem('role');
    accountId.value = localStorage.getItem('userId');
}
const router = useRouter(); 

defineProps({
    FullName: String,
});



const ShowSb = () => {
    showSideBar.value = !showSideBar.value;
};

// Hàm gọi API với timeout

// Hàm lấy số đơn đặt tour đang chờ xử lý
const getBookingPending = async () => {
    try {
        const resBooking = await api.get(`/Booking/CountPending`, null);
        CountPendingBooking.value = resBooking.data.responseData;

    } catch (error) {
        console.error('Error fetching bookings:', error);
    }
};

// Hàm thực hiện khi component được mount
onMounted(async () => {
    await getBookingPending(); // Gọi lần đầu tiên khi component được mount

    setInterval(async () => {
        await getBookingPending(); // Gọi mỗi phút
    }, 60000); // 60000 ms = 1 phút
});

// Hàm đăng xuất
const signOut = async  () => {
   await  api.postAPI('/Account/logout', {}) .then((res) => {
    localStorage.removeItem('token');
        localStorage.clear();
        router.push('/login');
   })
        
};
</script>

