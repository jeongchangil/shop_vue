import Vue from "vue";
import VueRouter from "vue-router";
//소비자 로그인페이지
import login from "@/views/consumer/page/login.vue";
import signup from "@/views/consumer/page/signup.vue";
//마이페이지 & 소비자 페이지
import home from "@/views/consumer/page/home.vue";
import list from "@/views/consumer/page/list.vue";
import community from "@/views/consumer/page/community.vue";
import mypageMain from "@/views/consumer/page/mypage/main.vue";
import address from "@/views/consumer/page/mypage/address.vue";
import modify from "@/views/consumer/page/mypage/modify.vue";
import order from "@/views/consumer/page/mypage/order.vue";
import point from "@/views/consumer/page/mypage/point.vue";
import question from "@/views/consumer/page/mypage/question.vue";
import review from "@/views/consumer/page/mypage/review.vue";
import productdetail from "@/views/consumer/page/productdetail.vue";
import cart from "@/views/consumer/page/cart.vue";
import payment from "@/views/consumer/page/payment.vue";
import discount from "@/views/consumer/page/discount.vue";
import reservation from "@/views/consumer/page/reservation.vue";
import packages from "@/views/consumer/page/packages.vue";
import packagedetail from "@/views/consumer/page/packagedetail.vue";
//고객센터
import serviceCenter from "@/views/consumer/page/service/servicecenter.vue";
import notice from "@/views/consumer/page/service/notice.vue";
import FAQ from "@/views/consumer/page/service/faq.vue";
import serviceQuestion from "@/views/consumer/page/service/question.vue";
import questionwrite from "@/views/consumer/page/service/questionwrite.vue";
import questionread from "@/views/consumer/page/service/questionread.vue";

//관리자 로그인
import adminlogin from "@/views/admin/adminlogin.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: signup,
  },
  {
    path: "/login",
    name: "Login",
    component: login,
  },
  {
    path: "/list",
    name: "List",
    component: list,
  },
  {
    path: "/detail",
    name: "Detail",
    component: productdetail,
    props: true,
  },
  {
    path: "/community",
    name: "Community",
    component: community,
  },
  {
    path: "/cart",
    name: "Cart",
    component: cart,
  },
  {
    path: "/payment",
    name: "Payment",
    component: payment,
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: reservation,
  },
  {
    path: "/package",
    name: "Package",
    component: packages,
  },
  {
    path: "packagedetail",
    name: "Packagedetail",
    component: packagedetail,
  },
  {
    path: "/discount",
    name: "Discount",
    component: discount,
  },

  {
    path: "/service",
    name: "Service",
    component: serviceCenter,
    children: [
      {
        path: "notice",
        name: "Notice",
        component: notice,
      },
      {
        path: "FAQ",
        name: "FAQ",
        component: FAQ,
      },
      {
        path: "question",
        name: "ServiceQuestion",
        component: serviceQuestion,
      },
      {
        path: "write",
        name: "questionwrite",
        component: questionwrite,
      },
      {
        path: "/detail",
        name: "questionread",
        component: questionread,
      },
    ],
  },
  {
    path: "/mypage",
    name: "mypage",
    component: mypageMain,
    children: [
      {
        path: "address",
        name: "address",
        component: address,
      },
      {
        path: "modify",
        name: "modify",
        component: modify,
      },
      {
        path: "order",
        name: "order",
        component: order,
      },
      {
        path: "point",
        name: "point",
        component: point,
      },
      {
        path: "question",
        name: "question",
        component: question,
      },
      {
        path: "review",
        name: "review",
        component: review,
      },
      {
        path: "write",
        name: "questionwrite",
        component: questionwrite,
      },
    ],
  },
  {
    path: "/admin/login",
    name: "adminLogin",
    component: adminlogin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
