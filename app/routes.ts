import { type RouteConfig, index, prefix, layout, route } from "@react-router/dev/routes";

export default [
    index("home/home-page.tsx"),
    ...prefix("admin", [
        index("admin/admin-page.tsx"),
    ]),
    ...prefix("about", [
        index("about/about-page.tsx"),
    ]),
    ...prefix("/sign-up", [
        index("sign-up/sign-up-page.tsx"),
    ]),
    ...prefix("/login", [
        index("login/login-page.tsx"),
    ]),
    ...prefix("/logout", [
        index("logout/logout-page.tsx"),
    ]),
    ...prefix("/delivery", [
        index("delivery/delivery-page.tsx"),
    ]),
    ...prefix("/payment", [
        index("payment/payment-page.tsx"),
    ]),
    ...prefix("/product", [
        index("product/product-page.tsx"),
        route("/order", "order/order-page.tsx"),
    ]),
    ...prefix("/contact", [
        index("contact/contact-page.tsx"),
    ]),
]