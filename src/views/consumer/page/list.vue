<!--상품리스트-->
<template>
  <div class="wrap">
    <v-row class="mt-4" justify="center">
      <h1>상품리스트</h1>
    </v-row>
    <div class="middle">
      <MiddleClass :list="['전체', 'tes1', 'test2', 'test3']" />
    </div>
    <div class="search">
      <SimpleSearch />
    </div>
    <div class="listwrap">
      <div class="item-list" v-for="a in 10" :key="a">
        <div
          class="item"
          v-for="i in $store.state.consumer.showList"
          :key="i.id"
        >
          <Product :item="i" />
        </div>
      </div>
    </div>
    <v-row justify="center">
      <!--페이징 vuex의 함수 경로와 리스트 갯수를 props로 뿌려줌-->
      <Paging
        :Length="this.$store.state.consumer.length"
        :path="path1"
        key="productlist"
      />
    </v-row>
  </div>
</template>

<script>
import Product from "@/components/layout/consumer/productcard.vue";
import Paging from "@/components/paging.vue";
import MiddleClass from "@/components/layout/consumer/middleclass.vue";
import SimpleSearch from "@/components/layout/consumer/simplesearch.vue";
export default {
  data: () => ({
    path1: {
      name: "consumer/pagination",
    },
  }),
  components: {
    Product,
    Paging,
    MiddleClass,
    SimpleSearch,
  },
  methods: {},
};
</script>

<style scoped>
.wrap {
  width: 1200px;
}
.middle {
  margin: 0 0 30px 0;
}

.search {
  width: 1200px;
}
.listwrap {
  flex-wrap: wrap;
  margin: 0 auto;
}
.item-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.item {
  width: 299px;
  margin-top: 30px;
}
</style>
