<template>
  <div class="wrap">
    <div class="orderHeader">
      <div>
        <h2>상품문의</h2>
        <div class="description">
          상품에 대한 문의를 남기는 공간입니다.<br />
          배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 1:1 문의에
          남겨주세요.
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
      <NoticeTable :column="column" :itemList="$store.state.question.list" />
      <div class="write">
        <v-btn to="write" color="primary">글 쓰기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import NoticeTable from "@/components/tablenotice1.vue";
export default {
  components: {
    NoticeTable,
  },
  data: () => ({
    items: [2021, 2020, 2019],
    column: ["번호", "카테고리", "제목", "상품번호", "작성자", "작성일"],
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
.write {
  display: flex;
  justify-content: flex-end;
}

hr {
  border: 1px solid rgb(0, 0, 0);
}
</style>
