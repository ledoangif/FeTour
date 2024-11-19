<template>
    <header>
        <div class="container text-white">
            <nav class="py-md-4 py-3 justify-content-between">
                <div id="logo">
                    <h1 class="mt-md-0 mt-2">
                        <a asp-controller="HomeCustomer" asp-action="Index">
                            <span class="fa fa-map-signs"></span>Hachu Travel
                        </a>
                    </h1>
                </div>
                <div>
                    <label for="drop" class="toggle"
                        ><span class="fa fa-bars"></span
                    ></label>
                    <input type="checkbox" id="drop" />
                    <ul class="">
                        <li class="fw-bold">
                            <NuxtLink to="/"><span class=" fw-bold">Trang chủ</span>
                            </NuxtLink>
                        </li>
                        <li class="fw-bold">
                            <NuxtLink to=""><span class=" fw-bold">Tour</span></NuxtLink>
                        </li>
                        <li class="fw-bold">
                            <NuxtLink to=""><span class=" fw-bold">Liên hệ </span></NuxtLink
                            >
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
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
