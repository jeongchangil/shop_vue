<!-- 고객센터 사이드 네비게이션 -->
<template>
  <div class="wrap">
    <div class="contents">
      <div class="nav">
        <div class="title">
          <h2>고객센터</h2>
        </div>
        <ServiceFrame :navList="navList" />
      </div>
      <div class="view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceFrame from "@/components/layout/consumer/mypage/frame.vue";
export default {
  components: {
    ServiceFrame,
  },
  data() {
    return {
      navList: [
        { key: "my-1", name: "공지사항", to: "notice" },
        { key: "my-2", name: "FAQ", to: "FAQ" },
        { key: "my-3", name: "문의사항", to: "question" },
      ],
    };
  },
};
</script>

<style scoped>
.wrap {
  width: 1200px;
  margin-top: 50px;
}
.contents {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
}
.title {
  padding: 20px 0 20px 0;
}
.nav {
  width: 200px;
}
.view {
  width: 1000px;
  padding: 20px 0px 30px 20px;
}
</style>
