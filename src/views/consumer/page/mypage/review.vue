<!-- 마이페이지 상품 후기 -->
<template>
  <div class="wrap">
    <div class="orderHeader">
      <div>
        <h2>상품후기</h2>
        <div class="description">
          후기 작성 시 사진후기 100원, 글 후기 50원을 적립해드립니다.<br />
          &nbsp;- 등급에 따라 적립금 차등 지급 <br />
          &nbsp;- 주간 베스트 후기로 선정 시 5,000을 추가 적립<br />
        </div>
      </div>
      <div>
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
    </div>
    <hr />
    <div>
      <ReviewTable :itemList="this.$store.state.review.showList" />
    </div>
    <Paging
      :Length="this.$store.state.review.length"
      :path="path"
      key="review"
    />
  </div>
</template>

<script>
import Paging from "@/components/paging.vue";
import ReviewTable from "@/components/layout/consumer/mypage/reviewtable.vue";

export default {
  components: {
    Paging,
    ReviewTable,
  },
  data: () => ({
    items: [2021, 2020, 2019],
    path: {
      name: "review/pagination",
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
