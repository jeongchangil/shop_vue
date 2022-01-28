<!-- 마이페이지 주문내역 -->
<template>
  <div class="wrap">
    <div class="orderHeader">
      <div>
        <h2>주문내역</h2>
        <div class="description">지난 3년간의 주문 내역 조회가 가능합니다.</div>
      </div>
      <div>
        <div class="search">
          <v-select
            :items="items"
            label="기간 검색"
            dense
            solo
            flat
            outlined
          ></v-select>
        </div>
      </div>
    </div>
    <hr />
    <div class="py-8">
      <Panel
        :itemList="this.$store.state.orderlist.showOrder"
        key="orderpanel"
      />
    </div>
    <div>
      <Paging
        :Length="this.$store.state.orderlist.length"
        :path="path"
        key="orderlist"
      />
    </div>
  </div>
</template>

<script>
import Paging from "@/components/paging.vue";
import Panel from "@/components/expansionpanel.vue";
export default {
  data: () => ({
    items: [2021, 2020, 2019],
    path: {
      name: "orderlist/orderpage",
    },
  }),
  components: {
    Paging,
    Panel,
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
}
.orderHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.description {
  margin-top: 5px;
  font-size: small;
  padding: 2px;
  color: rgb(116, 116, 116);
}

.search {
  position: relative;
  top: 10px;
  width: 150px;
}

hr {
  border: 1px solid rgb(0, 0, 0);
}
</style>
