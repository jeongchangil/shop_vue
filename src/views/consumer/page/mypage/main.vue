<!--마이페이지 메인-->
<template>
  <div class="wrap">
    <Summary />
    <div class="contents">
      <div class="side">
        <div style="height: 72px">
          <h2>마이페이지</h2>
        </div>
        <Frame :navList="navList" />
      </div>
      <div class="view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Frame from "@/components/layout/consumer/mypage/frame.vue";
import Summary from "@/components/layout/consumer/mypage/summary.vue";
export default {
  components: {
    Frame,
    Summary,
  },
  data() {
    return {
      navList: [
        { key: "my-1", name: "주문내역", to: "order" },
        { key: "my-2", name: "적립금", to: "point" },
        { key: "my-3", name: "배송지관리", to: "address" },
        { key: "my-4", name: "상품후기", to: "review" },
        { key: "my-5", name: "상품문의", to: "question" },
        { key: "my-6", name: "개인정보수정", to: "modify" },
      ],
    };
  },
};
</script>

<style scoped>
.wrap {
  width: 1200px;
}

.side {
  width: 200px;
  padding: 38px 0px 30px 0px;
}

.view {
  width: 1000px;
  box-sizing: border-box;
  padding: 41px 0px 30px 20px;
}
.contents {
  display: flex;
  flex-wrap: wrap;
}
</style>
