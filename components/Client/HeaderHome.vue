<template>
    <header>
        <div class="container">
            <nav class="py-md-4 py-3 d-lg-flex">
                <div id="logo">
                    <h1 class="mt-md-0 mt-2">
                        <a asp-controller="Home" asp-action="Index">
                            
                            <span class="fa fa-map-signs"></span>Hachu Travel
                        </a>
                    </h1>
                </div>
                <label for="drop" class="toggle"><span class="fa fa-bars"></span></label>
                <input type="checkbox" id="drop" />
                <ul class="menu ml-auto mt-1 fs-5 text-white">
                    <li class="">
                        <NuxtLink to="/">Trang chủ </NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink to="/tourcustomer">Tour</NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink to="/contact">Liên hệ</NuxtLink>
                    </li>
                </ul>
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
