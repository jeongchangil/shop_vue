<!-- 간단한 검색 구현은 아직 안됨.  -->
<template>
  <v-row justify="end" class="pr-2">
    <a class="px-1 search" v-for="n in searchList" :key="n.name">
      {{ n.name }}
    </a>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      searchList: [
        { name: "추천순 |" },
        { name: " 신상품순 |" },
        { name: " 판매량순 |" },
        { name: " 혜택순 |" },
        { name: " 낮은 가격순 |" },
        { name: " 높은 가격순" },
      ],
    };
  },
};
</script>

<style scoped>
.search {
  color: gray;
}
</style>
