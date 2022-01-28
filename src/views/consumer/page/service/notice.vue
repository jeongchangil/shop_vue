<!-- 고객센터 공지사항 -->
<template>
  <div>
    <div class="title">
      <span class="subtitle">공지사항</span>
      <span class="caption">최근 소식과 유용한 정보를 확인하세요.</span>
    </div>
    <div>
      <NoticeTable :column="column" :itemList="itemList" />
    </div>
  </div>
</template>

<script>
import NoticeTable from "@/components/tablenotice.vue";
export default {
  components: {
    NoticeTable,
  },
  data() {
    return {
      column: ["번호", "제목", "작성자", "작성일", "조회"],
      itemList: this.$store.state.notice.list,
    };
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
</style>
