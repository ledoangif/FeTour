import { _ as S } from "./DRJbnSa7.js"; import { _ as b, o, c, a as t, b as d, w as r, d as i, p as k, e as $, r as g, I as D, x as y, y as x, G as _, t as w, J as C } from "./-qx6OsVB.js"; import { A as H } from "./Q_m3z1ei.js"; const V = {}, h = a => (k("data-v-0589856e"), a = a(), $(), a), L = { class: "container" }, M = { class: "py-md-4 py-3 d-lg-flex" }, j = h(() => t("div", { id: "logo" }, [t("h1", { class: "mt-md-0 mt-2" }, [t("a", { "asp-controller": "Home", "asp-action": "Index" }, [t("span", { class: "fa fa-map-signs" }), i("Hachu Travel ")])])], -1)), A = h(() => t("label", { for: "drop", class: "toggle" }, [t("span", { class: "fa fa-bars" })], -1)), B = h(() => t("input", { type: "checkbox", id: "drop" }, null, -1)), E = { class: "menu ml-auto mt-1 fs-5 text-white" }, F = { class: "" }, G = { class: "" }, R = { class: "" }; function J(a, p) { const s = S; return o(), c("header", null, [t("div", L, [t("nav", M, [j, A, B, t("ul", E, [t("li", F, [d(s, { to: "/" }, { default: r(() => [i("Trang chủ ")]), _: 1 })]), t("li", G, [d(s, { to: "/tourcustomer" }, { default: r(() => [i("Tour")]), _: 1 })]), t("li", R, [d(s, { to: "/contact" }, { default: r(() => [i("Liên hệ")]), _: 1 })])])])])]) } const _t = b(V, [["render", J], ["__scopeId", "data-v-0589856e"]]), l = a => (k("data-v-22667e59"), a = a(), $(), a), P = { class: "footer footer_w3layouts_section_1its bg-dark" }, X = { class: "container py-lg-4 py-3" }, q = { class: "row footer-top" }, z = C('<div class="col-lg-3 col-sm-6 footer-grid_section_1its_w3" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>Địa chỉ</h3></div><div class="footer-text" data-v-22667e59><p data-v-22667e59>Địa điểm : 66 ngách 6/46 Miêu Nha, Tây Mỗ, Nam Từ Liêm, Hà Nội</p><p data-v-22667e59>Phone : +84962383838</p><p data-v-22667e59> Email :<a href="mailto:hachutraveltour@gmail.com" data-v-22667e59>hachutravel@gmail.com</a></p><p data-v-22667e59>Fax : +84962383838</p></div></div><div class="col-lg-3 col-sm-6 footer-grid_section mt-sm-0 mt-4" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>Về chúng tôi</h3></div><div class="footer-text" data-v-22667e59><p data-v-22667e59> Chúng tôi là đối tác cho những ai muốn khám phá thế giới với các trải nghiệm du lịch độc đáo và dịch vụ chuyên nghiệp. </p></div><ul class="social_section_1info" data-v-22667e59><li class="mb-2 facebook" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-facebook" data-v-22667e59></span></a></li><li class="mb-2 twitter" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-twitter" data-v-22667e59></span></a></li><li class="google" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-google-plus" data-v-22667e59></span></a></li><li class="linkedin" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-linkedin" data-v-22667e59></span></a></li></ul></div>', 2), K = { class: "col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3" }, O = l(() => t("div", { class: "footer-title" }, [t("h3", null, "Địa điểm du lịch")], -1)), Q = { class: "row" }, U = { class: "col-6 links" }, W = ["onClick"], Y = { class: "col-6 links" }, Z = ["onClick"], tt = { class: "col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3" }, at = l(() => t("div", { class: "footer-title" }, [t("h3", null, "Ý kiến của bạn")], -1)), st = { class: "footer-text" }, et = l(() => t("p", null, " Hãy chia sẻ ý kiến của bạn với chúng tôi để chúng ta có thể mang lại trải nghiệm tốt nhất cho mọi người. Xin cảm ơn! ", -1)), ot = l(() => t("div", { class: "d-flex flex-row justify-content-between" }, [t("div", { class: "text-white opacity-25 pt-2 ps-4" }, " Gửi mail tại đây !! "), t("button", { class: "btn1" }, [t("i", { class: "fa fa-paper-plane", "aria-hidden": "true" })])], -1)), ct = [ot], nt = C('<div class="copyright py-3 text-center" data-v-22667e59><p data-v-22667e59> © 2024 Hachu Travel. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="=_blank" data-v-22667e59> Doan </a></p></div><div class="move-top text-right" data-v-22667e59><a href="#home" class="move-top" data-v-22667e59><span class="fa fa-angle-up mb-3" aria-hidden="true" data-v-22667e59></span></a></div>', 2), it = { __name: "Footer", emits: ["select-country"], setup(a, { emit: p }) { const s = new H, v = g([]), u = g([]), T = p; D(async () => { const e = await s.get("/Country/Top4Country", null); u.value = e.data.responseData; const f = await s.get("/Country/Top6Country", null); v.value = f.data.responseData }); const m = e => { T("select-country", e) }, N = async () => { const e = "Ý kiến người dùng "; window.location.href = `mailto:hachutraveltour@gmail.com?subject=${e}` }; return (e, f) => (o(), c("footer", null, [t("section", P, [t("div", X, [t("div", q, [z, t("div", K, [O, t("div", Q, [(o(!0), c(y, null, x(u.value, n => (o(), c("ul", U, [t("li", null, [t("a", { href: "#choose", class: "scroll", onClick: _(I => m(n.id), ["prevent"]) }, w(n.countryName), 9, W)])]))), 256)), (o(!0), c(y, null, x(v.value, n => (o(), c("ul", Y, [t("li", null, [t("a", { href: "#", onClick: _(I => m(n.id), ["prevent"]) }, w(n.countryName), 9, Z)])]))), 256))])]), t("div", tt, [at, t("div", st, [et, t("form", { onSubmit: _(N, ["prevent"]) }, ct, 32)])])])])]), nt])) } }, ht = b(it, [["__scopeId", "data-v-22667e59"]]); export { _t as _, ht as a };
