<!-- 커뮤니티 -->
<template>
  <div class="wrap">
    <div class="title">
      <h2>커뮤니티</h2>
    </div>
    <div>
      <table class="table-style">
        <colgroup>
          <col style="width: 7%" />
          <col style="width: 25%" />
          <col style="width: 35%" />
          <col style="width: 10%" />
          <col style="width: 13%" />
          <col style="width: 10%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>도움</th>
          </tr>
        </thead>
        <tr v-for="item in $store.state.review.list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.protitle }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.person }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.rating }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
}
.title {
  width: 1200px;
  display: flex;
  justify-content: center;
  margin: 20px 0 40px 0;
}
table {
  width: 1200px;
}
.table-style {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
}
.table-style thead tr {
  background-color: #1c0098;
  color: #ffffff;
  text-align: left;
}

.table-style th,
.table-style td {
  padding: 25px 10px 25px 10px;
  border-bottom: 1px solid rgb(206, 206, 206);
  font-weight: 600;
}

.table-style tbody tr {
  border-bottom: 1px solid #dddddd;
}
</style>
