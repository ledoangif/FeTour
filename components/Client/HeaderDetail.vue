<template>
    <div class="container-fluid border-bottom bg-light headerdetail">
        <!-- nav -->
        <nav class="py-md-4 d-lg-flex mb-2">
            <div id="logo" style="background-color: #f3d865">
                <div class="mt-md-0 d-flex flex-row p-3">
                    <span
                        class="fa fa-map-signs text-primary"
                        style="font-size: 2em"
                    ></span>
                    <div>
                        <h3 class="text-primary fw-bold ms-2">Hachu Travel</h3>
                    </div>
                </div>
            </div>
            <label for="drop" class="toggle"><span class="fa fa-bars"></span></label>
            <input type="checkbox" id="drop" />
            <ul class="menu ml-auto mt-1">
                <li class="fw-bold">
                    <NuxtLink to="/"
                        ><span class="text-dark fw-bold">Trang chủ</span></NuxtLink
                    >
                </li>

                <li class="fw-bold">
                    <NuxtLink to="/tourcustomer"
                        ><span class="text-dark fw-bold">Tour</span></NuxtLink
                    >
                </li>
                <li class="fw-bold">
                    <NuxtLink to="/contact"
                        ><span class="text-dark fw-bold">Liên hệ </span></NuxtLink
                    >
                </li>
            </ul>
        </nav>
        <!-- //nav -->
    </div>
</template>
<style scoped>
@import '../../assets/css/bootstrap.css';
@import '../../assets/css/style.css';
@import '../../assets/css/font-awesome.min.css';
@import '../../assets/css/css_slider.css';
@import '../../assets/vendor/mdi-font/css/material-design-iconic-font.min.css';
@import '../../assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
@import '../../assets/vendor/select2/select2.min.css';
</style>
