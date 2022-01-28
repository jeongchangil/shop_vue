<!-- 패키지 >> 메뉴 클릭 한 후 페이지 -->
<template>
  <div class="wrap">
    <div>
      <div class="title">
        <h2>{{ $route.query.title }}</h2>
      </div>
      <v-img :src="$route.query.url" width="1200px" height="900px" />
    </div>
    <div>
      <Middleclass
        :list="$route.query.ingredients"
        storepath="consumer/packageSearch"
      />
    </div>
    <div class="contents">
      <span v-if="$store.state.consumer.searchList.length < 1">
        재료를 선택해 주세요
      </span>
      <div class="product-group">
        <div
          v-for="(list, index) in $store.state.consumer.searchList"
          v-show="list.length > 0"
          :key="index"
        >
          {{ list[0].category }} 상품
          <Productgroup :list="list" />
        </div>
        <div
          class="notfound"
          v-show="
            list.length <= 0 && $store.state.consumer.searchList.length > 0
          "
        >
          상품이 없습니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Middleclass from "@/components/layout/consumer/middleclass.vue";
import Productgroup from "@/components/layout/consumer/productgroup1.vue";
export default {
  components: {
    Middleclass,
    Productgroup,
  },
  data() {
    return {
      list: [],
    };
  },
  updated() {
    this.list = this.$store.state.consumer.searchList;
  },
  destroyed() {
    this.$store.commit("consumer/deleteAll");
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
}

.title {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.contents {
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 3em;
}

.product-group {
  display: flex;
  flex-direction: column;
}
.product-group div {
  font-size: 0.8em;
  font-weight: 700;
  margin-bottom: 20px;
}

.notfound {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
