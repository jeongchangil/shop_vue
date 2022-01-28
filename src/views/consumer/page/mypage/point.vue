<!-- 마이페이지 적립금 -->
<template>
  <div class="wrap">
    <div class="orderHeader">
      <div>
        <h2>적립금</h2>
        <div class="description">
          보유한 적립금의 내역을 한 눈에 확인 가능합니다.
        </div>
      </div>
      <div class="search">
        <div class="test">
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
    <div>
      <PointTable :itemList="this.$store.state.point.showList" />
    </div>
    <Paging :Length="this.$store.state.point.length" :path="path" key="point" />
  </div>
</template>

<script>
import Paging from "@/components/paging.vue";
import PointTable from "@/components/layout/consumer/mypage/pointtable.vue";
export default {
  components: {
    Paging,
    PointTable,
  },
  data: () => ({
    items: [2021, 2020, 2019],
    path: {
      name: "point/pagination",
    },
  }),
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
