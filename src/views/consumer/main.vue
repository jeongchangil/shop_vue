<!-- 소비자 페이지 통합 -->
<template>
  <v-app class="app">
    <Header />
    <Footer />
    <div class="floating"><Side /></div>
  </v-app>
</template>

<script>
import $ from "jquery";
import Header from "@/components/layout/consumer/header.vue";
import Footer from "@/components/layout/consumer/footer.vue";
import Side from "@/components/layout/consumer/sidebar.vue";

$(function () {
  $(window).scroll(function () {
    var curpos = $(window).scrollTop() + 350;
    $(".floating").stop().animate({ top: curpos }, 500);
  });
}); //사이드 네비게이션

export default {
  components: {
    Header,
    Footer,
    Side,
  },
};
</script>

<style scoped>
.app {
  min-width: 1200px;
}

a {
  text-decoration: none;
  font: gray;
}

.floating {
  position: absolute;
  top: 350px;
  right: 12px;
}
</style>
