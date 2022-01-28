<!-- 메인페이지 광고 컴포넌트 -->
<template>
  <!--광고배너-->
  <v-carousel
    hide-delimiters
    show-arrows-on-hover
    cycle
    height="400px"
    class="carousel"
  >
    <!-- 광고 이미지-->
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <!-- 광고 페이지-->
      <div class="adnumber">
        <v-chip text-color="white" color="rgba(0,0,0,0.2)">
          {{ i + 1 }} / {{ items.length }}
        </v-chip>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://img-cf.kurly.com/banner/main/pc/img/4321950a-0c53-429c-ab30-d1f760e59f5f",
        },
        {
          src: "https://img-cf.kurly.com/banner/main/pc/img/a977607b-0cca-4793-b5ed-8c1672d7b254",
        },
      ],
    };
  },
};
</script>

<style scoped>
.adnumber {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: 90%;
  padding: 10px;
  font-weight: 500;
}
</style>
