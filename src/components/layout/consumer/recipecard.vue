<!-- 패키지 메뉴 템플릿  -->
<template>
  <v-lazy
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-card
      @click="cardrouter"
      class="mx-auto"
      width="300"
      height="450"
      :ripple="false"
    >
      <!--상품 사진 -->
      <v-img
        height="250"
        :src="item.url"
        position="background-position"
      ></v-img>

      <!-- 상품이름 -->
      <v-card-title class="title text-h6">{{ item.title }}</v-card-title>
    </v-card>
  </v-lazy>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data: () => ({}),

  methods: {
    //상품 상세페이지 이동 및 데이터 넘기기
    cardrouter() {
      if (this.route) {
        const params = this.$store.state.consumer.showList.find((val) => {
          return val.title == this.item.title;
        });
        this.$router.push({ name: "Detail", query: params });
      } else return;
    },
  },
};
</script>

<style scoped>
.cart {
  position: absolute;
  top: 190px;
  left: 210px;
  background: white;
  padding: 10px;
  width: 52px;
  border-radius: 30px;
}

.discount {
  color: red;
  font-weight: 700;
}

.v-card--link:before {
  background: none;
}
</style>
