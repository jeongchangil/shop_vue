<!-- 마일리지 게시판 -->
<template>
  <table class="styled-table">
    <colgroup>
      <col style="width: 15%" />
      <col style="width: 45%" />
      <col style="width: 20%" />
      <col style="width: 20%" />
    </colgroup>
    <thead>
      <tr>
        <th>번호</th>
        <th>구분</th>
        <th>포인트</th>
        <th>적립일</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in itemList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.point }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    itemList: Array,
  },
};
</script>

<style scoped>
.styled-table {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
}

.styled-table thead tr {
  text-align: left;
}

.styled-table td {
  padding: 12px 15px;
}

.styled-table th {
  padding: 12px 15px;
  border-bottom: 1px solid rgb(145, 145, 145);
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

/* .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
} */

/* .styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
} */
</style>
