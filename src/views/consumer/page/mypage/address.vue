<template>
  <div class="wrap">
    <div class="orderHeader">
      <div>
        <h2>배송지관리</h2>
        <div class="description">
          배송지에 따라 상품정보 및 배송유형이 달라질 수 있습니다.
        </div>
      </div>
    </div>
    <hr />
    <div>
      <AddressTable :itemList="this.$store.state.address.showList" />
    </div>
    <Paging
      :Length="this.$store.state.address.length"
      :path="path"
      key="point"
    />
  </div>
</template>

<script>
import Paging from "@/components/paging.vue";
import AddressTable from "@/components/layout/consumer/mypage/addresstable.vue";
export default {
  components: {
    AddressTable,
    Paging,
  },
  data: () => ({
    items: [2021, 2020, 2019],
    path: {
      name: "address/pagination",
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
hr {
  border: 1px solid rgb(0, 0, 0);
}
</style>
