<!-- 고객센터 문의사항 게시판 리스트 -->
<template>
  <div>
    <div class="title">
      <span class="subtitle">문의사항</span>
      <span class="caption">최근 소식과 유용한 정보를 확인하세요.</span>
    </div>
    <div>
      <NoticeTable :column="column" :itemList="itemList" />
    </div>
    <div class="write">
      <v-btn to="write" color="primary">글 쓰기</v-btn>
    </div>
  </div>
</template>

<script>
import NoticeTable from "@/components/tablenotice1.vue";
export default {
  components: {
    NoticeTable,
  },
  data() {
    return {
      column: ["번호", "카테고리", "제목", "상품번호", "작성자", "작성일"],
      itemList: this.$store.state.question.list,
    };
  },
  created() {
    console.log(this.$store.state.question.list);
  },
};
</script>

<style scoped>
.title {
  margin: 0;
}
.subtitle {
  font-size: 1.3em;
  font-weight: 600;
}
.caption {
  font-size: 1em;
  color: rgb(112, 110, 110);
  margin-left: 8px;
  font-weight: 700;
}
.write {
  display: flex;
  justify-content: flex-end;
}
</style>
